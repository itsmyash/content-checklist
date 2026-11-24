/* ROAST // shared helpers: safe storage, copy, toast, week math, backups */
var R = (function(){
  function get(k, fallback){ try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch(e){ return fallback; } }
  function set(k, v){ try { var s = JSON.stringify(v); localStorage.setItem(k, s); cloudPush(k, s); return true; } catch(e){ return false; } }
  /* Cloud sync (Supabase): checkboxes (roast:<week>) and the monthly scorecard sync across devices.
     Lead log and Seller Pipeline stay on this device only. This repo is public, so private data never syncs. */
  var SB_URL = 'https://gzqgeehcvmgstznkyfnw.supabase.co/rest/v1/checklist_state';
  var SB_KEY = 'sb_publishable_LU8vcdqazISUz4ntCs2-9A_BOY7oAsb';
  function syncs(k){ return k.indexOf('roast:') === 0 || k === 'roast_scorecard_v9'; }
  function hdrs(extra){ var h = { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY, 'Content-Type': 'application/json' }; for (var x in extra) h[x] = extra[x]; return h; }
  function cloudPush(k, s){
    if (!syncs(k) || typeof fetch === 'undefined') return;
    fetch(SB_URL + '?on_conflict=key', { method: 'POST', headers: hdrs({ 'Prefer': 'resolution=merge-duplicates,return=minimal' }), body: JSON.stringify({ key: k, value: s }) })
      .then(function(r){ if (!r.ok) syncBadge('off'); else syncBadge('on'); }, function(){ syncBadge('off'); });
  }
  function syncBadge(state){
    try {
      var b = document.getElementById('syncbadge');
      if (!b){ b = document.createElement('div'); b.id = 'syncbadge'; b.style.cssText = 'position:fixed;bottom:10px;right:10px;font:500 11px DM Sans,sans-serif;padding:4px 9px;border-radius:12px;z-index:999;opacity:.85'; document.body.appendChild(b); }
      if (state === 'on'){ b.textContent = '● Synced'; b.style.background = '#1f7a3a'; b.style.color = '#fff'; }
      else { b.textContent = '● Offline (saved on this device)'; b.style.background = '#a33'; b.style.color = '#fff'; }
    } catch(e){}
  }
  /* On load: pull cloud values. If another device changed something, update here and refresh once. */
  function cloudPull(){
    if (typeof fetch === 'undefined') return;
    fetch(SB_URL + '?select=key,value', { headers: hdrs({}) }).then(function(r){ if (!r.ok) throw 0; return r.json(); }).then(function(rows){
      var changed = false;
      rows.forEach(function(row){ if (syncs(row.key) && localStorage.getItem(row.key) !== row.value){ localStorage.setItem(row.key, row.value); changed = true; } });
      /* Push anything that exists only on this device (first sync). */
      var remote = {}; rows.forEach(function(row){ remote[row.key] = 1; });
      for (var i = 0; i < localStorage.length; i++){ var k = localStorage.key(i); if (syncs(k) && !remote[k]) cloudPush(k, localStorage.getItem(k)); }
      syncBadge('on');
      if (changed && !sessionStorage.getItem('roast_synced')){ sessionStorage.setItem('roast_synced', '1'); location.reload(); }
      else sessionStorage.removeItem('roast_synced');
    }).catch(function(){ syncBadge('off'); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', cloudPull); else cloudPull();
  function toast(msg){
    var t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t);
    setTimeout(function(){ t.remove(); }, 1800);
  }
  function copy(text, btn){
    function ok(){ if (btn){ var o = btn.textContent; btn.textContent = 'Copied'; setTimeout(function(){ btn.textContent = o; }, 1300); } else toast('Copied'); }
    function fb(){ var ta = document.createElement('textarea'); ta.value = text; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); ok(); } catch(e){ toast('Select the text and copy it'); } ta.remove(); }
    try { navigator.clipboard.writeText(text).then(ok, fb); } catch(e){ fb(); }
  }
  /* Weeks run Sunday → Saturday. Returns ISO date (YYYY-MM-DD) of that week's Sunday. */
  function weekStart(d){ d = d ? new Date(d) : new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() - d.getDay()); return iso(d); }
  function iso(d){ var m = d.getMonth()+1, day = d.getDate(); return d.getFullYear() + '-' + (m<10?'0':'') + m + '-' + (day<10?'0':'') + day; }
  function addDays(isoStr, n){ var d = new Date(isoStr + 'T00:00:00'); d.setDate(d.getDate()+n); return iso(d); }
  function fmt(isoStr){ var d = new Date(isoStr + 'T00:00:00'); return d.toLocaleDateString('en-US', {month:'short', day:'numeric'}); }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  /* Backup: every ROAST key in this browser → one JSON. */
  var KEYS = ['roast_leadlog_v9','myash_ops_v6','roast_scorecard_v9'];
  function exportAll(){
    var out = { exported: new Date().toISOString(), data: {} };
    try { for (var i = 0; i < localStorage.length; i++){ var k = localStorage.key(i); if (KEYS.indexOf(k) > -1 || k.indexOf('roast:') === 0) out.data[k] = localStorage.getItem(k); } } catch(e){}
    return JSON.stringify(out, null, 1);
  }
  function importAll(json){
    var obj = JSON.parse(json); var n = 0;
    Object.keys(obj.data || {}).forEach(function(k){ try { localStorage.setItem(k, obj.data[k]); n++; } catch(e){} });
    return n;
  }
  return { get:get, set:set, toast:toast, copy:copy, weekStart:weekStart, addDays:addDays, fmt:fmt, iso:iso, esc:esc, exportAll:exportAll, importAll:importAll };
})();
(function(){ try { var a = document.querySelector('.nav a[aria-current="page"]'); if (a){ var p = a.parentElement; if (a.offsetLeft + a.offsetWidth > p.clientWidth) p.scrollLeft = a.offsetLeft - 80; } } catch(e){} })();

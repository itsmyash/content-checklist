/* ROAST // shared helpers: safe storage, copy, toast, week math, backups */
var R = (function(){
  function get(k, fallback){ try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch(e){ return fallback; } }
  function set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch(e){ return false; } }
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
  var KEYS = ['roast_leadlog_v9','myash_ops_v6'];
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
(function(){ try { var a = document.querySelector('.nav a[aria-current="page"]'); if (a && a.scrollIntoView) a.parentElement.scrollLeft = a.offsetLeft - 80; } catch(e){} })();

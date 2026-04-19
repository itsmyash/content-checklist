
import { useState } from "react";

const CHECKLIST_ITEMS = [
  { id: "newsletter", label: "ROAST Newsletter", category: "publish" },
  { id: "sub_mon", label: "Monday Substack (Operator Life)", category: "publish" },
  { id: "sub_thu", label: "Thursday Substack (Experience Economy)", category: "publish" },
  { id: "sub_notes", label: "21 Substack Notes (batched)", category: "publish" },
  { id: "yt_hub_en", label: "YouTube Hub Video (English)", category: "film" },
  { id: "yt_hub_es", label: "YouTube Hub Video (Spanish)", category: "film" },
  { id: "ashes", label: "Ashes & Escrows Episode", category: "film" },
  { id: "yt_short", label: "YouTube Short + IG Reel", category: "film" },
  { id: "dr_en", label: "DR Video — CONFOTUR (English)", category: "film" },
  { id: "dr_es", label: "DR Video — CONFOTUR (Spanish)", category: "film" },
  { id: "cigar_vid", label: "Cigar/Lounge Video (Toast & Light)", category: "film" },
  { id: "tiktok_re", label: "Native TikTok Re-record (@alexa.realtor)", category: "film" },
  { id: "tiktok_ash", label: "TikTok @its.myash (DR Cigars)", category: "film" },
  { id: "cc_tue_re", label: "Car Confession — Tue @alexa.realtor (EN)", category: "film" },
  { id: "cc_wed_re", label: "Car Confession — Wed @alexa.realtor (EN)", category: "film" },
  { id: "cc_thu_re", label: "Car Confession — Thu @alexa.realtor (EN)", category: "film" },
  { id: "cc_wed_ash", label: "Car Confession — Wed @its.myash (EN)", category: "film" },
  { id: "cc_tue_es", label: "Car Confession — Tue @alexa.realtor (ES)", category: "film" },
  { id: "cc_thu_es", label: "Car Confession — Thu @alexa.realtor (ES)", category: "film" },
  { id: "sun_filler", label: "Before the First Draw (@fillerandroast)", category: "schedule" },
  { id: "sun_myash", label: "Coffee & Ash Ritual (@its.myash)", category: "schedule" },
  { id: "sun_life", label: "Behind the Operator (@life.byalexa)", category: "schedule" },
  { id: "mon_smoke", label: "Tonight's Smoke Carousel (@its.myash)", category: "schedule" },
  { id: "mon_li", label: "Market Signal LinkedIn", category: "schedule" },
  { id: "mon_gb", label: "Google Business Post 1", category: "schedule" },
  { id: "mon_fb", label: "Real Estate Insight FB Personal", category: "schedule" },
  { id: "mon_life", label: "Operator Moment (@life.byalexa)", category: "schedule" },
  { id: "tue_pulse", label: "Pocono Pulse Market Update IG", category: "schedule" },
  { id: "tue_nextdoor", label: "Neighborly Post Nextdoor (Tue)", category: "schedule" },
  { id: "tue_filler_fb", label: "Nell's Social FB Tag (@fillerandroast)", category: "schedule" },
  { id: "wed_story", label: "Under Contract Story (@alexa.realtor)", category: "schedule" },
  { id: "wed_life", label: "Wed Recording Day (@life.byalexa)", category: "schedule" },
  { id: "thu_li", label: "Investor Signal LinkedIn (Thu)", category: "schedule" },
  { id: "thu_nextdoor", label: "Community Roundup Nextdoor (Thu)", category: "schedule" },
  { id: "fri_coffee", label: "Coffee for the Leaf (@fillerandroast)", category: "schedule" },
  { id: "fri_smoke", label: "Weekend Smoke Reel (@its.myash)", category: "schedule" },
  { id: "sat_nextdoor", label: "Weekend Market Tip Nextdoor", category: "schedule" },
  { id: "sat_life", label: "Weekend Operator Life (@life.byalexa)", category: "schedule" },
  { id: "sp_ig_re", label: "Spanish IG Post @alexa.realtor (Sat)", category: "schedule" },
  { id: "sp_fb_personal", label: "Personal Facebook Spanish Post (Fri)", category: "schedule" },
  { id: "sp_tiktok_ash", label: "@its.myash TikTok Spanish DR/Cigar", category: "schedule" },
  { id: "sp_fb_biz", label: "FB Business Spanish Post (Biweekly)", category: "schedule" },
  { id: "sp_li_es", label: "LinkedIn Spanish Post (Biweekly)", category: "schedule" },
  { id: "sp_gb_es", label: "Google Business Spanish Post (Biweekly)", category: "schedule" },
  { id: "li_op", label: "LinkedIn Operator Post (Thu)", category: "schedule" },
  { id: "gb2", label: "Google Business Post 2 (Thu)", category: "schedule" },
];

const OUTPUTS = [
  {
    id: 1,
    label: "OUTPUT 1",
    title: "ROAST Newsletter",
    emoji: "📰",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROAST — THE LIFESTYLE MARKET LETTER
Week of April 21, 2026 | @itsmyash on Substack
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══════════════════════════
OPENER
═══════════════════════════

He had two days to pick up the phone.

I'm still waiting.

The contractor who ghosted me on a job he didn't finish tried to flip the script and come after me for money. I stood my ground. He got loud. Then his boss got involved and told him to apologize. That was two days ago. I'm writing this newsletter. He's still deciding if he has the guts to do the right thing. That's a whole story on its own — but what it really is, is a Tuesday in operator life. You hold the line, you let the noise pass, and you keep building. That's the job.

This week the market is sending signals that require the same energy. Pennsylvania is moving toward statewide STR regulation. Monroe County's patchwork of township rules is still where the real decisions get made. And the Dominican Republic just had its biggest single month of tourism arrivals ever. There's a lot happening. The operators who know how to read it will be positioned. The ones waiting for someone else to explain it will be behind.

Here's what's in this issue: Market Pulse breaks down HB 2303 and what it actually means for Pocono investors. Investor Intel has the submarket data, the rate update, and five listings worth screening. The DR Play hits different this month — 3.7 million Q1 arrivals and a $1.5B cruise port opening in Q2. Filler & Roast is pairing your morning brew with intention. And What We're Reading closes it out with four pieces worth your time.

Let's get into it.

═══════════════════════════
SECTION 01 — MARKET PULSE
═══════════════════════════

HEADLINE: Pennsylvania Wants to Standardize STR Rules. Monroe County Already Has Its Own Plans.

DEK: HB 2303 would create the state's first uniform short-term rental framework. That matters — but the township zoning map is still the first thing you check.

HB 2303 dropped in March 2026 and it's the most important bill Pennsylvania STR investors haven't heard of yet. It would create countywide registries, require a 24/7 designated contact for every STR property, and establish baseline safety standards with tighter requirements for larger operators. For Monroe County — which already has a patchwork of township-level rules — this bill would layer a new set of state requirements on top of what already exists. That's not necessarily bad. But it does mean the compliance picture gets more complex, not simpler.

Right now, Barrett Township is one of the more workable markets: STR permits required, inspections mandatory, and STRs allowed in all zoning districts unless an HOA says otherwise. Jackson Township requires a valid permit and treats operating without one as illegal — full stop. Paradise Township doesn't allow STRs in residential zoning at all, with updated ordinances posted as recently as February 2026. Hamilton Township doesn't allow them either. Middle Smithfield has an annual licensing requirement. This is not a market where you assume and figure it out later. You check the zoning map before you write an offer.

At the federal level, the 21st Century ROAD to Housing Act — which includes a ban on large institutional investors buying single-family homes — is moving back to the House. It's not a direct STR restriction, but it signals continued federal pressure on investor activity in residential housing. Watch how that language evolves. And if you're underwriting anything lake-adjacent in the Poconos, start the NFIP conversation early — the National Flood Insurance Program is set to expire September 30, 2026, and a lapse would freeze new or renewal policies.

> "Pennsylvania moving toward statewide STR standards sounds like progress. But the township zoning map is still the first line in the due diligence checklist. Always." — Alexa Sanchez

📌 TAKEAWAY BOX:
🏘️ **HB 2303 is the bill to watch.** Committee movement or amendments to Pennsylvania's first statewide STR bill will directly affect how Monroe County operators register and comply going forward.
⚠️ **Know your township before you offer.** Jackson, Paradise, and Hamilton are high-risk for STR investors. Barrett and Middle Smithfield are structured but workable.
🌊 **Flag flood-zone properties now.** NFIP expires September 30. If you're buying near a lake or creek, your lender and insurance agent need to be in the conversation immediately.

═══════════════════════════
SECTION 02 — INVESTOR INTEL
═══════════════════════════

HEADLINE: Pocono STRs Are Still in Play — But Only If You Buy the Right Submarket

DEK: Mount Pocono is outperforming. Pocono Township is softer. Rates are at 6.46%. Here's where the math still works.

The April 2026 Pocono submarket data is doing exactly what it should — separating the believers from the buyers. Mount Pocono is sitting at 45.9% occupancy and $499 ADR, generating roughly $69,866 in annual revenue with supply up 61.5% year-over-year. The market absorbed more inventory and revenue still climbed. That's a sign that the better-positioned properties are pulling ahead. Pocono Township tells a different story: 35.9% occupancy, $493 ADR, and about $63,438 in annual revenue. Same general region, materially different performance. The micro-market matters more than the county average.

January 2026 STR revenue was down 18% year-over-year and February was down 31%. Weather and seasonality are the cited factors, and March reportedly showed a 6.8% uptick as active listings fell 3.8%. The directional trend is better than the winter numbers look, but the underwriting needs to reflect seasonal swings. Cash-on-cash math at 6.46% (Freddie Mac, April 2, 2026 — up from 6.38% the week prior) does not forgive optimistic occupancy assumptions. Build in conservative revenue floors.

Most homes in Pocono Pines are sitting on market about 63 days. That's negotiation room — use it.

PROPERTY SPOTLIGHTS WORTH SCREENING:

| Address | Price | Beds/Baths | STR Angle |
|---|---|---|---|
| 3246 Mountain View Dr, Tannersville | $439,900 | 4BR/3BA, 2,636 sqft | Ski proximity, dual suites, group format — strongest STR profile of the set |
| 114 Maxatawny Dr, Pocono Lake | $199,900 | 4BR/2BA, 1,248 sqft | Entry-level price, 4BR count — classic group rental screen. Verify HOA/township |
| 4193 Forest Dr, Kunkletown | $399,000 | 4BR/3BA, 2,535 sqft | Size and price work for family/group if zoning permits |
| 202 Tepee Dr, Pocono Lake | $299,900 | TBD | Pocono Lake location is the driver — verify lake rights and STR permissibility |

✅ INVESTOR CHECKLIST:
📍 **Run the township + HOA check before anything else.** Jackson, Paradise, Hamilton = pass. Barrett, Middle Smithfield = proceed with verification.
📊 **Underwrite at 35-40% occupancy, not 46%.** Mount Pocono's best performers are hitting 45.9%. Model for the middle of the range, stress test at the bottom.
💰 **Target under-$500K with differentiated features.** Lake access, ski proximity, 4BR+ group format. Generic supply is what's struggling. The right asset profile is still outperforming.

═══════════════════════════
SECTION 03 — THE DR PLAY
═══════════════════════════

🌴 BANNER: THE DOMINICAN REPUBLIC JUST HAD ITS BIGGEST MONTH OF TOURISM. EVER.

March 2026 delivered 1,305,866 arrivals — the first time a single month crossed 1.3 million visitors. Q1 2026 total: 3,710,374 arrivals, up 10.8% versus 2025, 14.8% versus 2024, and 64.1% versus 2019. This is not a post-COVID bounce. This is a structural step-up in demand, and it is compressing inventory in the markets where US investors are already active.

Punta Cana–Bavaro posted peak-week occupancy between 88–95%. The national average over Easter week 2026 was 74.6%. American Airlines alone added four new US routes to Punta Cana — Indianapolis, Nashville, Pittsburgh, and Raleigh-Durham — bringing up to 95 weekly flights and 12%+ growth in seat capacity through April 2026. The $1.5B cruise port is on track for a Q2 2026 opening, designed to handle 10,000+ passengers per call. The demand engine isn't slowing down. It's being deliberately amplified.

For US investors, the math in the right asset still works: Cap Cana luxury condos and villas are reporting 8–12% gross cash-on-cash yields in resale assets, rising to 12–16%+ in repositioned or high-demand units. Punta Cana/Bavaro resort-managed condos are running 6–10% gross. CONFOTUR (Law 158-01) remains active — income-tax-free and duty-free benefits for qualified tourism developments. New master-planned projects are being structured specifically to qualify. Pre-construction in Cap Cana and Roco Ki is still available for 2027–2029 deliveries, priced in USD.

📊 STATS ROW:
🛫 **3,710,374** — Q1 2026 DR arrivals, up 10.8% YOY
🏨 **88–95%** — Punta Cana–Bavaro peak occupancy, recent holiday weeks
💵 **8–16%** — Gross cash-on-cash yield range, Cap Cana operating assets

🗺️ DR TAKEAWAY BOX:
✈️ **American Airlines added 4 new US–Punta Cana routes.** More direct access = more demand compression = harder to find below-market entry. The window for favorable pre-construction pricing is tightening.
🏗️ **$1.5B cruise port opens Q2 2026.** That's a new tourism node on the east coast with hotel, retail, and excursion infrastructure attached. Proximity matters.
📋 **Verify CONFOTUR eligibility per project.** Not all developments in Punta Cana qualify. Run this check through MITUR or local DR counsel before committing. It's the difference between paying taxes and not.

═══════════════════════════
SECTION 04 — FILLER & ROAST
═══════════════════════════

HEADLINE: The Ritual Isn't Optional

DEK: Specialty coffee is moving toward intentional experience. Filler & Roast was built for exactly this moment.

The specialty coffee market is doing something interesting right now: it's slowing down on purpose. Lighter roasts, single-origin transparency, cleaner fermentation profiles, and precision brewing are becoming the language of premium coffee — not because they're trendy, but because consumers are treating coffee like an experience, not a product. That's exactly the positioning Filler & Roast was built for. Coffee for the pause before the draw. A ritual that belongs in the lounge because it earns its place there.

At Nell's Social this week, the pairing that's been landing is the Butter Pecan with a Connecticut wrapper. Smooth on both sides — the brightness of the butter pecan cuts through the creaminess of the Connecticut without competing with it. The Amaretto evening draw pairing is also worth flagging for anyone coming in for a longer session: it's designed as an after-dinner pour, something to sip slow while the room gets quiet. The House Blend with a Maduro is the anchor pairing — if you haven't tried it, that's where to start.

═══════════════════════════
SECTION 05 — WHAT WE'RE READING
═══════════════════════════

📋 **AirROI | "Mount Pocono April 2026 STR Data"** — Mount Pocono is showing 45.9% occupancy and $499 ADR with supply up 61.5% YOY. The market is absorbing inventory, but only differentiated listings are outperforming.

📋 **DR1 | "Q1 2026 Dominican Republic Tourism Arrivals"** — 3.7 million visitors in Q1, with March breaking the single-month record at 1.3 million arrivals. US visitors account for 45% of March traffic.

📋 **LegiScan | "HB 2303 — Pennsylvania STR Regulation"** — Pennsylvania's first uniform STR bill would create countywide registries, 24/7 contact requirements, and baseline safety standards. Introduced March 2026. Committee movement is the next trigger to watch.

📋 **Halfwheel | "2026 Dominican Cigar Releases"** — Procigar Festival 2026 officially inaugurated in Santiago with participants from 40+ countries. Dominican origin is being positioned as a premium cultural identity, not just a manufacturing label.`
  },
  {
    id: 2,
    label: "OUTPUT 2",
    title: "Monday Substack (Operator Life)",
    emoji: "✍️",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 2 — MONDAY SUBSTACK ARTICLE
Operator Life | Monday, April 21, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TITLE: He Was Told to Apologize. He Hasn't.

SUBTITLE: On holding the line when someone else expects you to fold.

---

He didn't finish the job.

Then he ghosted. Then — and this is the part that still gets me — he had the nerve to come back and shake me down for money on a job he didn't complete. I don't know what version of me he expected to find on the other end of that conversation, but it wasn't the one he got. I stood my ground. He got loud. I didn't.

His boss called him in. Told him to apologize.

That was two days ago. I'm still waiting.

I've been running businesses long enough to know that the people who test you are rarely the ones who quit after one try. They push because somewhere, someone folded. That fold taught them this move works. So they run it again. And again. Until they find the person who doesn't fold. I was that person on Thursday. I'm still that person today.

Here's what I've learned about the moment when someone gets loud: loud is almost never about you. Loud is what desperation sounds like when it runs out of options. He didn't have the money. He didn't have the completed work. He didn't have a case. So he got loud. And I got quiet. Because quiet, in that moment, was the power move.

Running three businesses means I've been tested by buyers who think they can lowball me into embarrassment, by contractors who think that because I'm a woman I'll eventually cave, by situations that are designed to make you feel like you're the problem when you're actually the one holding the standard. Every time, the move is the same: hold the line, let the noise pass, document everything, and keep building.

This is the part nobody talks about when they talk about entrepreneurship. The glossy version is the closing table. The contracts. The brand shoots. The lounge nights. What nobody puts in the caption is the Thursday at 11am when someone is threatening you over a job they didn't do and you're sitting there deciding whether you're going to be the version of yourself that shrinks or the version that doesn't. The decision you make in that moment is the one that actually defines the business.

I chose not to shrink. I chose not to write the check. And I chose to wait — because his apology isn't for me. It's for him. It's his chance to do the right thing and put the situation behind him. If he takes it, fine. If he doesn't, that tells me everything I need to know about the next decision.

The operator lesson isn't complicated: know what you owe, know what you don't, and don't let anyone make you confuse the two under pressure. Contracts exist for this exact reason. Timelines exist. Deliverables exist. When they don't get met, the obligation doesn't flip — it stays with the person who didn't deliver.

You will deal with people like this. They come in the form of contractors, clients, vendors, and sometimes people you trusted. The skill isn't avoiding them — you can't. The skill is knowing your ground well enough that when someone tries to take it, you're already standing on something solid.

He has my number. He knows what he needs to do.

I'll be here.

— Alexa`
  },
  {
    id: 3,
    label: "OUTPUT 3",
    title: "Thursday Substack (Experience Economy)",
    emoji: "☕",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 3 — THURSDAY SUBSTACK ARTICLE
Experience Economy | Thursday, April 24, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TITLE: Two Rituals, One Rhythm

SUBTITLE: Why coffee and cigars belong together — and what it means for how you experience both.

---

Before the first draw, there is always coffee.

Not always consciously. Not always as a decision. But if you watch the people who've been doing this long enough — who've built a real relationship with a good cigar — there's almost always something in the cup first. A moment before the moment. A ritual that prepares the palate, settles the pace, and tells the brain: we're not rushing now.

That's not an accident. It's physiology, but it's also culture. And it's the reason Filler & Roast exists at all.

The specialty coffee world has been moving toward this idea for a few years now — the idea that coffee is a ritual, not a product. Lighter roasts, single-origin transparency, precision brewing. The language of premium coffee has gotten intentional. What's interesting is that the cigar world has always been this way. We've never treated it as fast. We've never treated it as casual. The ritual was already built in — the cut, the toast, the light, the first third. Coffee is just the part that happens before all of that, and it deserves the same attention.

The Butter Pecan with a Connecticut wrapper is the pairing I keep coming back to at Nell's. There's something in the brightness of the butter pecan that doesn't fight the Connecticut — it doesn't compete, it just opens the profile up. The creaminess in the Connecticut translates differently when your palate has already registered that warmth. You taste more of what's already there. That's what a good pairing does: it doesn't add flavor, it reveals it.

The Amaretto evening draw is a different experience entirely. It's built for the end of the session — after dinner, when the room gets quieter and the cigar is deeper into its second third. Amaretto has a sweetness that lands soft, not sharp, and it extends the contemplative quality of that part of the smoke. It's not a coffee you'd drink at 9am. It's specifically for the hour when you stop moving.

And the House Blend with a Maduro is the anchor. If you haven't tried it, that's where to start — it's the pairing that explains why we built this whole thing. The roast depth of the house blend meets the earthiness of the Maduro and they hold each other up. Neither dominates. That's the goal.

What I want people to feel at Nell's Social is exactly this: that the coffee and the cigar are two parts of the same experience. Not a coffee bar that happens to have cigars. Not a lounge that happens to have a pour-over station. A place where both are taken seriously, where both are chosen deliberately, and where the ritual of one prepares you for the ritual of the other.

The experience economy is moving toward this. Consumers don't want transactions. They want to be inside something. They want to feel like what they're doing is curated — that someone thought about why the Butter Pecan is paired with the Connecticut, and that the answer isn't just flavor preference, it's a philosophy.

Filler & Roast is that philosophy in a cup.

Come find out.

— Alexa`
  },
  {
    id: 4,
    label: "OUTPUT 4",
    title: "21 Substack Notes",
    emoji: "📝",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 4 — 21 SUBSTACK NOTES
Monday–Sunday | Morning / Midday / Evening
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ MONDAY (April 21) ═══

🌅 MORNING NOTE:
He had two days to apologize. I had a newsletter to write. Both things happened on schedule — one of them mine.
If you run a business, you already know: holding the line doesn't feel powerful in the moment. It just feels quiet. But quiet is where the work lives.
You'll recognize yourself in today's Operator Life piece.

☀️ MIDDAY NOTE:
Pocono STR operators — HB 2303 just became the most important bill you haven't Googled yet.
Pennsylvania's first statewide short-term rental framework would create countywide registries and 24/7 contact requirements. It doesn't replace township zoning. It layers on top of it.
More compliance, not less. Start reading the bill now.

🌙 EVENING NOTE:
I sat with a Maduro and the house blend tonight. Didn't plan it. Just reached for both.
There's something that happens when two rituals overlap — they make each other slower. More deliberate.
If you've never had coffee before a cigar, you're missing the first chapter of the experience.

═══ TUESDAY (April 22) ═══

🌅 MORNING NOTE:
A contractor tried to shake me down for a job he didn't finish. I stood my ground.
What I didn't expect: how clear everything gets when someone forces you to decide what your standards actually are.
Read today's piece if you've ever had to hold a line someone else expected you to cross.

☀️ MIDDAY NOTE:
Mount Pocono: 45.9% occupancy. $499 ADR. Supply up 61.5% year-over-year and revenue still climbed.
This is what a market looks like when the right assets are winning and the generic ones are bleeding.
Buy the differentiated property. Every time.

🌙 EVENING NOTE:
The Dominican Republic had 3.7 million visitors in Q1 2026. March alone was 1.3 million — first time a single month ever crossed that number.
I think about what that means for the people who bought in Cap Cana three years ago.
And what it means for the people still waiting to decide.

═══ WEDNESDAY (April 23) ═══

🌅 MORNING NOTE:
Recording day. Smoke on camera. No editing around it, no apologizing for it.
The cigar is part of the brand. If that's not for you, that's okay. You're not the audience.
Real ones stay.

☀️ MIDDAY NOTE:
Pennsylvania's HB 2303 would require a 24/7 designated contact for every STR. Not a hotline. A person.
Think about what that means for operators managing 5+ properties in Monroe County.
The compliance model just got more expensive if this passes.

🌙 EVENING NOTE:
CONFOTUR is the word every US investor buying in the DR needs to understand.
Tax-free. Duty-free. Legal for foreign ownership.
Not every project qualifies. Run the check before you wire the deposit.

═══ THURSDAY (April 24) ═══

🌅 MORNING NOTE:
Coffee for the end of the session is a different animal than coffee to start one.
The Amaretto evening draw exists specifically for that hour when the cigar is in its second third and the room has gotten quiet.
Today's Experience Economy piece is about why those moments are worth designing deliberately.

☀️ MIDDAY NOTE:
6.46%. That's the 30-year fixed rate as of April 2, 2026.
Up from 6.38% the week before. Every tenth of a point matters when you're running cash-on-cash calculations on a $400K STR.
Underwrite conservatively. Stress test the occupancy. Know your floor.

🌙 EVENING NOTE:
Procigar Festival 2026 in Santiago. 40+ countries represented.
The Dominican Republic isn't just where premium cigars come from. It's becoming what premium cigar culture means.
The origin story is the brand now.

═══ FRIDAY (April 25) ═══

🌅 MORNING NOTE:
Butter Pecan with a Connecticut wrapper is the pairing that keeps showing up at Nell's.
Not because it's the most complex combination. Because it's the most honest one — each side doing exactly what it should without competing.
Good pairings feel inevitable in hindsight. This one does.

☀️ MIDDAY NOTE:
Paradise Township: STRs not permitted in residential zoning. Updated February 2026.
Jackson Township: STRs illegal without a permit. No exceptions. No workarounds.
If you're buying in Monroe County and skipping the township check, you're making a very expensive assumption.

🌙 EVENING NOTE:
The weekend starts tonight for a lot of people.
For me it starts with a Connecticut and a Butter Pecan and about 45 minutes of nothing urgent.
Whatever your ritual is — protect it. The week will try to take it from you. Don't let it.

═══ SATURDAY (April 26) ═══

🌅 MORNING NOTE:
The $1.5B Punta Cana cruise port is set to open Q2 2026.
Ten thousand passengers per call. New hotel, retail, and excursion infrastructure on the east coast.
This is the kind of demand multiplier that changes the investment thesis on surrounding inventory.

☀️ MIDDAY NOTE:
Running three businesses doesn't mean doing three times the work. It means building systems that work while you're working on something else.
I didn't always do this right. I still don't always do it right.
But I do it better than I did a year ago. That's the only metric that matters.

🌙 EVENING NOTE:
The best cigar I've had lately wasn't the most expensive one.
It was the one I sat with long enough to actually taste.
Slow down. Whatever you're smoking tonight deserves your full attention.

═══ SUNDAY (April 27) ═══

🌅 MORNING NOTE:
Sunday batch day. Coffee first — always.
Before the first draw there's always something in the cup.
Today it's the house blend and it's doing exactly what it should.

☀️ MIDDAY NOTE:
American Airlines added four new US routes to Punta Cana in 2026: Indianapolis, Nashville, Pittsburgh, Raleigh-Durham.
That's 12%+ more seat capacity. More direct flights. More compressed demand.
The window for favorable pre-construction pricing in the DR is tightening.

🌙 EVENING NOTE:
If you're the person who runs the systems, builds the content, closes the deals, and still finds time for a cigar on a Sunday evening — this is for you.
You are not going to burn out if you keep protecting the rituals.
The rituals are what keep the machine running.`
  },
  {
    id: 5,
    label: "OUTPUT 5",
    title: "YouTube Hub Video (English)",
    emoji: "🎥",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 5 — YOUTUBE HUB VIDEO (ENGLISH)
@AlexaSanchezRealtor | Upload Sunday April 20
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TITLE: Pennsylvania Is About to Change the STR Game in the Poconos — Here's What Investors Need to Know

─── SCRIPT ───

[0:00–0:08] HOOK:
Pennsylvania just introduced its first statewide short-term rental law — and if you own property in the Poconos, this affects you directly.

[0:08–0:30] OPEN:
I'm Alexa Sanchez, licensed Pennsylvania realtor specializing in the Pocono Mountains STR market. Every week I break down what's actually happening in this market so you can make better investment decisions. This week we're talking about HB 2303, what it means for Monroe County operators, and the submarket data that tells you where the money is still being made.

[0:30–1:45] SECTION 1 — HB 2303: WHAT THE BILL ACTUALLY SAYS:
Here's what HB 2303 would require. Number one: countywide STR registries. You would have to register in your county, not just comply with your township. Number two: a 24/7 designated contact person for every property. Not a phone number — a real person, on call. Number three: baseline safety standards with tighter rules for larger operators. This doesn't replace your township zoning — it layers on top of it. Barrett Township still has its own rules. Jackson still requires a permit and treats operating without one as illegal. Paradise and Hamilton still don't allow STRs in residential zoning at all. The state bill adds a new compliance level, not a simpler one. If you own or are looking to buy in Monroe County, you need to understand both layers.

[1:45–2:45] SECTION 2 — THE SUBMARKET DATA:
Now let's talk about where the money is actually being made. Mount Pocono is at 45.9% occupancy and $499 ADR, generating roughly $69,000 in annual revenue — with supply up 61.5% year-over-year and revenue still climbing. That tells you the right properties are outperforming even as more inventory enters the market. Pocono Township is softer: 35.9% occupancy, $493 ADR, about $63,000 annually. Same county, different story. The 30-year fixed rate is at 6.46% as of early April — up from 6.38% the week prior. At that rate, you need to underwrite conservatively. Model occupancy at 35-40%, not 46%. Know your cash-on-cash floor before you make an offer.

[2:45–3:30] SECTION 3 — LISTINGS WORTH SCREENING:
Five properties I'm watching this week: 3246 Mountain View Drive in Tannersville at $439,900 — 4BR, 3BA, 2,600+ square feet. Ski proximity, dual suites, group format. Strongest STR profile of the set. 114 Maxatawny Drive in Pocono Lake at $199,900 — 4BR, 2BA, 1,200 square feet. Entry-level price with the bedroom count for group rental. Verify the HOA and township rules before anything else. 4193 Forest Drive in Kunkletown at $399,000 — 4BR, 3BA, solid size for family/group use if zoning supports it. 202 Tepee Drive in Pocono Lake at $299,900 — the lake location is the play here; verify lake rights before you offer. Most homes in the area are sitting about 63 days on market — that's room to negotiate.

[3:30–3:50] CTA:
If you want personalized help analyzing a Monroe County property — running the township check, the HOA review, and the occupancy model — reach out directly. Link in the description. Subscribe for weekly STR market breakdowns. This is the intelligence that makes the difference between a smart buy and an expensive mistake.

─── CAPTION ───
Pennsylvania's first statewide short-term rental regulation — HB 2303 — would create countywide registries, 24/7 contact requirements, and new safety standards for Pocono Mountains STR operators. In this week's market breakdown, I cover what the bill actually says, how it layers on top of existing Monroe County township rules (Barrett, Jackson, Paradise, Hamilton, Middle Smithfield), and the April 2026 submarket data showing where occupancy and ADR are holding — and where they're not.

Mount Pocono: 45.9% occupancy / $499 ADR. Pocono Township: 35.9% / $493 ADR. 30-year fixed rate at 6.46%. Five listings worth screening under $500K.

I'm Alexa Sanchez, PA License #RS326383, Smart Way America Realty. I specialize in Pocono Mountains short-term rental investor transactions. Reach me at (570) 688-8147.

📍 Subscribe for weekly STR market intelligence.
📩 Contact: Alexa@alexasanchez.net

#PoconoRealEstate #STRInvesting #ShortTermRental #MonroeCounty #PARealEstate

─── THUMBNAIL DIRECTION ───
Alexa in the foreground, dark/charcoal background. Burgundy blazer or structured black jacket — executive energy. Direct camera eye contact, no smile, slight forward lean. Left side: bold white block text "PENNSYLVANIA CHANGES STR RULES" in chunky slightly-tilted font. Neon green callout stat: "HB 2303" in smaller bold. Bottom right corner: PA state outline graphic in minimal white line. Font weight: heavy. No clutter.`
  },
  {
    id: 6,
    label: "OUTPUT 6",
    title: "YouTube Hub Video (Spanish)",
    emoji: "🎥🇩🇴",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 6 — YOUTUBE HUB VIDEO (ESPAÑOL)
@AlexaSanchezRealtor | Playlist: En Español
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TITLE: Pennsylvania va a cambiar las reglas para rentas a corto plazo — esto te afecta si tienes propiedad en Pocono

─── SCRIPT (Dominican Spanish) ───

[0:00–0:08] HOOK:
Óyeme bien — Pennsylvania acaba de introducir su primera ley estatal para rentas a corto plazo, y si tú tienes propiedad en los Poconos, esto te afecta directamente.

[0:08–0:30] APERTURA:
Soy Alexa Sánchez, realtora licenciada en Pennsylvania, especializada en el mercado de inversiones en los Pocono Mountains. Cada semana te traigo lo que realmente está pasando en este mercado pa' que tomes mejores decisiones. Esta semana tamos hablando del proyecto de ley HB 2303, qué significa pa' los operadores en Monroe County, y los datos de mercado que te dicen dónde todavía se puede ganar dinero.

[0:30–1:45] SECCIÓN 1 — HB 2303: LO QUE EL PROYECTO DE LEY DICE EN REALIDAD:
A ver, esto es lo que HB 2303 requeriría. Primero: registros de rentas a corto plazo a nivel de condado. Tú tendrías que registrarte en tu condado, no solo cumplir con las reglas de tu municipio. Segundo: una persona de contacto disponible las 24 horas, los 7 días de la semana. No un número de teléfono — una persona real, disponible. Tercero: estándares básicos de seguridad con reglas más estrictas para operadores grandes. Esto no reemplaza el zoning de tu municipio — se añade encima. Barrett Township todavía tiene sus propias reglas. Jackson todavía requiere permiso y sin permiso es ilegal operar. Paradise y Hamilton todavía no permiten rentas en zonas residenciales. La ley estatal añade un nivel de cumplimiento, no lo simplifica. Si tienes propiedad o estás pensando en comprar en Monroe County, tienes que entender ambos niveles.

[1:45–2:45] SECCIÓN 2 — LOS DATOS DE SUBMERCADO:
Hablemos de dónde se está ganando el dinero de verdad. Mount Pocono está a 45.9% de ocupación y $499 de tarifa promedio diaria, generando unos $69,000 anuales en ingresos — con oferta subiendo 61.5% año tras año y los ingresos todavía creciendo. Pocono Township está más flojo: 35.9% de ocupación, $493 ADR, unos $63,000 anuales. El mismo condado, pero resultados muy distintos. La tasa hipotecaria a 30 años está a 6.46% — arriba de 6.38% la semana anterior. A esa tasa, tienes que ser conservador en tus proyecciones. Modela ocupación entre 35-40%, no 46%. Conoce tu piso de retorno antes de hacer ninguna oferta.

[2:45–3:30] SECCIÓN 3 — PROPIEDADES QUE VALE LA PENA MIRAR:
Cinco propiedades que estoy monitoreando: 3246 Mountain View Drive en Tannersville a $439,900 — 4 cuartos, 3 baños, más de 2,600 pies cuadrados. Cerca de las pistas, suites dobles, formato ideal para grupos. 114 Maxatawny Drive en Pocono Lake a $199,900 — 4 cuartos, 2 baños. Precio de entrada con los cuartos pa' alquiler grupal. Verifica HOA y municipio antes de cualquier cosa. 4193 Forest Drive en Kunkletown a $399,000 — tamaño sólido para familia o grupo si el zoning lo permite. 202 Tepee Drive en Pocono Lake a $299,900 — la ubicación en el lago es el valor aquí; verifica derechos de acceso antes de ofertar. La mayoría de las casas en la zona llevan unos 63 días en el mercado — eso es espacio para negociar.

[3:30–3:50] CTA:
Si quieres ayuda personalizada analizando una propiedad en Monroe County — el chequeo de municipio, HOA, y las proyecciones de ocupación — contáctame directamente. El link está en la descripción. Suscríbete para análisis de mercado STR cada semana.

─── CAPTION (Español) ───
La primera regulación estatal de Pennsylvania para rentas a corto plazo — HB 2303 — crearía registros de condado, contacto 24/7, y nuevos estándares de seguridad para operadores en los Pocono Mountains. Esta semana cubro lo que el proyecto de ley dice en realidad, cómo se superpone a las reglas municipales de Monroe County, y los datos de submercado de abril 2026.

Soy Alexa Sánchez, Licencia PA #RS326383, Smart Way America Realty. (570) 688-8147 | Alexa@alexasanchez.net

#BienesRaices #InversionesEnPoconos #MercadoInmobiliario #PARealEstate #LifeByAlexa`
  },
  {
    id: 7,
    label: "OUTPUT 7",
    title: "Ashes & Escrows Episode",
    emoji: "🔥",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 7 — ASHES & ESCROWS EPISODE
Upload Thursday April 24 | @AlexaSanchezRealtor
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TARGET: Realtors who don't know the Pocono STR market

─── SCRIPT ───

You just listed a Pocono Mountain property as an "income-producing STR opportunity" — in Hamilton Township. 

Hamilton Township doesn't allow short-term rentals.

[takes a slow drag]

Let me explain what happened. You saw a nice house in Monroe County, you Googled "Pocono STR market," skimmed one blog post from 2022, and wrote "investment potential" in the MLS remarks. You didn't call the township. You didn't read the ordinance. You definitely didn't Google the zoning map. And now some investor is under contract on a property they can't legally rent. That's on you.

Barrett Township: STRs allowed, permit required. Jackson Township: illegal without a permit — and they mean it. Paradise Township: not in residential zoning, updated February 2026. Hamilton: nope. These are not hidden. They're on the township websites. Which means the only way you didn't know is because you didn't look.

[looks directly at camera]

Knowing the market you work in is not a bonus feature of being a realtor. It's the job.

[final drag]

---

CAPTION (YouTube):
She just listed a Monroe County property as an "STR opportunity." One problem — that township doesn't allow short-term rentals. Another episode of Ashes & Escrows, where the cigar is lit and the BS is not. @AlexaSanchezRealtor | #PoconoRealEstate #STRInvesting #AshesAndEscrows #MonroeCounty #LifeByAlexa

THUMBNAIL DIRECTION:
Alexa with cigar in hand, slight smirk, direct eye contact. Lounge background dark and moody. Bold red text overlay: "THEY LISTED IT WHERE?!" in chunky tilted caps. Bottom: white text "Ashes & Escrows" in smaller serif. Cigar smoke visible in frame. Raw, unpolished energy — not a corporate thumbnail.`
  },
  {
    id: 8,
    label: "OUTPUT 8",
    title: "YouTube Short + IG Reel",
    emoji: "📱",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 8 — YOUTUBE SHORT + IG REEL
@AlexaSanchezRealtor | Upload Thursday April 24
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

─── SCRIPT (under 60 sec) ───

The Pocono STR market is not one market. It's six townships with six different rule sets and one wrong assumption can cost you everything.

Mount Pocono is at 45.9% occupancy. $499 average daily rate. Revenue still climbing even with supply up over 60% year-over-year.

Pocono Township? 35.9% occupancy. Same county. Completely different math.

And it gets more specific. Barrett Township: STRs allowed with a permit. Jackson Township: illegal without one — and they enforce it. Paradise Township: not permitted in residential zones as of February 2026. Hamilton: not allowed at all.

Pennsylvania is also about to introduce statewide STR registration requirements through HB 2303. That layers on top of the township rules — it doesn't replace them.

At 6.46% on a 30-year fixed, you don't have room for optimistic assumptions. Model conservative. Know the township. Verify the HOA.

I'm Alexa Sanchez. I specialize in Pocono STR investor transactions. Link in bio if you're ready to do this right.

─── COVER TEXT DIRECTION ───
Main text overlay: "WRONG TOWNSHIP = WRONG INVESTMENT" — chunky, bold, slightly tilted, white
Neon green stat: "45.9% OCC" in smaller bold block
Red accent text: "KNOW THE RULES" underneath in angled font
Dark moody background — lounge or car interior

─── YOUTUBE SHORTS CAPTION ───
Pocono STR investing is NOT one market. Six townships. Six rule sets. One wrong assumption = an expensive mistake. Here's the April 2026 breakdown. #PoconoRealEstate #STRInvesting #ShortTermRental #MonroeCounty #LifeByAlexa

─── IG REEL CAPTION (@alexa.realtor) ───
Six townships. Six different STR rule sets. One wrong assumption can kill your deal before you close.

Mount Pocono: 45.9% occupancy. Barrett: permits required. Jackson: illegal without one. Hamilton: not allowed. Period.

This is the market. Know it or don't buy it.

#PoconoRealEstate #STRInvesting #MonroeCounty #ShortTermRental #InvestorMindset #LifeByAlexa`
  },
  {
    id: 9,
    label: "OUTPUT 9",
    title: "DR Video (English + Spanish)",
    emoji: "🇩🇴",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 9 — DR VIDEO: CONFOTUR LAW
Upload Thursday April 24 | Both versions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TOPIC: CONFOTUR Law — What Every US Investor Needs to Know Before Buying in the DR

─── ENGLISH SCRIPT ───

[0:00–0:02] HOOK:
The Dominican Republic has a law that lets US investors pay zero income tax on their rental property. Here's how it works.

[0:02–0:45] BODY:
It's called CONFOTUR — Law 158-01 — and it's one of the most investor-friendly tax structures in the Caribbean. If your property is in a CONFOTUR-approved development, you get income-tax-free returns on your rental income and duty-free benefits when you import materials or furnishings for the property. Foreign ownership is fully legal — fee-simple title, same rights as a Dominican national. These benefits run for up to 20 years from the project's approval date, depending on the zone. Here's what you need to know: not every project in Punta Cana or Cap Cana qualifies. CONFOTUR status has to be verified per development, per tower. You check through MITUR — the Ministry of Tourism — or you work with local Dominican counsel who can pull the official approval documentation. If a developer says you're in a CONFOTUR zone, you verify it before you wire anything. This is not the document you skip.

[0:45–0:58] CTA:
I work with buyers in the Dominican Republic and the Pocono Mountains. If you want help understanding what CONFOTUR means for a specific development, reach out directly. Link in bio.

─── SPANISH SCRIPT (Dominican Spanish) ───

[0:00–0:02] HOOK:
La República Dominicana tiene una ley que le permite a los inversionistas americanos pagar cero impuestos sobre los ingresos de su propiedad en alquiler. Óyeme bien — te explico cómo funciona.

[0:02–0:45] CUERPO:
Se llama CONFOTUR — Ley 158-01 — y es una de las estructuras tributarias más favorables para inversionistas en todo el Caribe. Si tu propiedad está en un desarrollo aprobado por CONFOTUR, recibes ingresos de alquiler libre de impuestos sobre la renta y beneficios de exención arancelaria cuando importas materiales o mobiliario para la propiedad. La propiedad extranjera es completamente legal — título en plena propiedad, los mismos derechos que un nacional dominicano. Estos beneficios aplican hasta 20 años desde la fecha de aprobación del proyecto, dependiendo de la zona. Ahora bien, mi amor — no todos los proyectos en Punta Cana o Cap Cana califican. El estatus CONFOTUR hay que verificarlo por desarrollo, por torre. Tú lo verificas a través del MITUR — el Ministerio de Turismo — o trabajas con un abogado dominicano local que pueda obtener la documentación oficial de aprobación. Si el desarrollador dice que estás en zona CONFOTUR, tú lo verificas antes de enviar ningún dinero. Este no es el documento que tú brincas.

[0:45–0:58] CTA:
Trabajo con compradores en la República Dominicana y en los Pocono Mountains. Si quieres ayuda entendiendo qué significa CONFOTUR para un desarrollo específico, contáctame directamente. El link está en el bio.

─── ENGLISH CAPTION (IG/TikTok) ───
Zero income tax on your Dominican Republic rental property. It's real — and it's called CONFOTUR (Law 158-01). Here's what every US investor needs to verify before wiring a single dollar. #DominicanRepublic #DRRealEstate #STRInvesting #InvestorMindset #LifeByAlexa

─── SPANISH CAPTION (@alexa.realtor IG Spanish post / TikTok En Español) ───
Cero impuestos sobre tus ingresos de alquiler en la República Dominicana. Sí, es real — se llama CONFOTUR (Ley 158-01). Lo que todo inversionista americano tiene que verificar antes de firmar. #RepublicaDominicana #InversionesEnRD #BienesRaices #LifeByAlexa #MercadoInmobiliario

─── IMAGE DIRECTION ───
Film: Alexa on camera, direct to lens, standing or seated with a clean neutral or tropical-textured background. On-screen text overlay: "CONFOTUR LAW 158-01" bold white block. Add B-roll or text slides: "0% INCOME TAX" in neon green. Visual of the DR map or PUJ airport aerial if available for transition. Keep it tight — one take, no wasted seconds.

─── ENGLISH HASHTAGS ───
#DominicanRepublic #DRRealEstate #STRInvesting #CONFOTUR #InvestorMindset #LifeByAlexa #PuntaCana #CapCana

─── SPANISH HASHTAGS ───
#RepublicaDominicana #InversionesEnRD #BienesRaices #CONFOTUR #MercadoInmobiliario #LifeByAlexa`
  },
  {
    id: 10,
    label: "OUTPUT 10",
    title: "Cigar/Lounge Video",
    emoji: "🚬",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 10 — CIGAR / LOUNGE VIDEO
Topic: How to Toast and Light a Cigar
@its.myash | Upload Thursday April 24
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

─── SCRIPT ───

[0:00–0:02] HOOK:
Most people light a cigar the same way they light a gas stove. That's why the first third tastes wrong.

[0:02–0:45] BODY:
Here's how you actually do it. First — toast the foot. Rotate the cigar at about a 45-degree angle, two to three inches from the flame. You're not trying to light it. You're warming the tobacco so it opens up and the oils start to move. You'll see the foot start to glow around the edges. That's what you want. Take your time. Twenty, thirty seconds minimum.

Now bring the cigar to your lips. Keep the flame below the foot — never touch the flame to the tobacco directly. Draw slowly. Rotate again. You're coaxing the light, not forcing it. The burn should be even — no one side lit darker than the other. If it is, you torch just the darker side.

Let me tell you what skipping the toast gives you: a hot, uneven burn, a bitter first third, and a cigar that tastes like you're in a hurry. The cigar knows when you're in a hurry. It punishes you for it.

Butane lighter or torch — not matches, not a Bic. The chemicals will get into the tobacco.

[0:45–0:58] CTA:
That's it. Toast first. Light slow. Rotate throughout. You've been doing this wrong — now you know. Follow for more. @its.myash — Nell's Social, Poconos.

─── IG CAPTION (@its.myash) ───
The cigar knows when you're rushing. Toast first. Light slow. The first third should never taste like a mistake.

Step by step — how to properly toast and light a premium cigar. Don't skip this. 🔥

#CigarLife #CigarAuthority #PremiumCigars #NellsSocial #CigarLounge #LifeByAlexa #DominicanCigars

─── TIKTOK CAPTION (@its.myash) ───
Why your first third always tastes off — and how to fix it. Toast the foot first. Always. #CigarTok #CigarLife #CigarAuthority #NellsSocial #LifeByAlexa

─── IMAGE DIRECTION ───
Film at Nell's Social or similar dark lounge setting. Cigar in right hand, butane torch in left. Macro shot of the foot of the cigar during toasting — show the glow developing at the edges. Alexa on camera for the verbal instruction portions. Dark background, warm amber lounge light. Show the full sequence: angle, toast, draw, rotate. B-roll: close-up of even cherry, ash forming cleanly. No background noise if possible — or curated ambient lounge sound. One take, 60 seconds, authority energy.`
  },
  {
    id: 11,
    label: "OUTPUT 11",
    title: "Native TikTok Re-record",
    emoji: "📲",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 11 — NATIVE TIKTOK RE-RECORD
@alexa.realtor | Car Confession delivery
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

─── SCRIPT (Car Confession Energy) ───

Six townships. Six sets of STR rules. One wrong assumption.

Jackson Township — illegal without a permit. Hamilton — not allowed, period. Paradise — updated their ordinance February 2026. No STRs in residential zones.

And now Pennsylvania is introducing HB 2303 — statewide STR registration. That goes on top of all of that. Not instead of it.

Mount Pocono is at 45.9% occupancy. $499 ADR. That math works. But only if you're in the right township with the right property type.

I'm Alexa Sanchez. I run STR transactions in Monroe County. You want to buy right — let's talk.

─── TIKTOK CAPTION ───
Six townships. Six rule sets. One wrong assumption = one very expensive mistake. Pocono STR market breakdown — what nobody told you before you offered. #PoconoRealEstate #STRInvesting #MonroeCounty #ShortTermRental #LifeByAlexa`
  },
  {
    id: 12,
    label: "OUTPUT 12",
    title: "TikTok @its.myash",
    emoji: "🎵",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 12 — TIKTOK ANGLE
@its.myash | Cigar Authority Voice
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TOPIC: Why Dominican cigars are the new premium language in cigar culture

─── SCRIPT ───

There's a shift happening in cigar culture and if you're not paying attention, you're going to be behind on it.

The Dominican Republic is no longer just where premium cigars get made. It's becoming what premium cigar culture means.

Procigar Festival 2026 — 40 countries in Santiago. Dominican tobacco is being marketed as a cultural destination, not just a manufacturing origin. The brands getting attention are the ones with a story: the region, the factory, the relationship to the land.

That's the shift. It's not about the price of the cigar anymore. It's about whether you can explain it in 10 seconds. Origin. Process. Identity.

Dominican cigars are the ones right now where you can do that. And that's why they're winning.

Follow @its.myash. Nell's Social, Pocono Mountains.

─── CAPTION ───
Dominican cigars aren't just premium — they're becoming the language of premium cigar culture. Here's what's driving the shift. #DominicanCigars #CigarAuthority #CigarLife #PremiumCigars #LifeByAlexa`
  },
  {
    id: 13,
    label: "OUTPUT 13",
    title: "Car Confession Hooks (English)",
    emoji: "🚗",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 13 — CAR CONFESSION HOOKS (ENGLISH)
4 total | All recorded Wednesday April 23
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

─── TUESDAY @alexa.realtor — Real Estate + Entrepreneur Life ───
POST: Tuesday April 22 | 7:00 AM

SCRIPT:
A contractor ghosted me on a job he didn't finish. Then he tried to come after me for money. Then he got loud. Two days later — still waiting on that apology. Running a business means knowing what you owe and what you don't. I don't owe him anything. I do owe you this: don't skip the contract. Don't assume the job is done until you sign off. That's it.

CAPTION (@alexa.realtor IG):
He didn't finish the job. Then he tried to shake me down for it. Then he got loud. Two days later — still no apology. Running businesses means knowing your ground. I know mine. #OperatorLife #EntrepreneurLife #PoconoRealEstate #LifeByAlexa

HASHTAGS: #OperatorLife #EntrepreneurLife #PoconoRealEstate #InvestorMindset #LifeByAlexa

COVER TEXT DIRECTION:
Chunky white bold tilted font: "HE DIDN'T FINISH THE JOB"
Neon green subtext: "THEN TRIED TO CHARGE ME"
Alexa face in frame, no smile, direct energy

─────────────────────────────────────────

─── WEDNESDAY @alexa.realtor — Real Estate Focus ───
POST: Wednesday April 23 | 9:00 AM

SCRIPT:
Hamilton Township doesn't allow short-term rentals. Paradise Township updated their ordinance February 2026 — no STRs in residential zones. Jackson Township — illegal without a permit, and they enforce it. If you are buying a Pocono Mountain property marketed as an STR opportunity and you have not called the township yet — call the township. Today. Right now.

CAPTION (@alexa.realtor IG):
Three Monroe County townships that will shut down your STR before it starts. Most people find out after they close. Don't be most people. #PoconoRealEstate #STRInvesting #MonroeCounty #ShortTermRental #LifeByAlexa

HASHTAGS: #PoconoRealEstate #STRInvesting #MonroeCounty #ShortTermRental #LifeByAlexa

COVER TEXT DIRECTION:
Red block text: "CALL THE TOWNSHIP FIRST"
Neon green: "THREE TOWNSHIPS = NO STRs"
Slightly tilted chunky font over Alexa in frame, serious expression

─────────────────────────────────────────

─── THURSDAY @alexa.realtor — Entrepreneur Life ───
POST: Thursday April 24 | 7:00 AM

SCRIPT:
Pennsylvania is about to introduce statewide STR registration — HB 2303. Countywide registry. 24/7 contact requirement. New safety standards. This doesn't replace your township rules. It adds to them. More compliance, not less. If you're an STR operator in the Poconos and you haven't looked this bill up yet — look it up today. Because by the time it passes, you're going to want to have already been ready.

CAPTION (@alexa.realtor IG):
Pennsylvania HB 2303 — the statewide STR bill you haven't heard of yet. Countywide registry. 24/7 contact requirement. Layers on top of your township rules, not instead of them. Start reading. #PoconoRealEstate #STRInvesting #PARealEstate #InvestorMindset #LifeByAlexa

HASHTAGS: #PoconoRealEstate #STRInvesting #PARealEstate #HB2303 #LifeByAlexa

COVER TEXT DIRECTION:
White bold block text: "HB 2303 JUST DROPPED"
Neon green: "POCONO STR OPERATORS READ THIS"
Tilted, chunky, direct energy — car interior background

─────────────────────────────────────────

─── WEDNESDAY @its.myash — Entrepreneur + Cigars ───
POST: Wednesday April 23 | 6:00 PM

SCRIPT:
Procigar Festival 2026. Santiago. Forty countries. The Dominican Republic is not just being talked about as where premium cigars get made — it's being talked about as what premium cigar culture is. That's a different conversation. And the brands that are winning right now are the ones with an origin story, a real factory relationship, and something worth saying in ten seconds. That's the shift. Pay attention.

CAPTION (@its.myash IG):
Procigar 2026. 40 countries in Santiago. Dominican cigar culture is no longer just origin — it's identity. The brands winning right now have a story you can say in 10 seconds. #CigarLife #DominicanCigars #CigarAuthority #NellsSocial #LifeByAlexa

HASHTAGS: #CigarLife #DominicanCigars #CigarAuthority #NellsSocial #OperatorLife #LifeByAlexa

COVER TEXT DIRECTION:
Bold white chunky font: "DR CIGARS ARE WINNING"
Neon green: "HERE'S WHY"
Alexa with cigar in hand, direct to camera, dark background`
  },
  {
    id: 14,
    label: "OUTPUT 14",
    title: "Car Confession Hooks (Spanish)",
    emoji: "🚗🇩🇴",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 14 — CAR CONFESSION HOOKS (ESPAÑOL)
2 total | Dominican Spanish cadence
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

─── TUESDAY @alexa.realtor — Spanish Real Estate Car Confession ───
POST: Tuesday April 22 | 12:00 PM (WEEKLY)

SCRIPT (Dominican Spanish):
Óyeme bien — Hamilton Township no permite rentas a corto plazo. Paradise Township lo actualizó en febrero de este año — tampoco en zonas residenciales. Jackson Township lo tiene clarísimo: sin permiso es ilegal y lo aplican. Si tú estás comprando una propiedad en los Pocono Mountains como inversión STR, mi amor, tienes que llamar al municipio antes de hacer ninguna oferta. Antes. No después de cerrar. Antes.

CAPTION (Spanish):
Tres municipios en Monroe County que van a cerrar tu STR antes de que empiece. La mayoría de la gente se entera después de firmar. Tú no. #BienesRaices #InversionesEnPoconos #MercadoInmobiliario #LifeByAlexa

HASHTAGS: #BienesRaices #InversionesEnPoconos #MercadoInmobiliario #RepublicaDominicana #LifeByAlexa

COVER TEXT DIRECTION:
Bold white chunky tilted font: "LLAMA AL MUNICIPIO PRIMERO"
Neon green: "3 MUNICIPIOS = NO STRs"
Alexa in frame, car interior, direct energy, no smile

─────────────────────────────────────────

─── THURSDAY @alexa.realtor — Spanish Entrepreneur Life Car Confession ───
POST: Thursday April 24 | 12:00 PM (WEEKLY)

SCRIPT (Dominican Spanish):
Un contratista me abandonó a medio trabajo. Después intentó cobrarme por eso. Después se puso agresivo. Dos días después, su jefe le dijo que se disculpara. Tú estás esperando esa llamada conmigo, mi amor. Esto es lo que aprendí: tú sabes lo que debes y lo que no debes. Cuando alguien te presiona pa' que confundas las dos cosas — mantenlo firme. El trabajo es tuyo. Las reglas son tuyas. Que el ruido pase.

CAPTION (Spanish):
Un contratista que no terminó el trabajo intentó cobrarme por él. Dos días esperando la disculpa. Esto es la vida del operador — tú conoces tu terreno y no te mueves. #OperatorLife #EmpresariaLatina #BienesRaices #LifeByAlexa

HASHTAGS: #OperatorLife #EmpresariaLatina #BienesRaices #EntrepreneurLife #LifeByAlexa

COVER TEXT DIRECTION:
Red block text: "NO LE DEBO NADA"
White chunky tilted font: "ASÍ SE MANTIENE EL TERRENO"
Alexa direct to camera, car interior, firm expression`
  },
  {
    id: 15,
    label: "OUTPUT 15",
    title: "All Platform Captions + Image Direction",
    emoji: "📋",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 15 — ALL PLATFORM CAPTIONS + IMAGE DIRECTION
Non-video posts | Full week
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

─── SUNDAY April 20 ───

📌 @fillerandroast "Before the First Draw" IG Post | 8:00 AM
CAPTION: Before the draw, there's always the cup. House Blend. Dark roast. Nell's Social before anyone else gets here. This is the reset. ☕🔥
IMAGE DIRECTION: Coffee cup in foreground, cigar resting on ashtray beside it, lounge background soft and dim, early morning light quality. No text overlay. Clean, intentional, slow.
HASHTAGS: #FillerAndRoast #CigarAndCoffee #NellsSocial #CoffeeCulture #BeforeTheFirstDraw #LifeByAlexa

📌 @its.myash Coffee & Ash Ritual IG Post | 9:30 AM
CAPTION: Sunday morning. Coffee in one hand. Plans for the week in the other. The cigar comes after. This is the operating system. #LifeByAlexa
IMAGE DIRECTION: Alexa seated at lounge table, coffee cup in left hand, unlit cigar resting on ashtray to the right. Direct eye contact with camera. Dark lounge ambiance, warm light. No props except coffee and cigar.
HASHTAGS: #CigarLife #OperatorLife #NellsSocial #CigarAuthority #LifeByAlexa #CigarAndCoffee

📌 @life.byalexa Behind the Operator IG Post | 11:00 AM
CAPTION: Sunday batch. Coffee first. Everything else after. #LifeByAlexa
IMAGE DIRECTION: Flat lay of Sunday setup — notebook, coffee cup, phone, laptop at edge of frame. Overhead shot or angled close. Personal, no branding, natural light. Raw.
HASHTAGS: #LifeByAlexa #OperatorLife #BehindTheBrands

─── MONDAY April 21 ───

📌 @its.myash Tonight's Smoke Carousel IG | 7:00 PM
CAPTION: Monday smoke selection. Connecticut wrapper tonight. Running light on the pep talk — the market briefing did enough work today. Slide through for the week's pairing guide. 🔥
CAROUSEL SLIDES:
Slide 1: "TONIGHT'S SMOKE" bold header, cigar image
Slide 2: Connecticut + Butter Pecan pairing | "Smooth on both sides"
Slide 3: Maduro + House Blend | "The anchor pairing"
Slide 4: Amaretto + Evening Draw | "For the long session"
Slide 5: "Find us at Nell's Social — Pocono Mountains"
IMAGE DIRECTION: Dark background throughout. Each slide: cigar or coffee photo + bold white text overlay. Consistent aesthetic across all slides.
HASHTAGS: #CigarLife #TonightSmoke #PremiumCigars #NellsSocial #CigarLounge #LifeByAlexa

📌 @alexa.realtor Market Signal LinkedIn | 8:00 AM
CAPTION: Pennsylvania's HB 2303 would create the state's first statewide STR framework — countywide registries, 24/7 contact requirements, baseline safety standards. For Monroe County investors, that's a new compliance layer stacking on top of existing township rules. Barrett, Jackson, Paradise, Hamilton, Middle Smithfield each have their own ordinances. The state bill doesn't replace them — it adds to them. Know both layers. Questions on your specific township? I run these checks every week for clients. Reach out.
HASHTAGS: #PoconoRealEstate #STRInvesting #PARealEstate #InvestorMindset

📌 @alexa.realtor Google Business Post | 9:00 AM
CAPTION: Monroe County STR investors — Pennsylvania's new statewide short-term rental bill (HB 2303) would layer new compliance requirements on top of existing township rules. Barrett, Jackson, Paradise, Hamilton, and Middle Smithfield each operate differently. Know your township before you offer. Alexa Sanchez | PA License #RS326383 | Smart Way America Realty | (570) 688-8147
HASHTAGS: (none for Google Business)

📌 @alexa.realtor Real Estate Insight FB Personal | 10:00 AM
CAPTION: If you're looking at Pocono Mountain investment properties right now — please, please check the township first. Three of the major townships in Monroe County don't allow STRs in residential zones at all. One requires a permit and will shut you down without one. The state of Pennsylvania is also moving toward adding a statewide registration requirement on top of that. I break this down every week. Reach out if you need help navigating it.
HASHTAGS: (none for FB personal)

📌 @life.byalexa Operator Moment IG | 12:00 PM
CAPTION: Newsletter is live. Market briefing done. Substack published. Now a cigar. That's the Monday operating system. #LifeByAlexa
IMAGE DIRECTION: Alexa with coffee or cigar, relaxed posture, somewhere between focused and done. Not staged — real. Natural light or warm lounge light.
HASHTAGS: #LifeByAlexa #OperatorLife #BehindTheBrands

─── TUESDAY April 22 ───

📌 @alexa.realtor Pocono Pulse Market Update IG | 8:00 AM
CAPTION: April 2026 Pocono STR data just dropped. Mount Pocono: 45.9% occupancy. $499 ADR. ~$70K annual revenue even with supply up 60%+. Pocono Township: 35.9% occupancy. $63K annually. Same county. Very different math. The difference is the asset type and the submarket. Ski proximity. Lake access. Group format capacity. The generic properties are struggling. The right ones aren't. DM me if you want to break down a specific address. #PoconoRealEstate #STRInvesting #MonroeCounty #ShortTermRental #LifeByAlexa
IMAGE DIRECTION: Clean data graphic. Dark background. Two-column comparison: Mount Pocono vs Pocono Township. Key metrics in neon green. Bold white font. @alexa.realtor logo bottom right.
HASHTAGS: #PoconoRealEstate #STRInvesting #MonroeCounty #AirbnbInvesting #LifeByAlexa

📌 @alexa.realtor Neighborly Post Nextdoor | 9:00 AM
CAPTION: Monroe County neighbors — if you're curious about your property's potential for short-term rental or looking to invest in an STR nearby, I do free initial consultations. I specialize in the Pocono Mountains market and I can walk you through what's allowed in your specific township before you make any decisions. Alexa Sanchez | (570) 688-8147
HASHTAGS: (none for Nextdoor)

📌 @fillerandroast Nell's Social FB Tag | 11:00 AM
CAPTION: Tuesday morning at Nell's Social. The Butter Pecan is ready. If you haven't tried it with a Connecticut wrapper yet, you're missing the best pairing on the menu. Come in. ☕ Filler & Roast — artisanal coffee at Nell's Social, Pocono Mountains.
IMAGE DIRECTION: Coffee cup with Filler & Roast branding, cigar resting alongside, Nell's Social interior in background. Warm, welcoming, morning light quality.
HASHTAGS: (FB — minimal) #FillerAndRoast #NellsSocial #CoffeeAndCigars

─── WEDNESDAY April 23 ───

📌 @alexa.realtor Under Contract Story | 11:00 AM
CAPTION (IG Story): Under contract in the Poconos. Township verified. HOA confirmed. Occupancy modeled conservative. This is how you buy right. 🏔️ #PoconoRealEstate #UnderContract #LifeByAlexa
IMAGE DIRECTION: Clean "UNDER CONTRACT" graphic. Dark navy background, white bold text, Alexa Sanchez logo. No property address, no client names. Professional, branded.

📌 @life.byalexa Wednesday Recording Day Energy IG | 10:00 AM
CAPTION: Wednesday. Camera is on. Cigar is lit. The apology still hasn't come. Some things you wait on. Most things you don't. #LifeByAlexa
IMAGE DIRECTION: Behind-the-scenes recording setup — camera in frame, lounge setting visible, Alexa getting ready or mid-setup. Candid. Not polished. Real.
HASHTAGS: #LifeByAlexa #OperatorLife #BehindTheBrands

─── THURSDAY April 24 ───

📌 @alexa.realtor Investor Signal LinkedIn | 8:00 AM
CAPTION: 6.46%. That's the 30-year fixed rate as of April 2, 2026. Up from 6.38% the week prior. For STR investors running cash-on-cash calculations on a $400K Pocono property, every tenth of a point matters. Here's the underwriting discipline that still works in this environment: model occupancy at 35-40%, not the market's best-case 46%. Know your floor before you write the offer. The listings I'm watching this week in Monroe County are under $500K with 4BR+ and lake or ski access. That's the profile that's outperforming right now. I help buyers run this math. Happy to look at any address.
HASHTAGS: #STRInvesting #PoconoRealEstate #InvestorMindset #RealEstateTips

📌 @alexa.realtor Community Roundup Nextdoor | 10:00 AM
CAPTION: Quick market update for the Pocono Mountains community — the most watched real estate development right now for STR owners is Pennsylvania's proposed HB 2303, which would create statewide registration requirements for short-term rentals. If you own or are thinking of operating an STR in Monroe County, I'd encourage you to look the bill up. Happy to answer questions. Alexa Sanchez | Smart Way America Realty | (570) 688-8147
HASHTAGS: (none for Nextdoor)

─── FRIDAY April 25 ───

📌 @fillerandroast Coffee for the Leaf IG + FB Biz | 9:00 AM
CAPTION: Coffee for the Leaf — Friday pairing. Butter Pecan meets Connecticut. The brightness cuts through the cream without competing. That's the whole idea. This is what coffee looks like when it's built for the ritual, not just the morning. ☕🔥 @fillerandroast at Nell's Social.
IMAGE DIRECTION: Butter Pecan coffee in elegant cup, Connecticut cigar beside it on ashtray, dark warm background. Slight steam visible from coffee. "COFFEE FOR THE LEAF" text overlay in clean serif font. No clutter.
HASHTAGS: #FillerAndRoast #CoffeeForTheLeaf #CigarAndCoffee #NellsSocial #ArtisanCoffee #LifeByAlexa

📌 @its.myash Weekend Smoke Reel IG | 6:00 PM
CAPTION: The week earned this. Dominican wrapper. Connecticut. Doesn't matter — whatever's in the humidor that you've been saving for Friday. Light it right. Toast first. Draw slow. The weekend started when you cut the cap. 🔥 #CigarLife #WeekendSmoke #NellsSocial #LifeByAlexa
IMAGE DIRECTION: Short reel. Alexa in lounge, toasting and lighting a cigar — full ritual on camera. Slow motion moment of the foot glowing. Real lounge setting, warm amber light. No voiceover needed — let the visual speak.
HASHTAGS: #CigarLife #WeekendSmoke #PremiumCigars #NellsSocial #CigarLounge #LifeByAlexa

─── SATURDAY April 26 ───

📌 @alexa.realtor Weekend Market Tip Nextdoor | 10:00 AM
CAPTION: Thinking about a Pocono Mountains property this weekend? Quick tip: most homes in Monroe County are sitting on market about 63 days right now. That's leverage. If a listing is sitting, ask about it. The sellers and agents who have been patient will often negotiate — especially on price, credits, and timeline. Alexa Sanchez | Smart Way America Realty | PA License #RS326383 | (570) 688-8147
HASHTAGS: (none)

📌 @life.byalexa Weekend Operator Life IG | 11:00 AM
CAPTION: Saturday means the week worked. Two businesses running. One apology still pending. One cigar definitely happening. #LifeByAlexa
IMAGE DIRECTION: Alexa relaxed, weekend energy — cigar or coffee in hand, lounge or outdoor setting. Candid. Weekend vibe. Not a brand post. Real.
HASHTAGS: #LifeByAlexa #OperatorLife #BehindTheBrands`
  },
  {
    id: 16,
    label: "OUTPUT 16",
    title: "Spanish Posts — All Platforms",
    emoji: "🇩🇴📱",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 16 — SPANISH POSTS — ALL PLATFORMS
Dominican Spanish | All weekly + biweekly items
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

─── WEEKLY — @alexa.realtor IG Spanish Post ───
POST: Saturday April 26 | 10:00 AM

CAPTION (Dominican Spanish):
El mercado de rentas a corto plazo en los Pocono Mountains no es un solo mercado — son seis municipios con seis sets de reglas diferentes. Mount Pocono: 45.9% de ocupación, $499 de tarifa promedio diaria. Pocono Township: 35.9% de ocupación. El mismo condado, mi amor, pero matemáticas muy distintas. Y Pennsylvania está a punto de añadir un registro estatal encima de eso con el proyecto de ley HB 2303. Si tú estás pensando en invertir en los Poconos — llámame. Yo te ayudo a revisar el municipio, el HOA, y las proyecciones antes de que hagas ninguna oferta.

IMAGE DIRECTION: Clean market data graphic in Spanish. "MERCADO STR POCONO — ABRIL 2026" as header. Neon green for the occupancy stats. Dark background. @alexa.realtor logo. Bold white font, chunky and direct.

HASHTAGS: #BienesRaices #InversionesEnPoconos #MercadoInmobiliario #PARealEstate #LifeByAlexa

─────────────────────────────────────────

─── WEEKLY — Personal Facebook Spanish Post ───
POST: Friday April 25 | 7:00 PM

CAPTION (Dominican Spanish):
Esta semana tuve que mantener el terreno con alguien que no terminó un trabajo y después tuvo el descaro de pedirme dinero por eso. Se puso agresivo. Su jefe le pidió que se disculpara. Llevan dos días. Todavía esperando. Esto es la vida del operador, mi amor — no siempre es glamorosa, pero siempre es tuya. Lo que tú construyes, nadie te lo quita. Sigan construyendo.

IMAGE DIRECTION: Personal — no branding. Alexa photo, candid or contemplative. Warm tone. This is the community voice, not a business post. No graphics overlay needed.

HASHTAGS: (none on FB personal)

─────────────────────────────────────────

─── WEEKLY — @its.myash TikTok Spanish DR/Cigar ───
POST: Thursday April 24 | 6:00 PM

CAPTION (Dominican Spanish):
La República Dominicana ya no es solo donde se hacen los puros premium — es lo que la cultura del puro premium significa. Procigar 2026 en Santiago. Cuarenta países. Ese es el cambio, mi amor. Y los puros que están ganando ahora son los que tienen una historia que puedes decir en diez segundos.

SCRIPT (30-second TikTok):
Óyeme bien — hay un cambio pasando en el mundo del puro y si no le estás prestando atención, tú vas a quedar atrás. La República Dominicana en el Festival Procigar 2026 — cuarenta países en Santiago. Ya no hablan solo de dónde se fabrica el puro. Hablan de qué significa la cultura dominicana del tabaco en el mundo del lujo. Los puros que están ganando ahora tienen origen, tienen historia, tienen una relación con la finca. Eso es lo que tú puedes decir en diez segundos. Eso es el cambio. Sígueme — @its.myash — Nell's Social, Pocono Mountains.

HASHTAGS: #PurosDominicanos #CigarAuthority #RepublicaDominicana #NellsSocial #LifeByAlexa

─────────────────────────────────────────

─── BIWEEKLY — @alexa.realtor FB Business Spanish Post ───
POST: Saturday April 26 | 12:00 PM (BIWEEKLY — mark for this week)

CAPTION (Dominican Spanish):
¿Estás pensando en invertir en los Pocono Mountains? Los datos de abril 2026 muestran que Mount Pocono tiene 45.9% de ocupación y $499 de tarifa promedio diaria, con ingresos todavía creciendo a pesar de que la oferta subió más de 60% año tras año. Pero no todos los submercados están igual — y no todos los municipios permiten rentas a corto plazo. Antes de hacer ninguna oferta, tienes que verificar el municipio y el HOA. Yo hago eso por mis clientes cada semana. Contáctame: (570) 688-8147 | Alexa@alexasanchez.net | Licencia PA #RS326383

HASHTAGS: #BienesRaices #InversionesEnPoconos #MercadoInmobiliario #LifeByAlexa

─────────────────────────────────────────

─── BIWEEKLY — @alexa.realtor LinkedIn Spanish Post ───
POST: Monday April 21 | 2:00 PM (BIWEEKLY — mark for this week)

CAPTION (Dominican Spanish):
Inversionistas en los Pocono Mountains — Pennsylvania está en proceso de introducir HB 2303, la primera regulación estatal para rentas a corto plazo. Esto crearía registros de condado, un requisito de contacto disponible 24/7, y nuevos estándares de seguridad. No reemplaza las reglas municipales — se añade encima de ellas. Para propietarios en Monroe County, eso significa más cumplimiento, no menos. Estoy disponible para revisar el impacto en propiedades específicas. Alexa Sánchez | Smart Way America Realty | PA #RS326383

HASHTAGS: #BienesRaices #InversionesEnPoconos #MercadoInmobiliario

─────────────────────────────────────────

─── BIWEEKLY — @alexa.realtor Google Business Spanish Post ───
POST: Monday April 21 | 9:30 AM (BIWEEKLY — mark for this week)

CAPTION (Dominican Spanish):
Inversionistas en Monroe County — el proyecto de ley HB 2303 de Pennsylvania añadiría nuevos requisitos estatales para rentas a corto plazo encima de las reglas municipales existentes. Antes de comprar, verifica el municipio y el HOA. Alexa Sánchez | Licencia PA #RS326383 | Smart Way America Realty | (570) 688-8147

HASHTAGS: (none for Google Business)`
  },
  {
    id: 17,
    label: "OUTPUT 17",
    title: "@life.byalexa Content",
    emoji: "💃",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 17 — @life.byalexa CONTENT
2-3 posts | Personal account | Real voice
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

─── POST 1 — Tuesday April 22 | 8:00 AM ───

CAPTION:
He didn't finish the job. Then came after me for the money. Then got loud when I didn't move. His boss told him to apologize two days ago.

Still waiting.

I'm not rushing it. Some things you let play out at their own pace. My ground doesn't move. #LifeByAlexa

IMAGE DIRECTION: Alexa in car, morning light, direct to camera. No setup. No smile. This is the real expression — not performing calm, actually calm. Minimal. Just her face and the window behind.

HASHTAGS: #LifeByAlexa #OperatorLife

─────────────────────────────────────────

─── POST 2 — Wednesday April 23 | 10:00 AM ───

CAPTION (English/Spanish mix — Spanglish fits the moment):
Recording day. Cigar lit. Camera on. El apology still hasn't arrived.

Some people take their time doing the right thing. I take my time doing everything else.

#LifeByAlexa

IMAGE DIRECTION: Candid BTS shot — Alexa mid-setup in lounge or recording space. Camera visible, cigar in ashtray or hand, notes visible somewhere in frame. Real. Not staged. The kind of photo someone takes when they're about to get to work.

HASHTAGS: #LifeByAlexa #OperatorLife #BehindTheBrands

─────────────────────────────────────────

─── POST 3 — Saturday April 26 | 12:00 PM ───

CAPTION:
Week status: three businesses running, two closings coming, one apology pending, zero patience for people who don't finish what they start.

Saturday tastes good. 🔥 #LifeByAlexa

IMAGE DIRECTION: Alexa with cigar or coffee, somewhere she actually is on Saturday — lounge, outdoor, wherever is real. Relaxed energy. Weekend. Not a photoshoot. The real Saturday.

HASHTAGS: #LifeByAlexa #OperatorLife`
  },
  {
    id: 18,
    label: "OUTPUT 18",
    title: "LinkedIn Posts",
    emoji: "💼",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 18 — LINKEDIN POSTS (2 total)
@alexa.realtor | Professional but operator voice
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

─── POST 1 — Real Estate | Monday April 21 | 8:00 AM ───

HOOK: Pennsylvania is about to change the compliance landscape for every STR investor in the Poconos.

HB 2303 — introduced in March 2026 — would create Pennsylvania's first statewide short-term rental framework. Here's what that means for Monroe County investors:

1. Countywide registries. Not township-level — county. That's a new filing layer on top of your existing township permit.
2. 24/7 designated contact requirement. A real person, not a phone service.
3. Baseline safety standards with tighter rules for operators managing multiple properties.

This doesn't replace what already exists at the township level. Barrett, Jackson, Paradise, Hamilton, and Middle Smithfield each have their own ordinances — and those still control whether you can operate at all.

The practical implication: the due diligence process for STR acquisitions in Monroe County is getting more complex. Buyers who understand both layers — state and local — will make better decisions.

If you're evaluating a Pocono property for STR use and want help running the township check, occupancy model, and compliance review, I do this every week for clients.

Alexa Sanchez | PA License #RS326383 | Smart Way America Realty
(570) 688-8147 | Alexa@alexasanchez.net

#PoconoRealEstate #STRInvesting #PARealEstate #InvestorMindset

─────────────────────────────────────────

─── POST 2 — Entrepreneur/Operator | Thursday April 24 | 8:00 AM ───

HOOK: I had a contractor try to shake me down for money on a job he didn't finish. Here's the operator lesson.

He ghosted. Then came back and tried to collect payment. Then got loud when I didn't comply. His boss told him to apologize. That was two days ago.

Running three businesses means this kind of test shows up regularly. Not always with contractors — sometimes with vendors, buyers, or partners. The pattern is the same: someone applies pressure, expecting you to fold because it's easier than holding the line.

Three things I've learned to do in these moments:

1. Know exactly what the agreement said. Contracts aren't bureaucracy — they're the documentation that tells you exactly where you stand when someone tries to blur the line.
2. Stay quiet. Loud is the signal that someone is out of options. You don't need to match the energy — you need to hold your position.
3. Let the process work. His boss told him to apologize. That's the process doing its job. I don't need to chase it.

The version of operator life that gets shared publicly is the closings, the deals, the launches. The version that actually builds something durable is this one — the Thursday at 11am when you decide who you're going to be under pressure.

Alexa Sanchez | Realtor + Entrepreneur + EP, Suite317 Entertainment
Smart Way America Realty | PA License #RS326383

#OperatorLife #Entrepreneurship #RealEstate #InvestorMindset`
  },
  {
    id: 19,
    label: "OUTPUT 19",
    title: "Google Business Posts",
    emoji: "🗺️",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 19 — GOOGLE BUSINESS POSTS (2 total)
@alexa.realtor | Local, keyword-rich, under 150 words each
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

─── POST 1 | Monday April 21 | 9:00 AM ───

TITLE: Monroe County STR Investors — What You Need to Know This Week

If you own or are purchasing a short-term rental in Monroe County, Pennsylvania's proposed HB 2303 is the most important legislative development to watch right now. This bill would create countywide STR registries, a 24/7 contact requirement, and baseline safety standards — layering on top of existing township rules in Barrett, Jackson, Paradise, Hamilton, and Middle Smithfield. Not all townships allow STRs. Know your zoning before you offer.

I specialize in STR investor transactions in the Pocono Mountains. I help buyers run township verification, HOA review, and occupancy modeling before any offer is made.

Alexa Sanchez | PA License #RS326383 | Smart Way America Realty
(570) 688-8147 | Alexa@alexasanchez.net

─── POST 2 | Thursday April 24 | 9:00 AM ───

TITLE: April 2026 Pocono STR Market Data — Where the Occupancy Numbers Actually Are

April 2026 submarket data for Monroe County STR investors: Mount Pocono is running at 45.9% occupancy with $499 average daily rate and approximately $69,000 in annual revenue — even as supply grew 61% year-over-year. Pocono Township sits at 35.9% occupancy and approximately $63,000 annually. Most homes in the area are at about 63 days on market, which means negotiation leverage exists.

The 30-year fixed rate is at 6.46%. Model occupancy conservatively. Know your floor before you offer.

I help STR investors in the Pocono Mountains find, analyze, and close the right properties.

Alexa Sanchez | PA License #RS326383 | Smart Way America Realty
(570) 688-8147 | Alexa@alexasanchez.net`
  },
  {
    id: 20,
    label: "OUTPUT 20",
    title: "ZCM Tags + Weekly Schedule Table",
    emoji: "📅",
    content: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT 20 — WEEKLY SCHEDULE TABLE + ZCM TAGS
Week of April 20–26, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTENT PIECE | ACCOUNT | PLATFORM | DATE/TIME | ZCM ENVIRONMENT | MONETIZATION GOAL

─── SUNDAY April 20 ───
1. Before the First Draw IG Post | @fillerandroast | Instagram | Sun 8:00 AM | Social Feed | Grow followers
2. Coffee & Ash Ritual IG Post | @its.myash | Instagram | Sun 9:30 AM | Social Feed | Grow followers
3. Behind the Operator IG Post | @life.byalexa | Instagram | Sun 11:00 AM | Social Feed | Grow followers
4. YouTube Hub Video (English) | @AlexaSanchezRealtor | YouTube | Sun 12:00 PM | Video Platform | Generate leads
5. YouTube Hub Video (Spanish) | @AlexaSanchezRealtor | YouTube En Español | Sun 12:00 PM | Video Platform | Generate leads

─── MONDAY April 21 ───
6. ROAST Newsletter | @itsmyash | Substack | Mon 7:00 AM | Community | Grow followers
7. Monday Substack Article (Operator Life) | @itsmyash | Substack | Mon 7:00 AM | Community | Grow followers
8. Substack Note — Morning | @itsmyash | Substack | Mon 8:00 AM | Community | Grow followers
9. Car Confession — @alexa.realtor Tue/Entrepreneur | @alexa.realtor | Instagram | Mon (post Tue 7 AM) | Social Feed | Generate leads
10. Tonight's Smoke Carousel | @its.myash | Instagram | Mon 7:00 PM | Social Feed | Grow followers
11. Market Signal LinkedIn | @alexa.realtor | LinkedIn | Mon 8:00 AM | Community | Generate leads
12. Google Business Post 1 | @alexa.realtor | Google Business | Mon 9:00 AM | AI Visibility | Generate leads
13. Real Estate Insight FB | @alexa.realtor | Facebook | Mon 10:00 AM | Social Feed | Generate leads
14. Operator Moment IG | @life.byalexa | Instagram | Mon 12:00 PM | Social Feed | Grow followers
15. LinkedIn Spanish Post (Biweekly) | @alexa.realtor | LinkedIn | Mon 2:00 PM | Community | Generate leads
16. Google Business Spanish Post (Biweekly) | @alexa.realtor | Google Business | Mon 9:30 AM | AI Visibility | Generate leads
17. Substack Note — Midday | @itsmyash | Substack | Mon 12:00 PM | Community | Grow followers
18. Substack Note — Evening | @itsmyash | Substack | Mon 8:00 PM | Community | Grow followers

─── TUESDAY April 22 ───
19. Car Confession (Entrepreneur/Tue) | @alexa.realtor | Instagram/TikTok | Tue 7:00 AM | Social Feed | Generate leads
20. Car Confession Spanish (RE/Tue) | @alexa.realtor | Instagram/TikTok | Tue 12:00 PM | Social Feed | Generate leads
21. @life.byalexa Post 1 (Contractor) | @life.byalexa | Instagram | Tue 8:00 AM | Social Feed | Grow followers
22. Pocono Pulse Market Update IG | @alexa.realtor | Instagram | Tue 8:00 AM | Social Feed | Generate leads
23. Neighborly Post Nextdoor | @alexa.realtor | Nextdoor | Tue 9:00 AM | Community | Generate leads
24. Nell's Social FB Tag | @fillerandroast | Facebook | Tue 11:00 AM | Social Feed | Drive sales
25. Substack Note — Morning | @itsmyash | Substack | Tue 8:00 AM | Community | Grow followers
26. Substack Note — Midday | @itsmyash | Substack | Tue 12:00 PM | Community | Grow followers
27. Substack Note — Evening | @itsmyash | Substack | Tue 8:00 PM | Community | Grow followers

─── WEDNESDAY April 23 ───
28. Car Confession (RE Focus/Wed) | @alexa.realtor | Instagram/TikTok | Wed 9:00 AM | Social Feed | Generate leads
29. Car Confession @its.myash (Cigars) | @its.myash | Instagram | Wed 6:00 PM | Social Feed | Grow followers
30. @life.byalexa Post 2 (Recording Day) | @life.byalexa | Instagram | Wed 10:00 AM | Social Feed | Grow followers
31. Under Contract Story | @alexa.realtor | Instagram Story | Wed 11:00 AM | Social Feed | Generate leads
32. [RECORDING DAY — All video content shot] | — | — | Wed | — | —
33. Substack Note — Morning | @itsmyash | Substack | Wed 8:00 AM | Community | Grow followers
34. Substack Note — Midday | @itsmyash | Substack | Wed 12:00 PM | Community | Grow followers
35. Substack Note — Evening | @itsmyash | Substack | Wed 8:00 PM | Community | Grow followers

─── THURSDAY April 24 ───
36. Ashes & Escrows Episode | @AlexaSanchezRealtor | YouTube | Thu 12:00 PM | Video Platform | Generate leads
37. YouTube Short | @AlexaSanchezRealtor | YouTube Shorts | Thu 12:00 PM | Video Platform | Grow followers
38. IG Reel (repurposed Short) | @alexa.realtor | Instagram | Thu 12:00 PM | Social Feed | Generate leads
39. DR Video (English) | @alexa.realtor | Instagram/TikTok/YouTube | Thu 6:00 PM | Video Platform | Generate leads
40. DR Video (Spanish) | @alexa.realtor | TikTok En Español/IG/YouTube | Thu 6:00 PM | Video Platform | Generate leads
41. Cigar/Lounge Video | @its.myash | Instagram/TikTok | Thu 6:00 PM | Video Platform | Grow followers
42. @its.myash TikTok (Dominican cigars) | @its.myash | TikTok | Thu 6:00 PM | Video Platform | Grow followers
43. Native TikTok Re-record | @alexa.realtor | TikTok | Thu 9:00 AM | Video Platform | Generate leads
44. Car Confession (Entrepreneur/Thu) | @alexa.realtor | Instagram/TikTok | Thu 7:00 AM | Social Feed | Generate leads
45. Car Confession Spanish (Entrepreneur/Thu) | @alexa.realtor | TikTok | Thu 12:00 PM | Social Feed | Generate leads
46. Investor Signal LinkedIn | @alexa.realtor | LinkedIn | Thu 8:00 AM | Community | Generate leads
47. Community Roundup Nextdoor | @alexa.realtor | Nextdoor | Thu 10:00 AM | Community | Generate leads
48. Thursday Substack Article (Experience Economy) | @itsmyash | Substack | Thu 7:00 AM | Community | Grow followers
49. Substack Note — Morning | @itsmyash | Substack | Thu 8:00 AM | Community | Grow followers
50. Substack Note — Midday | @itsmyash | Substack | Thu 12:00 PM | Community | Grow followers
51. Substack Note — Evening | @itsmyash | Substack | Thu 8:00 PM | Community | Grow followers

─── FRIDAY April 25 ───
52. Personal Facebook Spanish Post (Personal) | Personal FB | Facebook | Fri 7:00 PM | Social Feed | Grow followers
53. Coffee for the Leaf IG + FB Biz | @fillerandroast | Instagram + Facebook Biz | Fri 9:00 AM | Social Feed | Drive sales
54. Weekend Smoke Reel | @its.myash | Instagram | Fri 6:00 PM | Social Feed | Grow followers
55. Substack Note — Morning | @itsmyash | Substack | Fri 8:00 AM | Community | Grow followers
56. Substack Note — Midday | @itsmyash | Substack | Fri 12:00 PM | Community | Grow followers
57. Substack Note — Evening | @itsmyash | Substack | Fri 8:00 PM | Community | Grow followers

─── SATURDAY April 26 ───
58. @alexa.realtor IG Spanish Post | @alexa.realtor | Instagram | Sat 10:00 AM | Social Feed | Generate leads
59. Weekend Market Tip Nextdoor | @alexa.realtor | Nextdoor | Sat 10:00 AM | Community | Generate leads
60. @life.byalexa Post 3 (Weekend) | @life.byalexa | Instagram | Sat 12:00 PM | Social Feed | Grow followers
61. FB Business Spanish Post (Biweekly) | @alexa.realtor | Facebook Business | Sat 12:00 PM | Social Feed | Generate leads
62. Google Business Post 2 | @alexa.realtor | Google Business | Sat 9:00 AM | AI Visibility | Generate leads
63. Substack Note — Morning | @itsmyash | Substack | Sat 8:00 AM | Community | Grow followers
64. Substack Note — Midday | @itsmyash | Substack | Sat 12:00 PM | Community | Grow followers
65. Substack Note — Evening | @itsmyash | Substack | Sat 8:00 PM | Community | Grow followers

─── SUNDAY April 27 ───
66. Substack Note — Morning | @itsmyash | Substack | Sun 8:00 AM | Community | Grow followers
67. Substack Note — Midday | @itsmyash | Substack | Sun 12:00 PM | Community | Grow followers
68. Substack Note — Evening | @itsmyash | Substack | Sun 8:00 PM | Community | Grow followers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL PIECES THIS WEEK: 68
ZCM ENVIRONMENTS COVERED: Social Feed | Video Platform | Community | AI Visibility
MONETIZATION GOALS COVERED: Grow followers | Generate leads | Drive sales
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
  }
];

const CATEGORY_CONFIG = {
  film: { label: "🎥 TO FILM", color: "#c8b87a", bg: "#1a1600" },
  publish: { label: "✍️ TO PUBLISH", color: "#7ab8c8", bg: "#001416" },
  schedule: { label: "📅 TO SCHEDULE", color: "#a87ac8", bg: "#12001a" },
};

export default function WeeklyBriefing() {
  const [activeId, setActiveId] = useState(1);
  const [copied, setCopied] = useState(false);
  const [checked, setChecked] = useState({});
  const [checklistFilter, setChecklistFilter] = useState("all");

  const active = OUTPUTS.find(o => o.id === activeId);

  const handleCopy = () => {
    navigator.clipboard.writeText(active.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCheck = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const clearAll = () => setChecked({});

  const filteredItems = checklistFilter === "all"
    ? CHECKLIST_ITEMS
    : CHECKLIST_ITEMS.filter(i => i.category === checklistFilter);

  const totalDone = CHECKLIST_ITEMS.filter(i => checked[i.id]).length;
  const totalAll = CHECKLIST_ITEMS.length;
  const pct = Math.round((totalDone / totalAll) * 100);

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0d0d0d",
      minHeight: "100vh",
      color: "#e8e0d0",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{
        background: "#111",
        borderBottom: "2px solid #2a2a2a",
        padding: "16px 28px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        flexWrap: "wrap"
      }}>
        <div>
          <div style={{
            fontFamily: "'Georgia', serif",
            fontSize: "22px",
            fontWeight: "bold",
            letterSpacing: "0.08em",
            color: "#c8b87a",
            textTransform: "uppercase"
          }}>ROAST</div>
          <div style={{
            fontSize: "11px",
            color: "#666",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginTop: "2px"
          }}>Weekly Operator Intelligence Briefing · Week of April 20, 2026</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: "16px", alignItems: "center" }}>
          {/* Progress bar */}
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "10px", color: "#555", fontFamily: "monospace", marginBottom: "4px" }}>
              {totalDone}/{totalAll} COMPLETE · {pct}%
            </div>
            <div style={{ width: "140px", height: "4px", background: "#222", borderRadius: "2px" }}>
              <div style={{
                width: pct + "%",
                height: "100%",
                background: pct === 100 ? "#4a8a4a" : "#c8b87a",
                borderRadius: "2px",
                transition: "width 0.3s"
              }} />
            </div>
          </div>
          <div style={{ fontSize: "11px", color: "#555", fontFamily: "monospace" }}>20 OUTPUTS · 68 PIECES</div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden", minHeight: 0 }}>
        {/* Left Sidebar — Outputs */}
        <div style={{
          width: "210px",
          flexShrink: 0,
          background: "#111",
          borderRight: "1px solid #222",
          overflowY: "auto",
          padding: "12px 0"
        }}>
          {OUTPUTS.map(o => (
            <button
              key={o.id}
              onClick={() => setActiveId(o.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 16px",
                background: activeId === o.id ? "#1a1a1a" : "transparent",
                border: "none",
                borderLeft: activeId === o.id ? "3px solid #c8b87a" : "3px solid transparent",
                color: activeId === o.id ? "#c8b87a" : "#888",
                cursor: "pointer",
                transition: "all 0.15s"
              }}
            >
              <div style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#555", marginBottom: "2px" }}>{o.label}</div>
              <div style={{ fontSize: "12px", lineHeight: "1.3" }}>{o.emoji} {o.title}</div>
            </button>
          ))}
        </div>

        {/* Center — Content Panel */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Panel Header */}
          <div style={{
            padding: "14px 22px",
            background: "#111",
            borderBottom: "1px solid #222",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
            <div>
              <div style={{ fontSize: "11px", color: "#555", letterSpacing: "0.1em" }}>{active.label}</div>
              <div style={{ fontSize: "16px", color: "#e8e0d0", fontWeight: "bold" }}>{active.emoji} {active.title}</div>
            </div>
            <button
              onClick={handleCopy}
              style={{
                marginLeft: "auto",
                padding: "8px 20px",
                background: copied ? "#2d4a2d" : "#1e1e1e",
                border: "1px solid " + (copied ? "#4a8a4a" : "#333"),
                color: copied ? "#7dc87d" : "#c8b87a",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "12px",
                letterSpacing: "0.08em",
                fontFamily: "monospace",
                transition: "all 0.2s"
              }}
            >
              {copied ? "✓ COPIED" : "COPY"}
            </button>
          </div>

          {/* Scrollable Content */}
          <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
            <pre style={{
              fontFamily: "'Georgia', serif",
              fontSize: "13.5px",
              lineHeight: "1.8",
              color: "#d4ccbc",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              margin: 0
            }}>
              {active.content}
            </pre>
          </div>
        </div>

        {/* Right Panel — Checklist */}
        <div style={{
          width: "260px",
          flexShrink: 0,
          background: "#0f0f0f",
          borderLeft: "1px solid #222",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}>
          {/* Checklist Header */}
          <div style={{
            padding: "14px 16px 10px",
            borderBottom: "1px solid #1e1e1e",
            background: "#111"
          }}>
            <div style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "#666",
              textTransform: "uppercase",
              marginBottom: "8px"
            }}>Production Tracker</div>

            {/* Filter tabs */}
            <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
              {[["all", "All"], ["film", "Film"], ["publish", "Publish"], ["schedule", "Schedule"]].map(([val, lbl]) => (
                <button
                  key={val}
                  onClick={() => setChecklistFilter(val)}
                  style={{
                    padding: "3px 8px",
                    fontSize: "10px",
                    letterSpacing: "0.06em",
                    background: checklistFilter === val ? "#c8b87a" : "#1a1a1a",
                    color: checklistFilter === val ? "#0d0d0d" : "#777",
                    border: "1px solid " + (checklistFilter === val ? "#c8b87a" : "#2a2a2a"),
                    borderRadius: "3px",
                    cursor: "pointer",
                    fontFamily: "monospace"
                  }}
                >{lbl}</button>
              ))}
            </div>
          </div>

          {/* Checklist Items */}
          <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
            {Object.entries(CATEGORY_CONFIG).map(([cat, cfg]) => {
              const items = filteredItems.filter(i => i.category === cat);
              if (!items.length) return null;
              const catDone = items.filter(i => checked[i.id]).length;
              return (
                <div key={cat}>
                  <div style={{
                    padding: "8px 14px 4px",
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    color: cfg.color,
                    background: cfg.bg,
                    borderTop: "1px solid #1a1a1a",
                    borderBottom: "1px solid #1a1a1a",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <span>{cfg.label}</span>
                    <span style={{ color: "#555", fontFamily: "monospace" }}>{catDone}/{items.length}</span>
                  </div>
                  {items.map(item => (
                    <label
                      key={item.id}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        padding: "8px 14px",
                        cursor: "pointer",
                        borderBottom: "1px solid #161616",
                        background: checked[item.id] ? "#141414" : "transparent",
                        transition: "background 0.15s"
                      }}
                    >
                      {/* Custom checkbox */}
                      <div
                        onClick={() => toggleCheck(item.id)}
                        style={{
                          width: "16px",
                          height: "16px",
                          flexShrink: 0,
                          marginTop: "1px",
                          border: "1.5px solid " + (checked[item.id] ? cfg.color : "#444"),
                          borderRadius: "3px",
                          background: checked[item.id] ? cfg.color : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.15s",
                          cursor: "pointer"
                        }}
                      >
                        {checked[item.id] && (
                          <span style={{ color: "#0d0d0d", fontSize: "11px", fontWeight: "bold", lineHeight: 1 }}>✓</span>
                        )}
                      </div>
                      <span
                        onClick={() => toggleCheck(item.id)}
                        style={{
                          fontSize: "11.5px",
                          lineHeight: "1.4",
                          color: checked[item.id] ? "#444" : "#aaa",
                          textDecoration: checked[item.id] ? "line-through" : "none",
                          transition: "all 0.15s",
                          cursor: "pointer"
                        }}
                      >
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Checklist Footer */}
          <div style={{
            padding: "10px 14px",
            borderTop: "1px solid #1e1e1e",
            background: "#111",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <span style={{ fontSize: "10px", color: "#555", fontFamily: "monospace" }}>
              {totalDone}/{totalAll} done
            </span>
            <button
              onClick={clearAll}
              style={{
                padding: "4px 10px",
                fontSize: "10px",
                background: "transparent",
                border: "1px solid #2a2a2a",
                color: "#555",
                borderRadius: "3px",
                cursor: "pointer",
                fontFamily: "monospace",
                letterSpacing: "0.06em"
              }}
            >RESET</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: "#0a0a0a",
        borderTop: "1px solid #1a1a1a",
        padding: "10px 28px",
        display: "flex",
        gap: "24px",
        fontSize: "10px",
        color: "#444",
        letterSpacing: "0.08em",
        flexWrap: "wrap"
      }}>
        <span>@itsmyash SUBSTACK</span>
        <span>@alexa.realtor</span>
        <span>@its.myash</span>
        <span>@fillerandroast</span>
        <span>@life.byalexa</span>
        <span style={{ marginLeft: "auto" }}>PA LIC #RS326383 · SMART WAY AMERICA REALTY</span>
      </div>
    </div>
  );
}

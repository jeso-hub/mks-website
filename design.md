# Multi Karya Sukses — Design System

Source of truth for every later build step. Palette, type, spacing, and rules below
are load-bearing — don't improvise around them without updating this file first.

## Brand & thesis

**Multi Karya Sukses** — commercial fit-out construction and interior design.

**Thesis:** *"Commercial spaces, built and delivered with precision."*

8+ years in business, 2,700 projects delivered, 150+ clients — many of them
returning. The differentiator is not "we build things," it's "we finish on schedule
without the usual construction chaos." Speed and reliability are the actual product,
alongside the craft (wall bays, lightboxes, hanging signage, full government-office
fit-outs).

**Note on the name:** an old company profile PDF the client shared (`VK COMPANY PROFILE.pdf`, Author: Visual Konstruksi) shows the trading name **Visual Konstruksi** used publicly (social handle `visual.konstruksi`, tagline "VISUAL.KONSTRUKSI"), with **CV. Multi Karya Sukses** as the legal entity — "MKS" in the email `cv_mks@yahoo.com`. The client told us directly to call the business "Multi Karya Sukses" in Step 1, so the site keeps that as the displayed name; flag the "Visual Konstruksi" trading name to the client rather than silently switching.

**Direction:** Critical Path structure, revised. Original palette/layout (steel-blue
+ concrete grey, mono-heavy "schedule" utility styling) read as too cold and
technical — client rejected it after seeing two references in the same business:
[interiologic.com](https://www.interiologic.com/) and
[thisisstudiox.com](https://www.thisisstudiox.com/). Both are photography-led,
warm, editorial commercial-interiors sites. Revised direction keeps the Fraunces /
Work Sans type pairing and the logo's red + blue, but moves the palette warm
(parchment, not concrete) and the layout to full-bleed real photography instead of
a schedule-diagram spine. See Palette and Layout below — these supersede the
original Critical Path values.

## Audience & the one job

Commercial and government decision-makers evaluating a fit-out contractor —
facilities managers, office administrators, government procurement contacts. They
are not browsing for inspiration; they already have a space and a deadline. The one
job of this site: get them to **start a WhatsApp chat** (or call) with enough
confidence in speed + quality that they don't shop three more contractors first.

## Palette (OKLCH, named roles)

Every neutral is tinted — never pure black or white. Warm parchment replaces the
original cool concrete grey; logo blue and logo red are unchanged.

| Role | OKLCH | Hex (ref) | Use |
|---|---|---|---|
| `--steel` (primary) | `oklch(0.408 0.071 251.2)` | #2B4C6F | Links, the how-we-work connector line, province names on the map |
| `--steel-ink` (primary, dark) | `oklch(0.30 0.06 251.2)` | ~#1B3450 | Nav CTA pill background (client-specified "premium blue" exception, see Components → Nav) |
| `--site-red` (accent — the ONE saturated color) | `oklch(0.556 0.178 29.3)` | #C63B2E | WhatsApp CTA, hover states. Nowhere else. |
| `--warm-divider` (secondary) | `oklch(0.807 0.032 86.5)` | #C9BFA9 | Borders, dividers, hairlines |
| `--bg` (parchment) | `oklch(0.914 0.021 85.9)` | #E9E2D3 | Page background |
| `--panel` (tile) | `oklch(0.873 0.029 84.6)` | #DED4C0 | Logo tiles, placeholder blocks |
| `--panel-light` | `oklch(0.953 0.016 86.4)` | #F4EFE4 | Elevated surfaces on `--bg` |
| `--ink` (warm text) | `oklch(0.258 0.017 67.0)` | #29221B | Body text, headings |
| `--ink-muted` | `oklch(0.258 0.017 67.0 / 0.62)` | — | Secondary text, captions |
| `--scrim` (photo overlay) | `oklch(0.209 0.012 67.1)` | #1C1712 | Dark gradient/wash over full-bleed photography, for white text on top |

**Rule:** `--site-red` is the only saturated accent on the page. If two things are
both trying to be red, one of them is wrong.

## Type

- **Display:** Fraunces (variable, optical sizing on), weight 500–600. Used for the
  thesis line, section headlines, and big stats only. Set *soft* — avoid Fraunces'
  high-contrast/Didone extremes; keep optical size low-to-mid so it reads warm, not
  fashion-editorial.
- **Body:** Work Sans, weight 400 (body copy), 500 (labels, nav, buttons).
- **Utility:** IBM Plex Mono, weight 500. Reserved for small data marks: stat
  figures' unit labels, placeholder tags (`IMAGE`, `COPY`), image credits. Not
  for body text, and not used as an all-caps eyebrow above headings — pair it with
  a lowercase `(parenthetical)` micro-label instead, the way a section is quietly
  named rather than announced.

**Scale** (rem, 16px base):

| Token | Size | Line-height | Face |
|---|---|---|---|
| `--text-display-2` (hero thesis) | 3.5rem / 56px (2.25rem mobile) | 1.05 | Fraunces 600 |
| `--text-display-1` (section head) | 2.5rem / 40px (1.875rem mobile) | 1.1 | Fraunces 500 |
| `--text-subhead` | 1.5rem / 24px | 1.3 | Work Sans 500 |
| `--text-lede` | 1.1875rem / 19px | 1.6 | Work Sans 400 |
| `--text-body` | 1.0625rem / 17px | 1.65 | Work Sans 400 |
| `--text-utility` | 0.8125rem / 13px | 1.4, +0.02em tracking | IBM Plex Mono 500 |

**Do:** keep line length under 70ch for body copy. Let Fraunces headlines wrap
naturally — don't force line breaks (exception: the centered "Commercial project
expertise across every sector." heading gets a manual `<br>` after "expertise" —
without it the browser's natural wrap put "every sector." alone on its own
centered line, reading unbalanced; client asked to rebalance it).
**Don't:** don't set Fraunces in all-caps (kills its warmth). Don't use Work Sans
below 500 weight for buttons/links (still true — CTAs stay weight 500). Body copy
is the exception as of the BECK-reference pass below (now 300). Don't introduce
a third typeface.

### Typography revision — BECK reference pass

Client compared the live site's type against beckpm.com.au (a project-manager
site using Cormorant Garamond italic headings + Inter body) and asked for an
A/B test, then to adopt most of it. Two files exist from that process:
`index-b-beckstyle.html` (full BECK-style variant, kept as reference — not
linked from the live site) and `ab-test-typography.html` (a two-iframe
side-by-side harness). What actually shipped to `index.html` is a **hybrid**,
not the full B variant:

- **Kept exactly as before (client's explicit exception — "keep our font
  type"):** the big display headlines — `.hero h1`, `.section-statement`
  (About Us, "Commercial project expertise…", "The full scope of work…",
  "Sumatra-wide, based in Palembang," the client-supplied-copy modal
  headline), and `.how-heading`. All stay **Fraunces 500/600, upright, not
  italic**. Don't italicize these or drop them to weight 400 without being
  asked again — this was tested against the full-italic version and rejected
  specifically for these elements.
- **Changed to the BECK treatment:**
  - Body copy (`.lede`, `.ph-copy p`, `.how-body`, `.scope-desc`,
    `.scope-panel-inner div`) is now **Work Sans 300**, not 400.
  - Row-level titles (`.how-title`, `.scope-title` — one level down from the
    big headlines above) are now **Fraunces 400 italic**, not 500 upright.
  - Uppercase mono labels (`.mono`, `.microlabel`, `.nav-links a`,
    `.hero-link`, `.see-more`, `.how-num`, `.scope-num`,
    `[data-sector-image-index]`, `.sector-photo-realindex`) got **much wider
    letter-spacing** (0.18–0.2em, up from 0.01–0.1em) and mostly a size step
    down — BECK's small-caps labels read as refined specifically because of
    the wide tracking, not because they're tiny.
  - `.stat-figure` dropped from **2.75rem/weight 600** to **2rem/weight
    300** — BECK's own stat numbers (34px/300) are noticeably smaller and
    lighter than what this page had; the old size read as shouty next to
    everything else once body copy lightened.
  - Font import gained Fraunces' italic axis and weight 400, plus Work Sans
    300 (`css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;
    0,9..144,600;1,9..144,400&family=Work+Sans:wght@300;400;500…`).
- **Line-height correction (second pass):** the first hybrid used BECK's
  literal 1.8 line-height on all lightened body copy. Client flagged it as
  too airy — the services accordion in particular needed too much scrolling
  to see all six categories. Dialed back to **1.55** (1.5 for
  `.scope-panel-inner div`, with its padding also trimmed 7px→5px) — looser
  than the pre-BECK 1.6honestly-original baseline was tight, but nowhere
  near BECK's spacing. If line-height ever gets revisited, 1.8 is confirmed
  too loose for this content density; stay in the 1.5–1.6 range.

## Layout & spacing

8px base unit: `8 / 16 / 24 / 40 / 64 / 96 / 160`.

Content max-width `1200px`; text columns cap at `65–70ch`. Left-aligned by default.
Photography runs full-bleed (edge-to-edge, no container) wherever it appears — this
is the biggest structural change from the original direction: the page now leans on
real finished-space photography the way both client references do, instead of a
diagram standing in for it.

```
┌──────────────────────────────────────────┐
│ [logo] name   About·Services·Area  [CTA]  │  nav, sticky, parchment bg
├──────────────────────────────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  hero: full-bleed photo + scrim,
│▓▓ Commercial spaces, built and         ▓▓│  display-2 headline in white,
│▓▓ delivered with precision.            ▓▓│  CTA overlaid bottom-left
├──────────────────────────────────────────┤
│ ▐ logo · logo · logo · logo · logo ▌      │  clients marquee, rolling, red bars
├──────────────────────────────────────────┤
│ (About Us)  statement + lede + tagline    │  plain parchment bg, narrow column
├──────────────────────────────────────────┤
│▓▓▓ 8+ Yrs   2,700 Projects   150+ Client▓│  stats over photo + scrim
├──────────────────────────────────────────┤
│ (What we build)  Sector tabs             │  Retail / F&B / Corporate & Govt /
│ [watermark text]  photo · caption        │  Hospitality — click to swap
├──────────────────────────────────────────┤
│ (How we work)  One team. Clear timelines.│  compact, box-free — no photo,
│  No surprises.                           │  no connector line, ~half the
│ 01 One team, start to finish             │  height of the old version
│ 02 Schedule discipline                   │
├──────────────────────────────────────────┤
│ (Services)  01–06 categories              │  independent-expand accordion,
│ ┃ 01 Architecture / Civil  [+]            │  red left-border when a row is
│ ┃ 02 Furniture / Interior  [+]  …         │  open, real six-category content
├──────────────────────────────────────────┤
│ (Areas We Serve)  province list + map    │  parchment bg, real Sumatra map
├──────────────────────────────────────────┤
│ Ready to start?  [WhatsApp] [Call]       │  contact band, panel-light bg
├──────────────────────────────────────────┤
│ dark ink footer band                     │
└──────────────────────────────────────────┘
```

## Signature element

**Full-bleed finished-space photography with a warm scrim**, not a schedule
diagram. The hero and the stats section both run a real photo edge-to-edge with a
dark warm overlay (`--scrim`) under white type — this is the one place the page
gets to be bold and photographic, borrowed directly from how both client references
handle their hero and proof sections.

**Retired:** the diagonal-step connector line and dashed `.ph-copy` placeholder
boxes ("COPY" tags) that "How we work" originally used are gone. The user flagged
the dashed boxes as the single biggest thing making the page read as an unfinished
mockup rather than a premium site, and the section as too tall/empty relative to
its content. It's now two plain numbered rows (`01`/`02`, `.how-row`) with a
top-border divider between them, no boxes, no connector graphic, no photo — the
"premium" feeling here comes from spacing/hierarchy/typography/restraint, not
from an added visual device. Section padding cut from 88px/88px to 56px/56px.
Do not re-add a dashed-box or connector-line treatment to this section without
being asked again.

## Motion

- **Fixed bug: nav/in-page anchor links fought Lenis and landed short.** A
  plain `<a href="#services">` triggers the browser's native instant hash
  jump, but Lenis's own rAF loop doesn't know that happened — on the next
  frame it can pull the real scroll position back toward wherever Lenis's
  internal state still thought it was, so a click on "Services" could land
  on "Expertise" instead, ~1400px short (visually this can even show as a
  brief double-paint/ghosting glitch if the jump and Lenis's correction
  land in the same frame). Fixed by intercepting every `a[href^="#"]`
  click, calling `preventDefault()`, and routing the scroll through
  `lenis.scrollTo(target, { offset: -navHeight })` (falling back to
  `window.scrollTo({behavior:'smooth'})` if Lenis didn't load) — see the
  script block right after Lenis's init. Any new in-page anchor link added
  later gets this automatically since the handler is delegated by
  `href^="#"`, not by id.
- **Structural (one moment only):** the hero photo/headline is alive before first
  scroll — a slow, subtle scale-in on the hero photo (starts ~4% zoomed, settles
  over ~1.2s ease-out) plus the headline fading up. This is the one orchestrated
  load animation.
- **Polish:** hover/focus transitions on interactive elements only — 150–250ms,
  ease-out. No hover effects on non-interactive tiles.
- **Restraint rule:** if you're about to add a second animated entrance (fade-up on
  scroll, staggered cards, etc.), stop — this page gets one motion moment, not many.
- **User-triggered motion is fine, unlimited:** the sector tabs in "Commercial
  project expertise" crossfade their photo/watermark/caption on click (150ms out,
  swap, 150ms in). This doesn't count against the "one moment" budget — it
  responds to something the person did, not a scroll-triggered entrance.
- **Hover "nudge up":** pill buttons (`.btn` — nav CTA, contact band) and the
  sector-tabs nav (`.sector-tab` — Retail/F&B/Corporate & Government/
  Hospitality) lift 3px on hover (`translateY(-3px)`, 200ms
  cubic-bezier(.2,.7,.2,1)); `.btn` also gains a soft drop shadow on hover.
  Client-referenced pattern (a travel-app "Get Started" button lifting on
  hover). Distinct from the services accordion's hover **nudge-right** (see
  Full scope of work) — vertical lift for buttons/tab-nav, horizontal nudge
  for the numbered accordion rows; don't cross the two patterns.
- **Stat count-up:** the three stat figures roll from 0 to their final value
  (1.4s ease-out) **every time** the stats strip scrolls into view, not just the
  first — client explicitly asked for this, so the stats section is deliberately
  exempted from the reveal observer's usual `io.unobserve(entry.target)` (see
  the reveal-observer code) while every other `.reveal` element still fires
  once and stops. Current values: `8+` / `2,700+` / `150+`. Skipped entirely
  under reduced motion — the pre-set final values in the HTML just stay put, no
  flash to zero, every time.
  - **Compact strip, not a tall section:** `.stats-photo` originally had
    `min-height: 52vh`, which on most screens made it as tall as a second
    hero — client asked for it to read as a slim strip instead. Removed the
    `min-height` entirely (height now comes purely from `.stats-grid`'s own
    padding, 40px top/bottom on desktop, 76px top only on mobile stacked
    layout) and gave `.stats-photo .cap` the same small/corner treatment as
    the hero's placeholder caption (`.hero .photo-fill .cap`) — at the old
    height the dev-only "IMAGE — full bleed" placeholder text had room to
    sit above the numbers; once shrunk to a strip it started overlapping
    the "8+" figure directly, so it needed the same quieting (small, left,
    low-opacity) the hero already established for this exact placeholder
    role. Don't reintroduce a `min-height`/`vh` value here — the strip's
    height should always be content-driven (padding + the numbers
    themselves), not screen-relative.
  - **Three figures stay in one row down to 480px, not 780px.** The
    3-column grid used to collapse to a single stacked column at the same
    779px breakpoint as everything else, but at in-between widths (~700–
    780px) that stacked the three stats tall and defeated the "slim strip"
    goal — client's reference was BECK's own stat row, which stays
    horizontal. Base `.stats-grid` gap dropped 40px→24px so three columns
    keep fitting comfortably down to a narrower width, and the stacking
    media query moved to `max-width: 479px` (matching the 480px "phone"
    breakpoint already used for `.scope-panel-inner`) so only true phone
    widths stack. Don't move this breakpoint back up to 780px.
- **Exception — clients marquee:** the rolling client-name strip runs a slow,
  continuous linear scroll for as long as it's on screen. This is a deliberate,
  client-requested exception to "one motion moment" — it's ambient/decorative, not
  an entrance effect, and it pauses under reduced motion (see below).
- **Reduced motion:** hero photo shows at its settled scale immediately, headline
  visible with no fade. The clients marquee stops scrolling and wraps into a
  static, fully-visible list instead. All other motion is removed, not slowed.

## Components

- **Nav:** real logo mark (`assets/brand/logo-mks.png`, 46×46, big relative to
  the wordmark) + a small quiet `.brand-text` label beside it — logo dominant,
  text secondary, not the other way around. Three anchor links (About Us /
  Services / Area → `#about` / `#services` / `#area`) in the center, uppercase
  IBM Plex Mono, only shown at ≥780px (`.nav-links`, `display:none` below that
  — no mobile menu built yet, so don't rely on these links being reachable on
  phones). Sticky on scroll, parchment background.
  - **Nav CTA is a deliberate exception to "one CTA label everywhere"**: it
    reads "Let's Talk →," not "Chat on WhatsApp," and is a fully rounded pill
    (`.btn-pill-blue`) in `--steel-ink` (a deeper, more "premium" blue than
    `--steel`) instead of the site-red button used everywhere else. Same
    `wa.me` link and destination underneath — only the label and shape differ,
    client-specified. Don't "fix" this back to match the other CTAs.
  - **`border-radius: 999px` (full pill) is now the shared `.btn` default**,
    not a nav-only trait — it applies to every remaining pill button on the
    page (contact band, nav) after the client asked for buttons to mirror the
    nav pill's shape. `.btn-cta`'s red is also translucent rather than
    solid, at the same request — softer against the dark hero scrim. Keep
    both changes global; don't special-case one button back to square
    corners or solid red without being asked.
  - **Both remaining pill buttons' opacity, tuned twice:** first pass —
    `.btn-cta` (contact band) 85%→70%, `.btn-pill-blue` (nav) solid→80% —
    client's framing: these are "the two other CTAs with button style" (as
    opposed to the hero's text-link CTAs) and both should read
    lighter/softer than before. Second pass — `.btn-cta` alone bumped back
    up to **92%** after client found 70% too washed-out at rest (not
    hovering); `.btn-pill-blue` stayed at 80%, wasn't flagged. Current
    values: `.btn-cta` = `color-mix(in oklch, var(--site-red) 92%,
    transparent)`, `.btn-pill-blue` = `color-mix(in oklch, var(--steel-ink)
    80%, transparent)`. Don't touch `.hero-link` for a "make the buttons
    more transparent" request — hero CTAs are text links, not button-styled.
- **Hero:** full-bleed photo + `--scrim` overlay, thesis (display-2, white) + short
  lede + primary CTA, overlaid in the lower third — matches how both references
  set hero type over photography rather than beside it.
  - **Hero CTAs are `.hero-link`, not `.btn` pills**: text links with an "↗"
    arrow (`.arrow`, translates on hover), no fill/border — a second
    deliberate exception to the pill-button default (alongside the nav CTA),
    client-matched to a reference screenshot of this bold-uppercase-with-arrow
    link style. Typography is **IBM Plex Mono, uppercase, 0.08em tracking**
    (`.hero-link`) — chosen over a Work-Sans/Fraunces-italic alternative
    (both mocked live and compared) specifically to differentiate the CTA
    from the Work Sans `.lede` paragraph above it; mono ties the CTA into the
    site's existing small-label language (nav microlabel, section tags,
    numbered rows) instead of just being a bolder/uppercase version of the
    body font. Labels were originally "Chat on WhatsApp"/"Call us" (only the
    visual treatment changed from `.btn` at that point, not the copy) —
    since relabeled to **"Let's Talk"** / **"View Our Work"**, see the Copy
    rules entry. Contact band keeps the `.btn` pill treatment; don't
    propagate the text-link style there without being asked.
- **About Us:** `(About Us)` micro-label, then real, client-approved copy — not a
  placeholder anymore. Three lines: a statement headline ("You have a business
  to run. We take care of the space."), a lede sentence ("Multi Karya Sukses
  turns your vision into a space built around how your business works."), and
  a short mono tagline ("Your vision. Built right. Delivered on time.") in
  `--steel`. Client tried cutting the lede for being top-heavy, then asked to
  keep it — it stays as written; don't re-cut it without being asked again.
  It's since been visually de-emphasized instead of cut: `0.9rem` and
  `--ink-muted` (was `1rem` / `--ink`) — smaller and quieter, still present.
  Below the tagline: a full-width `--warm-divider` rule, then a plain
  `.see-more` text link ("SEE MORE →", IBM Plex Mono, uppercase, tracked,
  underlined — not a button, no box, no background) that hovers to
  `--site-red`. Also de-emphasized at rest: `0.7rem` and `--ink-muted` text on
  a `--warm-divider` underline (was `0.78rem` / `--ink` on an `--ink`
  underline) — quieter until you're actually looking for it. Copied
  deliberately close to a client-supplied reference screenshot for the overall
  shape (rule above, plain underlined text below, no button chrome); keep
  that structure if it's ever touched again, even as the exact weight shifts.
  - **Click opens a modal** (`#about-modal`) — chosen over a new page (this
    site has no page routing yet) or a hover-popup (breaks on mobile, and
    this is too much text for a tooltip). Real content, not placeholder:
    headline, lede, two body paragraphs, and a closing mono line, all sized
    down from the page's default type scale (`.modal-card .section-statement`
    at 1.4rem not 1.75rem, body paragraphs at 0.9375rem, smaller again under
    480px) specifically because the client found the page-default sizes too
    large to read comfortably inside a modal, especially on phone.
  - **The client's supplied copy was corrected before use, not pasted as-is**:
    it was sourced from another company's real About page and named that
    company ("Beck") and claimed "across Indonesia" — both wrong for this
    client. Rewritten to "we" and "across Sumatra," consistent with the rest
    of the site. If more copy arrives that looks reused from elsewhere, check
    it against established facts (see Areas We Serve, Conversion essentials)
    before shipping it.
  - Backdrop click, `Escape`, and the close button all dismiss it; focus moves
    to the close button on open and back to the trigger on close.
- **Stat strip on photo:** 3 figures (8+ Yrs / 2,700+ Projects / 150+ Clients)
  over a full-bleed photo + `--scrim`, figures in Fraunces (white), unit labels in
  IBM Plex Mono, rolling count-up on first reveal (see Motion). Sits directly
  under About — moved up from its original spot after client request, so proof
  lands early.
- **Commercial project expertise (sector tabs):** `(What we build)` micro-label +
  centered statement, then four click-to-switch tabs — Retail / F&B /
  Corporate & Government / Hospitality. Active tab underlined in `--site-red`.
  Below: an oversized `--panel`-colored watermark of the active sector's name
  (decorative, `aria-hidden`), a photo placeholder, and a caption — all three
  swap together on tab click. Client-supplied reference for this pattern (a
  construction-company site with the same sector-tab + giant-watermark device);
  we kept the mechanic, swapped their scheme for ours. Retail's caption
  explicitly names "service centers" alongside electronics stores — a real,
  named portfolio category from the old company profile (GraPARI, OPPO/Vivo
  service centers), not implied by "electronics stores" alone. The section's
  own top padding is reduced (`.expertise { padding-top: 40px; }`, overriding
  the site-wide 88px) — the default spacing read as a dead gap between the
  stats band above it and "(What we build)," client asked to close it.
  - **Even label/heading/tabs rhythm:** `.expertise .microlabel` and
    `.expertise .section-statement` both get an explicit `margin-bottom:
    20px` — the shared base rules left a 4px gap above the heading and a
    48px gap below it (the base `.section-statement` bottom margin), which
    read as lopsided once the heading got its manual `<br>`. Scoped to
    `.expertise` only; don't apply this override to other sections using
    `.section-statement` without checking their own label/heading spacing
    first.
  - **Tabs→photo gap matched to the same 20px rhythm.** It was 96px
    (`.sector-tabs` margin-bottom 40px + `.sector-photo` margin-top 56px
    stacking), visibly much bigger than the 20px label→heading and
    heading→tabs gaps right above it — client asked for all three gaps to
    read as one consistent rhythm. `.sector-tabs` margin-bottom is now 20px
    and `.sector-photo`'s top margin is 0 (its own margin was only ever
    providing spacing already covered by the tabs' margin, so dropping it
    to 0 rather than splitting 20px across both was the simpler fix).
  - **Each sector has 2–4 photo slots** (Retail has 4, the other three still
    have 3), cycled with small circular prev/next arrows (`‹ ›`) overlaid at
    the photo's left/right edge. `sectorData[key].images` is an array, not
    a single string; the counter (now "1/4" for Retail) reads
    `data.images.length` dynamically — adding/removing a slot needs no
    other code change, just edit the array. Switching sectors resets to
    image 1. Arrow color is deliberately quiet by default (`--ink-muted`)
    and only deepens to `--steel` on hover — client asked for this specific
    light-then-deepens behavior, don't make the arrows a default `--steel` or
    `--ink` (too heavy at rest, competes with the photo).
  - **Retail's 4th photo**: `assets/sector/retail-4-accessory-kiosk.jpg` (a
    multi-brand mobile-accessory kiosk — Olike/Infinix/Baseus in the source
    photo, all genericized out of the caption), captioned "Wall bay
    fit-out." Source image was already exactly 4:3 (1448×1086), no crop
    needed. Retail is now the only sector with a 4th slot — don't assume
    all sectors have the same count when writing code against this data.
- **How we work:** heading is "One team. Clear communication. No surprises."
  (3 short stacked lines, `.how-heading`), not "Two things every client gets."
  Two plain numbered rows, no photo, no dashed boxes, no "COPY" tags, no
  diagonal connector line (see Signature element — retired). Copy is
  deliberately short: "01 — One team, start to finish / Construction,
  interiors, furniture, and signage under one contract. No handoffs between
  trades." and "02 — Full visibility / From design to handover, every stage
  is clearly communicated so you always know what's happening." Client's own
  words: the boxes were "the single biggest visual problem," making the page
  look like a mockup rather than a finished premium site — don't reintroduce
  a bordered/dashed placeholder treatment anywhere copy is meant to read as
  final.
  - **Background is `--panel`, not `--bg`:** client flagged that this
    section blended invisibly into "Commercial project expertise" above it
    — both were plain `--bg` parchment with no boundary. Gave `.how-work`
    the slightly deeper `--panel` tan instead, creating a soft light→
    darker-light→dark rhythm across Expertise (`--bg`) → How we work
    (`--panel`) → Full scope of work (`--steel-ink`, dark) → Areas We Serve
    (`--bg` again). Deliberately not a second dark section here — two dark
    bands back to back (this one plus Services right after) would cancel
    out the "contrast beat" effect the dark Services section is going for.
  - **Padding tightened twice: 56px → 36px → 28px top/bottom**, with the
    internal gaps compressed to match (`.how-list` margin-top 28px→16px,
    `.how-row` padding 18px→12px, `.how-heading` top margin 14px→10px) —
    client's reference point the second time was the stats strip's own
    tight padding, asking this section to read comparably slim. It can't
    match the stats strip exactly (this section carries a heading + 3 lines
    + two full title/description rows vs. the stats strip's three bare
    numbers), but every adjustable gap here is now as tight as it can go
    without the rows touching. Don't creep any of these four values back up
    without being asked — this section is meant to feel quick, not spacious.
  - **No photo/visual column, by design — considered again and declined.**
    Client asked whether a right-hand image (desktop two-column layout)
    should be added back; recommendation was no, and it wasn't added: this
    section works specifically because it's compact and text-only, and
    photography is already well-represented elsewhere (hero, stats strip,
    sector tabs) — adding a photo column here would pull the section back
    toward the taller, heavier version the client explicitly asked to move
    away from twice now (once to remove the dashed boxes, once to tighten
    padding). If this gets revisited, a small square thumbnail would be far
    less risky than a tall column — don't default to the old `.how-visual`
    4:5 aspect-ratio treatment.
- **Sector-tabs real photos:** `sectorData[key].images` entries are
  `{caption, src}` objects, not plain strings — `src: null` still renders the
  dashed placeholder + caption (`applyImageSlot()` toggles between the real
  `<img data-sector-photo-img>` and the dashed `.cap` block based on whether
  `src` is set). Retail slot 1/3 holds a real photo,
  `assets/sector/retail-1-oppo-service-centre.jpg`, captioned generically as
  "Service center" (not the branded "OPPO Service Centre" — client asked
  to genericize it) — the first real (non-placeholder) photo on the page
  outside of brand/client assets. **This file has been swapped once since
  first added**: the original was a straight photo; client later supplied
  a color-corrected re-render of the same shot (wood lightened, the "oppo"
  wordmark near the pendant light recolored green, the one under "Service
  Center" recolored white, and a duplicate wall-mounted "oppo" logo removed
  via clone-patching) and asked to swap it in directly — same filename,
  same caption, image content replaced. If asked to touch this photo again,
  confirm which version is live (`git`/file-diff, or just re-open the
  asset) before editing, since it's no longer the original untouched
  photograph. Retail slot 2/3 now also holds a real
  photo, `assets/sector/retail-2-skintific-store.jpg` (a beauty-retail
  storefront, cropped from ~1200×896 to 4:3 — the source was already close
  to 4:3, only a ~6px trim needed), captioned "Beauty retail fit-out" —
  same genericize-the-brand-name convention as slot 1, don't caption it
  "Skintific." Retail slot 3/3 also now real:
  `assets/sector/retail-3-grapari-telkomsel.jpg` (a GraPARI Telkomsel store,
  captioned generically as "Telecom service counter" — same convention,
  don't name Telkomsel/GraPARI in the caption), color-graded before saving
  (warmed white balance, ~14% desaturated, brightest cool-white highlights
  pulled down slightly, plus a faint warm-parchment tint overlay) so the
  vivid Telkomsel red and cold LED lighting read closer to the site's own
  muted `--site-red` and warm photography direction instead of clashing
  with it — client asked for this explicitly ("make the lighting fit the
  website and brand colour a bit"), then asked for a brightness pass on top
  (exposure +0.12, gamma 0.92) after the color grade read a touch dim. **Retail is now the first sector with
  all 3/3 slots filled** — the remaining 6 slots across F&B, Corporate &
  Government, and Hospitality are still `src: null` placeholders pending
  real project photography.
  - **Real-photo caption is a separate bottom overlay, not the dashed cap:**
    `data-sector-photo-realcap` sits at the bottom of the photo — caption
    first (light Work Sans), then the faint mono "1/3" index below it, over
    a translucent dark gradient scrim (caption-then-index order was a
    client-requested swap; index used to sit above the caption). Retail
    slot 1 is captioned "Service center" (changed from "Electronics store"
    — client asked for the specific term). It's a distinct element from the mockup-era
    dashed `.cap`/"IMAGE" placeholder used for `src: null` slots, so a real
    photo never carries the "IMAGE" tag or dashed-box mockup styling. **Fixed
    bug:** `.photo-fill .cap[hidden]` previously stayed visible over real
    photos — the browser's default `[hidden]{display:none}` was losing to
    the class rule `.photo-fill .cap{display:flex}` (higher/equal
    specificity), so the "IMAGE 1/3" tag and old branded caption showed
    through on top of the real OPPO photo. Fixed with an explicit
    `.photo-fill .cap[hidden]{display:none}` override. Same footgun applies
    to any future `[hidden]`-toggled element inside a class that sets
    `display` — add the `[hidden]` override alongside it.
  - **Moved out from under the photo to sit below it, and muted.** The
    caption+index used to be `position: absolute` overlaid on the bottom of
    the photo itself (dark gradient scrim, light text, like the hero's
    style). Client asked for it moved to normal flow below the photo box
    instead — it's now a sibling of `.sector-photo` (not a child), plain
    `position: relative`, `margin: 14px auto 0`, no scrim, dark-on-parchment
    text instead of light-on-dark. Then asked to mute it further: three
    stacked text lines (photo caption, index, sector description) read as
    too much at equal weight, so the caption dropped from `--ink` to
    `--ink-muted` (0.85rem→0.8rem) and the index to `color-mix(--ink-muted
    70%, transparent)` — both now clearly secondary to the sector
    description paragraph below them, which stays full-weight. Don't bump
    either back up to full `--ink` without being asked.
  - **Fixed bug: index counter stuck at the HTML's hardcoded "1/3" default
    on first page load.** The initial-paint line
    (`applyImageSlot(sectorData.retail.images[0])`) set the image/caption
    but never touched `sectorImageIndexEl`/`sectorRealIndexEl` — only
    `renderSectorImage()` (prev/next clicks) and the tab-switch handler did
    that, so a fresh page load showed "1/3" even after Retail became a
    4-image sector, until you clicked something. Fixed by setting both
    index elements' text right after the initial `applyImageSlot()` call,
    computed from `sectorData.retail.images.length` rather than
    hardcoded — so it stays correct if Retail's image count changes again.
- **Full scope of work (`#services`, real content, not placeholder):** the
  actual six-category service breakdown from the client's "Layanan Kami"
  sheet — Architecture/Civil, Furniture/Interior, Advertising & Branding, Tax
  & Permits, Delivery Service, Maintenance/Demolition — each translated to
  English, given a one-line description, and expandable to a plain sorted list
  of its real line items — **not bordered pill tags**; an earlier version used
  `.scope-tag` chips and the client found them hard to read, so line items are
  now plain two-column text (`.scope-panel-inner`, no border/background), each
  category's items sorted A–Z. Client chose this design after comparing three
  options (see `services-preview.html`, kept as a working reference — not
  linked from the live site): numbered rows with a `--scope-accent`
  left-border accent when open (Version 3's look, red at first — see the
  dark-section notes above for why it's yellow now), where **each row can
  be opened by click, and moving the cursor off an open row auto-collapses
  it** (click still independently toggles the row you're on) — a hybrid the
  client asked for after trying pure independent-expand (Version 2's
  original behavior) and finding the page grew too full with several
  categories open at once. Don't revert to either pure-exclusive or
  pure-independent without being asked; this specific hybrid was requested
  twice, in two different phrasings, before landing here.
  - **Fixed bug: clicking the number didn't toggle the row.** `.scope-num`
    (the "01" etc.) sits as a sibling of `.scope-content` inside
    `.scope-row`, outside `.scope-btn` entirely — only `.scope-btn` had a
    click listener, so clicking the title/description toggled the row but
    clicking directly on the number did nothing (confusing since the number
    is large, sits in its own column, and visually reads as clickable,
    especially once it started nudging/coloring on hover alongside the
    title). Fixed by factoring the toggle into a named `toggleRow()`
    function and binding it to both `.scope-btn` and `.scope-num` clicks,
    plus `cursor: pointer` on `.scope-num`. If this row ever gains more
    structure, make sure any new sibling element that visually looks part
    of the clickable row actually is.
  - **Fixed bug: auto-collapse didn't fire when the cursor left into empty
    space.** The original implementation closed an open row via
    `mouseenter` on a *different* row — so leaving an open row for a
    sibling row worked, but leaving it for empty space below the last row
    (or anywhere else not covered by another `.scope-row`) never fired
    anything, and the row stayed open indefinitely. Fixed by listening for
    `mouseleave` on the row itself and closing it there, regardless of
    where the cursor goes next — simpler than the original and covers both
    cases (sibling row or empty space) with one listener per row instead of
    a full re-scan of all rows on every `mouseenter`.
  - **Border-left now matches the number's hover color, not just its
    open-state color:** `.scope-row.is-open, .scope-row:hover { border
    -left-color: var(--scope-accent); }` — previously only `.is-open` set
    the border color, so a row you were hovering but hadn't clicked showed
    a dim border while its number was already accent-colored (see
    `.scope-row:hover .scope-num`), which read as inconsistent.
  Real fact captured here that wasn't on the site before: delivery/installation
  covers Sumatra **except Aceh** — don't imply Aceh is covered elsewhere.
  - **Hover nudge (client reference: beckpm.com.au):** hovering any row
    translates its number (`.scope-num`) and its whole content block
    (`.scope-content` — title, description, *and* the expanded panel/list,
    grouped under one wrapper specifically so they move together) 10px to
    the right, plus the number turns `--site-red`. Number and content share
    one wrapper/transform pairing on purpose — an earlier version only moved
    `.scope-btn`, which left the expanded list behind, visibly misaligned
    with the now-shifted title above it.
  - **Dark section band (client reference: beckpm.com.au's "How Beck Works"
    dark green section):** `.scope` marks "Full scope of work" as visually
    distinct from the parchment sections around it, the way BECK's site
    alternates cream and dark-green bands. First pass used `--scrim` (the
    warm near-black already used for hero/stats photo overlays and the
    footer); client then asked for MKS's own color language instead of
    black, tested 3 blues live side-by-side, and picked reusing
    **`--steel-ink`** (the exact navy already driving the nav "Let's Talk"
    pill) rather than a new one-off color — `.scope { background:
    var(--steel-ink); }`. Background and nav button are now the same token
    on purpose: change `--steel-ink` once and both update together. Two
    other hues were built and compared (`hue-test.html` harness, files
    `hue-test-current/indigo/teal.html`, not linked from the live site) —
    an indigo-leaning navy (oklch 288°, warmer) and a deep teal (oklch
    200°) — but weren't adopted: teal breaks from the red+blue logo
    identity, indigo is a reasonable alternative if a richer/moodier tone
    is wanted later, but brand navy was judged the safer choice since nearly
    every construction/PM competitor already leans navy and it costs
    nothing new to track.
  - **Accent color inside `.scope` is yellow (`--scope-accent: oklch(0.82
    0.14 90)`), not `--site-red`:** the open-row border, the open/hover
    number color, and the `(Services)` microlabel all share this one
    variable now. Client asked for this after `--site-red` looked odd next
    to the section's own warm-yellow label — the accordion's red accent
    (used everywhere else on the page as the *only* saturated color) is a
    deliberate site-wide exception inside this one dark section, so the
    interactive accent matches the section's own label instead of importing
    the page's red. Don't revert this to `--site-red` without being asked;
    the rest of the page's "one red accent" rule is unaffected — this is a
    contained exception, not a rule change.
    `--panel-light` is warm-hued (86.4° in OKLCH) because the rest of the
    page is warm parchment; pairing it with the new cool navy background
    was a subtle mismatch. `.scope` defines a local custom property
    `--scope-text: oklch(0.95 0.02 240)` (pale, low-chroma, hue-matched to
    the navy) and every text rule inside the section (`.section-statement`,
    `.scope-title`, `.scope-desc`, `.scope-panel-inner div`, `.scope-num`,
    the row divider) references `var(--scope-text)` instead. `.microlabel`
    here stays a separate warm gold/yellow, `oklch(0.82 0.14 90)` — a
    deliberate accent, not part of this "white font" fix (first attempt
    mixed the cool `--scope-text` with `--site-red` via `color-mix`, which
    produced purple instead of a warm tone; client caught it and asked for
    yellow, echoing BECK's warm label-on-dark-green treatment more
    literally). **Caution for future edits:**
    a global find/replace of `var(--panel-light)` will over-match — it's
    used 20+ times across hero/buttons/stats/marquee/contact/footer. Only
    the rules actually inside `.scope`'s cascade should use `--scope-text`.
  - **Mobile panel clipping bug (fixed):** `.scope-panel`'s open `max-height`
    was a flat 320px, sized for the 2-column desktop layout. At ≤480px
    `.scope-panel-inner` drops to 1 column, roughly doubling content height,
    so longer categories (e.g. Furniture/Interior's 9 items) got clipped by
    `overflow: hidden` mid-list. Fixed with a `max-width: 480px` override
    (`max-height: 900px`) plus slightly more top padding so the list doesn't
    read as glued to the description above it. If a category ever grows past
    ~25 items this cap may need raising again — it's a generous ceiling, not
    a tight fit.
- **Areas We Serve — the province list is gone; the map is clickable now.**
  This was a twice-recommended, never-confirmed idea flagged much earlier in
  the project ("condense the list into map hover/click") — client finally
  confirmed it. The static `.areas-list` (9 province/city text rows) is
  removed entirely; `.areas-map-full` now holds just the map, centered,
  `max-width: 640px`. Each of the 9 pins baked into `assets/sumatra-map.svg`
  (Medan, Padang, Pekanbaru, Batam, Jambi, Palembang, Bengkulu, Bangka
  Belitung, Bandar Lampung) has a matching invisible `<button class="map-pin">`
  overlaid at the same coordinate — since the map is an `<img>`, its internal
  SVG elements aren't reachable by JS/CSS, so the pins are a separate
  absolutely-positioned hit-target layer, **not** an inlined SVG (the SVG's
  province landmass alone is hundreds of `<path>` elements — inlining it
  would bloat the single-file page significantly for no benefit here).
  Pin coordinates are hardcoded as `left`/`top` percentages computed from
  the SVG's own `viewBox` (`cx/998.47357`, `cy/898.59314`) — **if the base
  map SVG is ever replaced or re-exported with different pin positions or a
  different viewBox, these 9 percentages need recalculating by hand**, they
  won't auto-follow. Clicking a pin shows a popup (`.map-popup`, positioned
  via the same left/top the pin uses) with the province name and its city
  list, sourced from `data-province`/`data-cities` attributes on each
  button — this is the exact same province→city data the old text list had,
  just relocated onto the buttons instead of deleted. Popup closes on:
  clicking a different pin (swaps content), clicking the same pin again,
  clicking anywhere else on the page (document-level click listener), or
  Escape. `aria-label` on each pin carries the full "Province: cities"
  string so the info is still available without a click, for
  keyboard/screen-reader users. The old 2-column `.areas-layout` grid
  (`0.9fr 1.1fr` list+map split) is gone — no more list to split against,
  so it's just a centered single block now, at all viewport widths.
  - **Pin size and popup city styling, tuned after first look:** `.map-pin`
    is 40px (up from an initial 28px) — bigger tap target, easier to see
    which pin is active. `.map-popup-cities` is a real `<ul>`/`<li>` list
    now (small `--site-red` bullet dots via `::before`), not a comma-joined
    string — the JS splits `data-cities` on `,` and builds `<li>` elements.
    Font size is small and muted on purpose (`0.7rem`, `--ink-muted`) so
    the city list reads as secondary detail under the bolder
    `--steel` province name, not competing with it.
  - **City labels enlarged in the SVG itself** — `font-size` 15→20 for all
    9 `<text>` labels baked into `assets/sumatra-map.svg`, with each
    label's background `<rect>` recomputed (not just left as-is) so the
    bigger text doesn't overflow its box: width scales with the label's
    character count (`30 + 12.5 × length`), height 30→40. This is a raw
    edit to the SVG file, not a CSS override — the labels are inside the
    image, unreachable from index.html's stylesheet.
  - **Hit target covers the label too, not just the dot, and responds to
    hover as well as click.** The original `.map-pin` buttons were small
    (28px, later 40px) circles centered exactly on each red dot — hovering
    or clicking the city name text next to the dot did nothing, which felt
    broken once the labels got bigger and more prominent. Each `.map-pin`
    is now a pill sized and positioned to span from the dot to the far
    edge of its label (computed the same way as the SVG label resize:
    `left = cx − 12`, `width = 24 + rect_w`, `top = cy − 20`, `height =
    40`, all converted to percentages of the SVG's `viewBox`), so hovering
    or clicking anywhere over "Palembang" (text or dot) opens the popup.
    Because the hit target's own `left`/`top` no longer mark the dot's
    exact point (they mark the hit box's top-left corner), each button
    carries separate `data-anchor-left`/`data-anchor-top` attributes (the
    original dot-centered percentages) that the JS uses to position the
    popup — don't reuse the button's own `style.left`/`style.top` for popup
    placement, that was a real bug in the first version of this feature.
    Popup now opens on `mouseenter` (not just `click`) and closes on
    `mouseleave`/click-elsewhere/Escape/re-click — click still works for
    touch devices, where hover doesn't fire.
- **Client logo wall:** flat bordered tiles (`--panel` bg, 1px `--warm-divider`
  border, no shadow, no rounded-card-kit look) in a plain grid — proof by
  association, borrowed from Interiologic's logo wall and Studio X's client tiles.
- **Testimonial:** simple quote block, no star ratings (nothing to compare against
  yet — don't fabricate a rating system).
- **Contact band:** `--panel-light` background, WhatsApp + phone CTA, hours,
  address, a real embedded map (see below). Heading is "Have a space in mind?" (was "Ready
  to start?"), lede is "Tell us what you're planning. We'll take it from
  there." (was "Tell us about the space and the deadline — we'll reply the
  same day.") — client's own rewrite, softer/more conversational, and the
  lede now carries a manual `<br>` between the two sentences (client-
  specified line break, not a natural wrap).
  - **Restructured to match a client-supplied reference mockup** (a mono/
    terminal-styled layout: bracket CTA, "Same-day response…" line, "Prefer
    a call?" line, HOURS/ADDRESS side by side). Adopted the *content order*
    and *typography treatment* from that reference, not its literal
    bracket-button style — the CTA stays the site's normal `.btn` pill
    (kept consistent with the rest of the page's button system) rather than
    becoming a one-off `[ text ]` bracket control.
  - **CTA relabeled, twice** — "Chat on WhatsApp" → briefly "Let's Talk →"
    → now **"Tell Us About Your Space →"**, its final, distinct wording.
    See the Copy rules entry for the full current state of CTA wording
    across the page.
  - **New line added: "Same-day response during business hours."** — sits
    between the CTA and the existing "Prefer a call?" line, both now
    styled `.mono.call-note` (IBM Plex Mono, matching the reference's
    monospace treatment) with `letter-spacing: normal` overriding the base
    `.mono` class's wide tracking (that wide tracking is tuned for short
    uppercase labels, not full sentences — applying it here read badly).
    The "Same-day response…" line specifically got a second class,
    `.contact-note`, dropping it to a lighter/more transparent tone
    (`color-mix(ink-muted 55%, transparent)`, ~34% effective opacity) than
    "Prefer a call?" — client asked for it lighter after seeing both at the
    same weight; the phone-number line stays at normal `--ink-muted`
    opacity since it's a functional link and needs to stay legible.
  - **HOURS/ADDRESS now side by side, not stacked** — wrapped in a new
    `.contact-details-row` (`grid-template-columns: 1fr 1fr`) inside
    `.contact-details`, matching the reference's two-column HOURS/ADDRESS
    block. The map area stays full-width below this row.
  - **Real embedded map, replacing the dashed "MAP / office location"
    placeholder** — client gave a Google Maps share link
    (`maps.app.goo.gl/QqtSeoxro9JiaDws6`); resolved it (navigated there,
    read the redirected URL) to get precise coordinates
    (`-2.9457995,104.7776453`) rather than relying on address-string
    geocoding, then embedded via the no-API-key
    `google.com/maps?q=<lat>,<lng>&z=17&output=embed` iframe pattern (`.
    office-map`, 160px tall, bordered/rounded — client asked for it small,
    not full `photo-fill`-sized). If the office ever moves, re-resolve a
    fresh share link the same way rather than guessing new coordinates from
    the address text.
  - **Contact-details value text sized down**: `.contact-details` now sets
    `font-size: 0.9rem` (was inheriting the body default, ~1rem/17px) —
    client found the HOURS/ADDRESS values too large relative to everything
    else in the band.
- **Footer:** dark `--scrim`-toned band, not the parchment bg — a deliberate close,
  echoing Interiologic's dark footer.
- **Clients marquee:** a continuously rolling strip directly under the hero (moved
  up from the original "near the footer" position per client request), bookended
  by two solid `--site-red` vertical bars — the client's own reference screenshot
  (from the Tandem Construction site) for this exact pattern. `.clients-strip`
  padding trimmed 26px→16px (client felt the strip ran taller than a quiet
  transition band needed to be, ~86px total down to ~66px).
  - **Priority order, client-specified:** KFC, Apple, Samsung, Canon, ASUS ROG
    lead the strip, before the rest.
  - **Every logo asset is standardized before it ever reaches the page**: source
    file (SVG rendered via PyMuPDF, or raster) → cropped tight to its actual
    content bounding box (no leftover canvas padding) → rescaled to one common
    working height. This is what actually fixes "logos look different sizes" —
    CSS `object-fit: contain` at a fixed container height only equalizes
    bounding boxes, not the visual weight of the glyphs inside them if the
    source files carry different amounts of padding, which is exactly what was
    happening (OPPO/Vivo). All files in `assets/clients/` are PNG now, for one
    consistent pipeline — don't reintroduce mixed SVG/raster logos without
    re-running them through the same trim step.
  - **The same low-contrast problem isn't limited to pure white.** Hartadinata
    Abadi's mark is pale gold, which grayscales to a light grey barely
    distinguishable from the parchment strip — it got the identical
    every-opaque-pixel-to-dark-grey treatment as the white-only marks below,
    even though it was never technically "white." When adding a new logo,
    check contrast after the `grayscale(1)` filter is applied, not just before —
    a color that reads fine in its native hue can still wash out once desaturated.
  - **A few logos carry individual visual-balance tweaks on top of the shared
    pipeline** — same reasoning each time: nominal container height being
    equal doesn't guarantee equal *visual* weight. `.logo-vivo` (`height: 78%`)
    and `.logo-kfc` (`height: 74%`) both read heavier than their neighbors at
    100%; `.logo-oppo` (`transform: translateY(4px)`) sat visibly high against
    the row's baseline. All three still center vertically via the parent's
    `align-items: center` — these are nudges, not a sign the shared pipeline
    is broken. If another logo reads too big/small/misaligned once it's live,
    add another one-off modifier class rather than reworking the pipeline.
  - **Only genuinely white-only marks are recolored to dark grey**
    (`#3A3A3A`-ish) — currently Skintific, Megaman, MDP. This is done as a
    direct alpha-mask-to-solid-grey-fill from the original source (sample
    corner background color → distance-based alpha mask → fill masked shape
    with grey), not a naive "turn white pixels grey" pass on an
    already-background-removed image — that approach leaves a color-fringe halo
    from the old background's antialiased edge. **Do not apply this recolor to
    multi-color logos** — an earlier pass did that by mistake and turned
    Bingxue's white bear illustration and Federal Oil's white outline strokes
    grey, which was wrong; those are intentional design elements on logos that
    are already visible against parchment, not invisibility bugs. Only recolor
    a mark if it would otherwise be pale-on-pale illegible.
  - `filter: grayscale(1) opacity(0.8) drop-shadow(...)` is still applied
    uniformly for the unified-strip look, but it is polish now, not a
    legibility crutch — visibility is guaranteed at the source (real color or
    the dark-grey recolor above), not by the shadow.
  - **D'Cost now has a real logo** (sourced via the Logopedia/Fandom API,
    since no official D'Cost website could be found). **Tomoro Coffee was
    dropped from the marquee entirely** (client's call) — no real logo was
    ever found for it, and rather than keep it as text the client asked to
    remove it outright. One client (Comforta Hotel) still shows as grayscale
    text — no logo file exists for it. Bingxue's mark is the brand's actual
    circular icon (their own favicon), not the earlier low-quality mascot crop.
  - **Two "MDP" logos were shown by the client but not used**: Universitas MDP
    and MDP Plaza. Only the electronics-superstore MDP is in the marquee — it's
    the one that matches the real client relationship in `VK COMPANY PROFILE.pdf`
    ("MDP Sudirman," "MDP Point," Electronic Store category). The university and
    the plaza are different organizations sharing the "MDP" initials; don't add
    them without the client confirming they're actually clients too.
  - Duplicated once for a seamless loop, edge-masked so items fade in/out under
    the red bars rather than clipping hard.
  - **Cache-busting:** image `src`s carry a `?v=3` query param, and the dev
    server (`.claude/no-cache-server.py`, wired into `.claude/launch.json`)
    sends `Cache-Control: no-store` on every response. Both were added after
    real confusion where updated logo files existed on disk but browsers (both
    the preview tooling's and the client's) kept rendering stale cached
    versions. If a future asset swap silently "doesn't show up," bump the `?v=`
    number before assuming the code is wrong.
- **Areas we serve (map):** a real Sumatra coverage map, not a decorative
  illustration — grouped province/city list beside an inline map with pinned
  hubs, styled directly on a base map from Wikimedia Commons (CC BY-SA 3.0,
  attribution shown under the map). See References.

## Copy rules

- Active voice, plain verbs. "We finish your fit-out on schedule," not "Your
  satisfaction is our commitment."
- **"Chat on WhatsApp" is fully retired — every CTA now has its own
  purpose-specific wording, all client-specified, all still going to the
  same `wa.me` link (except "View Our Work," an in-page anchor):**
  - Nav pill (`.btn-pill-blue`) and hero primary link (`.hero-link`): **"Let's
    Talk →"**. In the hero, "Let's Talk" additionally carries
    `.hero-link-primary` (bigger — 0.7rem→0.8rem, weight 600, a permanent
    `--site-red` underline) so it visibly outranks "View Our Work" — before
    this, both hero links were styled identically and nothing signaled
    which was primary. Don't add `.hero-link-primary` to "View Our Work" or
    remove it from "Let's Talk."
  - Hero secondary link: **"View Our Work"** — no longer "Call us"/`tel:`;
    now an in-page anchor (`href="#work"`) to the `#work`-tagged "Commercial
    project expertise" sector-tabs section, the closest thing this
    single-page site has to a work/portfolio showcase. Don't wire this back
    to a phone number — the label promises a portfolio, a call would be a
    bait-and-switch.
  - Contact band primary CTA (`.contact .btn-cta`): **"Tell Us About Your
    Space →"** — was "Chat on WhatsApp," briefly "Let's Talk →" earlier in
    the same session, now its own distinct wording. This is the only CTA
    with this exact phrase — don't reuse it elsewhere or reuse "Let's Talk"
    here again without being asked.
  - Don't alternate any of these with "Contact us" / "Get in touch" /
    "Reach out," and don't collapse the three back down to one shared
    phrase — the client has now deliberately differentiated CTA wording by
    location (nav/hero entry point vs. contact-band conversion moment vs.
    portfolio link), which is a real decision, not drift.
- Speak to a facilities manager or procurement contact, not a homeowner — specific
  and businesslike, not sales-y.
- Numbers carry the proof (8+ years, 2,700 projects, 150+ clients) — don't also
  wrap them in adjectives like "amazing" or "incredible."
- No filler eyebrows above headings ("OUR SERVICES", "WHO WE ARE"). If a heading
  needs a label to make sense, the heading is wrong.
- Hero lede is one sentence, client-trimmed and then rewritten again: *"Commercial
  fit-outs and interiors, from the first wall to the last piece of signage."*
  (was *"We handle fit-outs and interior design for commercial spaces, from
  the first wall to the last piece of signage."*) — tighter, drops the
  "We handle" framing. The old second sentence (years/projects/schedule promise) is
  gone from the lede — that proof now lives in the stat strip right below,
  where it doesn't repeat. The lede also dropped "and government" — Audience
  still names government decision-makers as a target (see Audience & the one
  job); this was a copy trim, not a confirmed scope change, so don't assume
  government work is out of scope elsewhere on the page.

## Assets plan

No real photography yet — logo arrives tomorrow (red + blue, confirmed). The old
`VK COMPANY PROFILE.pdf` supplied real client names, service area, and contact
details (now wired in — see Conversion essentials), but **no usable photos**: its
portfolio pages are mostly text/category labels, not exportable images. v1
(`index.html`) still ships with placeholder image blocks except the map, which is
a real asset (see Components → Areas we serve).

| Asset | Look | Source |
|---|---|---|
| Logo | **Now real**, `assets/brand/logo-mks.png` — red + blue "M" mark, wired into the nav. Source file was low-res (193×173 JPEG on a white background); processed with the same bg-removal script as the client logos, tight-cropped, padded to a true 1:1 square, and upscaled to 800×800 with clean anti-aliased edges. That's about as good as it gets without a real vector source — if the client has an original AI/EPS/SVG file, swap it in for a sharper result | Client, via `~/Downloads/Logo MKS.jpg.jpeg` |
| Hero photo | Full-bleed, a finished interior mid-use — the wall bay with a laptop docked, or a lightbox glowing — not a construction site. Needs to work under a dark scrim with white text on top | Client to shoot on a recent handover, or staged re-shoot |
| Stats-section photo | A second full-bleed finished-space shot, different from the hero (e.g. the government office), also scrim-compatible | Client's project archive |
| Project case photos | Completed spaces: government office, retail fit-out, hanging signage installed | Client's project archive (2,700 projects — ask for their 6–8 strongest) |
| Client logos | **Now real**, in `assets/clients/` (all PNG, trimmed + height-standardized, see Components → Clients marquee): OPPO, Vivo, Xiaomi, Samsung, KFC, Apple, Canon, ASUS ROG, Philips, Sharp, GraPARI (Telkomsel's logo, stands in for GraPARI), Wedrink, Skintific, MDP, Megaman, Bingxue, Glad2Glow, Federal Oil, Hartadinata Abadi, D'Cost. **Comforta Hotel is the only one left with no findable clean official logo asset** — still shows as grayscale text. Confirm with the client that every logo shown is still a current/nameable client before launch — Comforta Hotel in particular was a demolition/rebuild project in the old profile, not clearly an ongoing brand relationship. | OPPO/Vivo/Xiaomi/Samsung/KFC/Apple/Canon/ROG/Philips/Sharp: Wikimedia Commons (free/official marks). GraPARI: Telkomsel official logo, Wikimedia Commons. Federal Oil: federaloil.co.id. Hartadinata Abadi: hartadinataabadi.co.id. D'Cost: Logopedia (Fandom) via its MediaWiki API — no official D'Cost site was found. Others: each brand's own official website |
| `assets/sumatra-map.svg` | Sumatra coverage map with 9 pinned hubs, restyled to the site palette | Base map: Wikimedia Commons "Sumatra blank map.svg", CC BY-SA 3.0 (attribution credited under the map on-page). Pin placement is illustrative (derived from real lat/long, not surveyed) — good enough for a coverage map, not for turn-by-turn directions |
| Sector photos (×4) | One per tab in "Commercial project expertise": Retail (electronics/beauty store), F&B (café or drink bar), Corporate & Government (office or service center, wall bay in use), Hospitality (hotel lobby or coliving common area) | Client's project archive — one strong shot per sector is enough |
| How-we-work photo | A project lead reviewing drawings on site, or similar — supports the "one team, schedule discipline" copy | Client site visit or existing project photos |

## Conversion essentials

- Primary action everywhere: **WhatsApp click-to-chat** (`wa.me` link with a
  prefilled message like "Hi, I'd like a quote for a fit-out project"). Phone `tel:`
  link as secondary, not primary.
- CTA present in nav (always visible), hero, and footer — never buried mid-page only.
- Tap targets ≥44×44px on mobile; WhatsApp button gets extra padding, not a smaller
  icon-only version.
- Stat strip and proof numbers sit above the fold or immediately after the hero —
  procurement contacts decide credibility fast.
- **Real contact data**, confirmed by the client (mix of the old company profile
  PDF and direct answers — confirm phone numbers are still current before launch,
  since the PDF itself is outdated):
  - **WhatsApp is single-number, everywhere**: nav, hero, and contact band all
    use `+62 812-7323-4788` as the one `wa.me` link. Client explicitly cut the
    second WhatsApp number/button — don't reintroduce a second WhatsApp CTA.
  - **Calling still uses both numbers**: hero's "Call us" button is
    `+62 812-7953-1753` (the other number — deliberately not the WhatsApp one, so
    both numbers stay reachable somewhere on the page); the contact band's
    "Prefer a call?" line lists both `+62 812-7953-1753` and
    `+62 812-7323-4788` as `tel:` links. Names (Selly/Michael) stay off the page
    per the client's earlier request.
  - Address: Komplek Kedamaian Permai 2, Jalan Gajah Blok EE No. 18,
    Palembang, Sumatera Selatan — real text in the contact band (client
    corrected the street/complex word order from an earlier version), now
    rendered on three manual lines (`<br>` after "Permai 2," and again
    after "Blok EE No. 18") rather than two — client asked for the complex
    name and street name to split onto separate lines.
  - Hours: **Mon–Sat, 9:30am–5:30pm** (was 5:50pm — client correction).
  - Hours, client-confirmed: **Mon–Sat, 9:30am–5:50pm** — real text, no longer a
    placeholder.
  - Email `cv_mks@yahoo.com` was in the old profile but is not yet wired into the
    page — add if the client confirms it's still active.

## Anti-patterns

- No stock hard-hat-and-blueprint clichés in hero photography — lead with a
  finished space, not a job site.
- No gradient text, no glassmorphism, no soft grey card-shadow applied uniformly to
  everything.
- No all-caps eyebrow labels above headings — use the lowercase `(Parenthetical)`
  micro-label pattern instead, per Studio X.
- No identical rounded-card grids with uniform shadows (the generic SaaS-card
  look) — logo tiles stay flat, bordered, unshadowed.
- No numbered markers (01/02/03) anywhere on the current page — the one place
  that used them (Process, 01–04) was removed. If a future section is genuinely
  sequential, numbering is fine there; don't add it decoratively.
- No mixing "Chat on WhatsApp" with other CTA wording across the page.
- No star ratings or fabricated review counts.

## References

- Client-supplied reference, Step 1: Tandem Construction — noted for confidence
  and photography scale; superseded by the two references below for actual
  palette/layout direction.
- **[interiologic.com](https://www.interiologic.com/)** — Jakarta-based commercial
  interior design/build firm, very close to Multi Karya Sukses's own positioning.
  Borrowed: full-bleed moody photo hero with overlaid headline, a stat strip laid
  over a second full-bleed photo, and a large client-logo trust wall as the main
  credibility device. Not carried over: its dark-teal-on-white corporate palette —
  Multi Karya Sukses uses its own logo colors and a warm parchment ground instead.
- **[thisisstudiox.com](https://www.thisisstudiox.com/)** — Hong Kong/Singapore
  commercial interior design studio. Borrowed: warm cream/parchment background,
  large serif headlines, real architectural photography given room to breathe,
  lowercase `(Parenthetical)` micro-labels instead of all-caps eyebrows, and
  numbered process rows (01/02/03…) for a real sequence. Not carried over: its
  orange accent (Multi Karya Sukses's accent is its own logo red) and its
  drag-carousel interaction (out of scope for this build).
- Client's own scene, still grounding imagery choices: a wall bay holding a
  laptop, a lit lightbox, hanging signage, and a newly renovated government
  office — finished-space moments, not construction-site moments.
- Logo: red + blue "M" mark — arrived and wired in, see Assets plan.
- **`VK COMPANY PROFILE.pdf`** — an old (client's words) company profile,
  authored by "Visual Konstruksi." Source of: the real trading-name discovery
  above, the real services list (construction/renovation, furniture/interior,
  advertising & branding/signage), the real client roster now in the marquee, the
  Sumatra-wide/Palembang-based coverage area, and the real contact details in
  Conversion essentials. Its own "AREA KAMI" page (a labeled Sumatra map with
  province groupings) is the direct model for the Areas We Serve section.
- **"Sumatra blank map.svg"**, Wikimedia Commons, CC BY-SA 3.0, attribution
  required — base geography for `assets/sumatra-map.svg`. Recolored to the site
  palette (landmass `--panel`, coastline `--steel`, province lines
  `--warm-divider`); pins and labels added on top. Attribution is credited in a
  small caption under the map on-page — don't remove it.
- Client-supplied reference (construction-company site, logo "MES") for two
  patterns now in the page: the sector-tab "Commercial project expertise"
  section (tabs + oversized watermark behind a photo) and the "How we work"
  diagonal-step connector line joining two principles. Both borrowed as
  *mechanics*, not palette — their dark navy/purple scheme is not used; ours
  (parchment/steel/site-red) is throughout. This reference also replaced the
  old numbered-row "Process" section, which is removed.

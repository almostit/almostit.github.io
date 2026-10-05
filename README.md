# Almost It? — official website

Static, bilingual pre-launch website. No build step, package manager, runtime dependency, analytics or backend.

## Pages

French: `/`, `/support/`, `/privacy/`, `/terms/`, `/legal/`.
English: `/en/`, `/en/support/`, `/en/privacy/`, `/en/terms/`, `/en/legal/`.
Each language has real HTML, metadata, canonical URLs and alternate-language links.
Firebase serves root `404.html` for missing paths: it includes both FR and EN recovery text, even without JavaScript. `en/404.html` also provides a dedicated English recovery page. Missing routes keep HTTP 404; no SPA rewrite is used.

The home entry detects French/English from the browser or the locally saved choice.
The language links keep the current page. Explicit deep links keep their language.
The only browser storage used is `almost-it-site-language`. Navigation and page content also work without JavaScript.

## Local Firebase Hosting preview

The local Hosting configuration targets the existing project/site `almost-it`.
The candidate public origin is https://almost-it.web.app. Canonical, hreflang,
Open Graph, robots and sitemap references use this origin.
Changed CSS/public configuration use a dated asset query to avoid stale browser caches.
The content in this checkout has NOT been deployed there. Publication requires
a separate explicit approval after review. No automatic GitHub deployment is configured.

Use Firebase CLI with a supported Node runtime (Node 24 was used for local QA):
`firebase emulators:start --only hosting --project almost-it --config /absolute/path/to/ALMOST-IT-SITE/firebase.json`
Run from a temporary directory to keep CLI logs outside this repository.
Open `http://127.0.0.1:5005/?lang=fr` or `http://127.0.0.1:5005/en/`.
The emulator binds to loopback only. Hosting has no frontend SDK or other Firebase service.
The public directory remains `.`. Upload exclusions cover dotfiles and dot-directories,
Markdown, logs and node_modules. The local emulator can serve ignored paths, so use
the CLI's upload-file selection separately when auditing publication exclusions.

## Configuration for a later launch

`assets/config.js` contains only public settings:
- `appStore`: `status: "coming-soon"`, `url: null` until the real public Almost It? App Store listing exists.
- `googlePlay`: the same settings; visible now, unavailable until the Android listing exists.

Both stores appear under the hero artwork and in the bottom download section, in FR/EN. Unavailable cards are plain text with decorative platform icons, not links or disabled buttons; they do not enter the keyboard tab order. Their static HTML fallback also works without JavaScript.

To activate a platform, edit **only its entry in `assets/config.js`**: set `status: "available"` and paste the verified public Almost It? listing URL into `url`. Both placements automatically become real, labelled download links with the exact same URL and visible keyboard focus. No HTML change or separate per-language URL is needed. Never activate a store before checking the real listing. HTTPS store listing paths are required (`apps.apple.com` / `play.google.com`); absent/invalid URLs or any other status leave the cards unavailable. Verify FR/EN and both placements after activation. Keep the other platform unavailable until its own release.

Other configuration:
- `contact`: an explicitly approved dedicated email or HTTPS form URL. No delivery service is included.

Support is `almostit.app@gmail.com`; HTML mail links work without JavaScript.
Legal, Privacy, Terms and Support are complete local FR/EN candidates for review.
Store availability remains unchanged and unavailable before launch.

## Legal-content review record — 5 October 2026

Professional facts and product scope were supplied by the owner under the v152 task.
No administrative documents or non-public identifiers are included.
Sources checked: French Consumer Code L224-25-12–L224-25-26, D211-1,
D211-3/D211-4 and their annexes on Légifrance, official Apple purchase/privacy
information, CNIL, CM2C and Google/Firebase documentation.

- Lifetime: D211-3 is retained for the one-off supply of the permanent unlock and
  locally provided catalogue, not merely because payment happens once. The two-year
  conformity guarantee does not set an expiry date for Lifetime access or remove
  the statutory obligation to provide necessary updates for the expected period.
- Monthly: D211-4 covers continuous supply throughout the active subscription.
  Only the model's `X` values are replaced by the full continuous supply period,
  including the initial subscription and all monthly renewals until its effective end.
- Both French statutory notices are reproduced in full on both Terms pages.
  English explanations accompany the notices; they are not presented as official translations.
- The statutory guarantee also applies to no-price offers where legal conditions
  are met; Free's advertising-funded business model is explained.
- H2 live UMP validation is a separate step after approved Privacy publication.
  Nothing in this website task verifies live consent or changes the app.
- Review the Lifetime contractual classification if the product becomes a continuously
  supplied remote service. No future monthly content, hosting duration or unsupported
  compatibility version is promised here.
- Before store launch, review the actual Apple transaction withdrawal path and the
  allocation of duties under Consumer Code L221-21 (online withdrawal functionality,
  effective 19 June 2026). This marketing site itself does not conclude or bill purchases;
  no claim is made here that a live purchase/withdrawal flow was tested.
- App URLs must only be migrated in a later authorised task after public deployment.

Regulatory sources:
https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000044132865/
https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032807190/
https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045981318
https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045981322
https://firebase.google.com/support/privacy
https://developers.google.com/admob/ios/privacy/data-disclosure

## Assets and privacy

The approved app icon artwork (`assets/icon.svg`, `assets/icon.png`) is reused unchanged.
`assets/app-store.svg` and `assets/google-play.svg` are decorative platform symbols in custom availability cards; these cards are not official downloadable store badges.
All website HTML/CSS/JavaScript is written for this separate site. System fonts only.
No app source, catalogue, internal document, credential, personal email or build belongs here.
No open-source licence is granted by this repository.

## Local v153 review — 5 October 2026

The v153 MASTER corrections take precedence over the older CM2C contact repeated
in the review prompt. Public pages use CM2C’s filing link, postal address and phone;
the unverified previous email and internal membership expiry have been removed.
Apple Distribution International’s merchant-of-record role and statutory remedies
against Apple are preserved. Apple’s withdrawal period runs from receipt; it covers
the initial subscription, not automatic renewals, separately from cancellation.
RNE registration is explicitly tied to the supplied SIREN.

Address and telephone use `.legal-meta` at 0.875rem, with readable contrast, plain
text links and no hidden content or JavaScript dependency. Support prioritises email
and links to the Legal notice for business coordinates. Full guarantee contact
details remain in Terms under D211-1. No address or telephone is added to marketing
metadata or footers. Product copy and all 14 FAQs per language are preserved.

Additional sources checked:
https://www.cm2c.net/comment-nous-saisir.php
https://www.apple.com/legal/internet-services/itunes/fr/terms.html

Still local only: no commit, push, deploy or preview channel.

# Almost It? — official website

Static, bilingual pre-launch website. No build step, package manager, runtime dependency, analytics or backend.

## Pages

French: `/`, `/support/`, `/privacy/`, `/terms/`.
English: `/en/`, `/en/support/`, `/en/privacy/`, `/en/terms/`.
Each language has real HTML, metadata, canonical URLs and alternate-language links.
`404.html` and `en/404.html` provide recovery navigation.

The home entry detects French/English from the browser or the locally saved choice.
The language links keep the current page. Explicit deep links keep their language.
The only browser storage used is `almost-it-site-language`. Navigation and page content also work without JavaScript.

## Local preview

Run `python3 -m http.server 8765 --bind 127.0.0.1` from this directory.
Open `http://127.0.0.1:8765/`.

## Deployment

GitHub Pages publishes `main` from the repository root. `.nojekyll` keeps the files static.
Production URL: https://almostit.github.io/

## Configuration for a later launch

`assets/config.js` contains only public, initially empty settings:
- `appStore`: `status: "coming-soon"`, `url: null` until the real public Almost It? App Store listing exists.
- `googlePlay`: the same settings; visible now, unavailable until the Android listing exists.

Both stores appear under the hero artwork and in the bottom download section, in FR/EN. Unavailable cards are plain text with decorative platform icons, not links or disabled buttons; they do not enter the keyboard tab order. Their static HTML fallback also works without JavaScript.

To activate a platform, edit **only its entry in `assets/config.js`**: set `status: "available"` and paste the verified public Almost It? listing URL into `url`. Both placements automatically become real, labelled download links with the exact same URL and visible keyboard focus. No HTML change or separate per-language URL is needed. Never activate a store before checking the real listing. HTTPS store listing paths are required (`apps.apple.com` / `play.google.com`); absent/invalid URLs or any other status leave the cards unavailable. Verify FR/EN and both placements after activation. Keep the other platform unavailable until its own release.

Other configuration:
- `contact`: an explicitly approved dedicated email or HTTPS form URL. No delivery service is included.

The contact channel is not open yet. Privacy and Terms are clearly marked as pending.
Before external beta / launch, replace these notices with final approved texts and activate a real contact channel.
Do not use these holding pages as final App Store support/legal documents.

## Assets and privacy

The approved app icon artwork (`assets/icon.svg`, `assets/icon.png`) is reused unchanged.
`assets/app-store.svg` and `assets/google-play.svg` are decorative platform symbols in custom availability cards; these cards are not official downloadable store badges.
All website HTML/CSS/JavaScript is written for this separate site. System fonts only.
No app source, catalogue, internal document, credential, personal email or build belongs here.
No open-source licence is granted by this repository.

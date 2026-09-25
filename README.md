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
- `appStore`: real Apple URL and approved local official badge files for both languages.
- `googlePlay`: same arrangement, hidden until an Android release exists.
- `contact`: an explicitly approved dedicated email or HTTPS form URL. No delivery service is included.

The contact channel is not open yet. Privacy and Terms are clearly marked as pending.
Before external beta / launch, replace these notices with final approved texts and activate a real contact channel.
Do not use these holding pages as final App Store support/legal documents.

## Assets and privacy

Only the approved app icon artwork (`assets/icon.svg`, `assets/icon.png`) is reused.
All website HTML/CSS/JavaScript is written for this separate site. System fonts only.
No app source, catalogue, internal document, credential, personal email or build belongs here.
No open-source licence is granted by this repository.

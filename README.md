# Alem Crypto — Static portfolio

Static website for GitHub Pages. Uses HTML, CSS, JavaScript and JSON only; no PHP, database or admin panel.

## Publish on GitHub Pages
1. Create a GitHub repository (for example `alem-crypto`).
2. Upload the contents of this folder to the repository root. `index.html` must be at the root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Wait for GitHub to publish the site. The URL will appear on the Pages settings screen.

## Edit content
- `data/projects.json` — crypto projects. Set `published` to `true` to show a project.
- `data/my-projects.json` — your own projects.
- `data/portfolio.json` — portfolio items. Upload images into `assets/portfolio/` and set `image` to e.g. `assets/portfolio/example.jpg`.
- `data/links.json` — social and platform links.
- `data/support.json` — donation wallets. Add only public wallet addresses you have verified.
- `about.html` — edit your biography directly.

## Notes
- GitHub Pages serves static files, so data JSON is fetched by the browser. Test using the published site or a local web server; opening the HTML as `file://` may block JSON requests.
- Replace example links and text before publishing.
- Never publish seed phrases or private keys.

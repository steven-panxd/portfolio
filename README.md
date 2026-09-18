# pan.xuedo.ng — Personal site

Single-page portfolio. Static HTML/CSS, zero dependencies, self-hosted fonts.

- `index.html` — the page
- `fonts/` — IBM Plex (SIL Open Font License 1.1, see `fonts/OFL.txt`)

Deployed via Cloudflare Workers static assets → https://pan.xuedo.ng

`node scripts/build.cjs` copies only public site assets into `dist/`. Wrangler runs this build before deployment; Git integration uses `npx wrangler deploy` for production and `npx wrangler versions upload` for preview builds.

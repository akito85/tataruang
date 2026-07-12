# TATARUANG v2

Static marketing site for TATARUANG — renovation cost estimation and contractor platform.

## Pages

- `index.html` — home
- `portfolio.html` — before/after project gallery
- `about.html` — about / team
- `blog.html` — journal / articles
- `contact.html` — contact / RAB estimate

Shared content lives in `tataruang-data.js` (projects, posts, testimonials, team). Shared runtime/component logic lives in `support.js`.

## Running locally

**Do not open the HTML files directly from disk (`file://...`).** Each page loads its content via a dynamic ES module import:

```js
const mod = await import(new URL('tataruang-data.js', document.baseURI).href);
```

Browsers only allow this `import()` fetch over `http:`/`https:` — `file://` is blocked by CORS, so the import silently fails, `tataruang-data.js` never loads, and every data-driven section (project gallery, blog list, testimonials, team) renders empty. On `portfolio.html` this is most visible: the horizontal scroll gallery has no cards and never gets wired up, since its GSAP/ScrollTrigger setup also bails out when data hasn't loaded.

Serve the folder over HTTP instead, for example:

```bash
python3 -m http.server 8000
```

then open `http://localhost:8000/index.html`. Any static host (Netlify, Vercel, GitHub Pages, Nginx, etc.) works the same way once deployed — the restriction only applies to opening the file straight from disk.

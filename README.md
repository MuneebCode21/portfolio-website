# Your Name — Portfolio

A small, static portfolio site: three pages, plain HTML/CSS/JS, no build step, no dependencies. Made to be opened straight in VS Code and pushed to GitHub Pages.

## Files

```
portfolio-website/
├── index.html          Home — big name, one-line intro, three featured projects
├── about.html          Get to know me — bio, skills, experience
├── projects.html       All projects
├── css/style.css       Everything visual — colors and type are CSS variables at the top
├── js/script.js        Three behaviours: the full-screen menu, back-to-top, footer year
├── assets/favicon.svg  Placeholder favicon (just a letter on a color)
└── README.md
```

## Open it locally

Just open `index.html` in a browser — no server or build step needed. In VS Code, the "Live Server" extension gives you auto-reload while you edit, but it's optional.

## Make it yours

Everything worth changing is marked `<!-- EDIT: ... -->` in the HTML. In short:

- **Name & role** — top of `<main>` in `index.html`, and the `masthead-id` link at the top of every page.
- **Bio** — `about.html`, the two paragraphs in `.about-copy`.
- **Skills list** — `about.html`, the `.plain-list`.
- **Experience** — `about.html`, the `.row-list` in the Experience section.
- **Projects** — `projects.html` for the full list, and the first three `.row-item` entries in `index.html` for the home page preview. Each `.row-thumb` is an empty placeholder box; swap it for a real image once you have one: `<img src="assets/your-image.jpg" alt="Screenshot of ...">`.
- **Email & social links** — the footer on every page, and the menu overlay inside `<nav id="siteMenu">`. Social links are `#` until you add real profile URLs.
- **CV download** — `about.html` links to `assets/resume.pdf`, which isn't included. Add your own PDF there, or remove the button.
- **Colors & type** — the `:root` block at the top of `css/style.css`. Everything else references those variables, so changing `--accent` there changes it everywhere at once.
- **Favicon** — `assets/favicon.svg` is just a letter on a color; edit the letter or the colors directly in that file.

## Deploy to GitHub Pages

1. Create a new repository on GitHub and push these files to the `main` branch, with `index.html` at the repo root (not inside a subfolder).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to "Deploy from a branch," pick `main` and `/ (root)`, then save.
4. GitHub gives you a `https://<username>.github.io/<repo-name>/` address — it usually takes a minute or two to go live.

There's no build step, so there's nothing else to configure.

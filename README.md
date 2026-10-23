# Cstoney420 starter website

A portable, static website made with plain HTML, CSS, and JavaScript. No build step or framework required.

## Files

- `index.html` — page content and sections.
- `styles.css` — colors, layout, responsive design, and visual styling.
- `script.js` — mobile navigation, current footer year, and YouTube video loader.

## Preview on your computer

Open `index.html` in a browser. Most features work directly from the file. For a more realistic local preview, use a simple local web server, such as VS Code's Live Server extension or Python's built-in server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing

1. Replace `hello@example.com` in `index.html` with a public email address you want to use.
2. Replace the sample text with your own bio, articles, and links.
3. The video section starts with a sample YouTube embed. Use the input on the page to load another video, or change the iframe URL in `index.html`.
4. Review every claim and link before making the site public.

## Publish with a static host

This folder can be uploaded to any static web host that serves HTML files. A beginner-friendly route is GitHub Pages:

1. Create or sign in to a GitHub account.
2. Create a new repository named `cstoney420-site` (public is simplest for GitHub Pages).
3. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository's top level.
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment option, select **Deploy from a branch**; choose `main` and `/(root)`, then save.
6. Wait for the Pages deployment to finish. GitHub will show the published URL in **Settings → Pages**. It usually resembles `https://YOUR-USERNAME.github.io/cstoney420-site/`.

Hosting interfaces can change, so follow the current labels shown in your account. A public URL is not created until the host finishes deploying the files.

## Domain name

A custom domain is optional. Buy one from a domain registrar, then follow the static host's custom-domain instructions and configure the DNS records it specifies. Keep a local backup of these files and your domain registrar login details.

## Important notes

- The site is static: it does not include a server, database, account system, or working contact form. The email link opens the visitor's email app.
- YouTube embeds are served by YouTube; some videos prohibit embedding. The privacy-enhanced `youtube-nocookie.com` domain is used here.
- Hosting providers may have acceptable-use rules. Check the current terms for your content and location before publishing.

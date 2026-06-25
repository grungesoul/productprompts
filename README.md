# ProductPrompts — a prompting guide for product leaders

A free, model-aware prompting reference. Prompting isn't one-size-fits-all:
each model — and each new version — rewards a different style. This is the quick
reference for getting the output you actually expect from **Claude, ChatGPT, and
Gemini**, framed for **product work** — and built to spend **fewer tokens**.

Built by [David Jordan](https://www.linkedin.com/in/davidjordansoro), Product Coach.

---

## What's inside

- **The models** — today's flagships, each with its prompting quirks, a
  copy-paste product example, and a "David's take." Every model carries a
  **last-verified date**, because models change weekly.
- **Product prompt patterns** — PRD critique, interview synthesis, roadmap
  pressure-test, competitive scan, discovery→options, product comms. Each comes
  with **model-tuned variants** and a note on *why* a variant is leaner or more
  reliable.
- **Best practices** — five model-agnostic habits that make every prompt better.

## Tech

[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), built to
a static site and deployed to **GitHub Pages** via GitHub Actions. Free to host,
no backend, no tracking.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # preview the production build
```

## Deploy (one-time setup)

1. Push this repo to GitHub (public).
2. Edit the two lines at the top of `astro.config.mjs` — `SITE` and `BASE` —
   to match your username and repo name.
3. In **Settings → Pages → Build and deployment**, set **Source: GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and
   publishes automatically. It's free for public repos.

---

## ✶ Keeping it fresh (the 10-minute ritual)

Freshness is the whole value of this guide. Models churn — flagships launch,
get renamed, and occasionally get pulled. When something changes:

1. Open the model in **`src/data/models.yaml`**.
2. Check the provider's official page (the `source_url` on each model).
3. Fix any changed field (pricing, `status`, context window, name).
4. **Bump `last_verified`** to today's date (`YYYY-MM-DD`). The UI turns this
   into a badge — and flags any model not re-checked in 45+ days.
5. Add a line to **`CHANGELOG.md`**. Commit. The site redeploys itself.

To add or remove a model, add/delete its block in `models.yaml` — no code
changes needed.

## ✎ Make the commentary yours

The **"David's take"** fields in `models.yaml` and the pattern files
(`src/content/patterns/*.yaml`) are the un-copyable part of this guide. They
ship as starter drafts — rewrite them in your own voice with your real
experience. That's what turns a reference table into *your* point of view.

## License

MIT — use it, fork it, share it.

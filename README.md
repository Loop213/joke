(# Jock — Simple Joke App)

This is a small React app that fetches random jokes from the Official Joke API and displays them.

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Project structure

- `src/` — React source files (`App.jsx`, `Jocker.jsx`, etc.)
- `public/` — static assets
- `.gitignore` — files ignored by git

## How to push to GitHub

If you haven't created a repository on GitHub, create one (for example: `Loop213/Jokes`).

Then in this folder run:

```bash
git init                # only if this folder is not already a git repo
git add .
git commit -m "Add project files and README"
git branch -M main
git remote add origin https://github.com/Loop213/Jokes.git
git push -u origin main
```

If the remote already contains a README or commits, you may need to pull first:

```bash
git pull origin main --allow-unrelated-histories
# resolve conflicts if any, then
git push -u origin main
```

## Contributing

Feel free to open issues or PRs. For local development, make changes in a feature branch and open a pull request against `main`.

---
Generated README updated locally by the assistant.


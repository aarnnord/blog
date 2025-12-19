# DevChronicles Blog Theme

A modern, dark-themed Jekyll blog ready for GitHub Pages.

## 🚀 Quick Start (Local Development)

1. **Install Prerequisites**: You need Ruby and Bundler installed.
2. **Install Dependencies**:
   ```bash
   bundle install
   ```
3. **Run Locally**:
   ```bash
   bundle exec jekyll serve
   ```
4. Open `http://localhost:4000` in your browser.

## 🌍 Deployment to GitHub Pages

1. **Push Code**: Push this entire repository to GitHub.
2. **Settings**:
   - Go to your Repository -> **Settings** -> **Pages**.
   - Under **Build and deployment**, select **Source** as `Deploy from a branch`.
   - Select `main` (or `master`) branch and `/root` folder.
   - Click **Save**.
3. **Wait**: The Action will run. In a few minutes, your site will be live.
4. **Update Config**:
   - Edit `_config.yml`.
   - Set `url` to your GitHub Pages URL (e.g., `https://username.github.io`).
   - Set `baseurl` if you are not using a custom domain (e.g., `/repo-name`).

## ✍️ How to Write Posts

1. Create a file in `_posts/` with the format `YYYY-MM-DD-title.md`.
2. Add Front Matter at the top:
   ```yaml
   ---
   layout: post
   title: "My New Post"
   date: 2024-05-21 12:00:00 +0000
   categories: tech
   tags: [coding, life]
   excerpt: "A short summary for the card."
   ---
   ```
3. Write your content in Markdown below the `---`.

## 🎨 How to Customize

- **Colors & Fonts**: Edit `_sass/_variables.scss`. this is the source of truth for the dark theme.
- **Site Info**: Edit `_config.yml` (Title, Description, Author).
- **Navigation**: Edit `_includes/header.html`.
- **Layout**: Edit files in `_layouts/`.

## 🔍 Features Included

- **Dark Theme**: Optimized for developer eyes.
- **Tags System**: Posts grouped by tag.
- **Search**: Client-side JS search (instant results).
- **RSS Feed**: `feed.xml` auto-generated.
- **Syntax Highlighting**: Rouge enabled.

# Soundravalli's Recipes

A clean, categorized, and searchable recipe book featuring traditional and modern recipes.

## Features
- **Categorized View:** Recipes are grouped into logical categories like Rice and Tiffin, Sweets, and Pickles.
- **Dynamic Search:** Find recipes by name (English/Tamil), category, or ingredients.
- **Portion Adjustments:** Built-in servings calculator that automatically scales ingredient quantities.
- **Markdown Aesthetic:** A clean, typography-focused design inspired by technical documentation.
- **Responsive Design:** Optimized for desktops, tablets, and mobile phones.
- **Source Included:** Includes the original handwritten Tamil recipes in PDF format.

## Local Development

Due to the use of JavaScript `fetch()` for loading recipe data, you **must** use a local web server to view the site locally.

1.  **Start a server** in the project directory:
    ```bash
    # Using Python
    python3 -m http.server 8000
    ```
2.  **Open** `http://localhost:8000` in your browser.

## Deployment to GitHub Pages

1.  Create a new repository on GitHub.
2.  Push all files to the `main` branch.
3.  Go to **Settings** > **Pages**.
4.  Set the source to **Deploy from a branch** and select `main` / `/ (root)`.
5.  GitHub will build the site and provide you with a URL (usually `https://your-username.github.io/soundravalli_recipes/`).

## Project Structure
- `index.html`: The main landing page and recipe list.
- `recipe.html`: Template for displaying individual recipe details.
- `style.css`: Modern, minimalist styling with Facebook Blue accents.
- `script.js`: Core logic for data fetching, searching, and ingredient scaling.
- `recipes/`: Directory containing individual recipe JSON files.
- `recipes/index.json`: The index that powers the front-page listing.
- `photo.jpeg`: Author's profile photo.
- `reciepes_original.pdf`: Source material (handwritten Tamil recipes).
- `GEMINI.md`: Project mandates and design standards.

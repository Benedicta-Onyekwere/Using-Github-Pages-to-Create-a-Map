---
name: csv-visualizer-app
description: Create and publish standalone web applications to visualize custom CSV data using PapaParse and Chart.js on GitHub Pages with unique URLs.
---

# CSV Visualizer App Skill

## Purpose
This skill automates the creation of professional, dark-mode web applications that read, inspect, and visualize any user-uploaded CSV file. It ensures data is presented in a structured table and optionally through interactive charts.

## Workflow

### 1. File Preparation
- Identify the target CSV file.
- Check the CSV headers to understand the data structure.

### 2. Application Design
- Use the **Dark Mode** aesthetic (Deep Navy: `#0f172a`, Indigo: `#818cf8`).
- Integrate **PapaParse** for browser-side CSV reading.
- Include a "← Return Home" button linking to `index.html`.
- For visualizations, use **Chart.js**.

### 3. Unique URL Implementation
- To create a "separate URL" within the same GitHub Pages site, always use a **unique filename** for the HTML file (e.g., `survey_results.html`, `health_data_view.html`).
- The live URL will be: `https://[username].github.io/[repo]/[filename].html`

### 4. Publishing Process
- **Main Branch**: Always commit to the `main` branch.
- **Data Force-Add**: Since `.csv` files are often ignored, always use `git add -f [filename].csv`.
- **Deployment**:
  ```bash
  git add [new_app].html
  git add -f [data].csv
  git commit -m "Publish new data visualization app: [filename]"
  git push origin main
  ```

## Technical Standards
- **Font**: 'Plus Jakarta Sans' or 'Inter'.
- **Responsive**: Ensure the table/cards work on mobile devices.
- **Local Processing**: Data should be processed in the user's browser, not a server.

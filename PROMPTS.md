# Project Prompt History: Global Flood Archive & Liberia Risk Assessment

This document serves as a chronological log of the prompts and tasks used to develop this workspace. It tracks the evolution from initial mapping to complex risk analysis and statistical dashboards.

---

## **Project 1: Liberia Health & Flood Risk Assessment**
*Goal: Overlapping health infrastructure with historical flood data to identify sites at risk.*

1.  **Global Foundation:** "I have a `floods.geojson` file. Create a global Leaflet map (`index.html`) to show these events with popups for country and date."
2.  **Liberia Localization:** "I want to focus only on Liberia. Write a script (`filter_liberia.py`) to extract Liberia-only data into `liberia_floods.geojson`."
3.  **Infrastructure Overlay:** "Bring in Liberia’s health facility data (`liberia_health_facilities.geojson`). Create a map that shows both the floods and the health sites together."
4.  **Spatial Risk Analysis (The Overlap Ask):** "I need to know which hospitals are in danger. Write a script (`filter_at_risk.py`) to calculate the overlap and identify health sites within 5km of a flood zone. Save these as `at_risk_health_facilities.geojson`."
5.  **Building the Risk Dashboard:** "Create `liberia.html`. This should be a specialized map where **At-Risk sites overlap with flood zones**. Use bold red markers for at-risk sites, cluster the other health sites, and size flood markers by their Severity (High/Medium/Low)."
6.  **GeoJSON to CSV (Export):** "I want to clean the flood data manually in Excel. Write a script (`convert_floods_to_csv.py`) to turn the Liberia flood data into a CSV file."
7.  **Data Re-Import Logic:** "Create a script (`convert_to_geojson.py`) that can turn a cleaned CSV back into a map-ready GeoJSON file when I'm finished."

---

## **Project 2: Gender-Based Violence (GBV) Mapping**
*Goal: A specialized session focusing on social indicators in Grand Cape Mount County.*

8.  **GBV Research:** "I need open-source data sets on gender-based violence in Grand Cape Mount County, Liberia. What is available?"
9.  **Beginner-Friendly Map:** "Using the GBV data found, build a map using **Leaflet**. Download the boundaries and statistics and publish it to GitHub Pages."
10. **Custom Data Enrichment:** "Add specific indicators like FGM prevalence (71%), Spotlight County status, and the location of the Robertsport One-Stop Center into the map."
11. **Center & Zoom Fix:** "The map is showing the whole world; fix it so it automatically zooms into the Grand Cape Mount boundary on load."

---

## **Project 3: Flood Archive Statistical Dashboard**
*Goal: Finalizing the project with high-level statistical charts using cleaned data.*

12. **Chart Analysis:** "I have uploaded a cleaned `floodarchive_cleaned.csv`. Build a new `dashboard.html` using **Chart.js**. Create four cards: (1) Top 20 Countries, (2) Events per Year, (3) Events by Category, and (4) Total Displaced by Severity."
13. **Final Publication:** "Ensure the cleaned data file is pushed to GitHub even if it's ignored by project settings, and provide the live link to the new dashboard."

---

## **Project 4: Project Landing Page & Navigation Hub**
*Goal: Create a professional home page to tie all maps and tools together.*

14. **Landing Page Request:** "I want a landing page for my project that is the main page when someone visits my GitHub Pages site. It should have: a title and short description, a section listing the datasets used with metadata, and a top navigation menu linking to the map page, the charts page and the csv upload web app."
15. **Uploader Web App:** [Included as part of the Landing Page task] Build a CSV Tools page (`uploader.html`) that allows for local CSV inspection via a web interface.

---

## **Project 5: Professional UI & Navigation Redesign**
*Goal: Elevate the visual quality of the project and ensure easy navigation.*

20. **Professional UI & Navigation:** "Can you make it look very professional and add individual buttons to make it return back?"
    *   *Result:* Redesigned `index.html` with a modern "Slate & Indigo" theme, updated `uploader.html` to match, and added consistent "Return to Home" buttons across all four sub-pages (`gbv_map.html`, `liberia.html`, `dashboard.html`, `uploader.html`).

---

## **Workspace Maintenance & Automation**

16. **Audit & Cleanup:** "Clean up the directory because there are many repeated files, but go through each one carefully before removing them."
17. **Safety Verification:** "Check and confirm the sizes and purposes of these files (raw vs. intermediate) one last time before I proceed with the deletion."
18. **Initial Documentation:** "Can you give me all the prompts I've used from the very beginning? I want to document them in a Markdown file."
19. **Auto-Update Directive:** "I want you to always automatically update the prompts.md file without my telling you to all the time, can you do that?"

---

## **Future Project Prompts**
*Add your new project prompts below to keep this log updated.*

- [Placeholder for next project]

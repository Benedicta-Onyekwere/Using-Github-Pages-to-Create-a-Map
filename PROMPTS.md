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

## **Project 6: Branding & Visual Identity Refinement**
*Goal: Correct the project scope from "Liberia Analysis" back to "Global to Local" and improve aesthetics.*

21. **Scope & Aesthetic Correction:** "Why did you label it liberia analysis? it was a global flood map before i now narrowed it to liberia. Then it doesnt really look nice."
    *   *Result:* Rebranded to **"Global Flood Archive & Liberia Risk Study"**. Redesigned `index.html` with a modern "Plus Jakarta Sans" font, a visual "Journey Flow" graphic, and high-impact cards that show the transition from Step 1 (Global) to Step 3 (Community).

---

## **Project 7: Vibrant Color-Coded Interface**
*Goal: Use modern colors and gradients to make the project more visually appealing.*

22. **Color Enhancement:** "Yes it is ok but can you add colours to the home page so it looks better."
    *   *Result:* Introduced a vibrant, step-by-step color palette (Emerald, Amber, Rose). Added gradients to the hero section, glassmorphism-inspired cards with top-accent borders, and improved button styling.

---

## **Project 8: Professional Dark Mode Interface**
*Goal: Revert to the structured journey layout but apply a high-end Dark Mode theme.*

23. **Dark Mode Redesign:** "No revert it to previous and instead use dark mode."
    *   *Result:* Reverted to the "Step-by-Step" flow design and implemented a **Dark Mode** theme using a Deep Navy (`#0f172a`) and Indigo (`#818cf8`) palette. Used glassmorphism for cards and high-contrast text for professional clarity.

---

## **Project 9: Visual Consistency Across Tools**
*Goal: Ensure all sub-pages match the high-end Dark Mode aesthetic.*

24. **Consistency Fix:** Updated the `uploader.html` (CSV Tools) page to use the same Deep Navy, Indigo, and Glassmorphism theme as the landing page for a seamless user experience.

---

## **Project 10: Custom Capability Documentation (Skill Creator)**
*Goal: Formalize the CSV uploader workflow into a reusable agent skill.*

25. **Skill Documentation:** "Document as a skill the design and functionality of the web app that visualises my own CSVs that I upload... Include the process for publishing: GitHub pages, main branch, and separate unique URLs."
    *   *Result:* Created `csv-visualizer-app.skill`. This skill packages the Dark Mode templates, PapaParse integration, and specific GitHub Pages deployment rules (unique filenames and force-adding CSVs) for future reuse.

---

## **Project 11: Advanced Visualization Design (Next.js Inspiration)**
*Goal: Design a high-end, professional geodata visualizer based on user-uploaded source code.*

26. **Pro Visualizer Design:** "i just uploaded a folder, document and design the functionality of the webapp that visualizes my own csv that i uploaded so that i can ask you to create it."
    *   *Result:* Created a design specification for **"FloodArchive+ Pro Visualizer"**. This app integrates the sophisticated UI of the uploaded `b_uSxzlLWalA6` folder (Next.js/Tailwind style) with the user's flood and health data. Features include a dynamic stats engine, synchronized data table, and a browser-side CSV dropzone for instant mapping.

---

## **Project 12: High-End Interactive Implementation**
*Goal: Finalize and build the "Pro" version of the visualizer using Leaflet.*

27. **Full Pro Build:** "Add all effects and build the map using leaflet and publish it."
    *   *Result:* Built `pro-visualizer.html`. Features include a dynamic sidebar with live statistics (Total Dead, Displaced), a flight-animated map (flyTo), interactive CSV dropzone, and synchronized data tables. Integrated into the main landing page.

---

## **Project 13: Debugging & Optimization**
*Goal: Fix the "stuck" loading screen on the Pro Visualizer.*

28. **Visualizer Fix:** "Why is it not showing i mean the pro visualizer link or does it take long to open? its just showing crunching climate data."
    *   *Result:* Identified that the simple CSV parser was failing on complex data. Upgraded `pro-visualizer.html` to use **PapaParse** for robust loading. Added an error-handling UI and a "Skip" button to the loading screen to ensure the user never gets stuck again.

---

## **Project 14: Final Professional Landing Page**
*Goal: Create a clean, card-based landing page with full dataset metadata and navigation.*

29. **Metadata Landing Page:** "I want a landing page... title and short description, section listing datasets used with metadata (name, source, format, date retrieved), and a top navigation menu linking to the map page, charts page and csv upload web app."
    *   *Result:* Replaced `index.html` with a high-contrast Dark Mode design. Featured a persistent top navigation bar, a clear hero description, and three metadata cards detailing the Global Flood Archive, Liberia Health Infrastructure, and GBV Social Indicators.

---

## **Project 15: Dark Mode Narrative Integration**
*Goal: Combine the professional merged narrative with a high-end Dark Mode theme.*

30. **Theme Refinement:** "Put back in dark mode."
    *   *Result:* Re-implemented `index.html` in Dark Mode using the Deep Navy and Indigo palette. Preserved the "Global to Local" narrative, the individual module buttons, and the technical Data Registry table.

---

## **Project 16: Data Transparency & Previews**
*Goal: Integrate live data previews into the metadata registry for immediate context.*

31. **Live Data Previews:** "Can you include in the first 5 datasets from the global flood archive, liberia flood and liberia healthsites files... DATA PREVIEW (FIRST 5 ROWS)... DATA PREVIEW (JSON SNIPPET)."
    *   *Result:* Enhanced `index.html` with a new "Datasets & Metadata" section. Included technical CSV previews (tables) for the Global and Liberia flood archives and a formatted JSON snippet for the Liberia Health Sites. Maintained the high-contrast Dark Mode theme with frosted-glass containers.

---

## **Workspace Maintenance & Automation**

16. **Audit & Cleanup:** "Clean up the directory because there are many repeated files, but go through each one carefully before removing them."
17. **Safety Verification:** "Check and confirm the sizes and purposes of these files (raw vs. intermediate) one last time before I proceed with the deletion."
18. **Initial Documentation:** "Can you give me all the prompts I've used from the very beginning? I want to document them in a Markdown file."
19. **Auto-Update Directive:** "I want you to always automatically update the prompts.md file without my telling you to all the time, can you do that?"
20. **Functionality Inquiry:** "what is data tool there for exactly? im just asking"
    *   *Result:* Explained the purpose of `uploader.html` as a local CSV inspector for data verification.

---

## **Future Project Prompts**
*Add your new project prompts below to keep this log updated.*

- [Placeholder for next project]

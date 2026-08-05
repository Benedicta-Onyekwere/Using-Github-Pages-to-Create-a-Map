# Flood Vulnerability & Humanitarian Mapping for Liberia
### From Global Flood Visualization to Humanitarian Decision Support

This project began as an interactive visualization of historical flood events around the world using **Leaflet.js** and **GitHub Pages**.It later evolved into a Liberia-focused humanitarian mapping application that combines historical flood events, health facility locations, and reported gender-based violence (GBV) incidents. The project demonstrates how open geospatial data can be integrated into practical decision-support tools for humanitarian planning and disaster preparedness.

Rather than simply visualising historical flood events, the project identifies **health facilities located near previous flood events**, highlighting locations that may become difficult to access during future flooding and where vulnerable populations could face additional risks.

---

## 🌍 Live Map Links
*   **Main Global Map:** [https://benedicta-onyekwere.github.io/Liberia-Humanitarian-Mapping/](https://benedicta-onyekwere.github.io/Liberia-Humanitarian-Mapping/)
*   **Liberia Deep Dive Map:** [https://benedicta-onyekwere.github.io/Liberia-Humanitarian-Mapping//liberia.html](https://benedicta-onyekwere.github.io/Liberia-Humanitarian-Mapping/liberia.html)

---
## Project Purpose

The project aims to demonstrate how geospatial technologies can support humanitarian and development work by:

- Visualizing historical flood events at both global and country levels.
- Identifying health facilities located close to historical flood events.
- Supporting evidence-based disaster preparedness and response planning.
- Integrating reported gender-based violence (GBV) incidents into spatial analysis.
- Demonstrating practical applications of GIS for humanitarian decision-making.
- Exploring how open data can be transformed into accessible web mapping tools.

The project demonstrates how relatively simple geospatial tools can improve situational awareness and support evidence-informed humanitarian planning.

---

## Why this matters

Floods do not simply damage infrastructure.

They interrupt access to healthcare, isolate vulnerable communities, delay emergency response, and increase protection risks—particularly for women and girls.

By identifying facilities located near historical flood events, humanitarian organisations and local authorities can better understand where contingency planning, preparedness activities, or infrastructure improvements may be needed.

The project also illustrates how open data can be transformed into practical decision-support tools using accessible technologies.

--- 

## 🗺️ What is Leaflet?
**Leaflet** is a lightweight, open-source JavaScript library for building interactive maps. We use it in this project because:
*   **It's simple:** It turns coordinates into dots on a map with very little code.
*   **It's interactive:** It handles zooming, dragging, and popups automatically.
*   **It's free:** No expensive "API keys" are required, unlike Google Maps.

---

## 🛠️ Project Highlights (Step-by-Step)

### 1. Data Filtering (`filter_liberia.py`)
The original global flood dataset was filtered using Python to retain only flood events occurring in Liberia.This reduced the dataset to a country-level subset suitable for further spatial analysis.
To focus the analysis on Liberia, a Python filtering script `filter_liberia.py` was developed that:
*   Reads the massive global `FloodArchive.csv`.
*   Tests every row to see if the country is **"Liberia"**.
*   Saves only those matches into a new file: `liberia_floods.csv`.

### 2. Creating the Liberia Map (`liberia.html`)
Using the **Leaflet** engine, we created a specialized map for Liberia.
*   **Visual Choice:** We used **Large Red Circle Markers**. Red stands out against the green terrain of Liberia and clearly distinguishes this map from the global blue map.
*   **Focus:** The map is set to automatically center on Liberia (Latitude 6.4281, Longitude -9.4295) so the user doesn't have to search for it.
*   **Popups:** We added emojis and clear text to the popups so anyone can easily read the dates and causes of each flood.

### 3. Health Facility Mapping

*  Health facility locations were integrated with historical flood data to assess spatial relationships between critical health infrastructure and areas affected by previous flood events..
*  This allows visual comparison between service locations and known flood-prone areas.

### 4. Identification of At-Risk Health Facilities

*  Health facilities located close to historical flood events were identified and displayed separately.
*  These facilities represent locations that could become difficult to access during future flooding.
*  The objective is not to predict disasters but to highlight facilities that may require additional preparedness planning.

### 5. GBV Mapping

*  Gender-based violence incident data were incorporated into the map to provide additional humanitarian context.
*  Displaying GBV incidents alongside flood exposure and health infrastructure illustrates how environmental hazards can interact with existing      social vulnerabilities.

 ### 6. Interactive Visualisation

The project uses **Leaflet.js** to create an interactive web map that allows users to:

- explore historical flood events
- locate health facilities
- identify facilities near flood-prone areas
- visualise GBV incident locations
- inspect each feature through interactive pop-up information


### 7. Publishing to GitHub Pages
GitHub Pages hosts the HTML files. By naming the Liberia map `liberia.html`, GitHub automatically creates a new URL for it: `.../liberia.html`.

---

## 📂 Key Files
*   `index.html`: The Global Flood Map (Leaflet).
*   `liberia.html`: The Liberia Deep Dive Map (Leaflet).
*   `floods.geojson`: Global flood data points.
*   `liberia_floods.geojson`: Liberia-only data points.
*   `filter_liberia.py`: The tool used to extract Liberia's data.
*   `liberia_floods.csv`: The spreadsheet containing only Liberia's 6 historical floods.
*   `at_risk_health_facilities.geojson`: Health facilities located near historical flood events.
*   `bv_grand_cape_mount.geojson`: Reported GBV incident locations.
*   `liberia_health_facilities.geojson`: Health facility locations used for spatial analysis.
    

## 🤝 Tools Used
*   **Leaflet.js**: Our map engine.
*   **Python (Pandas, GeoJSON processing)**: For data filtering and conversion.
*   **OpenStreetMap**: For the background map imagery.
*   **GitHub Pages**: For free website hosting.

## Data Sources
- Dartmouth Flood Observatory Flood Archive
- OpenStreetMap
- Health Facility dataset
- GBV dataset

## Potential Applications

Although developed as an academic project, the approach could support:

- humanitarian preparedness
- disaster risk reduction
- public health planning
- health service accessibility analysis
- evidence-based decision making
- GIS learning and teaching
- digital humanitarian research

This project forms part of my ongoing work on the use of geospatial technologies, open data, and AI-assisted workflows for humanitarian planning, disaster preparedness, and digital development.

---


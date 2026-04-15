# Global & Liberia Historical Flood Maps

This project visualizes major flood events worldwide and provides a deep dive into historical floods specifically in **Liberia**. It demonstrates how to filter data and create specialized maps using **Leaflet.js** and **GitHub Pages**.

---

## 🌍 Live Map Links
*   **Main Global Map:** [https://benedicta-onyekwere.github.io/Using-Github-Pages-to-Create-a-Map/](https://benedicta-onyekwere.github.io/Using-Github-Pages-to-Create-a-Map/)
*   **Liberia Deep Dive Map:** [https://benedicta-onyekwere.github.io/Using-Github-Pages-to-Create-a-Map/liberia.html](https://benedicta-onyekwere.github.io/Using-Github-Pages-to-Create-a-Map/liberia.html)

---

## 🗺️ What is Leaflet?
**Leaflet** is a lightweight, open-source JavaScript library for building interactive maps. We use it in this project because:
*   **It's simple:** It turns coordinates into dots on a map with very little code.
*   **It's interactive:** It handles zooming, dragging, and popups automatically.
*   **It's free:** No expensive "API keys" are required, unlike Google Maps.

---

## 🛠️ Project Highlights (Step-by-Step)

### 1. Data Filtering (`filter_liberia.py`)
We didn't just want a global map; we wanted to focus on Liberia. We wrote a Python script called `filter_liberia.py` that:
*   Reads the massive global `FloodArchive.csv`.
*   Tests every row to see if the country is **"Liberia"**.
*   Saves only those matches into a new file: `liberia_floods.csv`.

### 2. Creating the Liberia Map (`liberia.html`)
Using the **Leaflet** engine, we created a specialized map for Liberia.
*   **Visual Choice:** We used **Large Red Circle Markers**. Red stands out against the green terrain of Liberia and clearly distinguishes this map from the global blue map.
*   **Focus:** The map is set to automatically center on Liberia (Latitude 6.4281, Longitude -9.4295) so the user doesn't have to search for it.
*   **Popups:** We added emojis and clear text to the popups so anyone can easily read the dates and causes of each flood.

### 3. Publishing to GitHub Pages
GitHub Pages hosts our HTML files. By naming our Liberia map `liberia.html`, GitHub automatically creates a new URL for it: `.../liberia.html`.

---

## 📂 Key Files
*   `index.html`: The Global Flood Map (Leaflet).
*   `liberia.html`: The Liberia Deep Dive Map (Leaflet).
*   `floods.geojson`: Global flood data points.
*   `liberia_floods.geojson`: Liberia-only data points.
*   `filter_liberia.py`: The tool used to extract Liberia's data.
*   `liberia_floods.csv`: The spreadsheet containing only Liberia's 6 historical floods.

## 🤝 Tools Used
*   **Leaflet.js**: Our map engine.
*   **Python**: For data filtering and conversion.
*   **OpenStreetMap**: For the background map imagery.
*   **GitHub Pages**: For free website hosting.

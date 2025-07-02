// main.js

// Initialize MapLibre GL JS map
const map = new maplibregl.Map({
  container: 'map',
  style: 'https://free.tilehosting.com/styles/basic/style.json?key=demokey', // free demo tiles
  center: [10.7522, 59.9139], // Oslo coordinates [lng, lat]
  zoom: 15,
  pitch: 60,
  bearing: -17.6,
  antialias: true
});

map.on('load', () => {
  console.log('Map loaded');

  // TODO: Add building data source and extrusion layer here
  // Example: load GeoJSON with building footprints and heights

  // map.addSource('buildings', {
  //   type: 'geojson',
  //   data: 'data/oslo-buildings.geojson'
  // });

  // map.addLayer({
  //   id: '3d-buildings',
  //   type: 'fill-extrusion',
  //   source: 'buildings',
  //   paint: {
  //     'fill-extrusion-color': '#aaa',
  //     'fill-extrusion-height': ['get', 'height'], // assumes 'height' attribute in meters
  //     'fill-extrusion-base': 0,
  //     'fill-extrusion-opacity': 0.7
  //   }
  // });

  // Set initial sun lighting
  updateSunLighting(new Date());

  // Example: Add a slider for sun time control later
});

// Function to update map lighting based on sun position
function updateSunLighting(date) {
  const sunPos = SunCalc.getPosition(date, 59.9139, 10.7522);
  const azimuth = sunPos.azimuth; // radians
  const altitude = sunPos.altitude; // radians

  // Convert azimuth and altitude to MapLibre light position [x, y, z]
  const x = Math.cos(azimuth);
  const y = Math.sin(azimuth);
  const z = Math.sin(altitude);

  map.setLight({
    anchor: 'viewport',
    position: [x, y, z]
  });

  console.log(`Sun azimuth: ${(azimuth * 180 / Math.PI).toFixed(1)}°, altitude: ${(altitude * 180 / Math.PI).toFixed(1)}°`);
}


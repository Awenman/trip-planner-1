
const mapbox = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapbox.accessToken = 'pk.eyJ1IjoibWFwYm94MjBicyIsImEiOiJjamV6dGdza2kwZ2o2MnhvMGN2M2xucHA4In0.xYBpTOv_1eEdSQHD-JIT6A';

const map = new mapbox.Map({
    container: "map",
    center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: 'mapbox://styles/mapbox/light-v9' // mapbox has lots of different map styles available.
  });

  const marker = buildMarker("activity", [-87.6354, 41.8885]); // or [-87.6354, 41.8885]
  marker.addTo(map);
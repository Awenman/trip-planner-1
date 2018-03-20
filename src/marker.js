const mapbox = require("mapbox-gl");


const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    const markerDomEl = document.createElement('div');
    console.log(iconURLs[type]);
    markerDomEl.style.backgroundImage = 'url('+iconURLs[type]+')';
    markerDomEl.style.width = '37px';
    markerDomEl.style.height = '37px';
    return new mapbox.Marker(markerDomEl).setLngLat(coords)
}

module.exports = buildMarker;
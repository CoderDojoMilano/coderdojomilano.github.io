"use strict";
function initMainMap(map_container_id) {
  var map = L.map(map_container_id).setView([45.4913, 9.2093], 12);
  map.scrollWheelZoom.disable();
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJldmkiLCJhIjoiY2lobmZ2OXU3MDBoanZrbTlmZ2Zpb3JoayJ9.7vBRLC3iMq_xL-KIHeNIZw', {
    attribution: 'Map data &copy; <a href="//openstreetmap.org">OpenStreetMap</a> contributors, <a href="//creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="//mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoicHJldmkiLCJhIjoiY2lobmZ2OXU3MDBoanZrbTlmZ2Zpb3JoayJ9.7vBRLC3iMq_xL-KIHeNIZw'
  }).addTo(map);

  for (var i = 0; i < event_locations.length; i++) {
    var dojo = event_locations[i];
    if (!dojo.no_home_map) {
      setMarker(map, dojo, false);
    }
  }
}

function initEventMap(map_container_id, event_location_id) {
  console.log("initEventMap");
  var dojo = null;
  for (var i = 0; i < event_locations.length; i++) {
    dojo = event_locations[i];
    if(dojo.id == event_location_id)
      break;
  }
  var map = L.map(map_container_id).setView([dojo.lat, dojo.lon], 13);
  map.scrollWheelZoom.disable();
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJldmkiLCJhIjoiY2lobmZ2OXU3MDBoanZrbTlmZ2Zpb3JoayJ9.7vBRLC3iMq_xL-KIHeNIZw', {
    attribution: 'Map data &copy; <a href="//openstreetmap.org">OpenStreetMap</a> contributors, <a href="//creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="//mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoicHJldmkiLCJhIjoiY2lobmZ2OXU3MDBoanZrbTlmZ2Zpb3JoayJ9.7vBRLC3iMq_xL-KIHeNIZw'
  }).addTo(map);

  setMarker(map, dojo, true);
}

function setMarker(map, dojo, popupOpen) {
  // Adds markers to the map.

  var cdmiMarkerIcon = L.icon({
    iconUrl: '/assets/img/marker_cdmi.png',
    iconSize:     [64, 64], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [32, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
  });
  var popup_html = "<div><img src='/assets/img/" + dojo.logo + "'></img></div><div class='map_dojo_name'><a href='" + dojo.url + "' target='_new'>" + dojo.name + "</a></div><div class='map_dojo_addr'>" + dojo.addr + "</div>"
  var marker = L.marker([dojo.lat, dojo.lon], {icon: cdmiMarkerIcon}).addTo(map).bindPopup(popup_html);
  if(popupOpen) marker.openPopup();
}

function initMainMap(map_container_id) {
  var map = L.map(map_container_id).setView([45.4913, 9.2093], 13);
  map.scrollWheelZoom.disable();
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicHJldmkiLCJhIjoiY2lobmZ2OXU3MDBoanZrbTlmZ2Zpb3JoayJ9.7vBRLC3iMq_xL-KIHeNIZw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicHJldmkiLCJhIjoiY2lobmZ2OXU3MDBoanZrbTlmZ2Zpb3JoayJ9.7vBRLC3iMq_xL-KIHeNIZw'
  }).addTo(map);  

  for (var i = 0; i < event_locations.length; i++) {
    var dojo = event_locations[i];
    setMarker(map, dojo, false);
  }
}

function initEventMap(map_container_id, event_location_id) {
  console.log("initEventMap");
  var dojo = null;
  for (var i = 0; i < event_locations.length; i++) {
    dojo = event_locations[i];
    if(dojo.did == event_location_id)
      break;
  }
  var map = L.map(map_container_id).setView([dojo.lat, dojo.lon], 13);
  map.scrollWheelZoom.disable();
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicHJldmkiLCJhIjoiY2lobmZ2OXU3MDBoanZrbTlmZ2Zpb3JoayJ9.7vBRLC3iMq_xL-KIHeNIZw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
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
    iconAnchor:   [32, 64], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [32, -64] // point from which the popup should open relative to the iconAnchor
  });
  var popup_html = "<div><img src='/assets/img/" + dojo.logo + "'></img></div><div class='map_dojo_name'><a href='" + dojo.url + "' target='_new'>" + dojo.name + "</a></div><div class='map_dojo_addr'>" + dojo.addr + "</div>"
  var marker = L.marker([dojo.lat, dojo.lon], {icon: cdmiMarkerIcon}).addTo(map).bindPopup(popup_html);
  if(popupOpen) marker.openPopup();
}

function initMap() {
  var map = L.map('cd_map_container').setView([45.4913, 9.2093], 13);
  map.scrollWheelZoom.disable();
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicHJldmkiLCJhIjoiY2lobmZ2OXU3MDBoanZrbTlmZ2Zpb3JoayJ9.7vBRLC3iMq_xL-KIHeNIZw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicHJldmkiLCJhIjoiY2lobmZ2OXU3MDBoanZrbTlmZ2Zpb3JoayJ9.7vBRLC3iMq_xL-KIHeNIZw'
  }).addTo(map);  
  //var map = new google.maps.Map(document.getElementById('cd_map_container'), {
  //  zoom: 13,
  //  center: {lat: 45.4627124, lng: 9.1076923}
  //});

  setMarkers(map);
}

var dojos = [
  {name:'TAG Milano', lat:45.4973345, lon:9.2191134, url:"http://talentgarden.org/", logo:"logo_tag_milano.png", addr:"Via Merano, 16, 20127 Milano"},
  {name:'WeMake', lat:45.507106, lon:9.2262703, url:"http://wemake.cc", logo:"logo_wemake.png", addr:"Via Privata Stefanardo da Vimercate, 27, 20128 Milano"},
  {name:'Workin Capital', lat:45.4862554, lon:9.2425329, url:"http://www.wcap.tim.it/en/accelerators/milan", logo:"logo_wcap.png", addr:"Via Rombon, 52, 20134 Milano"}
];

function setMarkers(map) {
  // Adds markers to the map.

 var cdmiMarkerIcon = L.icon({
    iconUrl: 'assets/img/marker_cdmi.png', 
    iconSize:     [64, 64], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [32, 64], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [32, -64] // point from which the popup should open relative to the iconAnchor
});
  for (var i = 0; i < dojos.length; i++) {
    var dojo = dojos[i];
    var popup_html = "<div><img src='assets/img/" + dojo.logo + "'></img></div><div class='map_dojo_name'><a href='" + dojo.url + "' target='_new'>" + dojo.name + "</a></div><div class='map_dojo_addr'>" + dojo.addr + "</div>"
    L.marker([dojo.lat, dojo.lon], {icon: cdmiMarkerIcon}).addTo(map).bindPopup(popup_html);
  }
}
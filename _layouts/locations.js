var event_locations = [{% for location in site.event_locations %}
  {did: "{{location.id}}", name:"{{location.name}}", lat:{{location.lat}}, lon:{{location.lon}}, url:"{{location.url}}", logo:"{{location.logo}}", addr:"{{location.addr}}, no_home_map:"{{location.no_home_map}}"}
                       {% endfor %}];

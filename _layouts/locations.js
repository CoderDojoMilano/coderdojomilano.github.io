var event_locations = [
{% for location in site.event_locations %}
  {
  {% for attr in location %}
    {{ attr[0] }}:"{{ attr[1] }}",
  {% endfor %}
  },
{% endfor %}
];

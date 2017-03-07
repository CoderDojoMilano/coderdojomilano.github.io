"use strict";
(function mentor() {
  var mentor_form_element = $(".mentor-form");
  var calculation_label_element = mentor_form_element.find("[data-id='calculation-label']");
  var submit_button_element = mentor_form_element.find("[data-id='mentor-submit']");

  var read_values = function () {
    var $item, i, item, j, key, len, len1, ref, ref1, values;
    values = {};

    ref = $.merge($.merge($("input[type='email']"),$("input[type='text']"), $("input:checked")), $("textarea"));

    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];
      $item = $(item);
      key = $item.attr("name");
      var value = $item.val();
      if (value.length > 0) {
        values[key] = values[key] || [];
        values[key].push($item.val());
      }
    }

    return values;
  }


  var validate = function(value) {
      mentor_form_element.validate( {
          messages: {
              "name": {
                              required: 'Inserisci il tuo nome'},
              "email":{
                              required: 'Indica la tua e-mail'},
              "message":{
                              required: 'Inserisci il testo del tuo messaggio'},
              "calculation":{
                              required: 'Inserisci il risultato dell\'operazione'}
          },
          rules : {
              calculation : { equal: value }
          }
      });
  }

  var confirm_form = function() {
      submit_button_element.replaceWith("<span>Ok, grazie per averci contattato!</span>");
  }


  $(document).ready(function() {

     var operation_checker = window.generate_random_operation();
     calculation_label_element.html( "Inserisci il risultato dell'operazione " + operation_checker.operation + " = " );

     mentor_form_element.submit( function(e) {
        e.preventDefault();

        validate(operation_checker.result);

        if (mentor_form_element.valid()) {
            submit_button_element.attr("disabled", "disabled");

            var key = "ts_" + Date.now().toJSON();
            var payload = JSON.stringify( read_values() );

            if ( typeof window.kvstoreio !== 'undefined' ) {
                kvstoreio("mentors",
                    key,
                    payload,
                    function(res) { confirm_form() });
            } else {
                console.log( "Debugging --> should write to kvstore.io: " + key + " ==> " + payload );
                confirm_form();
            }

        }
        return true;
      });
  });
})();

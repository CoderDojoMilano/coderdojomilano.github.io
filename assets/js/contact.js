var contact_section_element = $("#contact");
var contact_form_element = contact_section_element.find(".contact-form");
var name_element = contact_section_element.find("[name='name']");
var email_element = contact_section_element.find("[name='email']");
var message_element = contact_section_element.find("[name='message']");
var submit_button_element = contact_section_element.find("[data-id='contact-submit']");
var calculation_label_element = contact_section_element.find("[data-id='calculation-label']");


var validate = function(value) {
    contact_form_element.validate( {
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

   contact_form_element.submit( function(e) {
        e.preventDefault();

        validate(operation_checker.result);

        if (contact_form_element.valid()) {
            submit_button_element.attr("disabled", "disabled");

            var key = "ts_" + Date.now();
            var payload = JSON.stringify({ name: name_element.val(), email: email_element.val(), message: message_element.val});

            if ( typeof window.kvstoreio !== 'undefined' ) {
                kvstoreio("contacts",
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

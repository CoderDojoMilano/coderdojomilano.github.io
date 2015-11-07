var contact_section_element = $("#contact");
var contact_form_element = contact_section_element.find(".contact-form");
var name_element = contact_section_element.find("[name='name']");
var email_element = contact_section_element.find("[name='email']");
var message_element = contact_section_element.find("[name='message']");
var submit_button_element = contact_section_element.find("[data-id='contact-submit']");
var calculation_label_element = contact_section_element.find("[data-id='calculation-label']");
var first_number = 0;
var second_number = 0;
var op_valid = null;

var validate = function() {
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
            calculation : { calculation : true }
        }
    });
}

generate_random_operation = function() {
    var getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    first_number = getRandomInt(1, 10);
    second_number = getRandomInt(1, 10);
    op = getRandomInt(0,2);
    var math_op = first_number + ((op==0)? " * " : " + ") + second_number;
    console.log(eval(math_op));
    calculation_label_element.html("Inserisci il risultato dell'operazione " + math_op.replace("*", "x") + " = ");
    op_valid = function(val) {
        return val == eval(math_op);
    }
}


$(document).ready(function() {
    jQuery.validator.addMethod("calculation", function(value, element, params) {
        return op_valid(value);
    }, jQuery.validator.format("Inserisci il risultato corretto"));

    generate_random_operation();

    contact_form_element.submit( function(e) {
        e.preventDefault();
        validate();

        if (contact_form_element.valid()) {
            submit_button_element.attr("disabled", "disabled");

            var key = "ts_" + Date.now();
            var payload = JSON.stringify({ name: name_element.val(), email: email_element.val(), message: message_element.val});

            if ( typeof window.kvstoreio !== 'undefined' ) {
                kvstoreio("contacts",
                    key,
                    payload,
                    function(res) { console.log("should open the confirmation popup");  });
            } else
                console.log( "Debugging --> should write to kvstore.io: " + key + " ==> " + payload );

        }
        return true;
    });
});

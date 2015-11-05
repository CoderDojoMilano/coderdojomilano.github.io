var contact_section_element = $("#contact");
var contact_form_element = contact_section_element.find(".contact-form");
var name_element = contact_section_element.find("[name='name']");
var email_element = contact_section_element.find("[name='email']");
var message_element = contact_section_element.find("[name='message']");
var submit_button_element = contact_section_element.find("[data-id='contact-submit']");

var validate = function() {
    contact_form_element.validate( {
        messages: {
            "name": {
                            required: 'Inserisci il tuo nome'},
            "email":{
                            required: 'Indica la tua e-mail'},
            "message":{
                            required: 'Inserisci il testo del tuo messaggio'}
        }
    });
}

$(document).ready(function() {
    contact_form_element.submit( function(e) {
        validate();

        if (contact_form_element.valid()) {
            var name = name_element.val();
            var email = email_element.val();
            var message = message_element.val();
            e.preventDefault();
            kvstoreio("contacts",
                "ts_" + Date.now(),
                JSON.stringify({ name: name, email: email, message: message}),
                function(res) {
                    submit_button_element.attr("disabled", "disabled");
                });

        }

    })
})

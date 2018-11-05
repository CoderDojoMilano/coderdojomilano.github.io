(function contact() {
    var contact_form_element = $("form.contact-form");
    var first_name_element = contact_form_element.find("[name='first_name']");
    var last_name_element = contact_form_element.find("[name='last_name']");
    var email_element = contact_form_element.find("[name='email']");
    var message_element = contact_form_element.find("[name='message']");
    var submit_button_element = contact_form_element.find("[data-id='contact-submit']");
    var calculation_label_element = contact_form_element.find("[data-id='calculation-label']");


    var validate = function(value) {
        contact_form_element.validate( {

            messages: {
                "first_name": {
                    required: 'Inserisci il tuo nome'
                },
                "last_name": {
                    required: 'Inserisci il tuo cognome'
                },
                "email" : {
                    required: 'Indica la tua e-mail'
                },
                "message":{ 
                    required: 'Inserisci il testo del tuo messaggio'
                },
                "calculation":{
                    required: 'Inserisci il risultato dell\'operazione'
                },
                "documents": {
                    required: 'Per favore conferma di aver letto la nostra Privacy Policy' 
                }
            },
            rules : {
                documents: {
                    required: true
                },
            
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

                _iub.cons.submit({
                    writeOnLocalStorage: false,
                    form: {
                        selector: document.getElementById('contact'),
                    },
                    consent: {
                        legal_notices: [
                            {
                                identifier: 'legal_documents',
                            },
                            {
                                identifier: 'newsletter',
                            }
                        ]
                    }
                })
                .success(function() {
                    var key = "ts_" + Date.now().toJSON();
                    var payload = JSON.stringify({ name: first_name_element.val() + last_name_element.val(), email: email_element.val(), message: message_element.val()});

                    if ( typeof window.kvstoreio !== 'undefined' ) {
                        kvstoreio("contacts",
                            key,
                            payload,
                            function(res) { confirm_form() });
                    } else {
                        console.log( "Debugging --> should write to kvstore.io: " + key + " ==> " + payload );
                        confirm_form();
                    }
                })
                .error(function (response) {
                    console.log("error", response);
                });

            }
            return true;
        });
    });
})();

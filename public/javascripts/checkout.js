var stripe = Stripe('pk_test_NPLxSKJzJwFjO04Jf8mFeO7Hm006u0PXuhZ');
var elements = stripe.elements();
var cardElement = elements.create('card');


var $form = $('#checkout-form');

$form.submit(function (event) {
    console.log("111111");
    $('#charge-error').addClass('d-none');
    $form.find('button').prop('disabled', true);
    console.log("22222222");
    return false;
});

function stripeResponseHandler(status, response) {
    if (response.error) { // Problem!

        // Show the errors on the form
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('d-none');
        $form.find('button').prop('disabled', false); // Re-enable submission

    } else { // Token was created!

        // Get the token ID:
        var token = response.id;

        // Insert the token into the form so it gets submitted to the server:
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));

        // Submit the form:
        $form.get(0).submit();

    }
}
/*
var $form = $('#checkout-form');

$form.submit(function(event){
    $form.find('button').prop('disabled', true);
    console.log("111111");
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val()
    }, stripeResponseHandler);
    console.log("2222222");
    return false;
});

function stripeResponseHandler(status, response){
    if (response.err){
        $('#charge-error').text(response.error.messages);
        $('#charge-error').removeClass('d-none');
        $form.find('button').prop('disabled',false);
    }else {
        var token = response.id;
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));

        $form.get(0).submit();
    }
}*/

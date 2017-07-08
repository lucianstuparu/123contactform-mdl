(function($){
	window.addEventListener("message", function(event) {
    if (event.origin != 'https://www.123contactform.com' ||  event.data.charAt(0) != '|') {
      return;
    }

    var data = event.data.split('|');
    
    $('#donate-box-header2 span.header-amount').html(data[1]);
    $('#donate-box-header1').html($('#donate-box-header2').html());
    
    $('#donate-box-step2 input.paypal-amount').val(data[1]);
    $('#donate-box-step2 input.paypal-fullname').val(data[2]);
    $('#donate-box-step2 input.paypal-email').val(data[3]);
    $('#donate-box-step2 input.paypal-city').val(data[4]);
    $('#donate-box-step2 input.paypal-custom').val(data[5]);
    $('#donate-box-step1').html($('#donate-box-step2').html());
    
    console.log( "received: " + event.data );
  });
})(jQuery);

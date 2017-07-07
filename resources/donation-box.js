(function($){
	window.addEventListener("message", function(event) {
    if (event.origin != 'http://www.123contactform.com') {
      return;
    }

    var data = event.data.split('|');
    
    $('#donate-box-header2 span.header-amount').html(data[0]);
    $('#donate-box-header1').html($('#donate-box-header2').html());
    
    $('#donate-box-step2 input.paypal-amount').val(data[0]);
    $('#donate-box-step2 input.paypal-fullname').val(data[1]);
    $('#donate-box-step2 input.paypal-email').val(data[2]);
    $('#donate-box-step1').html($('#donate-box-step2').html());
    
    console.log( "received: " + event.data );
  });
})(jQuery);

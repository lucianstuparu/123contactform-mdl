/* BEGIN make blurbs clickable */

(function($){
	$('.clickable-blurb').on('click', function() {
    var blurbLink = $(this).find("a").first();
    var target = blurbLink.attr('target');
    if (target == '_blank') {
      window.open(blurbLink.attr("href"));
    } else {
      window.location = blurbLink.attr("href"); 
    }
    return false;
  });
})(jQuery);

/* END make blurbs clickable */

/* BEGIN Donation box */

//receive data from 123contactform iframe to generate donate buttons
(function($){
	window.addEventListener("message", function(event) {
    if (event.origin != 'https://www.123contactform.com' || !event.data.charAt || event.data.charAt(0) != '|') {
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

/* END Donation box */

/* BEGIN Map embed */

//prevent default zoom on mouse scroll
(function($){
	$('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});
})(jQuery);

/* END Map embed */

/* BEGIN Projects tabs */
(function($){
	$('#projects-tabs ul li').on('click', function() {
		if ($('#projects-tabs .tabs ul li:first-child').hasClass('et_pb_tab_active')) {
			$('#current-projects').hide();
			$('#done-projects').show();
		} else {
			$('#current-projects').show();
			$('#done-projects').hide();
		}
	});
})(jQuery);
/* END Projects tabs */

/* BEGIN Join Us Tabs */
(function($){
	$('.join-us-tabs').on('click', toggleJoinUs);

	var current_hash = window.location.hash.substr(1);
	if (current_hash == '') {
	    current_hash = 'voluntar';
	}
	$('#tab-'+ current_hash).trigger('click');
	
	function toggleJoinUs() {
	
		var selected_form_id = $(this).attr('id') + '-form';
		var selected_arrow_id = selected_form_id + '-arrow';
		if ($(this).hasClass('join-us-tab-selected')) {
		   return;
		} else {
		   $('.join-us-tab-selected').removeClass('join-us-tab-selected');
		   $(this).addClass('join-us-tab-selected');
		   $('.join-us-arrow').hide();
		   $('.join-us-tab-forms').hide();
		   $('#' + selected_form_id).show();
		   $('#' + selected_arrow_id).show();
		}	
	}
})(jQuery);
/* END Join Us Tabs */

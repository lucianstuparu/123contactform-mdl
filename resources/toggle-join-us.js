(function($){
	$('.join-us-tabs').on('click', toggleJoinUs);
	
	var current_hash = window.location.hash.substr(1);
	if (current_hash != '') {
	    current_hash = 'voluntar';
	}
	$('#tab-'+ current_hash).trigger('click');
	
	function toggleJoinUs() {
		
		var selected_form_id = $(this).attr('id') + '-form';
		var selected_arrow_id = selected_form_id + '-arrow';
		var current_form_id = $('.join-us-tab-forms:visible').attr('id');
		var current_arrow_id = current_form_id + '-arrow';
		if ($(this).hasClass('join-us-tab-selected')) {
		   return;
		} else {
		   $('.join-us-tab-selected').removeClass('join-us-tab-selected');
		   $(this).addClass('join-us-tab-selected');
                   $('#' + current_form_id).hide();
		   $('#' + current_arrow_id).hide();
		   $('#' + selected_form_id).show();
		   $('#' + selected_arrow_id).show();
		}	
	}
})(jQuery);

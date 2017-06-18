(function($){
	$('.join-us-tabs').on('click', function () {
		var selected_form_id = $(this).attr('id') + '-form';
		var current_form_id = $('.join-us-tab-forms:visible').attr('id');
		if (selected_form_id == current_form_id) {
		   return;
		} else {
                   $('#' + current_form_id).hide();
		   $('#' + selected_form_id).show();
		}
	});
})(jQuery);

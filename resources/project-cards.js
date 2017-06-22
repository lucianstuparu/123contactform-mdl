(function($){
	$('.home-project-blurb').on('click', function() {
    window.location = $(this).find(".et_pb_main_blurb_image a").attr("href"); 
    return false;
  });
})(jQuery);

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

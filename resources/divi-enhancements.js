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
	$(document).ready( function(){
		function et_change_primary_nav_position( delay ) {
			setTimeout( function() {
				var $body = $('body'),
					$wpadminbar = $( '#wpadminbar' ),
					$top_header = $( '#top-header' ),
					et_primary_header_top = 0;

				if ( $wpadminbar.length ) {
					et_primary_header_top += $wpadminbar.innerHeight();
				}

				if ( $top_header.length && $top_header.is(':visible') ) {
					et_primary_header_top += $top_header.innerHeight();
				}
				
				/** changed by lucian3 
					initially
					if ( ! window.et_is_vertical_nav && ( $body.hasClass( 'et_fixed_nav' ) )) {
				*/

				if ( ! window.et_is_vertical_nav && ( $body.hasClass( 'et_fixed_nav' ) ) && et_primary_header_top != 0 ) {
					
					$('#main-header').css( 'top', et_primary_header_top );
				}
			}, delay );
		}
	}
})(jQuery);

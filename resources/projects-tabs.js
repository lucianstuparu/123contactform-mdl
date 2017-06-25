<script type="text/javascript">
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
	</script>

$('#id123-control30234080_0').on('click', function() {
	if ($(this).is(':checked')) {
		$('#formwrapper').each(function () {
    			this.style.setProperty( 'padding-top', '25px', 'important' );
		});
		$('#id123-control30234080_0 .label-text').each(function () {
    			this.style.setProperty( 'color', '#fff', 'important' );
		});
		$('input[type="checkbox"]:not(old)+label>.outside').each(function () {
    			this.style.setProperty( 'border-color', '#fff', 'important' );
		});
	} else {
		$('#formwrapper').each(function () {
    			this.style.setProperty( 'padding-top', '45px', 'important' );
		});
		$('#id123-control30234080_0 .label-text').each(function () {
    			this.style.setProperty( 'color', '#99ffff ', 'important' );
		});
		$('input[type="checkbox"]:not(old)+label>.outside').each(function () {
    			this.style.setProperty( 'border-color', '#99ffff ', 'important' );
		});
	}
});

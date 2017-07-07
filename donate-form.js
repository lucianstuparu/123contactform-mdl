$('#id123-control30234032').attr('placeholder', '10');

$('div.subitem select').each(function() {
 $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
});

$("div.subitem input, div.subitem textarea").each(function() {
 if($(this).val() !== "" || $(this).attr('placeholder') != null) {
  $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
 }
});

$("div.subitem input[type='checkbox'], div.subitem input[type='radio']").each(function() {
 var input_id = $(this).attr('id');
 $('label[for="'+input_id+'"].class123-fieldname').addClass('active').addClass('default');
});

$('div.subitem span.fileinput-button').each(function() {
 var input_id = $(this).siblings('input').eq(0).attr('id');
 $("#" + input_id.replace('control', 'title')).addClass('active');
});

$("div.subitem input, div.subitem textarea").on("focusout", function() {
 if($(this).val() === "" && $(this).attr('placeholder') == null) {
    $("#" + $(this).attr('id').replace('control', 'title')).removeClass('active');
 } else {
    $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
 }
});

if ($('.currentPageActive.navigationButtons input[type="submit"]').size() == 1) {
    $('.currentPageActive.navigationButtons input[type="submit"]').css('width', '100%');
}

$(window).on("blur", function() {
 $('.fieldcontainer.focus').removeClass('focus');
});

$('#id123-control30234032').focus();

$('#id123-control30234080_0').on('click', function() {
	if ($(this).is(':checked')) {
		$('#fieldcontainer2 .label-text').each(function () {
    			this.style.setProperty( 'color', '#fff', 'important' );
		});
		$('#fieldcontainer2 span.outside').each(function () {
    			this.style.setProperty( 'border-color', '#fff', 'important' );
		});
	} else {
		$('#fieldcontainer2 .label-text').each(function () {
    			this.style.setProperty( 'color', '#99ffff ', 'important' );
		});
		$('#fieldcontainer2 span.outside').each(function () {
    			this.style.setProperty( 'border-color', '#99ffff ', 'important' );
		});
	}
});

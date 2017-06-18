$('select').each(function() {
 $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
});

$("div.subitem input").on("focusout", function() {
 if($(this).not('select') && $(this).val() === "") {
    $("#" + $(this).attr('id').replace('control', 'title')).removeClass('active');
 } else {
    $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
 }
});

$(window).on("blur", function() {
 $('.fieldcontainer.focus').removeClass('focus');
});

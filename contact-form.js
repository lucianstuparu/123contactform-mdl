$('div.subitem select').each(function() {
 $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
});

$("div.subitem input, div.subitem textarea").each(function() {
 if($(this).val() !== "") {
  $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
 }
});

$("div.subitem input, div.subitem textarea").on("focusout", function() {
 if($(this).val() === "") {
    $("#" + $(this).attr('id').replace('control', 'title')).removeClass('active');
 } else {
    $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
 }
});

$(window).on("blur", function() {
 $('.fieldcontainer.focus').removeClass('focus');
});

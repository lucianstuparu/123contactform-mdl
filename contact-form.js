$("div.subitem input").on("focusout", function() {
 if($(this).val() === "") {
    $("#" + $(this).attr('id').replace('control', 'title')).removeClass('active');
 } else {
    $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
 }
});

$(window).on("blur", function() {
 $('label.active').each(function() {
    var input_id = $(this).attr('id').replace('title', 'control');
    if ($('#' + input_id).val() === '') {
        $(this).removeClass('active');
    }
 });
});

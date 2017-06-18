$("div.subitem input, window").on("focusout", function() {
 if($(this).val() === "") {
    $("#" + $(this).attr('id').replace('control', 'title')).removeClass('active');
 } else {
    $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
 }
});

$(window).on("blur", function() {
 alert('sdd');
 $('label.active').each(function() {
    var input_id = $(this).attr('id').replace('title', 'control');
    if ($('#' + input_id).val() === '') {
        $(this).removeClass('active');
    }
 });
});

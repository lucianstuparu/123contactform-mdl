$("div.subitem input, document").on("focusout", function() {
 if($(this).val() === "") {
    $("#" + $(this).attr('id').replace('control', 'title')).removeClass('active');
 } else {
    $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
 }
});


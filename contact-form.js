$("div.subitem input").on("focusout", function() {
 if($(this).val() !== "") {
    $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
 }
});


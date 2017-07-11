$('div.subitem select').each(function() {
 $("#" + $(this).attr('id').replace('control', 'title')).addClass('active');
});

$("div.subitem input[type='text'], div.subitem textarea").each(function() {
 var label_id = $(this).attr('id').replace('control', 'title');
 if($(this).val() !== "" || $(this).attr('placeholder') != null) {
  $("#" + label_id).addClass('active');
 }
 var label_height = $("#" + label_id).height();
 if (label_height > 28) {
  $(this).css('margin-top', (label_height - 24) + 'px');
 }
});

$("div.subitem input[type='checkbox'], div.subitem input[type='radio']").each(function() {
 var input_id = $(this).attr('id');
 
 $('label[for="'+input_id+'"].class123-fieldname').addClass('active').addClass('default');
 if ($('label[for="'+input_id+'"].class123-fieldname').height() > 28) {
     $('label[for="'+input_id+'"].class123-fieldname').addClass('two-rows');
  } else {
     $('label[for="'+input_id+'"].class123-fieldname').addClass('one-row');
  }
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

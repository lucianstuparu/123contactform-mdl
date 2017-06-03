$("#id123-control29537184").attr("placeholder", "Nume si Prenume");
$('#id123-title29537184').hide();
$("#id123-control29537184").off("focusin");
$("#id123-control29537184").off("focusout");
$("#id123-control29537184").click(function() {
  if ($("#id123-control29537184") === '') {
      $('#id123-title29537184').show();
  }
});
$("#id123-control29537184").focusout(function() {
  if ($("#id123-control29537184") === '') {
      $('#id123-title29537184').hide();
  } else {
      $('#id123-title29537184').show();
  }
});

$("#id123-control29537184").attr("placeholder", "Nume si Prenume");
$('#id123-title29537184').hide();
$("#id123-control29537184").change(function() {
  if ($(this).val() === '') {
      $('#id123-title29537184').hide();
  } else {
      $('#id123-title29537184').show();
  }
});

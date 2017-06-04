$("#id123-control29537187").attr("placeholder", "Nume si Prenume");
$('#id123-title29537187').hide();
$("#id123-control29537187").off("focusin");
$("#id123-control29537187").off("focusout");
$("#id123-control29537187").on( "click", function() {
  if ($("#id123-control29537187") === '') {
      $('#id123-title29537187').show();
  }
});
$("#id123-control29537187").focusout(function() {
  if ($("#id123-control29537187") === '') {
      $('#id123-title29537187').hide();
  } else {
      $('#id123-title29537187').show();
  }
});

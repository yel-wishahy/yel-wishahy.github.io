document.querySelectorAll('.datepicker').forEach(function(field) {
	var picker = new Pikaday({
		field: field
	});
});

$(document).ready(function() {

  if(window.location.href.indexOf('#modalRobot') != -1) {
    $('#modalRobot').modal('show');
  }

});
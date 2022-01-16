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

$(document).ready(function() {  
  var modals = ['#modalRobot', '#anotherModal'];
  if (window.location.hash && ~modals.indexOf(window.location.hash)) {
     $(window.location.hash).modal();
  }
})

$(document).ready(function() {  
  var modals = ['#modalRobot', '#modalMCPlugin', '#modalMCPlugin'];
  if (window.location.hash && ~modals.indexOf(window.location.hash)) {
     $(window.location.hash).modal();
  }
})
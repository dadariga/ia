/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();*/

  $(document).ready(function(){
    
  
  $("#dropdown").click(function(){
    var counter = 0;
  if(counter == 0){
    $(".menu").css("visibility", "visible");
    counter = 1;}else{
      $(".menu").css("visibility", "hidden");
      counter = 0;
    }
  })
  })
        
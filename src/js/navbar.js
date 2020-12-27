/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();*/

  $(document).ready(function(){
    
  var counter;
  $("#dropdown").click(function(){
    
  if(counter == 0){
    $(".menu").css("visibility", "visible");
    return counter = 1;}else{
      $(".menu").css("visibility", "hidden");
      return counter = 0;
    }
  })
  })
        
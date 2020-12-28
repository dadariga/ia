/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();*/

  $(document).ready(function(){
  $(".dropdown").click(function(){
    $(".menu").css("visibility", "visible");
      $(".dropdown").css("visibility", "hidden");
      $(".close").css("visibility", "visible");
  })
  $(".close").click(function(){
    $(".menu").css("visibility", "hidden");
      $(".close").css("visibility", "hidden");
      $(".dropdown").css("visibility", "visible");
  })

  $("#icons").click(function(){
      $(".medientechnik").css("visibility", "visible");
    })

    $(".closemedientechnik").click(function(){
      $(".medientechnik").css("visibility", "hidden");
        
    })
  $(".map").click(function(){
    window.open("karte.html", "_self");
  })
  
  function load(){
    document.getElementById("splashscreen").style.display='none';
  }
  
  window.onload = window.setTimeout(load, 3000);
})
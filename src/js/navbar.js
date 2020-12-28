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
    $("#icons2").click(function(){
      $(".language").css("visibility", "visible");
    })
    $(".closemedientechnik").click(function(){
      $(".medientechnik").css("visibility", "hidden");
        
    })
    $(".closelanguage").click(function(){
      $(".language").css("visibility", "hidden");
      $(".menu").css("visibility", "visible");
        
    })
  $(".map").click(function(){
    window.open("karte.html", "_self");
  })
  $(".closemap").click(function(){
    $(".closemap").css("visibility", "hidden");
    window.open("navbar.html", "_self");
      
  })
})
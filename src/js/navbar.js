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
      $(".arrowtoleft").css("visibility", "hidden");
      $(".arrowtoright").css("visibility", "hidden");
  })
  $(".close").click(function(){
    $(".menu").css("visibility", "hidden");
      $(".close").css("visibility", "hidden");
      $(".dropdown").css("visibility", "visible");
      $(".arrowtoleft").css("visibility", "visible");
      $(".arrowtoright").css("visibility", "visible");
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
    window.open("karte.html","_self");
    $("#mapid").css("visibility", "visible");
    $(".closemap").css("visibility", "visible");
  })
  $(".closemap").click(function(){
    $(".closemap").css("visibility", "hidden");
    window.open("navbar.html", "_self");
      
  })
})

/* map*/
var mymap = L.map('mapid', {maxBounds: [
  //south west
  [48.828884, 12.952623], 
  //north east
  [48.830300, 12.957151] 
  ],
  rotate: true}).setView([48.829447, 12.954963], 19);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 20, minZoom: 17, 
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox/light-v9',
tileSize: 512,
zoomOffset: -1
}).addTo(mymap);

var markerAuto = L.marker([48.829812, 12.953983]).addTo(mymap);
var markerBrille = L.marker([48.829619, 12.95538]).addTo(mymap);




var current_position;

mymap.locate({watch: true, setView: true}).on('locationfound', (e) => {
if (current_position) {
    mymap.removeLayer(current_position);
}
  current_position = L.marker(e.latlng).addTo(mymap);
});

mymap.setBearing(-28.5);


markerAuto.bindPopup('<p>3D-Auto</p>').addTo(mymap);
markerBrille.bindPopup('<p>Stopmotion-Film</p>').addTo(mymap);


$(".closemap").click(function(){
$(".closemap").css("visibility", "hidden");
window.open("navbar.html", "_self");
})
/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();*/

  
  $(document).ready(function(){
  $(".dropdown").click(function(){
    $(".menu").toggleClass("zap");
    $(".menu").css("visibility", "visible");
      $(".dropdown").css("visibility", "hidden");
      $(".close").css("visibility", "visible");
      $(".arrowtoleft").css("visibility", "hidden");
      $(".arrowtoright").css("visibility", "hidden");
  })
  $(".close").click(function(){
    $(".menu").css("visibility", "hidden");
    $(".menu").removeClass("zap");
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
    $("#splashscreen").css("visibility","hidden");
      
  })
  var textshown= true;
  $("#infobutton").click(function(){
    if (textshown){
		$(".projektfeld").css("display", "none");
		textshown= false;
	} else {
		$(".projektfeld").css("display", "block");
		textshown=true;
	}
  })
  /*$(".arrowtoleft").click(function(){
    $(".arrowtoright").css("visibility", "hidden");
    var s = $('#a-marker').html();
    s = s.replace(/<a-entity id="directionaltarget" shadow="receive: true"position="0 0 0"scale="0.5 0.5 0.5"gltf-model="https://raw.githubusercontent.com/dadariga/ia/master/3DModelle/auto/carSchatten.gltf">,"<a-marker preset='pattern' type='pattern' url='https://raw.githubusercontent.com/fermiumsunset/dump/main/patternBrille.patt'>" ):
    
      
  })*/

  /*Slider */

  AFRAME.registerComponent("videohandler", {
    init: function(){
      var marker = this.el;
      this.vid= document.querySelector("#vid");

      marker.addEventListener("markerFound",
      function(){
        this.toggle = true;
        this.vid.play();
      }
      .bind(this));
    

    marker.addEventListener("markerLost",
    function(){
      this.toggle=false;
      this.vid.pause();

    }.bind(this));
    }
    
  })
      
  AFRAME.registerComponent("markerhandler", {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        $("#infobutton").css("display", "block");
		if (textshown){
			$(".projektfeld").css("display", "block");
		}
      })
	  this.el.sceneEl.addEventListener('markerLost', () => {
		$("#infobutton").css("display", "none");
		$(".projektfeld").css("display", "none");
      })
    }
  });
  
  /*$(".arrowtoleft").click(function(){
    $("body").remove("a-scene");
    $("body").add('<a-scene embedded arjs renderer="antialias: false; logarithmicDepthBuffer: true" class="ascene"><canvas id="canvasExample">  </canvas><a-assets><video id="vid" src="../Videos/DavisDivan.mp4" preload="auto" loop crossorigin webkit-playsinline autoplay muted playsinline></video></a-assets><a-marker preset="pattern" type="pattern" url="https://raw.githubusercontent.com/dadariga/ia/master/pattern/pattern-Download.patt"><a-entity obj-model="obj: #r2d2-obj; mtl: #r2d2-mtl" position="0 0 0" scale="0.005 0.005 0.005"></a-entity> <!--rotation="-90 0 -90"--></a-marker><a-marker preset="pattern" type="pattern" videohandler smooth="true"smoothcount="10"smoothTolerance="0.01"smoothThreshold="5" raycaster="objects: .clickable" emitevents="true" cursor="fuse: false,rayOrigin: mouse;"   url="https://raw.githubusercontent.com/fermiumsunset/dump/main/pattern-markerAuto.patt"><a-video src="#vid"position="0 0 0"scale="5 5 5"rotation="0 0 0"class="clickable"  ></a-video></a-marker><a-marker preset="pattern" type="pattern" url="https://raw.githubusercontent.com/fermiumsunset/dump/main/patternBrille.patt"><a-entity obj-model="obj: #divan-obj; mtl: #divan-mtl" position="0 0 -3" scale="0.0003 0.0003 0.0003"></a-entity></a-marker><a-entity camera></a-entity></a-scene>');

    //$("#a-marker").replaceWith('<a-marker preset="pattern" type="pattern" url="https://raw.githubusercontent.com/fermiumsunset/dump/main/pattern-markerAuto.patt"><a-entity position="0 0 0"scale="0.2 0.2 0.2"gltf-model="https://raw.githubusercontent.com/dadariga/ia/master/3DModelle/autolowpoly/carlowpoly.gltf"></a-entity></a-marker>');

    /*var item = document.getElementById("a-marker");
    var amarker1 ='<a-marker preset="pattern" type="pattern" id="a-marker"url="https://raw.githubusercontent.com/dadariga/ia/master/pattern/pattern-markerAuto.patt"><a-entity light="type:directional; castShadow:true;" position="5 10 5" target="#directionaltarget"></a-entity><a-entity id="directionaltarget" shadow="receive: true"position="0 0 0"scale="0.5 0.5 0.5" gltf-model="https://raw.githubusercontent.com/dadariga/ia/master/3DModelle/autolowpoly/carlowpoly.gltf"></a-entity></a-marker>';
    item.parentNode.removeChild(item).appendChild(amarker1);
   
  
   /* if(list.hasChildNodes()){
      list.removeChild(list.childNodes[0]);
    }*/


    //$(".ascene").('<a-marker preset="pattern" type="pattern" id="a-marker"url="https://raw.githubusercontent.com/dadariga/ia/master/pattern/pattern-markerAuto.patt"><a-entity light="type:directional; castShadow:true;" position="5 10 5" target="#directionaltarget"></a-entity><a-entity id="directionaltarget" shadow="receive: true"position="0 0 0"scale="0.5 0.5 0.5" gltf-model="https://raw.githubusercontent.com/dadariga/ia/master/3DModelle/autolowpoly/carlowpoly.gltf"></a-entity></a-marker>')
})
/*$(".arrowtoright").click(function(){
  $("#a-marker").replaceWith('<a-marker preset="pattern" type="pattern" videohandler smooth="true"smoothcount="10"smoothTolerance="0.01"smoothThreshold="5" raycaster="objects: .clickable" emitevents="true" cursor="fuse: false,rayOrigin: mouse;"   url="https://raw.githubusercontent.com/fermiumsunset/dump/main/pattern-markerAuto.patt"><a-video src="#vid"position="0 0 0"scale="10 10 10"rotation="0 0 0"class="clickable"></a-video></a-marker>');
  
})

  })*/
  
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


markerAuto.bindPopup('<img class="mapicon" src="https://raw.githubusercontent.com/dadariga/ia/master/src/images/KarteIconAuto.png"><nobr><p>3D-Auto</p></nobr>').addTo(mymap);
markerAuto.openPopup();
markerBrille.bindPopup('<img class="mapicon" src="https://raw.githubusercontent.com/dadariga/ia/master/src/images/KarteIconBrille.png"><nobr><p>Stopmotion-Film</p></nobr>').addTo(mymap);


$(".closemap").click(function(){
$(".closemap").css("visibility", "hidden");
window.open("navbar.html", "_self");
})

function changemodel(){
  document.getElementById("ascene").innerHTML="";
  document.getElementById("ascene").innerHTML=' <a-assets><video id="vid" src="../Videos/DavisDivan.mp4" preload="auto" loop crossorigin muted webkit-playsinline autoplay playsinline></video></a-assets><a-marker preset="pattern" type="pattern" videohandler smooth="true"smoothcount="10"smoothTolerance="0.01"smoothThreshold="5" raycaster="objects: .clickable" emitevents="true" cursor="fuse: false,rayOrigin: mouse;"   url="https://raw.githubusercontent.com/fermiumsunset/dump/main/pattern-markerAuto.patt"><a-video src="#vid"id="avideonew"position="0 0 0"scale="5 5 5"rotation="0 0 0"class="clickable"></a-video></a-marker>';
}
function changemodeltolowpoly(){
  document.getElementById("ascene").innerHTML="";
  document.getElementById("ascene").innerHTML=' <a-marker preset="pattern" type="pattern" url="https://raw.githubusercontent.com/fermiumsunset/dump/main/pattern-markerAuto.patt"><a-entity position="0 0 0"scale="0.2 0.2 0.2"gltf-model="https://raw.githubusercontent.com/dadariga/ia/master/3DModelle/autolowpoly/carlowpoly.gltf"></a-entity></a-marker>';
}

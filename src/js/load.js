function load(){
  document.getElementById("splashscreen").style.display='none';
}

window.onload = window.setTimeout(load, 4000);

if(screen.availHeight > screen.availWidth){
  alert("Please use Landscape-Mode!");
}

function hideIntro() {
  var x = document.getElementById("intro-block");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function load(){
  document.getElementById("splashscreen").style.display='none';
}

window.onload = window.setTimeout(load, 4000);

if(screen.availHeight > screen.availWidth){
  alert("Bitte Querformat verwenden!");
}

function hideIntro() {
  window.location.replace("../navbar.html");
}
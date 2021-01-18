function load(){
  document.getElementById("splashscreen").style.display='none';
}

window.onload = window.setTimeout(load, 2000);

if(screen.availHeight > screen.availWidth){
  alert("Bitte Querformat verwenden!");
}
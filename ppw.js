function toggleDarkMode(){
  var bodyElement=document.getElementById("mainbackground");
  var darkNavBar=document.getElementsByClassName("navbar")[0];
  if (bodyElement.style.background=='sienna'){
    bodyElement.style.background='#cdb9ac';
    darkNavBar.style.background='white';
  }
  else{
    bodyElement.style.background='sienna';
    darkNavBar.style.background='#cdb9ac';
  }
}

function toggleDarkMode(){
  var bodyElement=document.getElementById("mainbackground");
  var darkNavBar=document.getElementsByClassName("navbar")[0];
  if (bodyElement.style.background=='#7b5d45'){
    bodyElement.style.background='#cdb9ac';
    darkNavBar.style.background='white';
  }
  else{
    bodyElement.style.background='#7b5d45';
    darkNavBar.style.background='#cdb9ac';
  }
}

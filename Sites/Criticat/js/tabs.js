function openTab(evt, tabname){
  var i, tabcontent, tablinks;

  // Get all elements with class "tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for(i=0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  // From elements with the class "tablinks", remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for(i=0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show current tab, add active class to button that opened the tab
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}

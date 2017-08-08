function getVidEmbed(embedID, inputID){
  var userUrl, cleanUrl;

  userUrl = document.getElementById(inputID).value;
  cleanUrl = DOMPurify.sanitize(userUrl);
alert(cleanUrl)
  document.getElementById(embedID).src = cleanUrl;
}

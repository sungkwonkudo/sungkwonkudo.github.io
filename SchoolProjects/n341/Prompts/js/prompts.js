/*
TITLE: Prompts.js
AUTHOR: Sungkwon Kudo
PURPOSE: Javascript for prompts page
ORIGINALLY CREATED ON: 09 Sep 2015
lAST MODIFIED ON: 
LAST MODIFIED BY: Sungkwon Kudo
MODIFICATION HISTORY: 
09 Sep 2015: Date created
*/

$ (document).ready(function(){

    var elName = document.getElementById("name");
    var strQuestion = "Sign your name here now. Won't regret it.";
    var strGreeting = "Ahoy, bit more writing and you comin' with us, ";
    var strFullGreeting;
    var strDefault = "Jerry";
    var strSignHere = "Signed, "
   
    strName = prompt(strQuestion, strDefault);
    
    //The greeting portion of the lab
    strFullGreeting = strGreeting+strName;
    window.alert(strFullGreeting);
    
    /*A variable to demonstrate concatenation*/
    var strSealed = strSignHere + strName;
    
    //Adds in signature along with formatting
    document.getElementById("signature").textContent = strSealed;
    
    //Changes name on contract
    elName.textContent = strName;
}); // end (document).ready()
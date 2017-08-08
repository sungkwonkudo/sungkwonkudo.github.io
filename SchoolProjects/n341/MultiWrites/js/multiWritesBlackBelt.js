/*
    TITLE: multiWritesBlackBelt.js
    AUTHOR: Sungkwon Kudo
    PURPOSE: Javascript excersize using both textContent and innerHTML
	ORIGINALLY CREATED ON: 
	lAST MODIFIED ON: 31 Aug 2015
	LAST MODIFIED BY: Sungkwon Kudo
	MODIFICATION HISTORY: 
	31 Aug 2015: Date created (SK)
*/

// Playing around with functions and changing content.

    function displayText(){
        var strButtonValue = document.getElementById("switch");
        
        //checks the string of the button and switches the
        //text inside
        if(strButtonValue.value=="Blimey") {
            displayTextContent();
            strButtonValue.value="No";
        } else{
            displayInnerHTML();
            strButtonValue.value="Blimey";
        }
    } // end displayText
    
    function displayTextContent(){
        var strMessage = "Teh pirate speak ends here.";
        var elStrOutput = document.getElementById("changeText");
        elStrOutput.textContent = strMessage;
    } // end displayTextContent
    
    function displayInnerHTML() {
        var strPirateMessage = "ARRRRRRRRRRR";
        var elPirateStrOutput = document.getElementById("changeText");
        elPirateStrOutput.innerHTML = strPirateMessage;
    } // end displayInnerHTML

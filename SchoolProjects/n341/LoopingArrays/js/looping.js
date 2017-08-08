/*
TITLE: looping.js
AUTHOR: Sungkwon Kudo
PURPOSE: Encode a single character into binary.
ORIGINALLY CREATED ON: 27 Sep 2015
lAST MODIFIED ON: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
27 Sep 2015: Date created. 
*/

$ (document).ready(function(){
    
    var intAscii;
    
    var strInput;
    var strBin;
    var arrBin;
    var strDisplay
    
	alert("Hoist the secret message ye scurvy dawgs!");
    
    //Takes in a character input, turns it into a array of binary characters
	strInput = prompt("One letter only. Put yer soul into it, make it meaningful.", "a")
    strInput = checkSingle(strInput);
    //Check for ONE character
    
	intAscii = parseAscii(strInput);
    strBin = parseBin(intAscii);
    arrBin = strBin.split("");
    
    //Turning array of binary numbers into true/false
    strDisplay = binToString(arrBin);
    
    //Display on HTML page
    document.getElementById("boolcode").textContent = strDisplay;
    
    /*****
    Purpose: Check to see if only 1 character is input
    Parameters: A string
    Return: string
    *****/
    function checkSingle(characters){
        var strCheck = characters;
        
        //Recursive function to continue error checking
        if(strCheck.length > 1){
            strCheck = prompt("That's more than me skull can process, only ONE. single. character.", "z")
            checkSingle(strCheck);
        } else if(strCheck.length < 1){
            strCheck = prompt("Gimme something, not nothin'!", "g");
            checkSingle(strCheck);
        } //end if
        
        return strCheck;
    }

    /*****
    Purpose: Changes a binary string into a string of true (1) and false (0)
    Parameters: A string array of binary numbers
    Return: A string of true and false values
    *****/
	function binToString(arrBin){
        var strAll = "";
        
        for(var i=0; i<arrBin.length; i++){
            if(arrBin[i]=="1"){
                strAll = strAll + "true ";
            } else if(arrBin[i]=="0"){
                strAll = strAll + "false ";
            } else{
                alert("What is this nonsense?");
            }
        }
        
        return strAll;
    }
    
    
	/*****			
	Purpose: Returns the number of the character from an Ascii format
	Parameters: single character / letter		
	Return: integer representing an ascii value
	*****/
	function parseAscii(chrCharacter)
	{
		intAscii = chrCharacter.charCodeAt(0);
		return intAscii;
	}
	
	/*****			
	Purpose: Take in an int and returns a binary representation in string. 
             Pads extra spaces with "0".
	Parameters: single integer representing an ascii value	
	Return: binary, base 2 representation of the number passed to this function
	*****/
	function parseBin(intAscii)
	{
		strBin = parseInt(intAscii, 10).toString(2);
		if(strBin.length < 8)
		{
			var intPlaceHolders = 8 - strBin.length;
			for(var i = 0; i < intPlaceHolders; i++)
			{
				strBin = "0" + strBin;
			}
			
		}
		
		return strBin;
	}

}); // end (document).ready()
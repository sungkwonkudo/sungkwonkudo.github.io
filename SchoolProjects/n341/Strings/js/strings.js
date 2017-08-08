/*
TITLE: strings.js
AUTHOR: Sungkwon Kudo
PURPOSE: Demonstration of the string object in js 
ORIGINALLY CREATED ON: 28 Sep 2015
lAST MODIFIED ON: 10 Oct 2015
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
10 Oct 2015: Created string operations.
16 Sep 2015: Date created. 
*/


$ (document).ready(function(){

var strInput;
var arrNameList
strInput = prompt("I am a magical crystal ball. I can't see the future, but I can name everything. Sell me the soul of your significant other first. :)", "Charles");

// Basic function usage
var str1 = repeatFirst(strInput);
var str2 = replaceVowels(strInput);
var str3 = encode(strInput);
var str4 = splitString(strInput);

// Nesting functions
var str5 = splitString(repeatFirst(strInput));
var str6 = splitString(replaceVowels(encode(strInput)));
var str7 = repeatFirst(splitString(repeatFirst(strInput)));
var str8 = encode(encode(encode(strInput)));
var str9 = encode(repeatFirst(splitString(splitString(strInput))));
var str10 = replaceVowels(encode(strInput));
var str11 = encode(repeatFirst(strInput));
var str12 = encode(replaceVowels(repeatFirst(splitString(splitString(strInput)))));


arrNameList = [str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12];

// Create <ul> element
var elUl = document.createElement('ul');

var elDiv = document.getElementById('ship');
elDiv.appendChild(elUl);


// Create list nodes and append to <ul>
for(var i=0; i<12; i++){
    var elLi1 = document.createElement('li');
    var txt = document.createTextNode(arrNameList[i]);
    elLi1.appendChild(txt);
    elUl.appendChild(elLi1);
}


// Within the functions, trim() is used to ready the string for processing.
                  
/*****
Purpose: take in "String" and return "sSs String"
Parameters: string
Return: string
*****/
function repeatFirst(strName){
    var strClean = strName.trim();
    var strFirst = strClean.charAt(0);
    var strTemp = strFirst.toLowerCase() + strFirst.toUpperCase() + strFirst.toLowerCase() + " ";
    
    var strComplete = strTemp + strClean;
    
    return strComplete;
}   // end repeatFirst

/*****
Purpose: take in "String" and replace every vowel with "n"
Parameters: string
Return: string
*****/
function replaceVowels(strName){
    var strClean = strName.trim();
    
    var strNoVowel = strClean.replace("a", "n");
    var strNoVowel = strNoVowel.replace("e","n");
    var strNoVowel = strNoVowel.replace("i","n");
    var strNoVowel = strNoVowel.replace("o","n");
    var strNoVowel = strNoVowel.replace("u","n");
    
    return strNoVowel;
} // end replaceVowels()


/*****
Purpose: take in "String" and return "ing Str"
Parameters: string
Return: string
*****/
function splitString(strName){
    var strClean = strName.trim();
    var intLength = strClean.length;
    var intHalf = Math.floor(intLength/2);
    
    var strLeft = strClean.substring(0,intHalf);
    var strRight = strClean.substring(intHalf, intLength-1);
    var strCombo = strRight + " " + strLeft;
    
    return strCombo;
    
} // end halfString)()

/*****
Purpose: take in "String" and encode it
Parameters: string
Return: string
*****/
function encode(strName){
    var strClean = strName.trim();
    
    var strAlpha = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // A somewhat optimized key to make the output
    // sound a bit more readable.
    var strKey =   "ebtnapzhomfrjdukxlcsivyqwg EBTNAPZHOMFRJDUKXLCSIVYQWG";
    var strCode = "";
    
    for(var i = 0; i<strClean.length; i++){
        var chr = strClean.charAt(i);
        var intPos = strAlpha.indexOf(chr);
        var chrCode = strKey.charAt(intPos);

        strCode = strCode + chrCode;
    } // end for
    
    return strCode;
    
} // end encode()

}); // end (document).ready()
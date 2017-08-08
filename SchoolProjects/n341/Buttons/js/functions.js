/*
TITLE: functions.js
AUTHOR: Sungkwon Kudo
PURPOSE: Example js for scope
ORIGINALLY CREATED ON: 14 Sep 2015
lAST MODIFIED ON: 
LAST MODIFIED BY: Sungkwon Kudo
MODIFICATION HISTORY: 
14 Sep 2015: Date created. 
14 Sep 2015: Added parameters in comments.
*/

$ (document).ready(function(){
    
// Event handlers
var btnHandler1 = document.getElementById("button1");
var btnHandler2 = document.getElementById("button2");
var btnHandler3 = document.getElementById("button3");

btnHandler1.onclick = function(){cannon("step1",20)};
btnHandler2.onclick = function(){crewCall("step2",42)};
btnHandler3.onclick = function(){krakenBait("step3",100)};

//Event Listener + multiple functions per listener
var btnListener1 = document.getElementById("button4");
btnListener1.addEventListener("click", function(){
    battleCry("step4", 12);
    invade("step5", 33);
    steer("step6", 4);
    }, false);

/*****
Function to shoot cannons
Parameters: element id (Id) and any number(intNum).
*****/
function cannon(Id, Num){
	var strID = Id;
	var intNum = Num;
	var strOutput = "Shoot " + intNum + " CANNONS!!! ";
	document.getElementById(strID).textContent=strOutput;
	alert("Arrrrgh, "+intNum+" cannons shot!");
}

/*****
Function to call on a certain number of the crew
Parameters: element id (Id) and any number(intNum).
*****/
function crewCall(Id, Num){
	var strID = Id;
	var intNum = Num;
	var strOutput = "Get " + intNum + " men over here! ";
	document.getElementById(strID).textContent=strOutput;
	alert("Aye, all "+intNum+" of them came.");
}

/*****
Function to randomly bait and use the kraken using x kilos of meat
Parameters: element id (Id) and any number(intNum).
*****/
function krakenBait(Id, Num){
	var strID = Id;
	var intNum = Num;
	var strOutput = "Throw " + intNum + " kilos of meat and pray for the kraken's blessings. Arrr. ";
	document.getElementById(strID).textContent=strOutput;
	alert(intNum+" meat n' corpses thrown overboard. Arrr.");
}

/*****
Function for a battle cry
Parameters: element id (Id) and any number(intNum).
*****/
function battleCry(Id, Num){
	var strID = Id;
	var intNum = Num;
	var strOutput = "What? I can't hear y'all. Shout it out " + intNum + " more times! ";
	document.getElementById(strID).textContent=strOutput;
	alert(intNum+" more times y'dreadful lot.");
}

/*****
Function to latch on to the enemy ship using x hooks.
Parameters: element id (Id) and any number(intNum).
*****/
function invade(Id, Num){
	var strID = Id;
	var intNum = Num;
	var strOutput = "Get " + intNum + " hooks n' invade their ship. ";
	document.getElementById(strID).textContent=strOutput;
	alert("Haul over "+intNum+" hooks to their ship!");
}

/*****
Function to steer ship to x o'clock to aim cannons. 
Has a constraint of intNum%12 built-in.
Parameters: element id (Id) and any number(intNum).
*****/
function steer(Id, Num){
	var strID = Id;
	var intNum = Num;
	var intClockFace = intNum%12 + 1;
	var strOutput = "Steer her to " + intClockFace + " o'clock. ";
	document.getElementById(strID).textContent=strOutput;
	alert("Steered to "+intClockFace+" o'clock, now give 'em a good ol' broadside.");
}

}); // end (document).ready()
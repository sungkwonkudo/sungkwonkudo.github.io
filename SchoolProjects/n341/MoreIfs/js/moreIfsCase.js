/*
TITLE: moreIfsCase.js
AUTHOR: Sungkwon Kudo
PURPOSE: Practice with Case/Switch
ORIGINALLY CREATED ON: 
lAST MODIFIED ON: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
16 Sep 2015: Date created. 
*/

/*
TITLE: moreIfs exercize 1 
AUTHOR: Sungkwon Kudo
PURPOSE: Practice with if/else
ORIGINALLY CREATED ON: 
lAST MODIFIED ON: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
23 Sep 2015: Date created. 
*/

$ (document).ready(function(){
	
main();

}); // end (document).ready()

function main(){
	// Current location coordinates
	var intCurrentLatitude = 0;
	var intCurrentLongitude = 0;
	// Destination coordinates
	var intDestinationLatitude = 0;
	var intDestinationLongitude = 0;
	
	intCurrentLatitude = getUserNum("Input current latitude", "100");
	intCurrentLongitude = getUserNum("Input current longitude", "100");
	// Destination coordinates
	intDestinationLatitude = getUserNum("Input destination latitude.","-32");
	intDestinationLongitude = getUserNum("Input destination longitude.","54.32");
	
	switch(true){
		case intCurrentLatitude < intDestinationLatitude && intCurrentLongitude < intDestinationLongitude:
			document.getElementById("output").textContent = "Head North East";
			break;
		case intCurrentLatitude < intDestinationLatitude && intCurrentLongitude > intDestinationLongitude:
			document.getElementById("output").textContent = "Head North West";
			break;
		case intCurrentLatitude > intDestinationLatitude && intCurrentLongitude > intDestinationLongitude:
			document.getElementById("output").textContent = "Head South West";
			break;
		case intCurrentLatitude > intDestinationLatitude && intCurrentLongitude < intDestinationLongitude:
			document.getElementById("output").textContent = "Head South East";
			break;
		default:
			document.getElementById("output").textContent = "Land Ho!";
	}
	
/* 	if (intCurrentLatitude < intDestinationLatitude && intCurrentLongitude < intDestinationLongitude){
		alert("Head North East");
	} else if(intCurrentLatitude < intDestinationLatitude && intCurrentLongitude > intDestinationLongitude) {
		alert("Head North West");
	} else if(intCurrentLatitude > intDestinationLatitude && intCurrentLongitude > intDestinationLongitude) {
		alert("Head South West");
	} else if(intCurrentLatitude > intDestinationLatitude && intCurrentLongitude < intDestinationLongitude) {
		alert("Head South East");
	} else {
		alert("Land Ho!")
	} // end if */
	
}

function getUserNum(strPrompt, strDefault){
	var strNum = prompt(strPrompt, strDefault);
	
	var fltNum = parseFloat(strNum);
	
	return fltNum;
}

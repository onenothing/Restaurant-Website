function validateForm(){
 var username = document.getElementById('myName').value;
 var email = document.getElementById('Email').value;
 var phone = document.getElementById('Phone').value;
 var dropDown = document.getElementById('option').value;
 var M = document.getElementById('monday').checked;
 var T = document.getElementById('tuesday').checked;
 var W = document.getElementById('wednesday').checked;
 var Th = document.getElementById('thursday').checked;
 var F = document.getElementById('friday').checked;
 var addInfo = document.getElementById("Additional Information").value;

 var errors=[];
 if(username == "") {
 	errors.push("Name must be filled out!");
 
 }

 if (email == "" && phone == "") {
 	errors.push("Please fill out either Email or Phone!");
 
 }

 if (dropDown == "other" && addInfo == "") {
 	errors.push("PLease fill out Additional Information");	
 }

 if (M == false && T == false && W == false && Th == false && F == false) {
 	errors.push("At least one days box must be checked!");
 
 }

 if (errors.length > 0) {
 	var msg = "ERRORS:\n\n";
 	for (var i = 0; i < errors.length; i++) {
 		msg += errors[i] + "\n";
 }

 alert(msg);
 return false;
 
 }
 

 }


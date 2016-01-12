$(document).ready(function() {


	var clock = setInterval(timer, 500);
	var text = setInterval(changeText, 6000);
	var backgroundColor = setInterval(changeColor, 1000);
	var changeFont = setInterval(fontSize, 1000);
	var nonArray = setInterval(nonArray, 1000);
	var counter = 0;
	var fonts =["25px", "30px", "35px", "40px", "45px", "50px", "55px", "60px", "65px", "70px", "75px", "80px"];


function timer() {
    var today = new Date();
    // document.getElementById("demo").innerHTML = today.toLocaleTimeString();
 	$("#txt").html(today.toLocaleTimeString()); 
    var hours 	= today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    changeText(minutes);
    
}

// #1 changes text color every minute from red to blue
function changeText (i) {

    if ((i % 2)===0) {  
    $("#txt").css({color: "green"});
	}else{
    $("#txt").css({color: "purple"});
    }
 } 

// #2 changes background color from red to blue based on set interval
function changeColor() {
    var today = new Date();
    // document.getElementById("demo").innerHTML = today.toLocaleTimeString();
 	$("#txt").html(today.toLocaleTimeString()); 
    var hours 	= today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    
 
    if ((minutes % 2)===0) {  
    $("#txt").css({backgroundColor: "red"});
	}else{
    $("#txt").css({backgroundColor: "blue"});
    }
}

// #3 font size loops through the array fs based off set interval changeFont
function fontSize() {
 	var size = fonts[counter];
   	$("#txt").css({fontSize: size});
   	counter = counter + 1;
   	if (counter === fonts.length + 1) {
   		counter = 0;
   	}
}

// #without having to do an array
// function nonArray() { 
//    	var randomNumber = Math.floor(Math.random() * 10) + 1;

//    	$("#demo").css({fontSize: counter + "px"});
//    	counter = counter + 1;
//    	if (counter === 1000) {
//    		counter = 0;
//    	}

// }
changeColor();

}); 


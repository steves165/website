// JavaScript Document
function updateClock() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	
	minutes = ( minutes < 10 ? "0" : "" ) + minutes;
	seconds = ( seconds < 10 ? "0" : "" ) + seconds;
	if (hours < 10) {
		hours = "0" + hours;
	}
	
	var timeString = ( hours + ":" + minutes + ":" + seconds );

	document.getElementById("clock").innerHTML = timeString;
}

// JavaScript Document
var Normal = "Click The Button To Get The Date."

function displayDate() {
	document.getElementById("Line1").innerHTML = "<strong>The Date and Time is >>>" + '&nbsp;&nbsp;' + Date() +"</strong>";
    }

function normal() {
	document.getElementById("Line1").innerHTML = Normal;
}

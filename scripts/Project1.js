// JavaScript Document
var Normal = "Click The Button To Get The Date."

function displayDate() {
	document.getElementById("Line1").innerHTML = "<h1>The Date and Time is >>>" + '&nbsp;&nbsp;' + Date() +"</h1>";
    }

function normal() {
	document.getElementById("Line1").innerHTML = Normal;
}

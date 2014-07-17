function main() {
		$('#main-sm').load("Templates/main.html");
		$('#main').load("Templates/main.html");
		runSkidders();
	
}
function jspage() {
		$('#main-sm').load("Templates/javascript.html");
		$('#main').load("Templates/javascript.html");
		runSkidders();
}
function yt() {
		if ($('#main-sm').is(':visible')) {
			$('#main-sm').load("Templates/yt.html");
		} else {
			$('#main').load("Templates/yt.html");
		}
		runSkidders();
}
function cpb() {
		$('#main-sm').load("Templates/cpb.html");
		$('#main').load("Templates/cpb.html");
		runSkidders();
}
function flashPage() {
	$('#main').load("Templates/flash.html");
	$('#main-sm').load("Templates/flash.html");
	runSkidders();
}
function profilePage() {
	$('#main').load("Templates/profile.html");
	$('#main-sm').load("Templates/profile.html");
	runSkidders();
}
function contactPage() {
	$('#main').load("Templates/contact.html");
	$('#main-sm').load("Templates/contact.html");
	runSkidders();
}
function calc() {
	$('#main').load("Templates/calc.html");
	$('#main-sm').load("Templates/calc.html");
	runSkidders();
}
function calc2() {
	$('#main').load("Templates/calc2.html");
	$('#main-sm').load("Templates/calc2.html");
	runSkidders();
}
function datePage() {
	$('#main').load("Templates/date.html");
	$('#main-sm').load("Templates/date.html");
	runSkidders();
}
function rpsPage() {
	$('#main').load("Templates/rps.html");
	$('#main-sm').load("Templates/rps.html");
	runSkidders();
}
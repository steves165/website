// JavaScript Document
function deleteRow(r)
{
	var i=r.parentNode.parentNode.rowIndex;
	document.getElementById('table1').deleteRow(i);
}

function newSkill() {
    var tblBody = document.getElementById('table1').tBodies[0];
    var newRow = tblBody.insertRow(+1);
    var newCell0 = newRow.insertCell(0);
    newCell0.innerHTML = '<input type="text" name="requiredSkills" size="24" value="Please enter a required skill..." width="100%">';
    var newCell1 = newRow.insertCell(1);
    newCell1.innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)" />';
}

function multiply(tblId, input1, input2)
{
    var A = parseFloat(input1);
	var B = parseFloat(input2);
	var C = A.toString();
	var D = B.toString();
	var E = (C + "  *  " + D + "  =  " + (A*B))
  	var tblBody = document.getElementById(tblId).tBodies[0];
 	var newRow = tblBody.insertRow(-1);
  	var newCell0 = newRow.insertCell(0);
  	newCell0.innerHTML = E;
	var newCell1 = newRow.insertCell(1);
	newCell1.innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)" />';
}

function add(tblId, input1, input2)
{
    var A = parseFloat(input1);
	var B = parseFloat(input2);
	var C = A.toString();
	var D = B.toString();
	var E = (C + "  +  " + D + "  =  " + (A+B))
  	var tblBody = document.getElementById(tblId).tBodies[0];
 	var newRow = tblBody.insertRow(-1);
  	var newCell0 = newRow.insertCell(0);
  	newCell0.innerHTML = E;
    var newCell1 = newRow.insertCell(1);
	newCell1.innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)" />';
}

function subtract(tblId, input1, input2)
{
    var A = parseFloat(input1);
	var B = parseFloat(input2);
	var C = A.toString();
	var D = B.toString();
	var E = (C + "  -  " + D + "  =  " + (A-B))
  	var tblBody = document.getElementById(tblId).tBodies[0];
 	var newRow = tblBody.insertRow(-1);
  	var newCell0 = newRow.insertCell(0);
  	newCell0.innerHTML = E;
    var newCell1 = newRow.insertCell(1);
	newCell1.innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)" />';
}

function power(tblId, input1, input2)
{
    var A = parseFloat(input1);
	var B = parseFloat(input2);
	var C = A.toString();
	var D = B.toString();
	var E = (C + "  ^  " + D + "  =  " + (Math.pow(A,B)));
  	var tblBody = document.getElementById(tblId).tBodies[0];
 	var newRow = tblBody.insertRow(-1);
  	var newCell0 = newRow.insertCell(0);
  	newCell0.innerHTML = E;
	var newCell1 = newRow.insertCell(1);
	newCell1.innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)" />';
}

function reset1() {
	document.getElementById("input1").value="";
	document.getElementById("input2").value="";
}

function reset2() {
	var i = document.getElementById("table1").rows.length;
	for (i > 0; i--;) {
		document.getElementById("table1").deleteRow(i-1);
	}
}

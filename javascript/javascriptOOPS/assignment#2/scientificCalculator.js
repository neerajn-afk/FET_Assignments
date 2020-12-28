//Function to change the sign.
function changeSign() {
    var input = document.getElementById('dis').value;
	if(input.substring(0, 1) == "-")
        document.getElementById('dis').value += substring(1, input.length);
	else
        document.getElementById('dis').value = "-" + input;
}
//Function to perform square of a number.
function square() {
	document.getElementById('dis').value = eval(document.getElementById('dis').value) * eval(document.getElementById('dis').value);
}
//Function for performing square root.
function squareRoot() {
	document.getElementById('dis').value = Math.sqrt(document.getElementById('dis').value);
}
//Function to perform cuberoot of a number.
function cube() {
	document.getElementById('dis').value = eval(document.getElementById('dis').value) * eval(document.getElementById('dis').value)* eval(document.getElementById('dis').value);
}
//Function to perform cuberoot of a number.
function percent() {
	document.getElementById('dis').value = Math.cbrt(document.getElementById('dis').value);
}

//Function for displaying the values on display.
function c(val){
    document.getElementById("dis").value=val;
}
//Function which whill concatenate the string on displayed screen.
function v(val){
    document.getElementById("dis").value+=val;
}
//Function for backspace.
function back() {
    var value = document.getElementById("dis").value;
    document.getElementById("dis").value = value.substr(0, value.length - 1);
}
//This function will evaluate the whole string after clicking on equal button.
function evaluateExpression() { 
    c(eval(document.getElementById("dis").value)) 
} 
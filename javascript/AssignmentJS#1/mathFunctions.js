 var msg="<p><code>The script is located in external script file called math.js</code></p>"; 
 
function addNumbers(headParam, bodyParam) { 
    document.write(msg);
    document.write('The sum of ' + headParam + ' and ' + bodyParam + ' is: ' + (headParam+bodyParam)); 
}
//javascript code
//Function which will call the webworker and will alot the given work.
function runWorker(){
    if(window.Worker){
        var worker = new Worker('myWorker.js');
        worker.onmessage = function (event){
            alert("Completed "+ event.data +" iterations");
        };
    }else{
        alert('Oops, you need to change your browser.');
    }
}
function showMessage(){
    alert('Hello Neeraj Nehra');
}
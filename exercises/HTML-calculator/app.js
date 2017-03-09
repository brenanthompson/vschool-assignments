function addInput() {
    var addOne = document.getElementById("addOne").value;
    var addTwo = document.getElementById("addTwo").value;
    var addTotal = Number(addOne) + Number(addTwo);
    document.getElementById("addTotal").innerHTML = addTotal;
}

function subInput() {
    var subOne = document.getElementById("subOne").value;
    var subTwo = document.getElementById("subTwo").value;
    var subTotal = Number(subOne) - Number(subTwo);
    document.getElementById("subTotal").innerHTML = subTotal;
}

function timesInput() {
    var timesOne = document.getElementById("timesOne").value;
    var timesTwo = document.getElementById("timesTwo").value;
    var timesTotal = Number(timesOne) * Number(timesTwo);
    document.getElementById("timesTotal").innerHTML = timesTotal;
}
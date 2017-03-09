
function smallNumber(x, y) {
    if (x < y) {
        console.log(x)
    }
    else if (x > y) {
        console.log(y)
    }
}

smallNumber(5903, 57398)


function monkeyTrouble (aSmile, bSmile) {
    if (aSmile && bSmile) {
        return true;
    } else if (aSmile || bSmile){
        return false;
    } else {
        return true;
    }
}

console.log(monkeyTrouble(true, true))  
console.log(monkeyTrouble(false, false)) 
console.log(monkeyTrouble(true, false))

var myDate = new Date ();
var time = myDate.getHours();

function greeting(time) {
    if (time < 11) {
        console.log("Good Morning!");
    } else if (time > 18) {
        console.log("Good evening!");
    } else {
        console.log("Good afternoon!")
    }
        
}

greeting();
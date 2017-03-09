var date = new Date();
var currentDay = date.getDay();
console.log(currentDay);
//function dayOfWeek() {
//    
//}

function currentDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    console.log("Today is: " + n);
}

function currentTime() {
    var d = new Date();
    d.getHours();
    d.getMinutes();
    d.getSeconds();
    console.log("Current time is: " + currentTime)
}

currentDay();
currentTime();


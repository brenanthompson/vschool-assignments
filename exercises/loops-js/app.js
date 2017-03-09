//var loopOne = "abcdefghijklmnopqrstuvwxyz";
//
//for (var i = 0; i < loopOne.length; i++){
//    console.log(loopOne[i])
//}
//  

//var letter = "d";
//var string = "Hello world";
//
//function findLetters(string, letter) {
//    for (var i = 0; i < string.length; i++) {
//        if(string[i] === letter){
//            return i;
//        };
//    }
//    return letter + " not found";
//}
//console.log(findLetters(string, letter));

//var array = [908,45,09,6,32,20,42,980];
//
//function findTheAnswer(numbers) {
//    for (var i = 0; i < numbers.length; i++) {
//        if(numbers[i] === 42) return [i];
//    }
//    return "42 not found";
//}
//
//console.log(findTheAnswer(array));

var array = [2353, 4, 35, 22, 95, 3, 532, 5559, 87, 90];
var smallest = array[0];

function tinyNumber(number) {
    for (var i = 0; i < number.length; i++) {
        if(smallest > array[i]) {
            smallest = array[i]; 
        }         
    }
   console.log(smallest);
}
tinyNumber(array);
//function add(a, b) {
//  return a + b;
//}
//
//console.log(add(94, 546));

//var bigNumber = function(a, b, c){
//    return Math.max(a, b, c);
//}
//
//console.log(bigNumber(9085890, 34908, 89745));

//function oddOrEven(n) {
//    if (n % 2 === 0){
//        console.log("even");
//    } else {
//        console.log("odd");
//    }
//}
//
//oddOrEven(55)

var strang = "Que paso vato! This is a longer string now! ";

var weirdOne = function (strang) {
    if (strang.length <= [19]) {
        return strang.concat(strang);
    } else {
        return strang.slice(0, (strang.length/2));
    }
}
console.log(weirdOne(strang));
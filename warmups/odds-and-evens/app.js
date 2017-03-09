
//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.
var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.
//code here
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 43, 98, 395];
var oddsAndEvens = function(nums) {
    for(var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 ===0) {
            evens.push(nums[i]);
        } else {
                odds.push(nums[i]);
            }
    }
}
oddsAndEvens(nums);
console.log("evens = " + evens);
console.log("odds = " + odds);


//

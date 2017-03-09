var input = "Groundskeeper Willy"
var noDupsArr = [];
var misfitsArr = [];

for (var i = 0; i < input.length; i++) {
    if (noDupsArr.indexOf(input[i]) === -1) {
        noDupsArr.push(input[i]);
    } else {
        misfitsArr.push(input[i]);
    }
}

noDupsStr = noDupsArr.join();
misfitsStr = misfitsArr.join();

console.log(noDupsStr);
console.log(misfitsStr);
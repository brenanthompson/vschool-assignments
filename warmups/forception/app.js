var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var endArray = [];

for (var i = 0; i < people.length; i++) {
    endArray.push(people[i] + ":");
    for (var j = 0; j < alphabet.length; j++) {
        endArray.push(alphabet[j].toUpperCase());
    }
}
console.log(endArray);
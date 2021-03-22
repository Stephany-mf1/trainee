var numbersArray = [6, 5, 4, 3, 1, 5, 0, 9];
var pow = 0;
var finalNum = 0;
for (var i = numbersArray.length - 1; i >= 0; i--) {
    console.log("index = " + i + " value = " + numbersArray[i]);
    finalNum += numbersArray[i] * Math.pow(10, pow);
    pow++;
}
finalNum++;
console.log(finalNum);
//# sourceMappingURL=bases.js.map
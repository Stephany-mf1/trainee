let numbersArray: Array<number> = [6,5,4,3,1,5,0,9];
var pow:number = 0;
var finalNum:number = 0;
for (var i = numbersArray.length - 1; i >= 0; i--) {
    console.log("index = " + i + " value = " + numbersArray[i]);
    finalNum += numbersArray[i] * Math.pow(10, pow);
    pow++;
}

finalNum++;

console.log(finalNum);
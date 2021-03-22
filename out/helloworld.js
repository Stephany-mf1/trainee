var initialArray = [1, 7, 3, 6, 5, 6];
var pivotIndex = '-1';
for (var index in initialArray) {
    var leftSum = 0;
    var rightSum = 0;
    // calculate leftsum and rightsum for index
    for (var index2 in initialArray) {
        if (index2 < index) {
            leftSum = leftSum + initialArray[index2];
        }
        else if (index2 > index) {
            rightSum = rightSum + initialArray[index2];
        }
    }
    // if sums are equal, pivot found!
    if (leftSum == rightSum) {
        pivotIndex = index;
    }
}
console.log("pivot index = " + pivotIndex);
//# sourceMappingURL=helloworld.js.map
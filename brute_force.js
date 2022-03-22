// Bubble sort

function bblSort(array) {
    for (var i = 0; i < array.length; i++) {
        // Last i elements are already in place
        for (var j = 0; j < (array.length - i - 1); j++) {
            // Checking if the item at present iteration
            // is greater than the next iteration
            if (array[j] > array[j + 1]) {
                // If the condition is true then swap them
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    let biggestNumber = array[array.length - 1], secondBiggestNumber = 0;
    // find secondBiggestNumber from behind
    for (index = array.length - 1; index >= 0; index--) {
        // once we found a number smaller than biggest Number, we assign it to variable and break the loop
        if(array[index] < biggestNumber){ 
            secondBiggestNumber = array[index]
            break
        }
    }

    // Print the sorted array
    console.log(`Sorted Array : [ ${array} ]`);
    console.log(`Second Biggest Number in Array : ${secondBiggestNumber}`);
}

// This is our unsorted array
var array = [234, 43, 55, 63, 1231, 6, 235, 547];
// Now pass this array to the bblSort() function
bblSort(array);

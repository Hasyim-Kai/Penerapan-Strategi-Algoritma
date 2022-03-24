function binarySearch(arr, target) {
    if (arr.includes(target)) {
        //start will be the first index & end will be last index 
        let start = 0, end = arr.length - 1;

        //guess is typically middle of array 
        let guessIndex = Math.floor((end - start) / 2)

        while (end > start) {
            console.log(`start index : ${start} | end index : ${end} | guessIndex index : ${guessIndex}`)
            if (arr[guessIndex] === target) {
                return `found at index : ${guessIndex}`
            } else if (arr[guessIndex] > target) {
                //this means our guess was too big. It also means we don't need the end-half of the array. 
                //we reassign end to our guess. Now our array is halved. We also  reassign guess to the middle of the bottom half of 
                //our array. Now end just got closer to start and we have narrowed our search 
                console.log("guess too BIG\n")
                end = guessIndex;
                guessIndex = Math.floor((end + start) / 2)
                continue;

            } else if (arr[guessIndex] < target) {
                //this means our guess was too small we will reset our start to the guess index and look again.
                console.log("guess too SMALL\n")
                start = guessIndex;
                guessIndex = Math.ceil((end + start) / 2)
                continue;
            }
        }
    } else {
        return 'Target Not Found in the given Array'
    }
}

let myArray = [12, 54, 23, 76, 14, 1, 64, 89, 90, 34, 111].sort((a, b) => a - b)
console.log(binarySearch(myArray, 111))
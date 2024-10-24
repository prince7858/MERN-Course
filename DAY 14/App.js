
// // console.log(`Map , Filter and Reduce`);

// // let arr = [1,2,3,4,5,6,7,8,9,10]

// // for(let i=0; i<arr.length; i++){
// //     arr[i] = arr[i] * 2
// // }
// // console.log(arr);

// let array = [1,2,3,4,5,6,7,8,9,10]

// let NewArray = array.map((num, index) => {    // Map
//     return num * 2
// })
// //console.log(array);
// console.log(NewArray);

// let Narr = array.filter((num) => {   // Filter
//     return num % 2 == 0
// })
// console.log(Narr);

// let sum = array.reduce((accumulator,num) => {    // Reduce
//     return accumulator + num
// })
// console.log(sum);



////// binary search

////// linear search

let arr = [11, 33, 44, 55, 77, 345, 678678, 999999];
let target = 33;

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {  
            return mid;
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        }
    }

    return -1;  // Moved return -1 outside the loop
}

console.log(binarySearch(arr, target));




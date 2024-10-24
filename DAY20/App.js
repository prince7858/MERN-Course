/////////////     MergeSortedArray      /////////////


// let arr1 = [1,22,35,54,99]
// let arr2 = [10,11,49,60,101]

// function mergeSortedArray(arr1,arr2) {
//  let i=0
//  let j=0
//  let ans = []

//  while(i<arr1.length && j<arr2.length){
//     if(arr1[i] <= arr2[j]){
//         ans.push(arr1[i])
//         i++
//     }else{
//         ans.push(arr2[j])
//         j++
//     }
//  }
//  while(i<arr1.length){
//     ans.push(arr1[i])
//         i++
//  }
//  while(j<arr2.length){
//     ans.push(arr2[j])
//         j++
//  }

// return ans
// }
// let ans = mergeSortedArray(arr1,arr2)

// console.log(ans)

//////////    MergeSort    /////////////
// // function mergeSort(arr) {
// //     if (arr.length == 1) {
// //         return arr;
// //     }

// //     let middle = Math.floor((0 + arr.length - 1 )/ 2);

// //     let left = mergeSort(arr.slice(0, middle+1));
// //     let right = mergeSort(arr.slice(middle+1));

// //     return mergeSortedArray(left, right);
// // }
// // let result = mergeSort([23,45,7,12,24,67,37])
// // console.log(result);

/////////////         Quick Sort    ///////////////////


 

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[arr.length - 1];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
let arr = [23, 45, 7, 12, 24, 67, 37,  , 19, 28];
console.log(quickSort(arr));



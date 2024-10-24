// let arr1 = []  // declaration

// arr1 = [1,2,3,4,5]   // initalization

// // Array

// let arr = [1,"prince",false,function(){},{},[11,22,33,44,[false,"ans"]]]

// console.log(arr[5][4][1]);


//
//console.log(example)

// let arr2 = example.flat()
// console.log(arr2);

// let arr3 = example.flat(2)
// console.log(arr3);

// let example2 = [1,2,[function(){console.log("Hii Prince")}]]

// //console.log(example2);
// let arr4 = example2.flat()
// console.log(arr4);

// let ex = [1,2,3,4,5]

// // let arr5 = ex.push("singh")
// // console.log(ex);

// // let arr6 = ex.pop()
// // console.log(ex);

// // let arr7 = ex.unshift(100)
// // console.log(ex);

// // let arr8 = ex.shift()
// // console.log(ex);

// let ex2 = ["q","w","e"]
// let arr9 = ex.concat(ex2)
// console.log(arr9);

// let arr = [12,34,45,67,89]

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
  
// }

// let arr = []
// let size = Number(prompt("size of array"))


// for(let i=0; i<size; i++){
//     arr.push(prompt(`enter element ${i+1}`))
   
// }
// console.log(arr);







// Day--12

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0
// for(let val of arr){
//     //console.log(val);
//     sum += val
    
// }
// console.log(sum);


// swap to num

// let a = 10;
// let b = 20;
// let temp = a;
// a = b
// b = temp

// console.log(`a = ${a} and b = ${b}`)


// let a = 10;
// let b = 20;
// a=a+b
// b=a-b
// a=a-b
// console.log(`a = ${a} and b = ${b}`)


// let arr = [1,2,3,4,5]
// let reverse  = []
// for(let  i = arr.length - 1; i>= 0; i--){
//     reverse += arr[i]
// }
// console.log(reverse);

// let arr = [1,2,3,4,5]
// let start = 0
// let end = arr.length-1
// while (start <= end) {
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp

//     start++
//     end--
// }
// console.log(arr);


// let arr = [1,2,3,4,5,34,56,100,23,56,78]

// function search(arr, target) {
//      for(let item of arr){
//         if(item == target){
//             return true
//         }
//     }    
//     return false
// }
// search(arr, 100)
// console.log(search(arr, 100));


// let arr = [1,2,3,4,5,34,56,100,23,56,78]

// function search(arr, target) {
//      for(let i=0; i<arr.length; i++){
//         if(arr[i] == target){
//             return [i]
//         }
//     }    
//     return -1
// }
// search(arr, 100)
// console.log(search(arr, 1000));


// let arr = [100,34,56,-78,-34,54,32,-23]

// arr.sort()

// // arr.sort((a,b) => a-b)
// console.log(arr);

// // arr.sort((a,b) => b-a) // comparitor operator
// // console.log(arr);


/////// sub - array   ////////

let arr = [1,2,3,4,5]

for(let i=0; i<arr.length; i++){
    let temp = []
    for(let j=i; j<arr.length; j++){
        temp.push(arr[j])
        console.log(temp);        
    }
}











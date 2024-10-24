//// Recursion


// function fn(n) {
//     // basecase
//     if (n == 0) {
//         return;
//     }
//     console.log("Prince");
//     n--;
//     fn(n)   // here the function calling itself using recursion
// }
// let n = 5;
// fn(n)

// function fn(n) {
//     // basecase
//     if (n == 0) {
//         return;
//     }
//     console.log("Prince");
//     fn(n - 1)   // here the function calling itself using recursion
// }
// let n = 5;
// fn(n)


// function fn(n) {
//     if (n == 0) {
//         return;
//     }
//     console.log(n);  
//     fn(n - 1)
// }
// let n = 5;
// fn(n)

// function fn(n) {
//     if (n == 0) {
//         return;
//     }
//     fn(n - 1)
//     console.log(n);  
// }
// let n = 5;
// fn(n)

// function fn(n, curr = 1) {
//     if (curr > n) {
//         return;
//     }
//     console.log(curr);
//     fn(n, curr + 1)
// }
// let n = 5;
// fn(n)


// function fn(n) {
//     if (n == 0) {
//         return 1;
//     }
//  let factorial = n * fn(n - 1);
//  return factorial;
    
// }
// console.log(fn(5));


// function revStr(str){
//     if(str == "") return ""
//     return str.charAt(str.length - 1) + revStr(str.substring(0, str.length - 1));
// }
// let str = "Prince"
// console.log(revStr(str));


// function reverseStr(str){
//     if(str == "") return "";
//     return reverseStr(str.slice(1)) + str.charAt(0);
// }
// let str = "qwerty"
// console.log(reverseStr(str));


/////// DAY-19    //////////



function fibo(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    }
    return fibo(n-1)+fibo(n-2)
}
console.log(fibo(10));

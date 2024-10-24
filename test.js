// console.log("hiiiiii");

// // swap variables without a temporary variable
// // using  array Destructuring

// let a = 10, b =20;
// [a, b] = [b, a];
// console.log(a, b);

// // merge array efficently with spread operator

// const arr1 = [1, 2]
// const arr2 = [3, 4]
// const mergearray = [...arr1, ...arr2]
// console.log(mergearray);

// // remove falsy values from array

// const array = [0, "prince", false, null, 42, undefined, "code"]
// const cleanedarray = array.filter(Boolean)
// console.log(cleanedarray);

// // use short circuiting for conditional defaults

// let user = {
//     name : "prince",
//     age: null
// }
// let age = user.age || 24  //defaults to 24 if `age` is null or undefined
// console.log(age);

// // flatten multidimentional array easily

// const nestedarray = [1,[2,3],[4,[5,6]]]
// const flatarray = nestedarray.flat(2)  // depth of 2 to flatten nested
// console.log(flatarray);

// // access nested object properties safely

// const user1 = {
//     name : "prince",
//     address :{
//         city: "aurangabad"
//     }
// }
// console.log(user1.address?.city)
// console.log(user1.contact?.phone);

// // remove duplicates from an array wiyh one line

// const numbers = [1,2,2,3,4,4,5]
// const uniqueNumbers = [...new Set(numbers)]
// console.log(uniqueNumbers);

// // simplify string replacements using regular expressions











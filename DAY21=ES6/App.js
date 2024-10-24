// Rest and Spread Operator


//////////////////////////////   SPREAD OPERATOR  ///////////////////////
// let arr = [1,2,3,4,5,6]
// console.log(arr);
// console.log(...arr);



// let obj = {
//     a : 1,
//     b : 2
// }
// console.log(obj);
// console.log(...obj);


// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]

// let newArr = arr1.concat(...arr2)
// console.log(newArr);

// let newarr = [...arr1,...arr2]
// console.log(newarr);

// let obj = {
//     a : 1,
//     b : {
//         c : 3
//     }
// }
// let obj2 = {
//     a : 10
// }
// let newObj = {
//     ...obj,
//     ...obj2
// }
// // console.log(obj);
// // obj.b.c = 90
// console.log(newObj);
// // newObj.b.c = 10
// // console.log(newObj);
// // console.log(obj);


/////////////////////// REST OPERATOR //////////////////////////


// function abc(a){
//     console.log(a)
// }
// abc("qwert",5,7,3,true)

// function abc(a,...rest){
//     console.log(a,rest)
// }
// abc("qwert",5,7,3,true)


// let obj = {
//     name : "prince",
//     age : 24
// }
// // console.log(obj.name);
// // console.log(obj["age"]);

// // destructuring

// let {name,age} = obj
// console.log(name,age);

// function greet({name,age}){
//     console.log(`hi my name is ${name} and i am ${age} old.`);
// }
// greet(obj)


// let person = {
//     name: 'John',
//     age: 30,
//     address: {
//         city: 'New York',
//         zip: '10001'
//     }
// };

// let { address: { city, zip } } = person;

// console.log(city); 
// console.log(zip);  


// let { name: personName, age: personAge } = person;

// console.log(personName); 
// console.log(personAge);



///// array

// let arr = ["ghjk","dfghj","fghj"]

// let [a,b] = arr
// console.log(a,b);

// function sum(...nums){   // nums as rest operator
// let ans = 0
// console.log(nums);

// for(let item of nums){
//     ans += item
// }
// return ans
// }
// let a = sum(1,2,3,4,5)
// console.log(a);








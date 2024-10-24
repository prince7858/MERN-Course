// // if-else regular


// let gender = "female";

// if(gender == "male"){
//     console.log("He is a Boy.");
    
// }else{
//     console.log("She is a Girl.");
    
// }

// // if-else 
// let age = 76;

// if (age < 18){
//     console.log("You are not allowed you are underage.");
    
// }else if(age >=18 && age > 40){
//     console.log("Your are to old");
    
// }else if(age >=18 && age <40){
//     console.log("You can register your self");
    
// }else{
//     console.log("Something error");
    
// }

// take input from user and print wheather the number is +ve or -ve or a zero

// let input = Number(prompt("enter the integer number")); 
// //here Number is written for getting the input in number only and we can use parseInt also.


// // if(input > 0){
// //     console.log("the number you entered is positive");

// // }else if(input < 0){
// //     console.log("the number you entered is negative");

// // }else{
// //     console.log("the number you entered is zero");
// // }

// if(input > 0){
//     alert("the number you entered is positive");

// }else if(input < 0){
//     alert("the number you entered is negative");

// }else if(input === 0){   // === to check the datatype of the input
//     alert("the number you entered is zero");
// }


// prompt the number is even or odd 

// let num = Number(prompt("enter the number"));

// if(num == 0){
//     alert("number is zero")
// }
// else if(num % 2 == 0){
//     alert("number is even!")
// }
// else{
//     alert("number is odd")
// }

// take five number input from user and cal avg and print result

// let s1 = parseInt(prompt("Enter your marks of subject1"))
// let s2 = parseInt(prompt("Enter your marks of subject2"))
// let s3 = parseInt(prompt("Enter your marks of subject3"))
// let s4 = parseInt(prompt("Enter your marks of subject4"))
// let s5 = parseInt(prompt("Enter your marks of subject5"))

// let avg = (s1+s2+s3+s4+s5)/5;

// if(avg > 90){
//     alert("you got A grade")
// }else if(avg >80 && avg <=90){
//     alert("you got B grade")
// }else if(avg >70 && avg <=80){
//     alert("you got C grade")
// }else if(avg >60 && avg <=70){
//     alert("you got D grade")
// }else if(avg >50 && avg <=60){
//     alert("you got E grade")
// }else{
//     alert("you are Fail!")
// }

// // another way to solve the same problem

//  let s1 = parseInt(prompt("Enter your marks of subject1"));
//  let s2 = parseInt(prompt("Enter your marks of subject2"));
//  let s3 = parseInt(prompt("Enter your marks of subject3"));
//  let s4 = parseInt(prompt("Enter your marks of subject4")); 
//  let s5 = parseInt(prompt("Enter your marks of subject5"));
//  let avg = (s1+s2+s3+s4+s5)/5;
//  let grade;
//  if(avg > 90){
//      grade = "A";
//  }else if(avg >80 && avg <=90){
//      grade = "B";
//  }else if(avg >70 && avg <=80){
//      grade = "C";
//  }else if(avg >60 && avg <=70){
//      grade = "D";
//  }else if(avg >50 && avg <=60){
//      grade = "E";
//  }else{
//      grade = "Fail";
//  }
//  alert("Your grade is "+grade);

// take input three number from user and print max number

// let n1 = Number(prompt("enter number1"))
// let n2 = Number(prompt("enter number2"))
// let n3 = Number(prompt("enter number3"))

// let greatestNum = Math.max(n1,n2,n3);

// alert("the maximum no is "+greatestNum)

// let input = prompt("enter password")

// let password = "abc123";

// if(input == password){
//     alert("User Authentication !")
// }else{
//     alert("Access Denied !")
// }


// let n1 = Number(prompt("enter n1"))
// let n2 = Number(prompt("enter n2"))
// let opp = prompt("choose from this bracket(+,-,*,/,%)")

// // if(opp == "+"){
// //     alert(n1 + n2)
// // }else if(opp == "-"){
// //     alert(n1 - n2)
// // }else if(opp == "*"){
// //     alert(n1 * n2)
// // }else if(opp == "/"){
// //     alert(n1 / n2)
// // }else if(opp == "%"){
// //     alert(n1 % n2)
// // }else{
// //     alert("error")
// // }

// // another method10

// let result = eval(n1 + opp + n2)

// alert(result)


// let cost = Number(prompt(" enter the product Price"))

// if(cost < 500){
//         alert("your final price after 5% discount is " + (cost - (cost * 0.05)))
    
// }else{
//     alert("your final price after 15% discount is " + (cost - (cost * 0.15)))
// }


let p = prompt("price")

alert(p - (p * 0.05))



// let price = 100;

// if(price < 500){
//         let disc = price * 0.05
//         let finalPrice = price - disc
//         console.log("your final price after 5% discount is " + finalPrice)
    
// }else{
//     let disc = price * 0.15
//     let finalPrice = price - disc
//     console.log("your final price after 15% discount is " + finalPrice)
// }


// // //////////////////// Multiple conditions ////////// ///

// let num = parseInt(prompt("Enter a number")); 
// if(num > 0){
//     if(num % 2 == 0){
//         alert("Even number");
//     }else{
//         alert("Odd number");
//     }
// }else{
//     alert("Invalid number");
// }
//  // ////////// Nested conditions /////////////

// let num1 = parseInt(prompt("Enter first number")); 
//  let num2 = parseInt(prompt("Enter second number")); 
//  let num3 = parseInt(prompt("Enter third number")); 
//  if(num1 > num2){
//      if(num1 > num3){
//          alert("First number is greatest");
//      }else{
//          alert("Third number is greatest");
//      }
//  }else{
//      if(num2 > num3){
//          alert("Second number is greatest");
//      }else{
//          alert("Third number is greatest");
//      }
//  }




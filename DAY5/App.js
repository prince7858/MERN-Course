// // take two number input from user and apply the operation and print result 

// let num1 = parseInt(prompt("Enter first number"));
// let num2 = parseInt(prompt("Enter second number"));
// let operation = prompt("Enter the operation (+,-,*,/,%)");

// switch(operation){
//     case "+":
//         alert(num1+num2);
//         break;
//     case "-":
//         alert(num1-num2);
//         break;
//     case "*":
//         alert(num1*num2);
//         break;
//     case "/":
//         alert(num1/num2);
//         break; 
//     case "%":
//         alert(num1%num2);
//         break;
//     default:
//         alert("Invalid operation");
//         break; 
// }


// // take five number input from user and cal avg and print result

// let s1 = parseInt(prompt("Enter your marks of subject1"))
// let s2 = parseInt(prompt("Enter your marks of subject2"))
// let s3 = parseInt(prompt("Enter your marks of subject3"))
// let s4 = parseInt(prompt("Enter your marks of subject4"))
// let s5 = parseInt(prompt("Enter your marks of subject5"))

// let avg = (s1+s2+s3+s4+s5)/5;

// switch(true){ 
//     case avg > 90: 
//         alert("you got A grade")
//         break;
//     case avg >80 && avg <=90:
//         alert("you got B grade")
//         break; 
//     case avg >70 && avg <=80:
//         alert("you got C grade")
//         break;
//     case avg >60 && avg <=70:
//         alert("you got D grade")
//         break;
//     case avg >50 && avg <=60:
//         alert("you got E grade")
//         break;
//     default:
//         alert("you are Fail!")
//         break;
// }

// // take input from user three color red, green and yellow and print the indication of traffic signal
 
// let color = prompt("Enter the color of traffic signal");
// let newColor = color.toLowerCase();
// switch(newColor){
//     case "red":
//         alert("Stop");
//         break;
//     case "green":
//         alert("Go");
//         break;
//     case "yellow":
//         alert("Caution");
//         break;
//     default:
//         alert("Invalid color");
//         break; 
//  }


// // take input no of months and print the number of days in that months 

// let months = prompt("Enter the number of months"); 

// switch(months){
//     case "1":
//         alert("31 days");
//         break;
//     case "2":
//         alert("28 or 29 days");
//         break;
//     case "3":
//         alert("31 days");
//         break;
//     case "4":
//         alert("30 days");
//         break;
//     case "5":
//         alert("31 days");
//         break;
//     case "6":
//         alert("30 days");
//         break;
//     case "7":
//         alert("31 days");
//         break;
//     case "8":
//         alert("31 days");
//         break;
//     case "9":
//         alert("30 days");
//         break;
//     case "10":
//         alert("31 days");
//         break;
//     case "11":
//         alert("30 days");
//         break;
//     case "12":
//         alert("31 days");
//         break;
//     default:
//         alert("Invalid month");
//         break; 
//  }

 // another way using typecasting 
// let months = parseInt(prompt("Enter the number of months")); 
// switch(months){
//     case 1:
//         alert("31 days");
//         break;
//     case 2:
//         alert("28 or 29 days");
//         break;
//     case 3:
//         alert("31 days");
//         break;
//     case 4:
//         alert("30 days");
//         break;
//     case 5:
//         alert("31 days");
//         break;
//     case 6:
//         alert("30 days");
//         break;
//     case 7:
//         alert("31 days");
//         break;
//     case 8:
//         alert("31 days");
//         break;
//     case 9:
//         alert("30 days");
//         break;
//     case 10:
//         alert("31 days");
//         break;
//     case 11:
//         alert("30 days");
//         break;
//     case 12:
//         alert("31 days");
//         break;
//     default:
//         alert("Invalid month");
//         break; 
//  }



 //////////////////// Ternary operator ////////////////////

// let num1 = parseInt(prompt("Enter first number")); 
// let num2 = parseInt(prompt("Enter second number")); 
// num1 > num2? alert("First number is greater") : alert("Second number is greater"); 

// // another ternary operator example print even or odd number 

//  let num = parseInt(prompt("Enter a number")); 
//  num % 2 == 0? alert("Even number") : alert("Odd number"); 

// // another ternary operator example print number is positive or negative or zero 

// let num = parseInt(prompt("Enter a number")); 
//  num > 0 ? alert("Positive number") : (num < 0 ? alert("Negative number") : alert("Zero")); 


// take age from user <= 12 is child, <= 19 is teenager, <= 59 is adult, >= 60 is senior citizen  print directly using ternary operator  
  
 let age = parseInt(prompt("Enter your age"));  
 age <= 12 ? alert("Child") : (age <= 19 ? alert("Teenager") : (age <= 40 ? alert("Young") : (age <= 59 ? alert("Adult") : alert("Senior citizen"))));
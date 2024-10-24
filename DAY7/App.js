// let n = prompt("Enter a number:")

// for(let i = 1; i <= n; i++){
//     console.log(i);
    
// }

// let n1 = prompt("Enter a number:");
// let sum = 0;
// for(let i = 2; i<=n1; i++){
//     if(i % 2 == 0){
//         sum = sum + i
//     }
//     console.log(sum);
// }

// let num = prompt("enter your number")
// let result = 0;
// for(let i=1; i<=num; i++){
//     let num1=prompt("enter num")
//     result= num1*num1
//     console.log(result);
// }

// let UI = prompt("enter number")
// let oddCount = 1
// for(let i=1; i<=UI; i++){
//     console.log(oddCount);
//     oddCount += 2;
// }

// for(let i=0; i<5; i++){
//     for(let j=0; j<=i; j++){
//         console.log("*");
        
//     }
// }

// let i=0,j=0;

// while(i<=5){
//     let ans = "*"
//     while(j<=i){
//         ans += j
//         j++
//     }
//     console.log("*".repeat(i))
//      i++        
// }


// let i = 1;
// while(i<=5){
//     console.log(i)
//     let j = 1;
//     while(j<=5){
//         console.log("i"+i+"j"+j);
//         j++;
//     }
//     i++;
// }


// let i = 1;
// while(i<=10){
//     let j = 1;
//     while(j<=10){
//         console.log(i+" * "+j+" = "+i*j);
//         j++;
//     }
//     i++;
// }

// let i=1;

// while(i<=5){
//     let j = 1;
//     let ans = ""
//     while(j<=i){
//         ans += j
//         j++
//     }
//     console.log(ans)
//      i++        
// }

// let n=5;
// let i=1;
// while(i<=n){
//     let spaces = n - i;
//     let ans = ""
//     let j = 1
//     while(j<=spaces){
//         ans += " "
//         j++
//     }
//     let stars = 2 * i - 1
//     let k = 1
//     while(k<=stars){
//         ans += "*"
//         k++
//     }
//     console.log(ans)
//      i++        
// }


// let n=5;
// let i=1;
// while(i<=n){
//     let j = 1
//     let ans = ""
//     while(j<=n){
//         ans += "*"
//         j++
//     }
//     console.log(ans)
//      i++        
// }


// let n=5;
// let i=1;
// while(i<=n){
//     let j = 1
//     let ans = ""
//     while(j<=n){
//         ans += j
//         j++
//     }
//     console.log(ans)
//      i++        
// }

// 


// let n=5;
// let i=1;
// while(i<=n){
//     let j = 1
//     let ans = ""
//     while(j<=i){
//         ans += "*"
//         j++
//     }
//     console.log(ans)
//      i++        
// }

// let n=5;
// let i=1;
// while(i<=n){
//     let j = 1
//     let ans = ""
//     while(j<=i){
//         ans += i
//         j++
//     }
//     console.log(ans)
//      i++        
// }


// let n=5;
// let i=1;
// while(i<=n){
//     let j = 1
//     let ans = ""
//     while(j<=i){
//         ans += j
//         j++
//     }
//     console.log(ans)
//      i++        
// }


// let n=5;
// let i=1;
// while(i<=n){
//     let j = 1
//     let ans = ""
//     while(j<=n-i+1){
//         ans += "* "
//         j++
//     }
//     console.log(ans)
//      i++        
// }


// let n=5;
// let i=1;
// while(i<=n){
//     let spaces = n - i;
//     let ans = ""
//     let j = 1
//     while(j<=spaces){
//         ans += " "
//         j++
//     }
//     let val = 1
//     while(val < i){
//         ans += val
//         val++
//     }
//     while(val >= 1){
//         ans += val
//         val--
//     }
//     console.log(ans)
//      i++        
// }



///////  do-while  ////////////

// let i = 1;
// do{
//     console.log("prince")
//     i++
// }while(i<=10)



// let ans = 6;
// do {
//     let userInput = prompt("Enter a number between 1-10:");
//     if (userInput == ans) {
//     alert("Hurray right ans");
//     break;
//     }
// }while(true)


// let ans = 6;
// let tries = 3;
// do {
//     let userInput = prompt("Enter a number between 1-10:");
//     if (userInput == ans) {
//     alert("Hurray right ans");
//     break;
//     }
//     tries-- 
//     if(tries == 0)
//     {alert("Gameover")}
// }while(true && tries>0)


// let ans = Math.floor(Math.random() * 10)
// console.log(ans);

// let tries = 3;
// do {
//     let userInput = prompt("Enter a number between 1-10:");
//     if (userInput == ans) {
//     alert("Hurray right ans");
//     break;
//     }
//     tries-- 
//     if(tries == 0)
//     {alert("Gameover")}
// }while(true && tries>0)


//////////// continue  ////////

// let n = 20
// let i = 1

// while(i<=n){
//     if(i % 5 == 0){
//         i++
//         continue
//     }
//     console.log(i);
//     i++
    
// }



// let num = prompt("enter no")
// let char = prompt("enter char")

// let i =1
// while(i<=num){
//     let ui=prompt("enter string")

//     if(ui.includes(char)){
//         i++
//         continue
//     }
//     console.log(ui);
//     i++
    
// }



// while(true)
// {
//     let num = prompt("enter num")
//     let str = String(Math.sqrt(num))

// if(!str.include(".")){
//     alert(`${num} is a perfect square`)
//     break;
// }
// }








function printHollowStarDiamondNestedLoop(rows) {
    // Upper half of the diamond
    for (let i = 1; i <= rows; i++) {
      let pattern = "";
      for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
      }
      for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
          pattern += "*";
        } else {
          pattern += " ";
        }
      }
      console.log(pattern);
    }
  
    // Lower half of the diamond
    for (let i = rows - 1; i >= 1; i--) {
      let pattern = "";
      for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
      }
      for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
          pattern += "*";
        } else {
          pattern += " ";
        }
      }
      console.log(pattern);
    }
  }
  
  // Example usage
  printHollowStarDiamondNestedLoop(5);
  
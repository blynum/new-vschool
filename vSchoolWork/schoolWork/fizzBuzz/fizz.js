
// let points = new Array(100)

/* for(let i = 0; i <= 100; i++){
    let nums  = "";
    if(i % 3 === 0){
        //  console.log("fizz")
        nums += "fizz";
       }
       else if(i % 5 === 0){
           //  console.log("buzz")
           nums += "buzz";
       }
       else if(i % 3 === 0 && i % 5 === 0){
           nums += "fizzbuzz";
       } 
       else 
       nums = i;
   console.log(nums)
   } */


//Check is number is division by 3 & 5 using the for loop

for (let i = 0; i <= 100; i++) {
    let nums = "";
    if (i % 3 === 0 && i % 5 === 0) {
        nums += "fizzbuzz";
    }
    else if (i % 3 === 0) {
        nums += "fizz"
    }
    else if (i % 5 === 0) {
        nums += "buzz"
    }
    else
        nums = i;
    console.log(nums)
}





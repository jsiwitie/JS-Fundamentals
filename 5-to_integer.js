function myNumber(){


    const arg = process.argv[2];
const num = parseInt(arg);

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
}
/*    let argument = process.argv[2];
    let number = parseInt(argument);
  

    if (!isNaN(number)) {
     console.log(`My number: ${num}`);
      } else {
      console.log("Not a number");
}}

}*/
myNumber();
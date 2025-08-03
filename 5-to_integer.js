function myNumber(){

    let argument = process.argv[2];
    let number = parseInt(argument);
  

    if (!isNaN(number)) {
     console.log(`My number: ${num}`);
      } else {
      console.log("Not a number");
     }

}
myNumber();
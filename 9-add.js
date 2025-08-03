function printAddition(){

    function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

let firstNumber = parseInt(process.argv[2]);
let secondNumber = parseInt(process.argv[3]);

console.log(addNumbers(firstNumber, secondNumber));
}


printAddition();
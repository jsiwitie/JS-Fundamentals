function theFactorial(){
    let input = parseInt(process.argv[2]);

function thefactorial(n) {
  if (isNaN(n)) return 1;
  if (n <= 1) return 1;
  return n * thefactorial(n - 1);
}

console.log(thefactorial(input));

}

theFactorial();
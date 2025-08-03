function printXTimes(){

    let counter = parseInt(process.argv[2]);

if (isNaN(counter)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < counter) {
    console.log("C is fun");
    i++;
  }
}

}

printXTimes();
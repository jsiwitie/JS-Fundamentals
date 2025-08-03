function sQuare(){

    let theSize = parseInt(process.argv[2]);

if (isNaN(theSize)) {
  console.log("Missing size");
} else {
  const row = "X".repeat(theSize);
  let i = 0;
  while (i < theSize) {
    console.log(row);
    i++;
  }
}

}
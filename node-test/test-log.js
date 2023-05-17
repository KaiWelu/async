let arr = [];
let counter = 0;

let quote = "1. Make it Work 2. Make it work better";
let author = "Nico";

arr = quote.split(" ");

function timeLoop() {
  setTimeout(() => {
    if (counter < arr.length) {
      process.stdout.write(arr[counter] + " ");
      counter++;
      timeLoop();
    } else {
      console.log("\n- " + author);
      clearInterval();
    }
  }, 400);
}

timeLoop();

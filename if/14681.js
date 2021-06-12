const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
  input.push(line);
    // input = line.split(' ').map((el) => parseInt(el));
// console.log('1', '2')
  // rl.close();
}).on("close", function() {
    // console.log(input[0] + input[1]);
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    console.log(num1);
    console.log(num2);

    process.exit();
});
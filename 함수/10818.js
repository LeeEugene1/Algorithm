const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
  input.push(line);
//   rl.close();

}).on("close", function() {
let num = input[0].split(' ')
// console.log(num)
num.sort((a,b) => a-b)
console.log(num[0]+' '+num[num.length -1])

rl.close();

  process.exit();
});
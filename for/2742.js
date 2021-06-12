const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
  input.push(line);
  rl.close();

}).on("close", function() {
const N = Number(input[0])

for(let i = N; i>=1;i--){
  console.log(i)
}

  process.exit();
});
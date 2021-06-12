// 1부터 n까지의 합을 출력한다-3?
// 3? 1+2+3 => 6
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
  // let hap = 0;
  // let inputSplit = input.toString().split(' ');
  hap = 0
  for(i = 1; i<=Number(input); i++){
    hap += i
  }
  console.log(hap)

  process.exit();
});
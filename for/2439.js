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
const N = input[0];

var hap = ''
var space = '     '
var test = 'r'
for(let i = 1; i<= Number(N); i++){
  // console.log('*')//NaN
  hap += '*'
  space += ' '
  console.log(space+hap)
  // console.log(space)
}

  process.exit();
});
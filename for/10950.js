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
let inputSplit = input.toString().split('\n');

for(i=1; i<input[0]; i++){
  console.log(input[i])
}

  // let hap = 0;
  // let inputSplit = input.toString().split(' ');
  // let inputSplit = input.toString().split('\n');
  // console.log(inputSplit[0])
  // console.log(inputSplit[1])

  // for(let i = 0; i<Number(inputSplit); i++){
  //   // hap += Number(inputSplit[i])
  //   let numbers = inputSplit[i].toString().split(' ')
  //   console.log(Number(numbers[0])+Number(numbers[1]))
  // }
  // console.log(hap)
  // let a = Number(inputSplit[0])
  // let b = Number(inputSplit[1])
  // console.log(a + b)

  process.exit();
});
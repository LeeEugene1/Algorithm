// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// 2 * 6 = 12
// 2 * 7 = 14
// 2 * 8 = 16
// 2 * 9 = 18
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
    let num = Number(input);
    for(let i = 1; i<10; i++){
        console.log(num +' * '+ i +' = ' + num*i)
    }
    process.exit();
});
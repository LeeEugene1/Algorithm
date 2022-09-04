//주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분하여 출력
//문제 예시)
//5
//20 10 35 30 7
//답 예시)7 35 

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
  let num = input[1].split(" ");
  num.sort((a,b)=> a-b)
  console.log(`${num[0]} ${num[num.length - 1]}`);
  rl.close();
  process.exit();
});
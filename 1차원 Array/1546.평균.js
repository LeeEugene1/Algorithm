//세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 
//일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.
//예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let hap = 0;

rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {

  let arr = input[1].split(" ");

  // hap
  arr.forEach(e => hap += parseInt(e))


  //max
  let max = parseInt(arr[0])
  for(let i = 1; i<arr.length; i++){
    if(max < parseInt(arr[i])){
        max = parseInt(arr[i])
    }
  }

  let avg = hap/arr.length
  let result = avg/max*100
  console.log(result)

  rl.close();
  process.exit();
});

//문자열이라서 넘버로 변환해줘야했다.
//for문 hap이 잘안먹어서 생각해보니 hap += parseInt(arr[i]) + hap으로했나?
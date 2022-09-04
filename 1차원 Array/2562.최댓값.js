//첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.
// https://www.acmicpc.net/problem/2562
//문제 예시
// 3;
// 29;
// 38;
// 12;
// 57;
// 74;
// 40;
// 85;
// 61;

//정답
// 85;
// 8;

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((x) => Number(x));

let max = input[0]
let maxIdx = 0;
for(let i = 0; i<input.length; i++){
    if(max <= input[i]){
        max = input[i]
        maxIdx = i + 1
    }
}
console.log(max)
console.log(maxIdx)
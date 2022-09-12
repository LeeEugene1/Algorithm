// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지들을 구한다.
//10개의 나머지들중에서 서로 다른 값이 몇 개 있는지 출력한다.

// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((x) => Number(x));
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0
let input = [
    39,
40,
41,
42,
43,
44,
82,
83,
84,
85,
]
let result=[];
let result2 = []
for(let i = 0; i<input.length; i++){
    result.push(input[i]%42)
}

for(let i = 0; i<result.length; i++){
    if(result2.indexOf(result[i]) === -1){
        result2.push(result[i])
    }
}
console.log(result2.length)

// for(let i = 0; i<result.length; i++){
//     for(let j= 0; j<result.length; j++){
//         if(result[i] === result[j]){
//             count++
//         }
//     }
// }

// console.log(count - result.length)
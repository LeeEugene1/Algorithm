const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    let countNum = Number(input[0])
    let answer = '';
    for (let i = 1; i <= countNum; i++) {
        let num = input[i].split(' ')
        answer += Number(num[0])+Number(num[1])+"\n"
    }
    console.log(answer)
    process.exit();
})
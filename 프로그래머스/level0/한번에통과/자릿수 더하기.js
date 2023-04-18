function solution(n) {
    var answer = 0;
    let arr = String(n).split('')
    console.log(arr)
    arr.forEach(e => {
        answer += parseInt(e)
    })
    return answer;
}
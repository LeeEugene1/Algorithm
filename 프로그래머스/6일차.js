//배열의 평균값
function solution(numbers) {
    let hap = 0
    numbers.forEach(each => hap+=each)
    return hap/numbers.length;
}
//짝수의합
function solution(n) {
    var answer = 0;
    for(let i = 0; i<=n; i++){
        if(i%2===0){
            answer += i
        }
    }
    return answer;
}
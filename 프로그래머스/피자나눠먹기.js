//피자나눠먹기1
function solution(n) {
    return Math.ceil(n/7);
}

//피자나눠먹기2
function solution(n) {
    // 피자 6조각 모드같은양을먹는다
    // 10명 => 6조각*?/10명 = 3조각씩
    // ?는 5
    var answer = 1;
    while(true){
       if(6*answer%n === 0){
           break;
       } 
       answer++
    }
    
    return answer;
}
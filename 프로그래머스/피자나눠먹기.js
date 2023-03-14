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

//피자나눠먹기3
function solution(slice, n) {
    //2~10조각까지 잘라줌
    //10명의사람(n)이 7slices을 먹으려면 2판은 있어야함
    var answer = 1;
    while(true){
        if(n <= slice * answer){
            break;
        }
        answer++
    }
    return answer;
}
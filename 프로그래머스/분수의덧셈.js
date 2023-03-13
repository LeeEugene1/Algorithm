function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let newNumer = (numer1 * denom2) + (numer2 * denom1)
    let newDonom = denom1 * denom2
    //최대공약수 찾기
    let min = 0
    if(newDonom < newNumer){
        min = newDonom
    }else{
        min = newNumer
    }
    let result = min
    while(true){
      if(newNumer%result === 0 && newDonom%result === 0){
        answer = [newNumer/result, newDonom/result]
        break;
      }
    //result-- 는 왜안됨?
      result = result - 1  
    }
    console.log(result)
    return answer;
}
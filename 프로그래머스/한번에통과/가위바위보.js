function solution(rsp) {
    //2가위 0바위
    //0바위 5보
    //5보   2가위
    var answer = '';
    for(let i = 0; i<rsp.length; i++){
        if(rsp[i] === "2"){
            answer += '0'            
        }else if(rsp[i] === '0'){
            answer += '5'
        }else{
            answer += '2'
        }
    }
    return answer;
}
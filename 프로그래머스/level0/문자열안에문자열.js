function solution(str1, str2) {
    var answer = 2;
    for(let i = 0; i<str1.length; i++){
        if(str1.substring(i, i+str2.length) === str2 && str1.substring(i, i+str2.length).length === str2.length){
            answer = 1
        }
    }
    return answer;
}
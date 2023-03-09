function solution(arr){
    answer = []
    answer.push(arr[0])
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === answer[answer.length - 1]){
            answer.push(arr[i])
            answer.pop()
        }else{
            answer.push(arr[i])
        }
    }
    return answer
}


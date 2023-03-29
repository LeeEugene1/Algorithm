function solution(num_list, n) {
    var answer = [];
    let arr = []
    let cnt = 1
    for(let i = 0; i<num_list.length; i++){
        arr.push(num_list[i])
        if(cnt % n === 0){
            answer.push(arr)
            arr = []
            console.log(answer)
        }
        cnt++
    }
    return answer;
}
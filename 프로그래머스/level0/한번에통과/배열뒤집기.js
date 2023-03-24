function solution(num_list) {
    var answer = [];
    for(i=0; i<num_list.length; i++){
        answer.unshift(num_list[i])
    }
    return answer;
}

//넘리스트의 마지막값을 넣고 pop()
const first = num_list.length//num_list가 계속바뀌기때문에 바뀌지않는 값 설정
for(let i=0; i<first; i++){
    answer.push(num_list[num_list.length-1])
    num_list.pop() 
}
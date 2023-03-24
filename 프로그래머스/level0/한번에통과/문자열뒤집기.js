function solution(my_string) {
    var answer = '';
    const arr = my_string.split('')
    for(let i = 0; i < my_string.length; i++){
        arr[arr.length - 1]
        answer+=arr[arr.length - 1]
        arr.pop()
    }
    return answer;
}
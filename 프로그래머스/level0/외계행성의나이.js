function solution(age) {
    var answer = [];
    let result = ''
    let ab = 'abcdefghij'
    let arr = String(age).split('')
    for(let i = 0; i<arr.length; i++){
        result += ab[parseInt(arr[i])]
    }
    return result
}
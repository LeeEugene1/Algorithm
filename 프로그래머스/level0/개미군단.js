function solution(hp) {
    let _1st = 0;
    let _2nd = 0;
    let left = 0;
    _1st = Math.floor(hp/5)
    _2nd = Math.floor((hp - _1st*5)/3)
    left = hp - (_1st*5) - (_2nd*3)
    console.log(left)
    return _1st+_2nd+left;
}
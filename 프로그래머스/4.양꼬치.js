//양꼬치
function solution(n, k) {
    let d = 0
    if(n >= 10){
        d = Math.floor(n / 10) * 2000
    }
    
    n = n * 12000
    k = k * 2000
    
    return n + k - d
}
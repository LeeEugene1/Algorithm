function solution(emergency) {
    var answer = []
    let defaltArr = [...emergency]
    let sorted = emergency.sort((a,b) => b-a)//이제 emergency는 계속 정렬되어있음
    let obj = {}
    for(let i = 0; i<sorted.length; i++){
       obj[sorted[i]] = i + 1
    }
    defaltArr.forEach((e,idx) =>{
        console.log('e',e)
        console.log('val',obj[String(e)])
        answer.push(obj[String(e)])
    })
    return answer;
}
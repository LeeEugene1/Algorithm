function solution(money) {
    var answer = [];
    // let cnt = 1
    // const isPass = (cnt) => {
    //     debugger;
    //     if(5500 * cnt < money){
    //         cnt = cnt + 1
    //         isPass(cnt)
    //     }else{
    //         return cnt;      
    //     }
    // }
    // console.log(isPass(cnt))
    newCnt = parseInt(money / 5500)
    // console.log(newCnt)
    
    return [newCnt, (money - (5500*newCnt))];
}
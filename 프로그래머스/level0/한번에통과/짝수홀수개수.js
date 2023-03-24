function solution(num_list) {
    let j = []
    let h = []
    for(let i=0; i<num_list.length; i++){
        num_list[i] % 2 === 0 ? j.push(i) : h.push(i)
    }
    return [j.length, h.length];
}
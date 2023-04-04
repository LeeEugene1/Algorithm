function solution(my_string) {
    var answer = '';
    let mo = 'aeiou'
    let arr = [...my_string.split('')]
    for(let i = 0; i<my_string.length; i++){
        for(let j=0; j<mo.length; j++){
            if(my_string[i] === mo[j]){
                arr = arr.filter(e => e !== mo[j])
                // answer = arr.join('')
            }
        }
    }
    
    return arr.join('');
}
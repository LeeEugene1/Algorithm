class HashTable{
    constructor(){
        this.table = new Array(100)//임의의 크기로 배열 생성
    }
    //해시함수: 간단한 해시 함수로 인덱스 생성
    //charCodeAt() 문자열의 각 문자의 Unicode 코드 포인트를 합산
    //좀 더 현실적이고 안전한 해시 함수를 원한다면, 라이브러리나 언어에서 제공하는 표준 해시 함수를 사용하는 것이 좋습니다. 
    //JavaScript에서는 일반적으로 사용되는 hashCode와 같은 함수를 직접 구현하는 것은 어려울 수 있습니다. 
    //하지만 ECMAScript 6에서는 Map이나 Set과 같은 자료구조를 사용하여 키로 문자열을 사용하는 것이 일반적이며, 
    hashFunction(key){
        let hash = 0;
        for(let i = 0; i< key.length; i++){
            hash += key.charCodeAt(i)//index에 해당하는 문자의 unicode 값을 리턴
        }
        console.log(`${key}의 hash는`,hash)
        return hash % key.length//나머지를 활용해 수를 작게 만들어 arr 100안에 저장하기
    }
    //데이터 삽입
    insert(key, value){
        const index = this.hashFunction(key)
        console.log(`${key}의 idx는`,index)
        this.table[index] = value
    }
    //데이터 검색
    search(key){
        const index = this.hashFunction(key)
        return this.table[index]
    }
}
console.log('hi')
const myHashTable = new HashTable()
myHashTable.insert('name','John')
myHashTable.insert('namf','soo')
console.log(myHashTable.search('name'))

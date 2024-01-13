# Hash map
시간복잡도: O(1) -> 효율적인 검색 기능, 데이터의 삽입 및 삭제가 빠르다.
Hash Map은 해시 테이블을 구현한 자료구조로 
key를 해시함수에 넣어 해시 값으로 변환하고 해당 해시 값이 대응하는 배열의 인덱스에 값을 저장(index.js참고)
중복된 key를 허용하지않는다. key의 순서를 보장하지 않는다. 만약 순서가 중요한경우 Map이나 LinkedHashMap과 같은 자료구조를 사용한다.
값에 대한 접근이 빠르며 일반적으로 key를 해시 값으로 변환하여 
내부적으로 배열이나 버킷등을 사용하여 값을 저장하고 검색한다.
```javascript
// Hash Map 구현 (간소화된 예시)
const hashMap = [];
const getHash = key => key.toString().length;  // 간단한 해시 함수

const key1 = 'key1';
const key2 = 'key2';

const hash1 = getHash(key1);
const hash2 = getHash(key2);

hashMap[hash1] = 'value1';
hashMap[hash2] = 'value2';
```

## Object
자바스크립트 객체는 해시테이블로 구현되어있어 key를 해시값으로 변환하여 내부적으로 데이터를 저장하고 검색한다.
객체의 key가 해시 값을 매핑되기 때문에 빠르게 찾을 수 있다.

## 자바스크립트 es6의 Map과 Set
map은 es6에서 도입된 자료구조로 키-값 쌍을 저장하는데 사용됨. 다양한 종류의 키를 사용할 수 있고 중복될 수 있다.(객체)
Set은 중복없는 값만 모아놓은 컬렉션으로 각 값은 중복되지 않는다.
Set이 해시 함수를 내부적으로 사용한다고 말하기는 어렵지만 구현에는 내부적으로 일종의 해시맵이 사용될 수 있다.
```javascript
// Map 키-값 쌍을 저장하며 키는 중복허용하고 다양한 데이터타입(객체, 함수등)
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// Set 값만을 저장하며 중복허용 x
const mySet = new Set();
mySet.add('value1');
mySet.add('value2');
```
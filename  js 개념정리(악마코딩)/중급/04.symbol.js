property key : 문자형

const obj = {
    1: '1입니다.',
    false : '거짓'
}

Object.keys(obj); // ["1", "false"]

obj['1'] // "1 입니다."
obj['false'] // "거짓"


이런식으로 객체 프로퍼티 key 는 문자형으로 반환가능하다

// Symbol 

const a = Symbol(); //new 를 붙이지 않습니다.

심볼은 유일한 식별자를 만들때 사용한다.

console.log(a)
Symbol()

console.log(b)
Symbol()


a === b;   // false

a == b;  // false 

Symbol : 유일성 보장 ---> 전체의 코드중에 딱하나

const id = Symbol ('id');

심볼을 만들때는 이런식으로 설명은 붙여줄수도 있다 'id'

문자열을 전달해주면 되는데 이 문자열을 심볼 생성에 아무런 영향을 주지 않는다.


const id = Symbol ('id');

const id2 = Symbol ('id');

설명이 같은 심볼을 만들어도

id === id2   // false

id == id2  // false 

두개는 다른것이다.


// property key : 심볼형

const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid',
} 


Object.keys(user); //["name", "age"]

객체 method 는 key 가 symbol 형인 프로퍼티는 건너뛴다

마찬가지로

for (let a in user) 도 건너뛴다.

// symbol 의 씌임새

const user = {
    name : 'Mike',
    age : 30,
} 

const id = Symbol('id');
user[id] = 'myid';

특정 객체에 원본 데이터는 건드리지 않고
속성을 추가 할수 있다.

--> 다른 사람이 만든 코드에 내가 함부로 데이터를 건드리면 버그의 위험성 높아짐


symbol.for 의 특징

하나의 심볼만 보장받을수 있다 --> 없으면 만들고 , 있으면 가져오기 때문

Symbol 함수는 매번 다른 symbol 값은 생성하지만

symbol.for 메소드는 하나를 생선한 뒤 키를 통해 같은 symbol을 공유 

//ex

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

id1 === id2; // true

for 를 이용해서 만든 심볼을 전역심볼 이라고 부른다

코드 어디에서든 사용할수 있다.

이름을 얻고 싶다면 Symbol.keyFor(id1) // 'id'


전역 심볼이 아닌 심볼은 key.for 을 사용할수 없다.

---> id.description  을 사용해 알수 있다.

// 코드로 알아보기
 
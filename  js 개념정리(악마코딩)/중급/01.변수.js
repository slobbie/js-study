//var

var는 한번 선언된 변수를 다시 선언할수 있다.

 
//ex 

let name = 'Mike';
console.log(name); // Mike

let name = 'jane';
console.log(name); // ERROR!

let 의 경우 다시 선언하면 error 가 뜬다.



var 는 선언하기 전에 사용할수 있다 



//ex


console.log(name); //undefined
var name = 'Mike'

--> var 는 아래 처럼 동작한다.


var name;

console.log(name); //undefined

name = 'Mike'; // 할당


--> var로 선언된 변수는 최상위로 끌어 올려져 동작한다

이것을 호이스팅(Hoisting)이라고 부른다



error 는 뜨지 않지만 값은 undefined 이 나온다.

그 이유는 선언은 호이스팅 되지만 할당은 호이스팅 되지 않기 때문이다.

할당은 3번째 줄에서 처리된다.


console.log(name) // ReferenceError

let name ='Mike'

같은 상황에서 let 의 경우 error 가 난다.

let 과 const 도 호이스팅이 가능하다. 

호이스팅
: 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동


그런데 let 과 const 에서 var 처럼 동작하지 않는 이유는

Temporal Dead Zone 때문이다.

줄여서 TDZ 영역에 있는 변수들은 사용할수 없다.

//ex
console.log(name)  // TDZ
const name ='Mike' // 함수 선언 및 할당
console.log(name) // 사용가능

위쪽 name 사용 할수 없는 이유는
let , const 는 할당을 하기전에는 사용 할수 없기때문이다.



let age = 30;
function showAge(){
   console.log(age);
   let age = 20;
}


--> 이코드는 실행되지 않고  error 를 일으킨다.
그이유는 function 안의 let 이 호이스팅을 일으켰지만
할당되지 않아 error를 일으킨것이다.

호이스팅은 스코프 단위로 일어난다.



변수의 생성과정 

1. 선언 단계

2. 초기화 단계

3. 할당 단계


초기화 : undefined 를 할당 해주는 단계

var 1. 선언 및 초기화 단계
   2. 할당 단계

   var는 할당과 초기화가 동시에 일어난다.
   --> 그래서 할당전에 호출하면 undefined 값을 보여준다.


let 1.선언 단계
   2.초기화 단계
   3.할당 단계

   let 선언 단계와 초기화 단계가 분리되어 진행된다.
--> 호이스팅이 되면서 선언 단계가 진행되지만
초기화 단계는 실제 코드에 됐을때 이루어져 error 가 나는것

const 1. 선언 + 초기화 + 할당

let , var  선언만 해두고 나중에 할당해 되지만 // 그이유는 값이 유동적으로 변할수 있는 변수이기 떄문이다.

const 는 선언과 할당이 동시에 이루어져야 동작한다.


var 는 함수 스코프

함수 내에서 선언된 변수만 그 지역 변수가 된다.

let , const  는 블록 스코프
: 함수 , if , for , while , try/catch 문 등

블록스코프는 블록 내에서만 선언된 코드만 유효하다.
외부에서는 접근할수없다.

--> 즉 코드 블록 내부에서 선언된 변수는 지역변수

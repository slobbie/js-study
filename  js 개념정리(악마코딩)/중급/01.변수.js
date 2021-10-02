//var

 var는 한번 선언된 변수를 다시 선언할수 있다.

 
 //ex 

 let name = 'Mike';
 console.log(name); // Mike

 let name = 'jane';
 console.log(name); // ERROR!


 var 는 선언하기 전에 사용할수 있다 

 --> var로 선언된 변수는 최상위로 끌어 올려져 동작한다

 이것을 호이스팅(Hoisting)이라고 부른다

 //ex

 var name;

 console.log(name); //undefined

 name = 'Mike'; // 할당

 error 는 뜨지 않지만 값은 undefined 이 나온다.

 그 이유는 선언은 호이스팅 되지만 할당은 호이스팅 되지 않기 때문이다.



   호이스팅
: 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동


변수의 생성과정 

1. 선언 단계

2. 초기화 단계

3. 할당 단계


초기화 : undefined 를 할당 해주는 단계

var 1. 선언 및 초기화 단계
    2. 할당 단계

    var는 할당과 초기화가 동시에 일어난다.
    --> 할당전에 호출하면 undefined 값을 보여준다.


let 1.선언 단계
    2.초기화 단계
    3.할당 단계

    let 선언 단계와 초기화 단계가 분리되어 진행된다.
 --> 호이스팅이 되면서 선언 단계가 진행되지만
초기화 단계는 실제 코드에 됐을때 이루어져 error 가 나는것

const 1. 선언 + 초기화 + 할당


var 는 함수 스코프

let , const  는 블록 스코프

블록스코프는 블록 내에서만 선언된 코드만 유효하다.
외부에서는 접근할수없다.
//let


//const
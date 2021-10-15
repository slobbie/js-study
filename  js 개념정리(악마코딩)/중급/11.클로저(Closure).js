// 클로저 (Closure)


java script 는  어휘적 환경을 가진다

어휘적 환경(Lexical Environment)

let one;
one = 1;

function addOne(num) {
    console.log(one + nume);
}

addOne(5);


Lexical  환경

one : 초기화 x ---> 사용 불과

addOne: function 사용 가능 



function addOne 이 실행될때 // 함수 선언문 방식 특성

let one 은 아직 값이 할당되지 않은 undefined 이고
one 을 다음으로 만나 1이라는 값이 할당


그후 마지막으로 가서 addOne(5)가 실행




function makeAdder(x){
    return function(y){  // y를 가지고 있고 상위 함수인 makeAdder의 x에 접근 가능
        return x + y;
    }
}

const add3 = makeAdder(3);
console.log(add(3));  ///5

add3 함수가 생성된 이후에도
상위함수인 makeAdder 의 x에 접근 가능 // (add(2));

const add10 = makeAdder(10);
console.log(add10(5)) // 15
console.log(add3(1)) // 4


makeAdder(10) 이 호출 되지만 add3의 값은 변함이 없다


Closure 란 ??

함수와 렉시컬 환경의 조합

함수가 생성될 당시의 외부 변수를 기억

생성 이후에도 계속 접근 가능

 

//ex

function makeCounter(){
    let num = 0;  // 은닉화 

    return function (){
        return num++;
    };
}

let counter = makeCounter();

console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2


return function 는 숫자를 반환 하는  num 은 외부 함수의 변수이다.
실행하면 실행 할때마다 콘솔로그 처럼 숫자가 1씩 증가한다

즉 내부 함수에서 외부 함수 의 변수 num에 접근 하는 것이다.

그렇게 생성된 이후에 계속 기억 하고 있는 것이다. 

생성된 값은 바꿀수 없다. --> 은닉화의 성공
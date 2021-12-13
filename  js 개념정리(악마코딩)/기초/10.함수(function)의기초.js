// 함수 (function)

중복되는 코드를 하나로 묶어 관리 및 유지보수를 편하게 하기 위해 사용된다.



 함수      함수명  매개변수
function name(params) {
    //코드  console.log ('hello, ${name}');
}


//  함수작성

function showError() {
    alert('에러가 발생했습니다. 다시 시도해주세요.')
}

showError();

// 함수의 장점

중복되는 작업을 할시에 사용이 간편하다.

유지 보수가 쉽다.


//함수 작성
//매개변수가 있는 함수

function sayHello(name) {
    const msg = `hello, ${name}`;
    console.log(msg);
}

sayHello('maike');


//로그인 하지 않아 사용자의 이름을 모를 경우


function sayHello(name) {
    let msg = `hello, `;
    if(name){
        msg += `, ${name}`; 
    }
    console.log(msg);
}

sayHello();
sayHello('maike');


함수 (function) 안에 있는 변수는 함수 밖에서는 사용할수없다.

함수 내부에서 사용하는 변수를 '지역변수' 라고 부른다.


함수 밖에서 변수를 사용 하고 싶다면

함수 밖에서 변수를 선언하여 사용한다.

그것을 '전역 변수' 라고 부른다.


// 전역 변수와 지역 변수

let msg = "welcom";
console.log(mag);

function sayHello(name) {
    let msg = "Hello"
    console.log(msg + '' + name);
}

sayHello('mike');
console.log(msg);

let 의 경우 같은 이름으로 재선언 될수 없다.

이경우 알수 있는것은 함수 내부에선 전역 변수와 같은 이름으로 선언될수 있고

서로 간섭 받지 않는다.


let name = "mike";

function sayHello(name) {
    console.log(name)
}

sayHello();
sayHello('jane');

매개변수로 받은 값은 복사 된후 

함수의 지역 변수가된다.


전체 서비스에서 공통으로 바라봐야하는 변수를 제외 하고는

지역변수를 쓰는 버릇이 들어야한다.

지역변수가 많아지면 관리가 힘들어진다.


//함수 응용

//or


function sayHello(name) {
    let newName = name || 'friend';
    let msg = `Hello, ${newName}`
    console.log(msg);
}

sayHello();
sayHello('jane');


// default value
// 매개변수에 기본값을 설정해준다


function sayHello(name = 'friend') {
    let msg = `Hello, ${name}`
    console.log(msg);
}

sayHello();
sayHello('jane');


// return 으로 값 반환

 function add(num1, num2) {
     return num1 + num2;
}

const result = add(2,3);
console.log(result);


//ex2

function  showError() {
    alert('에러가 발생했습니다.');
    return;
    alert('이 코드는 절대 실행 되지 않습니다.');
}

const result = showError();
console.log(result);


리턴문이 없는 함수도 변수를 실행후 항상 undefined 를 반환한다.

혹은

return 만 있어도 undefined 를 반환한다.

return  문이 있으면 그 즉시 return 오른쪽에 있는 값을 반환하고 종료한다.

그래서 함수를 종료 하는 목적으로도 많이 사용한다.



// 함수 주의점

한번에 한작업에 집중
-> 한 함수가 여러 작업을 진행 하면 함수를 더 잘게 나누어 사용하는게 좋다.

읽기 쉽고 어떤 동작인지 알수 있게 네이밍 

 




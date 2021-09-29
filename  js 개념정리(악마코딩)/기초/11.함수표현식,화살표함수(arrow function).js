//  함수 선언문 vs 함수 표현식

//함수 선언문 방식 - > 어디서든 호출가능

function sayHello() {
    console.log('Hello');
}

sayHello();

----------------------------------

sayHello();

function sayHello() {
    console.log('Hello');
}

이순서로 바뀌어도 함수 선언문은 작동된다.

자바스크립트는 css 처럼 위에서 부터 아래로 동작하는것이 기본이다.

자바스크립는 실행전 초기화 단계에서  사용할수 있는 모든 함수를 찾아 생성해놓는다.

그러므로 함수 호출보다 저 상위로 올라가게된다.(코드 위치가 실제로 올라가는것은 아니다.)

이것은 호이스팅 (hoisting) 이라고 부른다.





//함수 표현식 방식 --> 코드에 도달하면 생성

let sayHello = function () {
    console.log('Hello');
}

sayHello();

이름이 없는 함수를 만들고 변수로 선언해서 함수를 할당해줘서 선언하는 방식

함수 표현식은 자바스크립트가 한줄씩 읽으면서 실행되고

해당 코드에 도달해서야 비로소 생성되며  실행된다.


//  자유롭게 사용하고 싶으면 보통 함수 선언문으로 사용하면된다.


// 화살표 함수 (arrow function)

let add = function(num1, num2) {
    return num1 + num2;
}


-----> 위의 함수를 화살표 함수로 바꾸면

let add = (num1, num2) => {
    return num1 + num2;
}

--->>

let add = (num1, num2) => (
     num1 + num2;
)


리턴문은 중괄호가 아닌  일반괄호 로 바꿀수있다.



리턴문이 한줄이라면

let add = (num1, num2) =>  num1 + num2;

괄호를 생략할수있다.




let sayHello = name => `Hello, ${name}`;

인수가 하나라면  괄호를 생략할수 있다.





인수가 없는 함수라면 괄호를 생략할수없다.

let showError = () =>{
    alert('error!');
}

// 함수 표현식

showError();

let showError = function(){
    console.log('error');
}

실행안됨


// 함수 선언문

showError();

function showError(){
    console.log('error');
}

실행됨

//화살표 함수


//ex1

let showError = () => {
    console.log('error');
}


//ex2

인수가 하나인경우

const sayHello = function (name) {
    const msg =`Hello, ${name}`;
    console.log(msg);
}
 

---->>


const sayHello = (name) => {
    const msg =`Hello, ${name}`;
    console.log(msg);
}


인수가 두개이고 리턴문이 있는 경우

const add = function (num1, num2){
    const result = num1 + num2;
    return result;
};

----->>>

const add =  (num1, num2) => num1 + num2;



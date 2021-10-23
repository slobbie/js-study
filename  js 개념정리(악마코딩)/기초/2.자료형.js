// 문자형 (string) ------------------------------------


const name = "mike"; //문자형 string
const age = 30; // 숫자형 Number


const name1 = "Mike"

const name1 = 'Mike'

const name1 = `Mike`


'' 와 "" 는 별차이 없다


 const massage = 'I/'m a boy'; 
 //   /를 앞에 넣어주면 특수 문자로 인식해준다.



 const massage2 =`my name is ${name} ` ;
// 백틱( ` ) 은 문자열 내부의 변수를 표현해줄때 사용

const massage2 =`나는 ${30 - 2}살 입니다.` ;
// 내부에 표현식을 넣을수도 있게 한다. 


// 숫자형 (Number) --------------------------------------


const age = 30;
const PI = 3.14;

//숫자형은 사칙 연산이 가능하다
console.log(1 + 3); //더하기
console.log(10 - 3); //빼기
console.log(3 * 2);  //곱하기
console.log(6 / 3);  // 나누기
console.log(6 % 4);  // % 나머지


//  숫자 1을 0 으로 나누면 무한대의 결과가 나온다
 const x = 1/0; // ?
 console.log(x) -> Infinity 

 // 문자를 숫자로 나누면 숫자가 아니라고 나온다
 const name = "mike";
 const y = name/2;

 console.log(y)  -> NaN // NaN = Not a number

 //Boolean --------------------------------------------------

 Boolean 은 물리적인 요소를 나타낸다

 const a = true // 참
 const b = false; // 거짓


//ex
 const name = "mike"; 
 const age = 30; 

 console.log(name == 'mike'); -> true
 console.log(age > 40); -> false


 // null 과  undefined --------------------------------------------


 null 은 존재 하지 않은 값을 의미한다.

 undefined 은 값이 할당 되지 않았다는걸 의미한다.


 //ex

 let user = null; --> 유저는 존재 하지 않는 다는 의미

 let age;
 console.log(age) --> undefined 값이 할당되지 않았다.

 
// typeof 연산자 -------------------------------------------------------

const name ="mike";

console.log(typeof 3);  --> number
console.log(typeof name);  --> string
console.log(typeof true);  --> Boolean
console.log(typeof "xxx");   --> string
console.log(typeof null);     --> Object
console.log(typeof undefined);  --> undefined


 typeof 는 
 1. 다른 개발자가 작성한 변수의 타입을 알아야 하거나, 
 2. api 통신등을 통해 받아온 변수들을 타입에따라 다른 방식으로 처리해야할때 사용된다.


 null = "object" 객체가 아니다.
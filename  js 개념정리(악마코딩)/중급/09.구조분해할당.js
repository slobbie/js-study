// 구조 분해 할당 (Destructuring assignment)

Destructuring assignment

구조 분해 할당 구문은

배열이나 객체의 속성을 분해해서

그 값을 변수에 담을 수 있게 하는 표현식


// 배열 구조 분해

let [x,y] = [1,2];

console.log(x); //1
console.log(y); //2


//ex

let users = ["Mike","Tom","jane"];

let [user1,user2,user3] = users;

console.log(user1); //Mike
console.log(user2); //Tom
console.log(user3); //jane

//ex split 이용

let users = ["Mike-Tom-jane"];

let [user1,user2,user3] = str.split('-');

console.log(user1); //Mike
console.log(user2); //Tom
console.log(user3); //jane


//ex 해당하는 값이 존재 하지 않을 경우

 let [a,b,c] = [1,2]; // c 는 undefined

 let [a=3,b=3,c=5] = [1,2]; // 미리 기본값을 설정해서 오류를 막는다.


console.log(a); //1
console.log(b); //2
console.log(c); //5


 // 배열 구조 분해 : 일부 반환값 무시

 let [users1,,user2] = ["Mike","Tom","jane","Tony"];

 쉼표를 이용하여 필요하지 않은 배열을 무시할수 있다.

console.log(user1); //Mike
console.log(user2); //Jane

// 배열 구조 분해 : 바꾸치기

let a = 1;
let b = 2;

[a,b] = [b,a];


// 객체 구조 분해

let user = {name: 'Mike', age: 30};

let {name, age} = user;  // 이코드는

let name = user.name;
let age = user,age;  

와 같다

console.log(name); // mike
console.log(age); // 30


배열 구조 분해 할당과 크게 다르지 않지만 

다른점은

순서를 신경 쓰지 않아도 된다.

//ex

let {name, age} = user; 

let {age, name} = user; 


// 객체 구조 분해 : 새로운 변수 이름으로 할당

let user = {name: 'Mike', age: 30};

let {name: userName, age: userAge} = user;

 
console.log(userName); // mike
console.log(userAge); // 30


// 객체 구조 분해 : 기본값을 줄수 있다.


let user = {name: 'Mike', age: 30};

let {name, age, gender} = user; 

gender 는 undefined

--->


let {name, age, gender='male'} = user; 

gender 에 기본값이 없다면 male이 할당된다.

--> 객체에서 받은 값이 undefined 일때만 사용된다



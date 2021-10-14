// 나머지 매개변수, 전개 구문 (Rest parameters, spread syntax)

     ... 

  점 3개로 사용 할수 있다
    

// 인수 전달

function  showName(name) {
    console.log(name);
}

showName('Mike'); // name을 전달하면 name 을 찍어준다

showName('Mike','Tom'); // ?  --> Mike 만 출력


showName(); // undefined



함수의 인수를 얻는 방법

1.arguments    // 화살표 함수에는 arguments 가 없다.
2.나머지 매개 변수




// aruments 란?

함수로 넘어 온 모든 인수에 접근

함수 내에서 이용 가능한 지역 변수

length / index

Array 형태의 객체

배열의 내장 메서드 없음
(forEach, map)

//ex

function  showName(name) {
    console.log(aruments.length);
    console.log(aruments.[0]);
    console.log(aruments.[1]);
}

showName('Mike','Tom');
// 2
// mike
// tom


es6 를 사용할수 있는 환경이면 나머지매개변수 사용 권장



// 나머지 매개변수 (Rest parameters)

정해지지 않는 갯수의 인수를 배열로 나타낼수 있게 한다.


function  showName(...names) {
    console.log(names);
}

showName(); // []  아무것도 전달하지 않으면 undefined 가 아닌 빈배열이 나온다
showName('Mike'); // ['mike']
showName('Mike','Tom'); // ['mike', 'tom']


//ex 

나머지 매개 변수
전달 받은 모든 수를 더해야함

function add(...numbers) { 
     let result = 0;
     numbers.forEach((num => result += num));
     console.log(result);  // 6 , 55
}

add(1, 2, 3,);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//ex2

user  객체를 만들어 주는 생성자 함수

function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike', 30, 'html','css');
const user2 = new User('Tom', 30, 'js','React');
const user3 = new User('jane', 10, 'English');

console.log(user1);
console.log(user2);
console.log(user3);


주의 할점은 나머지 매개변수는 항상 마지막에 있어야 한다.



// 전개 구문 (Spread syntax) : 배열

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [...arr1, ...arr2];

console.log(result); // [1,2,3,4,5,6]


let result = [0, ...arr1, ...arr2, 7 , 8, 9];

이렇게 중간에 쓰는것도 가능하다


// 전개 구문 (Spread syntax) : 객체

let user = {name:'mike'}
let mike = {...user, age:30}

console.log(mike) // {name:'mike', age:30}


// 전개 구문 (Spread syntax) : 복제

오브젝트 어싸인을 쓸 필요가 없다.

let arr1 = [1,2,3];
let arr2 = [...arr]; [1,2,3]


let user = {name:'mike', age:30}
let user2 = {...user};

user2.name = "Tom";


console.log(user.name) // mike
console.log(user2.name) // Tom


//ex 예제

arr1 을 [4,5,6,1,2,3]



let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr2.reverse().forEach(num =>{
    arr1.unshift(num); 

});

console.log(arr1);


---->  전개 구문으로



arr1 =  [...arr2, ...arr1];

console.log(arr1);




// 객체에서 전개 구문 사용


 유저 정보에 info 를 넣고  fe,lang 를 skill 로 넣는 예시



let user = { name: "Mike"};
let info = { age: 30};
let fe = ["JS", "React"];
let lang= ["korean", "English"];

user = Object.assign({}, 
      user,
      info,
      {
          skills : []
      }
    );

    fe.forEach(item => {
        user.skills.push(item);
    })
    lang.forEach(item => {
        user.skills.push(item);
    })
        

console.log(user); //{name:"Mike", age: 30, skills: Array(4)} 


--> 전개 구문 사용


user = {
    ...user,
    ...info,
    skills: [...fe, ...lang],
};

console.log(user);  //{name:"Mike", age: 30, skills: Array(4)} 

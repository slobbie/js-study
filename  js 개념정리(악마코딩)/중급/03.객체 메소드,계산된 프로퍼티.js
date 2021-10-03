// Object - methods / Computed property



//Computed property

let a = 'age';

const user = {
    name : 'Mike',
    age : 30,
}

--> 대신

let a = 'age';

const user = {
    name : 'Mike',
    [a] : 30,
}
 
로 사용 할수 있다.

대괄호로 묶어 주면 문자열이 아니라 변수 a 에 할당된 값이 들어간다.

이를 computed property (계산된 프로퍼티) 라고 한다

const user = {
    [1+5] : 5,
    ["안녕"+"하세요"] : "Hello",
}

user
> {5 :5, 안녕하세요:"Hello"}

식 자체를 넣는것도 가능하다.

// method

객체에서 사용할수 있는 몇가지 method 



Object.assign(); // 객체 복제

//ex1

const user = {
    name : 'Mike',
    age : 30,
}

const newUser = Object.assign({}, user);

newUser.name = 'Tom';

console.log(user.name) // "Mike"

newUser != user // 두개는 같은 객체가 아니다 --> 

user 를 {초기값} 에 넣어  newUser 라는 객체에 user 라는 객체의 값을 복사한것이다.

//ex2

Object.assign({gender:'male'}, user);

이렇게 작성하게 되면 

    gender: 'male',
    name : 'Mike',
    age : 30,

 총 3개의 프로퍼티를 가지게 된다.

 만약 Object.assign({name : 'Tom',}, user); 처럼 동일한 프로퍼티를 넣는다면

    // name : 'Tom',
    name : 'Mike',
    age : 30,

    덮어 씌어진다. 이유는 {초기값}이 먼저 설정되어 써지고 그후
    user 의 값이 그위로 덮어지기때문이다.



여러개의 객체도 합칠수 있다.

const user = {
    name : "Mike",
}

const info1 = {
    name : "Mike",
}

const info2 = {
    gender: 'male',
}

Object.assign(user,info1,info2);

맨앞의 유저의 값에 합쳐진다.



Object.keys(); // 키 배열 반환


const user = {
    name : 'Mike',
    age : 30,
    gender: 'male',
}

Object.keys(user); //["name","age","gender"]

객체프로퍼티 키를 배열로 반환한다.




Object.values(); // 값 배열 반환

const user = {
    name : 'Mike',
    age : 30,
    gender: 'male',
}

Object.values(user); //["Mike","30","male"]


Object.entries(); // 키/값 배열 반환

const user = {
    name : 'Mike',
    age : 30,
    gender: 'male',
}

Object.entries(user); 
//["name","Mike"],["age",30],["gender","male"]



Object.fromEntries(); // 키/값 배열을 객체로

const arr = {
    ["name","Mike"],
    ["age",30],
    ["gender","male"],
};

Object.fromEntries(arr);  // name : 'Mike', age : 30, gender: 'male',  객체로 만들어준다.



// 실습

//ex1

let n = "name";

let a = "age";

const user = {
    [n] : "Mike",
    [a] : 30,
    [ 1 + 4]: 5,
};

console.log(user);


//ex2 

객체를 만들어주는 함수

function makeOj(key, val) {
    return{
        [key] : val
    }
}

const obj = makeObj('나이', 30);

console.log(obj); // {나이 : 30}  출력

어떤게 키가 될지 모르는 객체를 만들때 유용한 방법

//ex3 객체 메소드

const user = {
    name : 'Mike',
    age : 30,
}

const user2 = Object.assign({}.user);

user2.name = "tom"


console.log(user); //  name : 'Mike',
console.log(user2); //  name : 'Tom',

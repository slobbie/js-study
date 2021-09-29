//object 객체

Superman

name : clark
age : 33 

이라는 사람이 있다면
이것을 객체로 만든다면

const superman = {
    name:'clark',
    age:33,
}

객체는 중 괄호로 작성 하고

name 이라는 키(key)  와 값 (value) 로 작성된 프로포티가 들어간다

각 프로포티는 쉼표로 구분한다

// object - 접근 , 추가, 삭제

const superman = {
    name:'clark',
    age:33,
}


//접근
superman.name // 'clark'
superman['age'] //33


//추가 

superman.gender ='male';
superman['hairColor'] = 'black';

//삭제

delete superman.hairColor;

//object - 단축 프로퍼티

const name = 'clark';
const age = 33 ;

const superman = {
    name:name,
    age:age,
    gender:'male',
}

이런값 과 객체가 있다고 가정할때 


const superman = {
    name,
    age,
    gender:'male',
}

이렇게 사용할수 있다.


// object - 프로퍼티 존재 여부 확인

const superman = {
    name:'clark',
    age:33,
    gender:'male',
}

superman.birthDay;
//undefined

이따 in 연산자를 사용 하면 프로퍼티가 있는지 확인할수 있다.

'birthDay'in superman;
//false

'age' in superman;
//true

in 의 사용처는 어떤 값이 나올지 확신 할수 없을때 사용한다.

함수의 인자를 받거나 api통신을 통해 데이터를 받을때 사용한다.

// for .. in 반복문

for(let key in superman){
    console.log(key)
    console.log(superman[key])
}

//객체
 

const superman = {
    name:'clark',
    age:30,
}

console.log(superman.name);
console.log(superman['age']);

추가하기


superman.hairColor = 'black';
superman['hobby'] = 'football';
console.log(superman);

삭제하기

delete superman.age;
console.log(superman);


//이름과 나이를 받아서 객체로 반환하는 함수 만들기

function makeObject(name, age) {
    return {
        name,
        age,
        hobby : 'football',
    }
}


const Mike = makeObject('Mike', 30);

console.log(Mike);

//in  을 이용하여 프로퍼티 존재 확인하기

console.log('age' in Mike);
console.log('birthday' in Mike);

// 객체 in 
// 나이를 구분하고 성인인지 아닌지 알게해주는 함수가 있다는 가정

function isAdult(user){
    if(!('age' in user) ||  // user에 age가 없거나 ( 유저 안에 유저가 있으면 인데 ! not 이 붙어 true 반대로 되어 없거나 라는뜻)
     user.age < 20){  // 20살 미만이거나
        return false;
    } 
        return true;
}

const Mike = {
    name: 'Mike',
    age : 30,
}

const Jane = {
    name: 'Mike',
}

console.log(isAdult(Mike)); --> true
console.log(isAdult(Jane));  --> false


// 객체 for ... in

const Mike = {
    name: 'Mike',
    age : 30,
}


for(key in Mike){
    console.log(key);  ---> name 과 age 출력  key 는 mike 안에 프로퍼티를 나타낸다
    console.log(Mike[key]);
}


key 는 어떤 문자여도 상관없다 ex) a , b , c  등등



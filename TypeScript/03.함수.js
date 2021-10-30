// 함수

function add(num1: number, num2: number): number {
    return num1 + num2;
    // console.log(num1 + num2);
}

아무것도 리턴해주지 않으면 마지막에 void  로 지정해주면 된다




function IsAdult (age: number): boolean {
    return age > 19;
}


함수의 매개 변수도 타입을 지정해줄수 있다

function hello(name?: string) {
    return `Hello, ${name || "world"}`;
}

이 함수 의 경우 네임이 없을 경우는 월드를 출력해주는 함수 인데

타입스크림트에서는 매개변수에 보다 정확하게 명시 해줘야한다

그래서 name  뒤에 ? 를 붙여 name 은 있어도 되고 없어도 된다고 명시해 준다.

선택적 매개변수라고 부른다.




선택적 매개변수는 필수 매개변수 보다 앞에 명시하면 에러가 발생한다.

만약 옵셔널 하게 사용 하고 싶다면


function hello(age: number | undefined, name: string): string {
    if (age !== undefined){
        return `Hello, ${name}. You are ${age}`;
    }else {
        return `Hello, ${name}`;
    }
}

console.log(hello(30,"sam"));
console.log(hello(undefined,"sam"));  


age 를 넘버 혹은 언디파인드라고 지정해주면서 사용 해야한다


// 나머지 매개변수의 타입 작성법 

function add(...nums: number[]) {
    return nums.reduce((result, num) => result + num, 0);
}



add(1, 2, 3,); //6

add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55


나머지 매개변수는 전달받은 값을 배열 형태로 나타내 주기때문에 지금의 경우 넘버와배열을 붙여서 명시해줬다.


//this 

interface User {
    name: string;
}

const Sam: user = {name:'Sam'}

function showName(this:User){
    console.log(this.name)
}

const a = showName.bind(Sam);

a(); 

타입스크립트에서 this 를 사용할시에는 첫번째 매개변수자리에 this 를 명시해주고 타입을 입력해주면 된다


만약 매개변수가 2개 이상이라도 마찬가지로 맨앞에 명시 해주면 된다

//ex

function showName(this:User, age:number, gender: 'm' | 'f'){
    console.log(this.name, age, gender)
}

const a = showName.bind(Sam);
a(30, 'm');  // 디스로 전달해준 매개변수를 제외하고 나머지 값을 입력해주면 된다.

// 함수 오버로드 사용 예제

함수 오버로드란?

전달받은 매개 변수의 갯수나 타입에 따라 다른 동작을 하게하는것을 의미

interface User {
    name: string;
    age: number;
} 

function join(name:string, age: number);
function join(name:string, age: string);
function join(name:string, age: number | string): User | string {
    if (typeof age === "number") {
        return{
            name,
            age,
        };
    }else {
        return "나이를 숫자로 입력해주세요";
    }
}

const sam: user + join("Sam", 30);
const jane: string = join("jane", "30");

이런식으로 서로 다르게 동작한 타입을 지정해주는 방법이다 // join
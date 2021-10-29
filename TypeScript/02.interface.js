객체는 오브젝트라는 타입으로 정의 한다

let user:object;

user = {
    name: 'xx',
    age: 30,
} 

console.log(user.name);

오브젝트에는 특정 속성값에대한 정보가 없기에 name 이 없다고 뜬다.


이렇게 프로퍼티를 정의해서 객체를 표현 할때는

//interface 를 사용한다.


 
interface user {
    name : string;
    age : number;
    gender? : string;
    readonly birthYear : number;
    [grade:number] : string;
}

let user : user = {
     name : 'xx',
     age: 30
}

user.age = 10;
user.gender = "male"

입력을 해도 되고 않해도 되는 속성은 ? 를 붙여준다

readonly 를 붙여주면 읽을수는 있지만 수정은 불가능 해진다. --> 읽기 전용 속성
최초에 생성할때에만 할당이 가능하고 그이후에는 변경할수 없다.



greade 는 변수명과 같은거다 --> 사용자가 설정

예를 들어 1등 부터 5등 까지 등급을 주고 싶은 상황있다고 가정하고

키 즉 등수는 넘버로 받고 학점은 스트링 값으로 주어 준다

--> 인덱스 값을 가지고 있는 배열을 만들어주기

그치만 스트링은 범위가 너무 넓기때문에 범위를 정해주고 싶으면 타입을 선언해준다

type Score= 'A' | 'B' | 'C' | 'F' ;


interface user {
    name : string;
    age : number;
    gender? : string;
    readonly birthYear : number;
    [grade:number] : Score;
}


이렇게 정확히 명시해주면 등록한 값만이 값으로 인정 되어 다른 값은 입력할수 없다.




interface 로 함수도 정의 할수 있다


interface Add {
    (num1:number, num2:number): number;
}

두개의 숫자를 더한값을 숫자로 반환 하는 인터페이스 함수

const add : Add = function(x, y) {
    return x + y;
}


 인터페이스 에서 정한 인수 명을 그대로 사용 안해도 사용할수 있다.


 //ex 나이값을 받아서 성인인지 아닌지 불린 값으로 리턴해주는 함수

 interface IsAdult {
     (age:number):boolean;
 }

 const a:IsAdult = (age) => {
     return age > 19;
 }

인터페이스로 클래스도 정의 할수 있다.

 // implements 를 사용한다

 interface Car {
     color: string;
     wheels: number;
     start(): void;
 } 

 class Bmw implements Car {
     color ;
     wheels = 4;

     constructor(c:string){
         this.color = c;
     }
     start(){
         console.log("go");
     }
 }

const b = new Bmw('green');

인터페이슨 확장이 가는 하다

// extends 를 사용 하면 된다.

 interface Benz extends Car {
       door: number;
       stop(): void;
 }

 car 가 가지고 있는 값은 그대로 받으면서 내가 원하는 값을 더 붙일수 있다. 

 const benz: Benz = {
     color: "red",
     wheels: 4,
     door: 5,
     stop(){
         console.log('stop');
     }
 }

 // 확장은 여러개도 가능하다.


 interface Car {
    color: string;
    wheels: number;
    start(): void;
} 

interface Toy {
    name: string;
}
 

interface ToyCar extends Car, Toy {
    price: number;
}
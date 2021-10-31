// Literal Types

const userName = "Bob";
const 는 처음 할당된 값이 변하지 않는다 그래서 userName 은 밥이다

이렇게 정해진 스트링 값을  가진것을 문자열 리터럴 타입 이라고 한다.


let userName2 = "Tom";

userName2 의 경우 나중에 재할당이 가능 하다 그래서 더 넓은 의미로 string 의 타입이 지정 되어있다.




type Job = "police" | "developer" | "teacher";

interface User {
    name : string;
    job : Job;
}

const user:User = {
    name : "Bob",
    job: "developer",
}


interface HighSchoolStudent {
    name: number | string;
    grade: 1 | 2 | 3;
}


| 을 유니온 타입이라고 한다 // or 개념


// Union Types

interface Car {
    name: "car";
    color: string;
    start(): void;
}

interface Mobile {
    name : "mobile";
    color: string;
    call(): void;
}  

function getGift(gift: Car | Mobile) {
    console.log(gift.color);
    gift.start();
}

여기서 컬러는 사용 할수 있지만 스타트는 사용할수 없다

그 이유는 컬러는 카 와 모바일에 공통적으로 있지만

스타트는 카 에만 존재 하기 때문이다  

사용 하기 위해서는 


function getGift(gift: Car | Mobile) {
    console.log(gift.color);
    if(gift.name === "car"){
        gift.start();
    }else {
        gift.call();
    }
}

이런식으로 사용 할수 있다.

검사해야할 항목이 많아 지면 스위치를 사용하는것이 가독성에 좋다.


이렇게 동일한 타입을 이름을 다르게 해서 구분 하는것을

식별 가능한 유니온 타입 이라고 한다.


// Intersection Types  교차 타입

교차 타입은 and 를 의미 한다


interface Car {
    name: string;
    start(): void;
}

interface Toy {
    name : string;
    color : string;
    price: number;
}

const toyCar: Toy & Car = {
     name: "타요",
     start() {},
     color: "red",
     price: 1000,
};

& 는 car 와 toy  가 가지고 있는 모든 속성을 적어 줘야한다.

교차타입은 여러개의 타입을 하나로 묶어 주는 역활을 한다.
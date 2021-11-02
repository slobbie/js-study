// Generic

Generic 을 이용 하면 클래스나 함수 인터페이스를 다양한 타입으로 재사용할수 있다.

--> 생성할시에는 타입 파라미터만 정해주고 생성하는 시점에 사용하는 타입을 결정해준다.


//ex

function getSize(arr: number[]): number {
    return arr.length;
} 

const arr1 = [1,2,3];
getSize(arr1); //3

const arr2 = ["A", "b", "c"]
getSize(arr2); // 오류 발생 


유니온 타입을 사용해도 되지만 그런경우 타입들이 추가될때마다 추가해줘야하는 단점이 있다


Generic 의 경우 <T> 를 사용하면 된다. // A 나 B 를 사용해도 무관

T 는 어떤 타입을 전달 받아서 해당 함수에서 사용할수 있게 한다.


function getSize<T>(arr: T[]): number {
    return arr.length;
} 

const arr1 = [1,2,3];
getSize<number>(arr1); //3

const arr2 = ["A", "b", "c"]
getSize<string>(arr2); // 오


const arr3 = [false, true, true]
getSize<Boolean>(arr3); // 오류 발생 


const arr4 = [{}, {}, {name:"Tem"}];
getSize(arr4); // 오류 발생 


따로 기입 하지 않아도 타입스크립트가 타입을 인지하고 있다 강조하고 싶을대 기입 해서 사용한다.




 // interface 에서 사용해보기

interface Mobile<T> {
     name: string;
     price: number;
     option: T;
}

const m1: Mobile<object> = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon:false,
    },
};

옵션의 모습이 정해져 있다면

const m1: Mobile<{color: string; coupon: Boolean}> = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon:false,
    },
};

이런식으로 사용해도 된다.

const m2: Mobile<string> = {
    name: "s21",
    price: 1000,
    option: "good",
};


//ex 2

interface User {
    name: string;
    age: number;
}

interface Car {
    name: string;
    color: string;
}

interface Book {
    price: number;
}


const user: User = { name: "a", age: 10};
const car: Car = { name: "bmw", color: "red"};
const book: Book = { price: 1000};


function showName<T extends { name: string }>(data:T): string {
    return data.name;
}

현재 유저와 카에는 네임이 있지만 북에는 없어서 에러가 발생했다 그러하여

extends 를 사용 한다
--> 어떠한 T 객체가 올건데  그것은 네임은 스트링 인 객체를 확장한 형태이다 라는걸 알려주는거다.

--> return data.name; 의 오류가 사라짐

showName(user);
showName(car);
showName(book); 
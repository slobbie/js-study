const car = {
    wheels:4,
    drive() {
        console.log("drive..")
    },
};

const bmw = {
    color: "red",
    navigation: 1,
}

bmw.__proto__ = car;

bmw 는 car 라는 변수를 상속 받는다 

const x5 = {
    color: "white",
    name: "x5",
};

x5.__proto__ = bmw;

x5 는 bmw 라는 변수를 상속 받는다


그러면 셋의 관계는

x5 --> bmw --> car  로 관계 되어 car  최상위다.

이것을 prototype Chain 이라고 한다.


Object.keys 나 values 처럼 값과 관련된 객체 내장 메소드는 

상속된 프로퍼티는 나오지 않는다.



//ex 생성자 함수를 이용해보는 예시


// const car = {
//     wheels: 4,
//     drive(){
//         console.log("drive..");
//     },
// };


const Bmw = function (color) {
    this.color = color;
};

방법1

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
    console.log("drive..");
};
Bmw.prototype.navigation = 1;


방법2

Bmw.prototype = {
    constructor: Bmw,
    wheels = 4,
    drive = function () {
        console.log("drive..");
    },
    navigation = 1,
};

이런식으로 객체로 묶었을시 프로토타입의 constructor 가 사라지기때문에

위와 같이 정확히 명시해주는것이 좋다.



const x5 = new Bmw("red");
const z4 = new Bmw("blue");


// x5.__proto__ = car;
// z4.__proto__ = car;

프로토타입을 이용하면 중복된 코드를 줄일수 있다.


// closure 를 이용해 사용자가 맘대로 정보를 바꾸지 못하게 만들기 예시


const Bmw = function (color) {
    const c = color;
    this.getColor = function() {
        console.log(c);
    };
};

const x5 = new Bmw("red");

클로저의 특성상 내부함수에서 외부 함수로 접근하여 생성된 값은 변경이 불가능 하기때문에

x5의 컬러는 변하지 않는다. 
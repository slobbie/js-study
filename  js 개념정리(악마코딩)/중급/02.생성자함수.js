//생성자 함수
Intermediate Class

//객체 리터럴

let user = {
    name : 'Mike',
    age : 30,
}

이런 형식의 함수객체를 객체 리터럴이라고 한다.


// 생성자함수

개발을 하다보면 비슷한 형체의 객체를 여러개 만들어야 하는 상황이 생긴다
 Ex ) 회원 , 상품 등등

 //ex

 function User(name, age) {
     this.name = name;
     this.age = age;
 }

 let user1 = new User('Mike', 30);
 let user2 = new User('Jane', 22);
 let user3 = new User('Tom', 17);

 생성자 함수명은 첫글자는 대문자로 만들어준다.

 new  연산자를 사용해서 함수를 호출한다.

 생성자는 같은 물건을 만들어내는 모형틀이라고 생각하면된다.


//ex  method 를 넣어서 생성하기

function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
} 

let user5 = new User('Han', 40);

user5.sayName(); //'Han'


// 생성자 함수 : 상품 객체를 생성해보자.

function Item(title, price){
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원  입니다.`)
    }

    // return this;
}

const item1 = new Item('인형',3000);
const item2 = new Item('가방',4000);
const item3 = new Item('지갑',9000);

console.log(item1,item2,item3);

item3.showPrice();
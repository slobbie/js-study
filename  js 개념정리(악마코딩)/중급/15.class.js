//class

const User = function(name, age){
    this.name = name;
    this.age = age;
    this.showName = function (){
        console.log(this.name)
    }
}

const mike = new User("Mike", 30);

위의 코드를 class 를 사용해서 작성하면

-->

class user2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}

const tom = new User2("Tom", 19);


constructor 는 객체를 만들어주는 생성자 함수 이다.


showName 은 user2의 프로토타입으로 저장된다.


class 는 오류를 줄여준다.    

class 의 method 는 for in 문에서 제외 된다.


// 상속 extends

class 에서 상속은 extends 를 사용한다.

class car {
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log("drive");
    }
}

카를 상속 해서 bmw 를 만들어 보기

class Bmw extends car {
    park(){
        console.log("park")
    }
    drive(){
        super.drive();
        console.log("OFF");
    } 
}

const z4 = new Bmw("blue");



// 메소드 오버라이딩 (method overriding)

동일한 메소드를 입력 한다면 덮어씌어진다.

 부모의 메소드를 그대로 사용하면서 확장하고 싶다면

 super  라는 키워드를 사용 하면 된다

 super 라는 키워드를 사용 하면 부모의 메소드도 같이 출력된다


// constructor overriding


class Bmw extends car {
    constructor(){
        this.navigation = 1;
    }
    park(){
        console.log("park")
    }
}


extends 로 만든 자식 클레스는

constructor 의 객체 생성 과정을 건너뛴다.

그러하여 항상 super 키워드로 부모의 constructor을 실행해줘야한다.


class Bmw extends car {
    constructor(color){
        super(color);
        this.navigation = 1;
    }
    park(){
        console.log("park")
    }
}


제대로 동작 하기 위해서는 동일한 인수를 받는 작업을 해줘야한다.
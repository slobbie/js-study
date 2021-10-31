// class 

class Car { 
    color: string;
    constructor(color: string){
        this.color = color;
    }
    start(){
        console.log("start");
    }
}


const bmw = new Car("rad");


ts 에서 멤버 변수는 미리 선언을 해줘야한다 //ex color


멤버변수를 미리 선언하지 않는 방법도 있다.


// 접근 제한자 (Access modifier) - public, private, protected

class Car { 
    name: string = "car";
    color: string;
    constructor(color: string){
        this.color = color;
    }
    start(){
        console.log("start");
    }
}

class Bmw extends Car {
    constructor(color: string){
        super(color);
    }
    showName(){
        console.log(this.name);
    }
}

const z4 = new Bmw("blue");// 클레스 인스턴스
console.log(z4.name); // protected 로 명시했을경우 클레스에 접근 불가능해짐


public 은 자식 클레스나 클래스인스턴스에서 접근이 가능하다
아무것도 표기 하지 않고 작성하면 모두 public 이다



private 를 사용하면 클레스 밖에서는 사용이 불가능하다. 

// # 을 붙여주면 된다.


이두개의 기능적인 차이는 없다



//protected

protected 은 퍼블릭과 동일하지만 클레스인스턴스에서는 접근할수 없다.



// 정리

// public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
// protected - 자식 클레스에서만 접근 가능
// private - 해당 클래스 내부에서만 접근 가능


readonly 를 사용하면 수정 할수 없게 만들어 줄수 있다
만약 수정 하고 싶다면 constructor 에서 수정 해주면 된다.

class Car { 
    readonly name: string = "car";
    color: string;
    constructor(color: string, name){
        this.color = color; 
        this.name = name;
    }
    start(){
        console.log("start");
    }
}

class Bmw extends Car {
    constructor(color: string, name){
        super(color, name);
    }
    showName(){
        console.log(super.name);
    }
}

const z4 = new Bmw("blue", "zzzz4")


// 추상 class

추상 클래스는 new 를 통새서 만들수 없다

오직 상속은 통해서만 사용할수 있다.

추상클래스 내부에 추상 메서드는 반드시 상속 받은쪽에서 구체적인 구현을 해줘야한다.

--> 클래스를 상속 받은  많은 객체들이 같은 메서드를 가지고 있지만 서로 다른 기능을 가질수 있다.

abstract class Car { 
    readonly name: string = "car";
    color: string;
    constructor(color: string, name){
        this.color = color;  
        this.name = name;
    }
    start(){
        console.log("start");
    }
    abstract doSomething():void;
}

class Bmw extends Car {
    constructor(color: string, name){
        super(color, name);
    }
    showName(){
        console.log(super.name);
    }
}

const z4 = new Bmw("blue", "zzzz4")



  
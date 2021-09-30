//method 
객체 프로퍼티로 활당된 함수

//ex
const superman = {
    name:'clark',
    age:33,
    fly(){
        console.log('날아갑니다.');
    }
}

fly 함수가 객체 슈퍼맨의 메소드다



//this

const user = {
    name:'Mike',
    age:33,
    sayHello(){
        console.log(`Hello, I'm ${this.name}`);
    }
}

user의 객체안의 sayHello 라는 method 에서 객체 안의 프로퍼티를 사용하고 싶을때는

this 를 사용하면된다.

//ex

let boy = {
    name: 'Mike',
    sayHello,
}

let girl = {
    name: 'jane',
    sayHello,
}

sayHello : function(){
  console.log(`Hello, I'm ${this.name}`);
}

boy.sayHello();  // Hello, I'm Mike
girl.sayHello(); // Hello, I'm jane

만약에 이 함수를 화살표 함수로 선언했다면 동작이 달라진다.

sayHello:() => {
    console.log(`Hello, I'm ${this.name}`);
  }


  화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
  화살표 함수 내부에서 this를 사용하면 , 그 this는 외부에서 값을 가져옴

  let boy = {
    name: 'Mike',
    sayHello:() =>{
        console.log(this); // 화살표 함수 안에서의  this는 전역객체를 가르킨다.
    }                      // 전역객체 
                           // 브라우저 환경 : window
                           // node js : global
}

boy.sayHello();
this !=boy


//코드로 보기

let boy = {
    name: 'Mike',
    showName: function (){
        console.log(boy.name);
    }
}

boy.showName();

let man = boy; 
man.name = "tom";

console.log(boy.name) --> man 의 이름을 바꾸면 boy 의 이름도 바뀐다.


boy = null;  --> 이제 맨으로만 접근 가능해진다.


man.showName(); // ?
--> 오류가 난다
boy 라는 객체가 null 를 가지고 있고 이름과 showName 도 없어졌기 때문이다


let boy = {
    name: 'Mike',
    showName: function (){
        console.log(this.name);
    }
}

man.showName(); // Mike

 Mike  가 출력되는 이유는  metshod 의 this는 객체를 가르키기때문이다.


method 에서는 객체명을 직접 써주는거보단 this 를 활용하는것이 좋다. 


// 화살표 함수로 작성해보기

let boy = {
    name: 'Mike',
    showThis: function (){
        console.log(this);
    }
}

boy.satThis(); // --> 객체를 반환해준다.

let boy = {
    name: 'Mike',
    showThis: () => {
        console.log(this);
    }
}

boy.satThis(); // --> window 가 출력된다.

화살표 함수에서  this 를 사용한면 객체 boy를 가르키는것이아닌 window  전역객체를 가르킨다.

그래서 객체의 method  를 작성할시에는 화살표 함수로 작성하지 않는 편이 좋다.
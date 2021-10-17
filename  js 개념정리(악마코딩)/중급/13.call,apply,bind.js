// caal , apply , bind

함수 호출 방식과 관계없이 this 를 지정할 수 있음


// call

 모든 함수에서 사용할수 있으며 특정값을 this로 지정할수 있다.


//ex1

const mike = {
  name: "Mike",
};

const tom = {
    name: "Tom",
}

function showThisName(){
    console.log(this.name);
}

showThisName(); // "" 빈문자열 여기서 디스는 윈도우를 뜻한다.

showThisName.call(mike); // Mike 출력
showThisName.call(tom); // Tom 출력


//ex2

 function update(birthYear, occupation) {
     this.birthYear = birthYear;
     this.occupation = occupation;
 };


update.call(mike, 1999, "singer");

console.log(mike) // 마이크 객체 출력

call 에서 첫번째 매개변수는  this 로 사용될 값이다.

두번째 매개 변수 부터는 해당 함수가 사용할 매개변수들을 순서대로 나열한 것들이다. 



// apply

apply 는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같습니다.
call은 일반적인 함수와 마찬가지로 매개변수를 직접받지만 , apply는 매개변수를 배열로 받는다.


function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
};


update.apply(mike, [1999, "singer"]);

console.log(mike) // 마이크 객체 출력


apply 는 배열 요소를 함수 매개변수로 사용할때 유용하다.


//ex2

const nums = [3, 10, 1, 6, 4];

const minNum = Math.min.apply(null, nums);

const maxNum = Math.max.apply(null, nums);

console.log(minNum);  //1
console.log(maxNum);   //10



// bind

함수의 this 값을 영구히 바꿀 수 있다.

const mike = {
    name: "Mike",
  };

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
};


const updateMike = update.bind(mike);

updateMike(1980, "plice");
console.log(mike);  // mike 객체 출력



//ex 실제 사용 예제

const user = {
    name:"Mike",
    showName: function() {
        console.log(`hello, ${this.name}`);
    }
}

user.showName(); // hello, Mike

let fn = user.showName;

fn(); // hello 만 출력 mike 출력 x

fn.call(user); //  hello, Mike
fn.apply(user); //  hello, Mike

let boundFn = fn.bind(user);

boundFn(user); // hello, Mike  


// 기본 타입


타입을 배정 하는 방법

let car:string = 'bmw';

car = "benz"

문자열의 타입 배정



let age:number = 30;


let isAduit:boolean = true;

true or false 는 boolean 


let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

숫자 배열의 타입 지정



let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];

문자 배열의 타입 지정




// 튜플 (Tuple)


인덱스 별로 타입이 다를때 사용한다.
 
let b:[string, number];
--> 배열의 첫번쨰 요소는 문자 두번째 요소로는 숫자를 넣을수 있다는 뜻이다. 

 
b = ['z',1];
// b = [1,'z']  정해진 순서를 바꾸는것은 불가 하다.




// void, never 
 

void 는 함수에서 아무것도 반환 하지 않을때 사용한다.

function sayHello():void{
    console.log('helloe');
}


never  에러를 반환하거나 무한히 끝나지 않는 함수의 타입으로 사용한다.


function showError():never{
    throw new Error();
}

function infLoop():never{
    while(true){
        // do something..
    }
}

// enum

비슷한 값들 끼리 묶어준다


enum os {
    window, 
    Ios,
    Android
}

enum 에 수동으로 값을 배정해주지 않으면 0 부터 자동으로 값을 할당해준다.

만약 예시의 window 의 값을 3으로 줄시에 나머지는 4,5 로 자동 배정 된다.


enum 에는 숫자가 아닌 문자열도 넣어줄수 있다.


enum os {
    window = 'win', 
    Ios = 'ios',
    Android= 'and'
}

-->

const os = {
    window : 'win', 
    Ios : 'ios',
    Android : 'and'
}

 이 모습과 동일  // 문자형은 단방향  맵핑만 된다


 let myOs:os;

 이렇게 선언하면 이제 myOs 는 os 안에 값 3개 뿐이다.

 myOs = os.window

특정값만 입력하도록 강조하고 싶을때나,

그값들이 공통된 값들이 있을때 이런걸 사용한다.


// null, undefined

let a:null = null;
let b:undefined = undefined;
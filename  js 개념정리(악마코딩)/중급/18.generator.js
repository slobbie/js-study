// genertor

함수의 실행을 중간에 멈췄다가 재개할수 있는 기능





genertor를 사용 하면 3개의 메소드를 사용할수 있다.

next()  한개의 내용을 실행후 멈춘다 

return()   만나면 그즉시 실행이 중단 

throw()  만나면 그즉시 에러 메세지

function* fn(){
    try{
        console.log(1);
        yield 1;
        console.log(1);
        yield 1;
        console.log(1);
        console.log(1);
        yield 1;
        return "finish";
    } catch (e) {
        console.log(e);
    }    
}

const a = fn();

genertor function 옆에 * 을 써서 만든다.

내부에 yield 키워드를 사용한다.



genertor 란?

ierable : 반복이 가능하다는 의미

-Symbol.iterator 메서드가 있다. 
-Symbol.iterator 는 iterator 를 반환해야 한다. 


iterator

- next 메서드를 가진다
- next 메서드는 value 와 done 속성을 가진 객체를 반환한다. 
- 작업이 끝나면 done 은 true 가 된다.



// next( ) 에 인수 전달


function* fn() {
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입력해주세요";
    console.log(num2);
     
    retrun num1 + num2;

};

const a = fn();

넣고 싶은 값을 넣으면 그 값이 value 가 된다.



genertor 는 값을 미리 만들어 두지 않음


function* fn() {
    let index = 0;
    while (true) {
        yield index++;
    }

};

const a = fn();


while 무한 루프 문에서도

genertor 필요한 값만 그때 그때 구하기 때문에 

브라우저가 꺼지지 않는다 --> 오류 발생 x


// 다른 generator  호출 하는법


* 를 응용

function* gen1() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
};


function* gen2() {
    yield 5;
    yield* gen1();
  
};



다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분 부터 이어서 실행

//ex redux saga


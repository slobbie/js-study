//if 문

괄호 안에 들어가는 조건을  평가해서 true 면 실행해준다.


//ex

if(age > 19){
    console.log('환영합니다');
};


//else 

else는 조건문이 내용이 false 면 실행 된다.


// if,else, else if

const age = 30;

if(age > 19){
    console.log('환영합니다');
}else{
    console.log('안녕히가세요');
};

 나이는 19살보다 커서  환영합니다 출력

 // 추가 요구사항 :
 //30살이면 30세 환영합니다. 라는 문구를 보여주세요

const age = 30;

if(age > 19){
    console.log('환영합니다');
}else if(age === 19){
    console.log('30세 환영합니다.');
}else{
    console.log('안녕히가세요');
};


age 30이므로 else if 출력

순서는 if , else if , else 순

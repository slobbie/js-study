//setTimeout

일정 시간이 지난후 함수를 실행

셋 타임 아웃은 2개의 매개 변수를 받는다.

function fn() {
    console.log(3);
}

setTimeout(fn, 3000); // 3000 = 3s

첫번째는  일정 시간후에 실행되는 함수이며
두번째는  일정 시간후에 실행하게 하는 시간이다.

setTimeout(function () {
    console.log(3)
}, 3000); // 이런식으로 동작한다



인수가 필요하다면

function showName(name){
    console.log(name);
}
setTimeout(showName, 3000, 'Mike');

맨뒤에 작성한다.

clearTimeout은 예정된 작업을 없앤다.

//setInterval

일정 시간 간격으로 함수를 반복  

셋 타임아웃과 사용방법은 동일 하다.




// setTimeout  setInterval 주의사항

delay = 0 ??

setTimeout(function(){
    console.log(2)
},0);

console.log(1);

0초여도 바로 실행되지 않는다.

현재 실행중인 스크립트 함수가 종료된 이후 스케줄링 함수를 실행하기 때문이다.



// 예제

유저가 접속하면 얼마나 접속했는지 알려주는 상황

let num = 0;

function showTime() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`)
    if(num > 5){
        clearInterval(tId);
    } 
};


const tId = setInterval(showTime, 1000);

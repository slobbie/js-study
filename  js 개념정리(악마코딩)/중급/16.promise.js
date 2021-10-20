// promise

const pr = new Promise((resolve, reject) => {
   //코드                  성공      실패
});

성공 : 성공한 경우 실행되는 함수
실패 : 실패한 경우 실행되는 함수

어떤일이 완료된 이후 실행되는 함수를 callback 함수라고 한다.


//then 을 사용한다

pr.then(
    function(result){
        console.log(result + '가지러 가자.');
    },
    function(err){
        console.log('다시 주문해주세요..');
    }
);


//catch 는 에러가 발생한 경우 실행된다. 즉 reject 일시 실행

pr.then(
    function(result){}
).catch(
    function(err){}
)

이런식으로 목적에 맞게 작성해주는것이 가독성에도 좋고 오류 발생 방지에도 좋다.



// finally 는 이행이든 거부든 항상 실행된다.

//ex 로딩 화면 같은걸 없앨시에 유용하다.


pr.then(
    function(result){}
).catch(
    function(err){}
).finally(
    function(){
        console.log('--- 주문 끝 ---')
    }
)

 const pr = new Promise((resolve, reject) => {
     setTimeout(()=>{
         resolve("OK");
     }, 1000);
 });

 console.log("시작");
 pr.then((result) => {
     console.log(result);
 })
   .catch((err) => {
       console.log(err);
   })
   .finally(() => {
      console.log("끝");
   });


   어떤것이 이행되던 항상 끝이 출력된다.


//ex

프로미스를 사용 하지 않는 경우

const f1 = (callback) => {
    setTimeout(function () {
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};

const f2 = (callback) => {
    setTimeout(function () {
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};

const f3 = (callback) => {
    setTimeout(function () {
        console.log("3번 주문 완료");
        callback();
    }, 2000);
};

console.log("시작");

f1(function(){
    f2(function(){
        f3(function(){
            console.log("끝");
        });
    });
});

이런식으로 함수의 깊이가 깊어지면서 계속 callback 을 호출 하는것을 콜백 지옥이라고 부른다.


---->  프로미스를 사용해서 작성하는 경우


const f1 = (message) => {
    console.log(message);
   return new Promise((res, rej) => {
    setTimeout(function () {
        res("1번 주문 완료");
    }, 1000);
   });
};


const f2 = (message) => {
    console.log(message);
   return new Promise((res, rej) => {
    setTimeout(function () {
        res("2번 주문 완료");
    }, 3000);
   });
};



const f3 = (message) => {
    console.log(message);
   return new Promise((res, rej) => {
    setTimeout(function () {
        res("3번 주문 완료");
    }, 2000);
   });
};

// promises chaining
순차적으로 정해진 작업을 실행 
 
console.log("시작");
f1()
.then((res) => f2(res))
.then((res) => f3(res))
.then((res) => console.log(res))
.catch(console.log)
.finally(()=> {
    console.log("끝");
});

// promises.all

작업을 동시에 진행하고 마지막 작업이 끝났을시에 모두이행되면 동시에 결과를 출력 (하나라도 누락되면 정보를 보여주지 않음)
--> 시간을 절약

Promise.all([f1(), f2(), f3()]).then((res) => {
  console.log(res);
});


// promises.race

사용 방법은 all 과 동일

all 과 다른점은 하나라도 작업이 완료 되면 그 즉시 작업이 끝난다.

Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res);
  });
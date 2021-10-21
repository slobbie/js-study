// async 

async 를 붙여주면 함수 프로미스 함수를 반환해준다

async function getName() {
    return "Mike";
}

getName().then((name) => {
    console.log(name);
});


getName 의 값이 프로미스여도 그대로 반환한다. // resolve 든 reject



// await


await 는 async 내부에서만 사용 할수 있다.

await 키워드를 만나면 프라미스가 처리될 때까지 기다린후 결과는 그 이후 반환

async function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    }); 
}

async function showName(){
    const result = await getName('Mike');
}


//ex


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

console.log("시작");
async function order(){
    try{
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f2(result2);
        console.log(result3)
    }catch(e){
        console.log(e)
    } 
    console.log('종료')
}

order();

async 에서 reject 는 try /catch 문으로 감싸주면 된다.

// promise.all 로 써보기

async에도 all 을 사용해 비동기 함수를 병렬로 실행할수 있다.

async function order(){
    try{
        const result1 = Promise.all([f1(), f2(), f3()]);
        console.log(result);
    }catch(e){
        console.log(e) 
    } 
    console.log('종료')
}
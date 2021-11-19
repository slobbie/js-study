// for , while, do.. while

반복문 loop
동일한 작업을 여러번 반복

// for --------------------

//ex

for (let i = 0; i < 10; i++) {
    //반복할 코드
} 

le i = 0; << 초기값 설정 반복물에 진입할때 처음 한번만 실행된다.

i < 10; << 조건 반복문이 돌면서 조건을 확인하고 false 가 되면 멈춘다.

i++  반복문이 실행 후 실행되어야하는 작업을 명시해준다.

//ex 

for(let i = 0; i < 10 i++ ) {
    console.log(i+1);
}


// while  ------------------

let i = 0;

while (i < 10){
    //코드
    console.log(i);
    i++ 
}

while 은 반복문 밖에있는 변수의 값을 반복문안에 집어 넣어 사용한다.

while (true) 는 영원히 반복 되니 조심히 사용해야한다.



// do.. while  ------------------

let i = 0;

do {
    //코드
    i++;
}while (i < 10)

while 과 거의 기능이 같지만 다른점은

do while 은 코드가 실행되고 아래의 조건문이 체크해주는방식이라 최소 1번은 코드가 실행된다.

// 반복문을 빠져나오는 방법 ---------------


// break  

break  
 :만나는 순간 즉시 실행을 멈추고 해당 반복문을 빠져나온다.

 
 while (true) {
    let answer = confirm('계속 할까요?');
    if(!answer){
        break;
    }
 }

 무한 반복문에서 특정 조건이 되었을때 break 해주는게 중요하다.

 
// continue

continue 
 :만나는 순간 코드 실행이 멈추는거까지는 동일하지만 반복문을 빠져 나오지는않고
다음  반복문을 진행한다.


//짝수만

for(let i = 0; i < 10; i++;){
    if(i%2){
        continue;
    }
    console.log(i);
}
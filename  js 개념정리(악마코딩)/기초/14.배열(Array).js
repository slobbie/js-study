//배열 Array

순서가 있는 리스트

1번 철수
2번 영희
...
30번에 영수

를 코드로 표현 하면

let students = ['철수','영희',...'영수'];
                 0      1       29
                      index
배열을 사용할때는 고유 번호를 사용한다.
이를 index 라고 한다.

index 는 0 부터 시작한다.

//읽기

console.log(students[0]); // 철수
console.log(students[1]); // 영희
console.log(students[29]); // 영수

//수정

students[0] = '민정';

--> 첫번째 학생이 철수에서 민정으로 바뀐다.
                
// 배열의 특징

배열은 문자 뿐만 아니라, 숫자 , 객체 , 함수 등도 포함할수 있다.

//ex

let arr =[
    '민수',
    3,
    false,
    {
        name: 'Mike',
        age: 33,
    },
    function(){
        console.log('TEST');
    }
] 

//length 

length 는 배열의 길이를 구할수 있다.

students.length // 30


// push  (추가)

Push() : 배열 끝에 추가

let days = ['월', '화', '수'];
days.push('목')

console.log(days)// ['월', '화', '수', '목'];

//pop (제거)

pop() : 배열 끝에 요소 제거

let days = ['월', '화', '수'];
days.pop()
console.log(days)// ['월', '화',];


// shift , unshift (배열 앞에 제거/추가)

추가 
days.unshift('일')
console.log(days)// ['일','월', '화',];

제거
days.shift('일')
console.log(days)// ['월', '화',];


shift , unshift  는 여러 요소를 한번에 처리 할수있다.

//for

배열을 쓰는 가장 큰 이유중하나는 반복을 위해서다

1)

let days = ['월','화','수'];

for(let index = 0; index < days.length; index++){
    console.log(days[index])
}


2)

let days = ['월','화','수'];

for(let day of days){
    console.log(day);
}


// 코드로 보기

let days = ['월','화','수'];

for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
}


--> 모든 배열 안의 요소 출력



for(let day of days){
    console.log(day);
}

--> 모든 배열 안의 요소 출력







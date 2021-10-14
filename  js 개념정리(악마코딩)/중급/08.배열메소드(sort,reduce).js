// sort

배열 재정렬 
* 배열 자체가 변경됨 주의
인수로 정렬 조직을 담은 함수를 받음


//ex

let arr = [1,5,4,2,3];

arr.sort();

console.log(arr); // [1,2,3,4,5]

무작위로 넣은 숫자가 재 정렬 됐다 

//ex2

let arr = ["a","e","c","b"];

arr.sort();

console.log(arr); // ["a","b","c","b"]


//ex 3

let arr = [27,8,5,13];

arr.sort();

console.log(arr); // [13,27,5,8]

이렇게 된 이유는 배열안의 요소를 문자열로 인식했기 떄문이다

--> 1,2 가 앞에 있는 숫자로 정렬 되었다.


--->  제대로 작동해보기

let arr = [27,8,5,13];

// function fn(a,b) {
//     return a - b;
// }

// arr.sort(fn);

arr.sort((a,b)=>{
    return a - b;
}); 

//8, 27, 5, 13
//5, 8, 27, 13
//5, 8, 13, 27

console.log(arr); //[5,8,13,27]

이런식으로 작동된다

이런경우 로직이 복잡해져 그대신 

lodash 라이브러리를 많이 사용한다

// _.sortBy(arr);


// arr.reduce()
배열을 돌면서 원하는 작업을 하고 최종값을 반환한다.

인수로 함수를 받음

(누적 계산값, 현재값 ) => {return 계산값 };

//배열의 모든수 합치기

let arr = [1, 2, 3, 4, 5];

// for , for of , for Each

let result = 0;
arr.forEach(num =>{
    result += num;
})

console.log(result); // 15

// reducr 사용 하기

let arr = [1, 2, 3, 4, 5];

const result = arr.reduce((prev, cur)=>{
    return prev + cur;
}, 0)   // 0은 초기값 초기값을 등록 안하면 배열 첫번째 가 초기값인된다.

console.log(result); // 15



// 실용적인 예제

// map 이나 filter 대신에 reduce를 사용하여 배열 반환

let userList = [
    {name:"Miek" , age:30 },
    {name:"Tom" , age:10 },
    {name:"Jane" , age:27 },
    {name:"Sue" , age:26 },
    {name:"Harry" , age:42 },
    {name:"Steve" , age:60 },
]


// 19 살 이상 반환 

let result =  userList.reduce((prev, cur)=>{
     if(cur.age > 19){
         prev.push(cur.name)
     }
     return prev;
},[]); 


// 배열의 나이 합치기

let result =  userList.reduce((prev, cur)=>{
   return (prev += cur.age);
        // prev = prev + cur.age;
},[]); 


// 이름 글자수 조건문 반환

let result =  userList.reduce((prev, cur)=>{
    if(cur.name.length === 3){
        prev.push(cur.name);
    }
    return prev;
 }); 
 





 


 
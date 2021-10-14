// 배열 메소드 (Array methods)


// arr.splice(n,m) : 특정 요소 지움
n : 시작
m : 개수

//ex

let arr = [1,2,3,4,5,];

arr.splice(1,2);

console.log(arr); // [1,4,5] 


// arr.splice(n,m,x) : 특정 요소 지우고 추가


//ex1
let arr = [1,2,3,4,5,];

arr.splice(1,3,100,200);

console.log(arr); //[1,100,200,5]

첫 번재 기준으로 2,3 을 지우고 100, 200 을 추가후 5를 출력한다.

//ex2

let arr = ["나는", "철수","입니다"];

arr.splice[1,0,"대한민국","소방관"];

console.log(arr); // 나는 대한민국 소방관 철수 입니다.

갯수에다 0 을 넣으면 아무것도 지우지 않고 추가할수 있다.


// arr.splice(n,m,x) : 삭제된 요소 반환


let arr = [1,2,3,4,5,];

let result = arr.splice(1,2);

console.log(arr) // [1,4,5]

console.log(result) // [2,3]

스플라이스를 변수에 담으면 삭제된 배열의 요소가 반환된다.


// arr.slice(n,m) : n 부터 m 까지 반환

let arr = [1,2,3,4,5,]; 

arr.slice(1,4); // [2,3,4]

m 은 포함 하지 않고 바로 앞자리를 의미하고

안쓰면 배열 끝까지를 의미한다. //


// arr.concat(arr2, arr3 ..) : 합쳐서 새배열 반환

let arr = [1,2];

arr.concat([3,4]) // [1,2,3,4]

arr.concat([3,4],[5,6]); // [1,2,3,4,5,6,]


// arr.forEach(fn): 배열 반복

let users = ['Mike', 'Tom', 'jane'];

users.forEach((item, index, arr) => {
    // ..
});


item : 해당 요소 // 'Mike', 'Tom', 'jane'

index : 요소의 번호 // 0,1,2

arr : 해당 배열 이름 // users

//ex


let arr = ['Mike', 'Tom', 'jane'];

arr.forEach((name, index)=>{
  ex1)  console.log(name); // 'Mike', 'Tom', 'jane'
   
  ex2) console.log(`${index}.${name}`); // '0.Mike', '1.Tom', '2.jane'
});


//arr.indexOf / arr.lastlndexOf


let arr = [1,2,3,4,5,1,2,3,];

arr.indexOf(3);  // 2
arr.indexOf(3,3) // 7   --> 숫자가 두개면 첫번때는 시작점 그래서 3부터 뒷쪽의 인덱스 3이 반환


arr.lastIndexOf(3); // 7  --> 뒤쪽에서 처음 만나게 되는 인덱스 3이 반환


// arr.includes(): 포함하는지 확인

let arr = [1,2,3,];

arr.includes(2); // true
arr.includes(8); // false


// arr.find(fn) // arr.findIndex(fn)

인덱스 오브 처럼 찾는다는 의미는 동일  다른점은 --> 함수 연결이 가능

 주의할점 : 첫번째 true 값만 반환하고 끝 만약 없으면 undefined 를 반환

 

 //ex

 let arr = [1,2,3,4,5];

 const result = arr.find((item)=>{
     return item % 2 === 0;   // 짝수를 찾아내는 
 });

 console.log(result); // 2

 //ex

 let userList = [
     {name : "Mike", age:30},
     {name : "jane", age:27},
     {name : "Tom", age:10},
 ]; 

 const result = userList.find((user)=>{
    if(user.age < 19){
        return true;
    }
    return false;
 });

 console.log(result); //{name : "Tom", age:10},


 const result = userList.findIndex((user)=>{
    if(user.age < 19){
        return true;
    }
    return false;
 });

 console.log(result); // 2  --> Tom의 인덱스 번호


// arr.filter(fn) : 만족하는 모든 요소를 배열로 반환



let arr = [1,2,3,4,5];

 const result = arr.filter((item)=>{
     return item % 2 === 0;   // 짝수를 찾아내는 
 });

 console.log(result); // 2 , 4 ,6


 // arr.reverse() : 역순으로 재정렬

 let arr = [1,2,3,4,5];

 arr.reverse(); // [5,4,3,2,1,]

최근 가입된 유저를 보여준다거나 게시판에서 가장 최근에 작성된 게시물을 정렬 할때 자주 사용한다

--> 최근 컨텐츠를 보여줄때 사용


// arr.map(fn)  : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환


let userList = [
    {name : "Mike", age:30},
    {name : "jane", age:27},
    {name : "Tom", age:10},
]; 

let newUserList = userList.map((user, index) => {
  return  Object.assign({}, user, {
      id: index + 1,
      isAdult : user.age > 19
  })
})


console(newUserList); // 변경 된 내용 반영
console(UserList);  // 변화 없이 그대로


// join, split


join : 배열을 합쳐서 문자열로 만든다

let arr = ["안녕","나는","철수야"]

let result = arr.join();

console.log(result); // 안녕,나는,철수야 --> 인수에 아무것도 넣지 않으면 쉼표로 반환된다.


split : 문자열을 나눠서 배열로 만들어준다.


const user = "안녕,나는,철수야"

let result = users.split(","); //"," 어떤 문자를 기준으로 나눠줄지 작성

console.log(result); // ["안녕","나는","철수야"]



// Array,isArray() : 배열인지 아닌지 확인

let user = {
    name: "Mike",
    age: 30,
}

let userList = ["Mike","Tom","Jane"];


console.log(Array.isArray(user));  //false
console.log(Array.isArray(userList));  // true
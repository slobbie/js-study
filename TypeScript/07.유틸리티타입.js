// 유틸리티 타입



// keyof

keyof 를 사용 하면 interface 의 키값들을 유니온 형태로 받아올수 있다.

interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'


// partial<T>

partial 은 프로퍼티를 모두 옵셔널로 바꿔준다. --> 일부만 사용 가능해짐

interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f"; 
}

let admin: partial<User> = {
    id: 1,
    name: "Bob",
}

만약 User  에 없는 프로퍼티를 사용하면 에러가 발생한다.


// Required<T>

모든 프로퍼티를 필수로 바꿔준다.

interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f"; 
}

let admin: Required<User> = {
    id: 1,
    name: "Bob",
    age: 20,
    gender: "m", 
}

// Readonly<T>

읽기 전용으로 바꿔준다

처음 할당만 가능하고 후에 수정은 불가


// Record<k,T>  k = 키   T = 타입


interface Score  {
  "1": "A" | "B" | "C" | "D";
  "2": "A" | "B" | "C" | "D";
  "3": "A" | "B" | "C" | "D";
  "4": "A" | "B" | "C" | "D";
}

const score: Score = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
};


---> Record 이용해서 다시 작성

const score1: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D" > = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
}; 


--> 리팩토링


type Grade = "1" | "2" | "3" | "4";
type Score1 = "A" | "B" | "C" | "D";

const score2: Record<Grade, Score1> = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
}; 


//ex2

interface User2 {
    id: number;
    name: string;
    age: number;
}

function isValid(user:User2){
    const result: Record<keyof User2, boolean> = {
        id : user.id > 0,
        name : user.name !== '',
        age : user.age > 0
    }
    return result;
}

//pick<T,K>

T=타입 에서 K=프로퍼티 만 골라서 사용할수 있다.

interface User3 {
    id: number;
    name: string;
    age: number;
}


const admin2: pick<User3, "id" | "name"> = {
     id: 0,
     name: "Bob",
}


// Omit<T,k>

특정 프로퍼티를 생략하고 사용할수 있다.

interface User3 {
    id: number;
    name: string;
    age: number;
}


const admin3: Omit<User3, "age" > = {
     id: 0,
     name: "Bob",
} 

// Exclude<T1,T2>

타입 1에서 타입 2를 제외 하고 사용하는 방식

오밋과 다른 점은 타입으로 제거한다는점


type T1 = string | number;
type T2 = Exclude<T1, number>; // 제거하고 싶은 타입을 적으면된다


// NonNullable<Type>


null 제외한 타입을 생성한다 undefined 도 제외한다


type T3 = string | null | undefined | void;
type T4 = NonNullable<T1>;


'' , "" , ``

상황에 맞게 사용하면된다.  


// `` 백틱의 유용한 기능

백틱은 여러줄을 포함할수있다.

//ex  

let desc = `오늘은 맑고 화장한
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.`

다른 '' 나 '' 는 줄바꿈이 되면 인식이 안되거나

/n 을 써줘야 줄 바꿈이 된다.


// length : 문자열 길이

let desc = "안녕하세요.";

desc.langth // 6


특정 위치에 접근 가능

let desc = "안녕하세요.";

desc[2] // '하'


// toUpperCase() / toLowerCase()

영어의 경우 대소문자 변한해줄수 있다.



// str.indexOf(text)

let desc = "HI guys. Nice to meet you.";

desc.indexOf('to'); // 14

desc.indexOf('man'); // -1  찾는 문자가 없으면 -1 을 반환


포함된 문자가 여러개 라도 첫번째 문자만 반환한다.

if(desc.indexOf('Hi') > -1){
    console.log("HI가 포함된 문장입니다.")
}


문장에서 hi 는 첫번때 이므로 0 이다

if 에는 0 은 false 이므로 

-1 보다 커야 한다는 조건을 달아줘야 값이 리턴된다.


// str.slice(n,m)

  slice 는 n 부터 m 까지의 문자를 반환 한다.

  n은 시작점


  m 없으면 문자열 끝까지
  양수면 그 숫자까지 (포함하지 않음) // 1 ~ 5면 4까지만 반환
  음수면 끝에서 부터 셈

let desc = "abcdefg";

desc.slice(2)  // cdefg
desc.slice(0,5) // abcde
desc.slice(2,-2) // cde



// str.substring(n,m)

n 과 m 사이 문자열 반환
n 과 m 을 바꿔도 동작함

--> n 과 m 이 아니라
n 과 m 사이라고 생각하는게 편함

음수는 0 으로 인식


let desc = "abcdefg";

desc.substring(2,5)  // cde
desc.substring(5,2) // cde


// str.substr(n,m)

n 부터 시작
m 개를 가져옴  // m 은 범위가 아니라 갯수다.

let desc = "abcdefg";


desc.substr(2,4)  // cdef
desc.substr(-4,2) // de


// str.trim() : 앞뒤 공백 제거

let desc = " coding     ";

desc.trim(); // "coding"

보통 사용자로부터 무언가을 입력 받을때 사용한다.

// str.repeat(n) : N번 반복

문자열을 n 번 반복 한다.

// 문자열 비교

문자열도 비교가 가능하다

1 < 3 // true

"a" < "c" //true

"a".codePointAt(0); // 97  문자의 번호를 알아낼수있다.


// 예제로 알아보기

let list = {
   "01. 들어가며",
   "02. js의 역사",
   "03. 자료형",
   "04. 함수",
   "05. 배열",
};

숫자만 제외 하고 글자만 찍어보기

let newList = [];

for(let i=0; i<list.langth;i++){
    newList.push(
        list[i].slice(4);
    );
}

console.log(newList); // --> 글자만 출력 



// 금지어 : 콜라

function hasCola(str) {
    if(str.indexOf('콜라')){
        console.log('금칙어가 있습니다.')
    }else{
        console.log('통과');
    }
}

hasCola("펩시는 선넘지") // 금칙어가 있습니다. 찾는 문자가 없기때문에 -1  -1은 if 에서  true 이기떄문에 금칙어  
hasCola("펩시콜라는 최악이야") // 금칙어가 있습니다.
hasCola("콜라") // 통과   if 0은 false 인데 콜라 인덱스는 0 이므로 통과

이상한 결과가 나온다.

동작하게 만들기 위해선

function hasCola(str) {
    if(str.indexOf('콜라') > -1){
        console.log('금칙어가 있습니다.')
    }else{
        console.log('통과');
    }
}


// 금지어 : 콜라
// includes 를 이용해보자
// 문자가 있으면 true
// 없으면 false 변환

function hasCola(str) {
    if(str.includes('콜라')){
        console.log('금칙어가 있습니다.')
    }else{
        console.log('통과');
    }
}

hasCola("펩시는 선넘지") // 통과
hasCola("펩시콜라는 최악이야") // 금칙어
hasCola("콜라") // 금칙어

String() -> 문자형으로 변환

Number() -> 숫자형으로 변환

Boolean() -> 불린형으로 변환


// 형변환이 필요한 이유

//ex
const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어몇점");

const result = (mathScore + engScore) / 2;

console.log(result);  ->>> 4050

틀린답


//ex  

const mathScore = 90;
const engScore = 80;

const result = (mathScore + engScore) / 2;

console.log(result);  ->>> 85

맞는답

이런 결과가 생긴이유


prompt입력 -> 문자형

prompt 로 입력받은 "90"은 숫자가 아니라 문자 90

그래서 90 80을  문자열로 더했으니 9080 -> /2 를 해서 4050 이라는 값이 나옴

문자열인데 나누기가 작동한 이유는 나누기 값은 표현식은 자동으로 숫자형으로 변환 해준다

그것을  자동형변환이라고 한다.


자동 형변환은 원인을 모르는 오류를 발생시킬 위험이 있으나

항상 원하는 의도를 가지고 타입을 정해주는것이 좋다

그것은 명시적 형변화 라고 부른다.


----------- 명시적 형변화 ---------------


String()

String(3)   -> "3" 문자형 3
String(true)   ->true
String(false)  ->false
String(null)   ->null
String(undefined)  -> undefined


Number()

Number("1234")  ->   1234 숫자형
Number("1234dsd")  -> NaN  숫자에 문자가 끼어져있으면 인식 안됨
Number(true)  ->  1  숫자형
Number(false)  -> 0  숫자형


Boolean()  


Boolean(false)  -> 0 숫자형
                   빈문자열 ""
                   null
                   undefined
                   NaN

이 이외값들은 모두  true 로 변환한다


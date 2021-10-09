toString()

10진수 --> 2진수/16진수

//ex

let num = 10;

num.toString(); //"10"
num.toString(2); // "1010"   10을 2진수로 나타낸것

let num2 = 255;
num2.toString(16); //  "ff"  16 진수


// Math

Math.PI;
3.121592653589793



// Math.ceil() : 올림

let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1) // 6
Math.ceil(num2)  //6

소수점에 상관 없이 두개다 6이 되었다.


// Math.floor() : 내림

let num1 = 5.1;
let num2 = 5.7;

Math.floor(num1) // 5
Math.floor(num2)  //5

소수점에 상관 없이 두개다 5가 되었다.


// Math.round() : 반올림

let num1 = 5.1;
let num2 = 5.7;

Math.floor(num1) // 5
Math.floor(num2)  //6

//소수점 자릿수


//ex

let userRate = 30.1234;

요구사항 : 소수점 둘째자리 까지 표현 (셋째 자리에서 반올림)  --> 30.12

Math.round(userRate * 100)/100 // 30.12


//ex2

// 소수점 자릿수 : toFixed()

let let userRate = 30.1234;

요구사항 : 소수점 둘째자리 까지 표현 (셋째 자리에서 반올림)  --> 30.12

userRate.toFixed(2);  // 30.12


userRate.toFixed(0);  // 30 -> 0은 소수점 이 아니므로 30 출력

userRate.toFixed(6);  // 30.123400 출력 --> 두자리가 비어 00으로 빈자리를 채워줬다.


toFixed 주의 사항

toFixed는 문자열을 반환한다 그러기때문에 반환 받은 다음 넘버를 이용해 숫자로 변환해 사용하는 경우가 많다.Math

//ex

userRate.toFixed(2); //"30.12"  문자형

Number(userRate.toString(2)); // 30.12  숫자형



// isNaN 

nan 인지 아닌지 판단해준다.


let x = Number('x'); // NaN

x == NaN // false
x === NaN // false
NaN == NaN // false NaN 은 자기 자신과도 똑같지 않다고 판단한다.

isNaN(x) // true
isNaN(3) // false 


// parseInt()

문자열을 숫자열로 바꿔준다.

let margin = '10px';


parseInt(margin); // 10
Number(margin) // NaN

넘버와 다른점은 문자가 혼용되어 있어도 동작한다.


let radColor = "f3"
parseInt(redColor); // NaN

parseInt는 숫자가 앞에 와야 동작한다

만일 문자가 앞에 있으면 동작하지 않는다.



그러나 parseInt는 두번째 인수를 받아서 진수를 지정할수 있다.

let radColor = "f3"
parseInt(redColor); // NaN

let radColor = "f3"
parseInt(redColor, 16); // 234

parseInt('11',2) // 3

//parseFloat()

 parseInt 와 동일 하기 동작하지만 부동 소수점을 반환한다.

 lat padding = '18.5%'

 parseInt(padding); // 18

 parseFloat(padding); // 18.5



 // Math.random()

 0~1 사이의 무작위 숫자 생성


 //ex 1 ~ 100 사이의 임의의 숫자를 뽑고 싶다면 ?

 Math.floor(Math.random()*100)+1

 마지막 1 을 더해주는 이유는 값이 0 이 나오는 경우가 있어

 최소 값을 지켜주기 위해서다.



 // Math.max() / Math.min()

 괄호 안에 최대값 , 최소값을 구할수있다.Math
 

 Math.max(1,4,-1,5,10,9,5.54);  // 10

 Math.min(1,4,-1,5,10,9,5.54);  // -1


 // Math.abs() : 절대값

 Math.abs(-1); //  1


 //Math.pow(n,m) : 제곱

 Math.pow(2,10); //1024




//Math.sqrt() : 제곱근

  Math.sqrt(16); // 4
어떠한 저장소에 정보를 담는것

 var car = "car";

변수  변수명   변수값

변수에 값을 주는 행위를 선언한다고 한다.


javascript 에서는 문자 (string)은 "" 감싸줘야한다.



1. var // 사용 하지 않는다. 한번 선언된 변수의 값을 바꿀수 있다.

2. let  한번 선언된 변수의 값을 바꿀수 있다. // css --> class

--> 유동성있게 사용할수 있다
 ---> 사용자가 정보를 수정하거나 입력 하는 용도로 사용할수있다

3. const  한번 선언된 변수의 값은 수정이 불가하다. // css --> id

--> 제한적으로 코드를 작성할수 있다
  --> 한번 선언된 변수의 값은 변하지 않기 때문에 보안에 좋다.




let 한번 선언된 변수의 값을 바꿀수 있다.


const 절대로 바뀌지 않는 상수  수정이 불가


1. 변수는 문자와 숫자 , $ _만 사용  // let ^m^ = "이모티콘웃음"; 안됨

2. 첫글자는 숫자가 될수 없다. //  let 1number = "숫자1"; x   // let number1 = "숫자1"; 0

3. 예약어는 사용할수 없다.  // let let = 99; <이런경우 x  

4. 가급적 상수 대문자

5. 변수명은 읽기 쉽고 이해할수 있게 선언  
--> 협업을 해야하기때문에 다른 사람이 봤을때 직관적인 네이밍을 해야함
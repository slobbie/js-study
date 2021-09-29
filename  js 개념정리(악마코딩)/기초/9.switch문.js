// switch

 switch 문은 if,else 로 대체 가능
 -> 쓰는 이유 케이스가 다양한 경우 보다더 간결하게 쓸수 있다는 장점이 있다.


 switch (평가) {
     case A:
       // a일때 코드  
     case B:
     // b 일때 코드
     ...
    
 }

 if(평가 == A){
     //a일때 코드
 }else if (평가 == B){
     //B일때 코드
 }

 이 두개는 같은 코드 이다.

 // switch  문 사용 하기

//   사과   :   100 원
//   바나나  :   200 원
//   키위   :   300  원
//   멜론   :   500   원
//   수박   :   500   원
// 사고 싶은 과일을 물어보고 가격 알려주기

let fruit = prompt('무슨 과일을 사고싶나요?');

 switch (fruit) {
         case '사과':
            console.log('100원 입니다.');
            break;
         case '바나나':
            console.log('200원 입니다.');
            break;
         case '키위':
            console.log('300원 입니다.');
            break;
         case '멜론':
            case '수박':
            console.log('500원 입니다.');
            break;   
        default :
        console.log('그런 과일은 없습니다.')
}




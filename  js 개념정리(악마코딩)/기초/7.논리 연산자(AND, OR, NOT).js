|| or 

&& and 

! not


// ------- || (OR) ------------------

여러개중 하나라도 true 면 true

즉, 모든 값이 false 일때만 false를  반환

//ex  

 스티브잡스는 한국인 이거나 or, 남자이다.  ->  true


 OR 는 첫번째 true 를 발견하는 즉시 평가를 멈춤


//ex 이름이 TOM 이거나 성인이면 통과

const name = "mike";
const age = 30;

if(name = 'tom' || age > 19){
    console('통과');
};

--> 이름은 톰이 아니지만 성인이기때문에 통과



// -------  && (AND)------------------

모든 값이 true 면 true 

즉, 하나라도 false 면 false 를 반환

AND 는 첫번째 false 를 발견하는 즉시 평가를 멈춤

//ex  

스티브잡스는 한국인 이거나 AND, 남자이다.  -> false


//ex 이름이 mike 이고, 성인이면 통과

const name = "mike";
const age = 30;

if(name = 'mike' && age > 19){
    console('통과');
};

--> 이름과 나이가 조건에 모두 일치 하므로 통과 출력




// 평가의 순서

운전면허가 있고 시력이 좋은 여군  을 찾는 코드를 짠다고 가정 한다면

운전면허 (전체군인의80%)  시력(전체군인의 60%) 여군 (전체군인 7%) 라는 가정하에

-> 여군인데 시력이 좋고 운전면허가 있는 사람 의 순서로 코딩하는게 좋다.



// -------  ! (NOT)------------------

true 면 false

false 면 true  

로 값을 반환


//ex 나이를 입력 받아 성인 아니면 돌아가라고 한다.

const age = prompt('나이를 입력하세요');

const isAdult = age > 19;

if(!isAdult){
   alert("돌아가.");
}

나이를 18살이라고 입력했다고 가정하면

isAdult 는 19 보다 커야 하므로 false 인데

if의 값이 출력 될려면  true 여야한다

! 연산자의 영향으로 false가  true 로 변환 되어

돌아가라는 값이 출력된다.


// 우선순위 ---------------------
// 여자이고, 이름이 mike 이거나 성인이면 통과

const gender = 'M';
const name =  'yujin';
const isAdult = true;

if(gender === 'M' && name === 'mike' || isAdult ){
   console.log(통과); 
}else{
    console.log(돌아가);
}

->> 출력

앞선 조건에서 성별과 이름이 틀렸지만 true로 출력되는 이유는

if((gender === 'F' && name === 'mike') || isAdult )

로 인식 되기 때문이다.


의도에 맞게 작성 할려면

if(gender === 'M' && (name === 'mike' || isAdult)){
    console.log(통과); 
 }else{
     console.log(돌아가);
 }


 --> 조건에 맞으므로 true  통과가 출력된다.
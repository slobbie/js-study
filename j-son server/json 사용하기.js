JSON의 기본적인 형태는 아래와 같다.

```
{ key : value }
```

JSON의 형태는 키(Key)와 값(value)의 쌍으로 이루어져 있는 구조.

그리고 Key와 Value사이에는 콜론(:)이 들어가게 된다.

```
{key1 : value, key2 : value2}
```

여러 데이터를 나열할 경우 쉼표( , )를 사용한다.

```
{ key1 : { inKey : inValue }, key2 : [arr1, arr2 arr3] }
```

```
{"판매자정보" : { "이름" : "남도일", "지역" : "서울" } , "판매품목" : ['사과','배','딸기']  }
```

객체(Object)는 중괄호( { } )로 묶어서 표현하고, 배열(Array)은 대괄호( [ ] )로 묶어서 표현.

자바스크립트에서 JSON을 사용하기 위해 다음과 같은 메소드를 제공.

1. JSON.stringify(arg)

2. JSON.parse(arg)

1. JSON.stringify(arg)는 객체를 문자열로 변환.

객체     ------------ > 문자열

```
let json = {"test" : "value"}

let incodingData = JSON.stringify(json);

//console.log(incodingData);
```

2. JSON.parse(arg)는 문자열을 객체로 변환합니다.

객체   < ------------    문자열

```
let str = '{"test" : "value"}';

let parsingData = JSON.parse(str);

//console.log(parsingData);
```

작은따옴표(' ')로 묶은 문자열 str 을 JSON.parse(str)로 문자열에서 객체로 변환

JSON.parse() 사용 시 주의할 점은 해당 문자열이 반드시 JSON형식이어야 된다는 점입니다.

—> 오류 발생 방지
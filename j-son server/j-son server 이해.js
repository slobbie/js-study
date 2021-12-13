JSON(`javascript Object Notation`)라는 의미의 축약어로 `데이터를 저장`하거나 `전송`할 때 많이 사용 되는`경량의 DATA 교환 형식을 의미한다`.

json 은 객체 자체를 문자열로 바꿀수 있는 특징이 있다.

이 객체 정보를 가진 문자열을 다른 언어나 서버로 던져 다시 사용 할수 있다.

- `서버`와 `클라이언트 간의 교류에서` 일반적으로 많이 사용 된다.
- Javascript 객체 표기법과 아주 유사하다.
- Javascript 이용하여 JSON 형식의 문서를 쉽게 Javascript 객체로 변환할 수 있는 이점이 있다.
- JSON 문서 형식은 Javascript 객체의 형식을 기반으로 만들어졌다.
- Javascript의 문법과 굉장히 유사하지만 텍스트 형식 일 뿐이다.
- 다른 프로그래밍 언어를 이용해서도 쉽게 만들 수 있다.
- 특정 언어에 종속되지 않으며, 대부분의 프로그래밍 언어에서 JSON 포맷의 데이터를 핸들링 할 수 있는 라이브러리를 제공한다.

**Note**: 문자열에서 네이티브 객체로 변환하는 것은 파싱(Parsing)이라고 한다.

 네트워크를 통해 전달할 수 있게 객체를 문자열로 변환하는 과정은 문자열화(Stringification)이라고 한다.

개별 JSON 객체를 `.json` 확장자를 가진 단순 텍스트 파일에 저장할 수 있습니다. 

MIME 타입은 `application/json` 입니다.

[https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON)

mime 타입 이란?

클라이언트에게 전송된 문서의 다양성을 알려주기 위한 메커니즘

      일반적인 구조 

      type/subtype 

`'/'`로 구분된 두 개의 문자열인 타입과 서브타입으로 구성됩니다. 스페이스는 허용되지 않습니다. *type*은 카테고리를 나타내며 *개별(discrete) 혹은* *멀티파트* 타입이 될 수 있습니다. *subtype* 은 각각의 타입에 한정됩니다.

MIME 타입은 대소문자를 구분하지는 않지만 전통적으로 소문자로 쓰여집니다.

참고 문서

[https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

- JSON은 순수히 데이터 포맷입니다. 오직 프로퍼티만 담을 수 있습니다. 메서드는 담을 수 없습니다.
- JSON은 문자열과 프로퍼티의 이름 작성시 큰 따옴표만을 사용해야 합니다. 작은 따옴표는 사용불가합니
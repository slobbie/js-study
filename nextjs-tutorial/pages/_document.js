import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument

// 넥스트에서 제공하는 도큐먼트를 커스텀 할수 있게 한다
// 넥스트는 html 마크업 정의를 건너뛰기 때문에 이구조를 사용하기위해서는 필수적으로 사용해야한다.
// 도큐먼트는 app.js 와 다르게 서버에서만 랜더링 되고 이벤트 핸들러  같은것은 작동하지 않는다
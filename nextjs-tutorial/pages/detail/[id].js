// 페이지 이름을 []로 감싸면 해당 페이지의 속한 아이디가 된다

import  Axios  from 'axios';
import Head from "next/head";
import { Loader } from "semantic-ui-react";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Item from "../../src/component/Itme";

const Post = ({item, name}) => {
  const router = useRouter();

  if(router.isFallback) {
    return (
      <div style={{ padding: "100px 0"}}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    ); 
  }   
  return(
    <>
    {item && (
          <>
            <Head>
              <title>{item.name}</title>
              <meta name="description" content={item.description}></meta>
            </Head>
            {name}환경입니다.
            <Item item={item} />
          </>
        )}
  </>
  );
};

export default Post;

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  return {
    // paths: [ 
    //   { params: { id: '740'}},
    //   { params: { id: '730'}},
    //   { params: { id: '729'}},
    // ],
    paths: data.slice(0, 9).map( item => ({ 
      params: {
        id : item.id.toStrind(),
      }
    })),
    fallback: true, 
    // fallback 이 false 면 없는 페이지는 대응 하지 않는다 --> 404 오류로 이동
    // true 면 최초에 빈 프록스가 빈상태로 그려지고 이후에 백그라운드에서 정적파일로 html 과 css 를 그려준다 그후 넥스트js는 프리렌더링 목록에 추가해준다.
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name : process.env.name
    },
  };
}

//context 는 여러가지 정보를 알수 있다. 파라미스나  요청 응답 커리등이 담겨서온다.


/*
Next js 모든 페이지 사전 렌더링 (Pre-rendering)
더 좋은 퍼포먼스
검색엔진최적화(SEO)
1. 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)
차이점은 언제 html 파일을 생성하는가
[정적 생성]
- 프로젝트가 빌드하는 시점에 html파일들이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- getStaticProps / getStaticPaths
[서버사이드 렌더링]은 매 요청마다 html 을 생성
- 항상 최신 상태 유지
- getServerSideProps
 */



// const Post = ({item}) => {
//   const router = useRouter();
//   const { id } = router.query;

//   const [item, setItem] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

//   function getData() {
//     Axios.get(API_URL).then((res) => {
//       setItem(res.data);
//       setIsLoading(false)
//     });
//   }

//   useEffect(() => {
//     if (id && id > 0) {
//       getData();
//     }
//   }, [id]);

//   return (
//     <>
//      {isLoading ? (
//       <div style={{ padding: "300px 0" }}>
//           <Loader inline="centered" active>
//             Loading
//           </Loader>
//       </div>
//      ) : (
//       <Item item={item} />
//      )}
//     </>
//   );
  
  
// };
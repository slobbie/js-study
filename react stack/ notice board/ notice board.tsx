// https://kungbi.github.io/2020/01/12/Next.js/next-js-make-board_1/


components/PostLink.js 파일을 생성하여 다음 코드를 작성하자.


import Link from 'next/link';

export default (props) => (
    <li>
        <Link href={`/post?id=${props.id}`}>
            <a style={{fontSize: '1.5rem'}}>{props.title}</a>
        </Link>
    </li>
);


posts/index.js 를 다음과 같이 수정했다.



import BaseLayout from '../components/BaseLayout';
import PostLink from '../components/PostLink';

const posts = [
    {id:1, title: "Post Title #1", content: "#1 content"},
    {id:2, title: "Post Title #2", content: "#2 content"},
    {id:3, title: "Post Title #3", content: "#3 content"},
    {id:4, title: "Post Title #4", content: "#4 content"},
    {id:5, title: "Post Title #5", content: "#5 content"},
    {id:6, title: "Post Title #6", content: "#6 content"},
    {id:7, title: "Post Title #7", content: "#7 content"},
    {id:8, title: "Post Title #8", content: "#8 content"},
    {id:9, title: "Post Title #9", content: "#9 content"}
];

const PostList = () => (
    <>
        {posts.map((data, index) => {
            return <PostLink id={data.id} title={data.title} key={index}/>
        })}
    </>
);

const Index = () => (
    <BaseLayout>
        <h1>
            Next.js Main Page.
        </h1>

        <PostList/>
    </BaseLayout>
);

export default Index;


posts 변수는 게시물 목록 더미데이터 이다. 그리고 map 함수로 posts 데이터들을 사용해 <PostLink> 컴포넌트를 생성했다




import BaseLayout from "../components/BaseLayout";
import {useRouter} from 'next/router';

const posts = [
    {id:1, title: "Post Title #1", content: "#1 content"},
    {id:2, title: "Post Title #2", content: "#2 content"},
    {id:3, title: "Post Title #3", content: "#3 content"},
    {id:4, title: "Post Title #4", content: "#4 content"},
    {id:5, title: "Post Title #5", content: "#5 content"},
    {id:6, title: "Post Title #6", content: "#6 content"},
    {id:7, title: "Post Title #7", content: "#7 content"},
    {id:8, title: "Post Title #8", content: "#8 content"},
    {id:9, title: "Post Title #9", content: "#9 content"}
];

const Content = () => {
    const router = useRouter();

    const post = posts[router.query.id -1];
    const title = post.title;
    const content = post.content;

    return(
        <>
            <h1>{title}</h1>
            <p>{content}</p>
        </>
    );
}

const Post = (props) => {
    return(
        <BaseLayout>
            <Content/>
        </BaseLayout>
    );
};

export default Post;
next/router 로 현재 파라미터를 받아와서 해당 데이터를 posts json변수에서 받아온다. 그리고 title과 content를 추출해 화면에 출력했다.
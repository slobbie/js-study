<BrowserRouter>
        <Header />
        <Switch>
         <Route exact path="/"> <DayList /> </Route>
         <Route path="/day"> <Day /> </Route>
        </Switch>
</BrowserRouter>

전체를 라우터로 감싸준다.

공통으로 보여줘야할 것을 빼고는


스위치로 감싸준다.

스위치들로 라우트 들을 감싸놓으면 일치하는 첫번째 결과를 보여준다.

exact 를 입력하면 정확히 일치할때만 그페이지를 랜더링해 보여준다.


react 에서는 

herf 링크 대신

link to="" 를 사용한다.


링크를 사용하는 해당 컴포넌트에서

<Link to="/day">Day {day.day}</Link>    

이런식으로 작성한다.


리액트 라우트에서 다이나믹한 url 처리할때는 :(콜론) 으로 처리한다

<Route path="/day/:day">



    
url이 포함된 값을 얻을때는 
useParams 을 사용한다.

//ex

day.js 컴포넌트

import dummy from "../db/data.json"
import { useParams } from 'react-router-dom';

export default function day(){
    // const a = useParams();
    // const day = a.day;
    const { day } = useParams();
    
    const wordList = dummy.words.filter(word =>(
        word.day === day
    ))

    return <>
    <table>
        <h2>Day {day}</h2>
        <tbody>
            {wordList.map(word =>( 
                <tr key={word.id}>
                    <td>
                        {word.eng}
                    </td>
                    <td>
                        {word.kor}
                    </td>
                </tr>
             ))}
        </tbody>
    </table>
    </>
}


// 없는 주소 입력했을시

<Route>
          <EmptyPage />
</Route>

라우트 안에 path 를 적어 주지 않으면 없는 페이지 접근시 여기로 이동한다.
맨밑에 해야함
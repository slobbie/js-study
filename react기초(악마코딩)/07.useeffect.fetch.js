import { useEffect } from "react";

useEffect

useEffect는 어떠한 상태값이 바꼇을때 동작하는 함수를 작성할수있다.

useEffect는 첫번째 매개체로 함수를 넣는다.

useEffect는 상태값이 변경되서 다시 랜더링 된 다음 호출된다.

랜더링을 끝내고 어떤 작업을 하고싶다면 //ex api 호출 등

useEffect 첫번째 매개변수로 함수를 전달해주면 된다.

//ex

export default function DayList(){
    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);

    function onClick(){
        setCount(count +1);
    };

    useEffect(()=>{
     console.log("count change")
    });
    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>    
                    </li>
                ))}
            </ul>
            <button onClick={onClick}>{count}</button>
        </>
  );
}


//불필요한 함수 호출을 피하고 싶을때


useEffect 두번째 매개변수로 배열을 전달한다.


useEffect(()=>{
    console.log("count change")
   },[count]);


이렇게 하면 카운트가 변경되었을때만 함수가 실행된다.

이것을 의존성 배열 이라고 한다.


상태값과 무관하게 랜더링 직후 딱 최초 한번만 실행되는 작업은 

빈 [] 배열을 집어넣으면 된다.

useEffect(()=>{
    console.log("count change")
   },[]);
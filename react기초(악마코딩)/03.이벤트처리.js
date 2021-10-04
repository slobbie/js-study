react 에서 이벤트 처리 하는 방법



1. 미리 함수를 만들어 놓고 전달해준다.

function showName(){
    console.log("Mike");
}

export default function Hello(){
    return  (
        <div>
            <h1>Hello</h1>;
            <button onClick={showName}>show name</button>
            <button>show age</button>
        </div>
 )
}

2. 함수를 직접 작성한다.

--> 매개변수를 전달하기 편하다.

export default function Hello(){
    function showName(){
        console.log("Mike");
    }
    function showAge(age){
        console.log(age);
    }
    return  (
        <div>
            <h1>Hello</h1>;
            <button onClick={showName}>show name</button>
            <button onClick={()=>{
                showAge(30);
            }}>show age</button>
        </div>
 )
}

3. target

export default function Hello(){
    function showName(){
        console.log("Mike");
    }
    function showAge(age){
        console.log(age);
    }
    function showText(txt){
        console.log(txt);
    }
    return  (
        <div>
            <h1>Hello</h1>;
            <button onClick={showName}>show name</button>
            <button onClick={()=>{
                showAge(30);
            }}>show age</button>
            <input 
            type="text"
            onChange={e => {
                const txt = e.target.value;
                showText(txt);
            }}
            ></input>
        </div>
 )
}


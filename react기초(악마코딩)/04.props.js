props 는 properties 의 약자로 속성값을 의미한다.

props 는 컴포넌트 내부에서 변경할수없다.

//ex

app.js

return (
    <div className="App">
     <Hello age={10}/>
     <Hello age={20} />
     <Hello age={30} />
    </div>
  );

app.js 에서 컴포넌트로 props 값을 넘겨준다. // age 값

export default function Hello(props){
    // let name = "Mike"
    const [name, setName] = useState('Mike');
    
    return  (
        <div>
            <h2>{name}({props.age})</h2>
            <button onClick={()=>{
                 setName(name === "Mike" ? "jane" : "Mike")
            }}>change</button>
        </div>

    );
}


Hello 컴포넌트에 props 를 넘겨주고

return 안에 props와 넘겨줄 것의 종류를 써준다.


만약 props의 값을 변경 하고 싶다면 컴포넌트 내부에서 다시 state 를 만들어야한다.

//ex

export default function Hello(props){
    // let name = "Mike"
    const [name, setName] = useState('Mike');
    const [age, setAge] = useState(props.age);
    
    return  (
        <div>
            <h2>{name}({age})</h2>
            <button onClick={()=>{
                 setName(name === "Mike" ? "jane" : "Mike")
                 setAge(age +1)
            }}>change</button>
        </div>

    );
}


만약 컴포넌트에서 넘겨받은 props의 값을 억지로 변경하면 오류발생


한 컴포넌트에서 가진 state 를 props로 넘길수도 있다.


//ex

컴포넌트 UserName.js

export default function UserName(name){
    return <p> Hello, {name}</p>
} 

그냥 이름을 알려주는 기능이 있는 컴포넌트가 있다고 가정하고

export default function Hello({age}){
    // let name = "Mike"
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";
    
    return  (
        <div>
            <h2>{name}({age}) : {msg}</h2>
            <UserName name={name} />
            <button onClick={()=>{
                 setName(name === "Mike" ? "jane" : "Mike")
            }}>change</button>
        </div>

    );
}


Hello.js 에 컴포넌트로 넣어준다.

그러면 UserName은 Hello.js 안에서는 State 이며

UserName 입장에서는 props 이다. 
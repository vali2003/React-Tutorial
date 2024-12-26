import { useEffect, useState } from "react"
import "./useEffect.css";
export const  ReactUseEffect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("VALI");
    useEffect(()=>{
        document.title = `count: ${count}`;
    },[count])
    useEffect (() =>{
        console.log("count Valiue:", count)
    },[count]);
    useEffect(() => {
        console.log(name)
    },[name]);
    return(
        <div>
            <h1>Hello, useEffect</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>
                Name : <span>{name}</span>
            </p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
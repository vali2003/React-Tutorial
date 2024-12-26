import { useState } from "react"
import  Counts  from "./MemoCount";

export const ReactMemo = () => {
    const [count, setCount] = useState(0);
    const myBioData = {
        name: "vali",
        age: 30,
    };
    return(
        <>
        <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end items-center">
            <h1>{count}</h1>
            <button className="btn bg-cyan-500 py-1 px-3" onClick={() => setCount((prev) => prev + 1)}>
  <i className="fas fa-plus"></i> 
</button>
        </div>
        <Counts bioData={myBioData}/>
        </>
    );
};
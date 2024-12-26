// export const State = () => {
//     let value=0;

//     const handleButtonClick = () => {
//         value++;
//         console.log(value)
//     }
//     return (
//         <>
//         <h1>{value}</h1>
//         <button onClick={handleButtonClick}>increment</button>
//         </>
//     )
// }

import { useState } from "react"
export const State = ()  => {
    const [count , setCount] = useState(0);
    console.log("Parent Component Rendered")
    const handleButtonClick = () => {
        setCount(() => count + 1)
    }
    return(
            <>
            
            <div>
                <h1>{count}</h1>
                <button onClick={handleButtonClick}>increment</button>
            </div>
            <ChildComponent count={count} />
            </>

        );
    };
    function ChildComponent({ count }) {
        console.log("Child Component Rendered");
        return (
            <div className="main-div">
                <h2>Child Component - {count}</h2>
            </div>
        );
    }
    
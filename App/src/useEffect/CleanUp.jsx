import { useEffect, useState } from "react"
import "./ClearUp.css";
export const CleanUp = () => {
    const [count, setCount] = useState(0);
   useEffect(()=>{
  const timer =  setInterval(() => {
        setCount((prev) =>prev + 1)
       },[1000]);
       return () => clearInterval(timer);
   },[]);
return(
    <div className="container">
        <div className="counter">
            <p>My Subscribers on Youtube</p>
            <div className="odometer">
                {count}
            </div>
            <h3 className="title">
                Subscribers <br /> Realtime Counter
            </h3>
        </div>
    </div>
);
};
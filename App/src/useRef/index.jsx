import { useRef } from "react";
import "./index.css";

export const UseRef = () => {
   const username = useRef(null);
   const password = useRef(null);

console.log(username);
    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log(username.current.value,password.current.value);
    };

    return (

        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={username}/>
            <br />
            <input type="text" id="password" ref={password}/>
            <button>Submit</button>
            </form>

    );
};
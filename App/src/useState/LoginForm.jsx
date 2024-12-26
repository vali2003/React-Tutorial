import { useState } from "react";
import "./LoginForm.css";

export const LoginForm = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const loginData = {
        username,
        password
      };
      console.log(loginData);
    } 
    return(
           <div className="container">
            <div className="card">
                <h1>Login form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">UserName</label>
                        <input type="text" name="username" required autoComplete="off" value={username}  onChange={(e) => setUserName(e.target.value)}/>

                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" required autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit">Login</button>
                        </form>
            </div>
           </div>
    );
};
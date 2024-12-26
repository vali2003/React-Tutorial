import { useState } from "react";
import "./Shortcircuit.css";

export const ShortCircuitExample = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Initialize with false
    const [user, setUser] = useState(""); // Initialize with an empty string

    return (
        <section>
            <div className="sub-dev">
                <h1>Welcome To The ShortCircuit Evaluation</h1>

                {/* Short-circuit evaluation for login */}
                {isLoggedIn && <p>You Are Logged In!</p>}

                {/* Ternary operator for greeting */}
                <p>{user ? `Hello ${user}` : "You Are Logged In!"}</p>

                <div className="grid-three-cols">
                    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                    <button onClick={() => setUser('vali')}>Set User</button>
                    <button onClick={() => setUser("")}>Clear User</button>
                </div>
            </div>
        </section>
    );
};

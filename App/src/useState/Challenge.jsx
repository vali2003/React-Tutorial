import { useState } from "react";
import "./Challenge.css";

export const Challenge = () => {
    const [count, setCount] = useState(0);  // Initialize count to 0
    const [step, setStep] = useState(1);    // State for the step input

    const handleIncrement = () => {
        setCount(count + step);  // Increment by step
    };

    const handleDecrement = () => {
        setCount(count - step);  // Decrement by step
    };

    const handleClear = () => {
        setCount(0);  // Reset count to 0
    };

    const handleStepChange = (e) => {
        setStep(Number(e.target.value));  // Update the step value based on input
    };

    return (
        <div>
            <h1>useState Challenge</h1>
            <p>Count: <span>{count}</span></p>
            <div>
                <label>
                    Step:
                    <input
                        type="number"
                        value={step}
                        onChange={handleStepChange} // Update step when user changes the value
                    />
                </label>
            </div>
            <div className="grid-three-cols">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleClear}>Reset</button>
            </div>
        </div>
    );
};

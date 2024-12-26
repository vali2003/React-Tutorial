import { memo, useState, useCallback } from "react";
import "./style.css";

// Button component, memoized for optimization
export const Button = memo(({ onClick, children }) => {
    // console.log(`Rendering button: ${children}`);
    return (
        <button
            className={`text-black mb-4 py-2 px-5 ${children === "increment" ? "bg-green-400" : "bg-red-400"}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
});

export default function UseCallback() {
    const [count, setCount] = useState(0);

    // Memoize the increment function with useCallback
    const increment = useCallback(() => {
        console.log("increment inside");
        setCount((prevCount) => prevCount + 1);
    }, []);

    // Memoize the decrement function with useCallback
    const decrement = useCallback(() => {
        console.log("decrement inside");
        setCount((prevCount) => prevCount - 1);
    }, []); 
    return (
        <div>
            <h1 className="mb-4">{count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
};

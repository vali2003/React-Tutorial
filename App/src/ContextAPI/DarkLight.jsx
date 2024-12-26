import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('Light'); 

    const handleToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const DarkLight = () => {
    const { theme, handleToggleTheme } = useContext(ThemeContext);
    return (
        <div
            className={`p-4 h-screen flex flex-col justify-center items-center transition-all ${
                theme === "Dark" ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
            <h1 className="text-2xl font-bold mb-4">Tea Time</h1>
            <p className="mb-4">Hello, Good Morning!</p>
            <button
                onClick={handleToggleTheme}
                className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700"
            >
                {theme === "Light" ? "Switch to Light" : "Switch to Dark"}
            </button>
        </div>
    );
};

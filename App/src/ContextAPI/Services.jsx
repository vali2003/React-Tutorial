import { useContext } from "react";
import { BioContext } from ".";

export const  Services = () => {
    const {myName,myAge} = useContext(BioContext);
    return (
        <section className="p-4 h-screen font-sans tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white">

        <h1 style={{color:'white'}} >Hello Context API My Name Is (Services) {myName} , {myAge}.</h1>
    </section>
    );
};
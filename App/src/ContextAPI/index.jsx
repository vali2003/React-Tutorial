import { createContext, use } from "react";

export   const BioContext = createContext();
export   const BioProvider  = ({ children }) => {
    const myName = "vali";
    const myAge = 30;
    console.log(children);
    return(

        <BioContext.Provider value={{myName:myName, myAge:myAge}}>
           {children}
        </BioContext.Provider>
    );
};

//  custom hooks

export const useBioContext = () => {
    const context = use(BioContext);
    if (context === undefined) {
        throw new Error("Component must be wrapped with BioProvider");
    }
    return context;
};

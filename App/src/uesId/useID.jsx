// import { useId } from "react"

// export const UseId = () => {
//     const usernameId = useId();
//     const emailId = useId();
//     const passwordId = useId();
//     return(
//         <form>
//             <div>
//                 <label htmlFor={id + "usernameId"}>Username: </label>
//                 <input type="text" id={id + "usernameId"} name="name" />            
//                 </div>

//                    <div>
//                     <label htmlFor={id + "passwordId"}>Password:</label>
//                     <input type="password" id={id + "passwordId"} name="password"/>
//                    </div>

//                 <div>
//                     <label htmlFor={id + "emailId"}>Email:</label>
//                     <input type="text" id={id + "emailId"} name="email"/>
//                     </div>
//                     <button type="submit">Submit</button>
//         </form>
//     );
// };
import { useId } from "react";

export const UseId = () => {
    const usernameId = useId();
    const emailId = useId();
    const passwordId = useId();

    return (
        <form>
            <div>
                <label htmlFor={usernameId}>Username: </label>
                <input type="text" id={usernameId} name="username" />
            </div>

            <div>
                <label htmlFor={passwordId}>Password:</label>
                <input type="password" id={passwordId} name="password" />
            </div>

            <div>
                <label htmlFor={emailId}>Email:</label>
                <input type="email" id={emailId} name="email" />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

import { useState } from "react";
import "./Controlled.css";
    const ControlledForm = () => {
        const [name, setName] = useState("");
        const handleChange = (event) => {
            setName(event.target.value);
        };
    const handleSubmit = (event) => {
            event.preventDefault();
            const dataValue = document.querySelector("#inputName").value;
            console.log(dataValue);
        };
        return(
             <section>
                <h1>Controlled Component</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name  : 
                        <input type="text" name="name" id="inputName" value={name} onChange={handleChange} />
                    </label>
                    <br/>
                    <button type="submit" className="state-button">Submit</button>
                </form>
             </section>
        );
    };

    export default ControlledForm;

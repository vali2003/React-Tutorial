import React, { useRef, useId } from "react";
import "./Forward.css";

export const ForwardRefs = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <BeforReact19Input label="username" ref={username} />
      <BeforReact19Input label="password" ref={password} />
      <button type="submit">Submit</button>
    </form>
  );
};

const BeforReact19Input = React.forwardRef(({ label }, ref) => {
  const id = useId(); 

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" ref={ref} />
    </div>
  );
});

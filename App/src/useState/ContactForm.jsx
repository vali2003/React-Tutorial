import { useState } from "react";
import "./LoginForm.css";  // Assuming the correct CSS file is "LoginForm.css"

export const ContactForm = () => {
//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

const [Contacts, setContacts] = useState({
    username:"",
    email:"",
    message:"",
});

const handleInputChange = (e) => {
   const {name, value} = e.target;
   setContacts((prev) => ({...prev, [name]: value}));
}

  // Correct the form submit handler to receive event and prevent default behavior
  const handleFormSubmit = (e) => {
    e.preventDefault();  // Prevent page reload on form submit
    // const contactData = {
    //   username,
    //   email,
    //   message,
    // };
    console.log(Contacts);  // Log the submitted data to the console
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={Contacts.username}
            // onChange={(e) => setUserName(e.target.value)}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"  // Changed type to "email" for validation
            name="email"
            required
            autoComplete="off"
            value={Contacts.email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handleInputChange}

          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            autoComplete="off"
            rows="6"
            value={Contacts.message}
            // onChange={(e) => setMessage(e.target.value)}
            onChange={handleInputChange}

          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

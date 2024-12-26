import { useState } from "react";
import "./Registration.css";

export const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");  // Corrected the variable name
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "phoneNumber":
        setPhoneNumber(value);  // Corrected the variable name
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber  // Corrected the variable name
    };
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Sign up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter FirstName"
            required
            value={firstName}
            onChange={handleInputChange}  // Added onChange handler
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"  // Fixed the name attribute
            placeholder="Enter Last Name"
            required
            value={lastName}
            onChange={handleInputChange}  // Added onChange handler
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={handleInputChange}  // Added onChange handler
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"  // Changed type to password for better security
            name="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={handleInputChange}  // Added onChange handler
          />

          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            type="text"  // Changed type to text for better compatibility with phone numbers
            name="phoneNumber"  // Fixed the name attribute
            placeholder="9876543211"
            required
            value={phoneNumber}
            onChange={handleInputChange}  // Added onChange handler
          />

          <p>
            By Creating An Account You Agree To Our
            <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>
          </p>

          <div className="clearfix">
            <button className="btn" type="submit">Sign Up</button>
          </div>
        </div>
      </form>

      <section>
  <h2>Your Information</h2>
  <table>
    <tbody>
      <tr>
        <td><strong>Full Name:</strong></td>
        <td style={{color:'dodgerblue'}}>{firstName} {lastName}</td>
      </tr>
      <tr>
        <td>Password:</td>
        <td style={{color:'dodgerblue'}}>{password}</td>
      </tr>
      <tr>
        <td><strong>Email:</strong></td>
        <td style={{color:'dodgerblue'}}>{email}</td>
      </tr>
      <tr>
        <td><strong>Phone Number:</strong></td>
        <td style={{color:'dodgerblue'}}>{phoneNumber}</td>
      </tr>
    </tbody>
  </table>
</section>
    </>
  );
};

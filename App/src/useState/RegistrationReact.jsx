import { useState } from "react";
import "./Registration.css";

export const Rest = () => {
  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use User state directly
    const formData = {
      firstName: User.firstName,
      lastName: User.lastName,
      email: User.email,
      password: User.password,
      phoneNumber: User.phoneNumber,
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
            placeholder="Enter First Name"
            required
            value={User.firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            required
            value={User.lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            value={User.email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={User.password}
            onChange={handleInputChange}
          />

          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="9876543211"
            required
            value={User.phoneNumber}
            onChange={handleInputChange}
          />

          <p>
            By creating an account, you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button className="btn" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <section>
        <h2>Your Information</h2>
        <table style={{ border: "1px solid #ccc", width: "100%" }}>
          <tbody>
            <tr>
              <td><strong>Full Name:</strong></td>
              <td style={{ color: "dodgerblue" }}>{User.firstName} {User.lastName}</td>
            </tr>
            <tr>
              <td><strong>Password:</strong></td>
              <td style={{ color: "dodgerblue" }}>{User.password}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td style={{ color: "dodgerblue" }}>{User.email}</td>
            </tr>
            <tr>
              <td><strong>Phone Number:</strong></td>
              <td style={{ color: "dodgerblue" }}>{User.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

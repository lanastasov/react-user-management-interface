import { useState } from "react";
import { Row } from "react-bootstrap";

export default function AddUserForm(props) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    props.setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleLastName = (e) => {
    props.setLastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handleRole = (e) => {
    props.setRole(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    props.setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      props.name === "" ||
      props.lastname === "" ||
      props.email === "" ||
      props.role === ""
    ) {
      setError(true);
    } else {
      const userData = [...props.tempUsers];
      // userData.push([props.name, props.lastname, props.email, props.role]);

      userData.push({
        firstName: props.name,
        // id: "8",
        lastName: props.lastname,
        role: props.role,
        status: "active",
        user: props.email,
      });
      props.setTempUsers(userData);
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {props.name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>Invite New User</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        <Row>
          <input
            placeholder="* First Name"
            onChange={handleName}
            className="input"
            // value={name}
            type="text"
          />

          <input
            placeholder="* Last Name"
            onChange={handleLastName}
            className="input"
            // value={name}
            type="text"
          />
        </Row>
        <Row>
          <input
            placeholder="* Email"
            onChange={handleEmail}
            className="input"
            // value={name}
            type="text"
          />
        </Row>
        <Row>
          <input
            placeholder="* Role"
            onChange={handleRole}
            className="input"
            type="text"
          />
        </Row>
        <Row>
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </Row>
      </form>
    </div>
  );
}

import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

export default function DeleteUserForm(props) {
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
    const userData = [...props.tempUsers];
    userData.splice(0, 1);
    console.log("tempUsers ", props.tempUsers);
    props.setTempUsers(userData);
    setSubmitted(true);
    setError(false);
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
        <h1>User {props.name} successfully deleted!!</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>Delete User</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">{successMessage()}</div>

      <form>
        {/* Labels and inputs for form data */}
        <Row>
          <Form.Label>
            {props.tempUsers[0].firstName + " " + props.tempUsers[0].lastName}
          </Form.Label>
        </Row>

        <Row>
          <Form.Label>{props.tempUsers[0].status} User</Form.Label>

          <hr />
        </Row>

        <Row>
          <button onClick={handleSubmit} className="btn" type="submit">
            Delete User
          </button>
        </Row>
      </form>
    </div>
  );
}

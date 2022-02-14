import React from "react";

function AddUser() {
  return (
    <>
      <h1 className="inviteUser"> Invite New User</h1>
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          // onChange={}
          className="input"
          value={"name"}
          type="text"
        />

        <label className="label">Email</label>
        <input
          // onChange={}
          className="input"
          value={"email"}
          type="email"
        />

        <label className="label">Password</label>
        <input
          // onChange={}
          className="input"
          value={"password"}
          type="password"
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddUser;

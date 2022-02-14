import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Container } from "react-bootstrap";
import Modal from "react-modal";
import Header from "./Header";
import AddUserForm from "./AddUserForm";
import DeleteUserForm from "./DeleteUserForm";
import group2SVG from "../img/Group 2 (1).svg";
import path41SVG from "../img/Path 41.svg";
import path73SVG from "../img/Path 73.svg";
import users from "../data/users.js";

const ProjectAccess = () => {
  var [search, setSearch] = React.useState("");
  var [tempUsers, setTempUsers] = useState([...users]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  const setModalDeleteIsOpenToTrue = () => {
    setModalDeleteIsOpen(true);
  };
  const setModalDeleteIsOpenToFalse = () => {
    setModalDeleteIsOpen(false);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#FFFFFF",
      width: "642px",
    },
  };
  return (
    <React.Fragment>
      <Container>
        <Header name="Project access" handleSearch={handleSearch} />
        <Table bordered hover>
          <thead>
            <tr>
              <th>
                <img
                  className="path73SVG"
                  src={path73SVG}
                  onClick={setModalIsOpenToTrue}
                />
              </th>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tempUsers.map((x) => (
              <tr key={x.id}>
                <td>
                  <img className="group2SVG" src={group2SVG} />
                </td>
                <td>{x.user}</td>
                <td>{x.role}</td>
                <td>{x.status}</td>
                <td>
                  <Link to={`/edit`}>
                    {
                      <img
                        src={require("../img/edit.jpg")}
                        style={{
                          marginRight: "15px",
                          cursor: "pointer",
                          height: "19.2px",
                        }}
                        onClick={() => {}}
                      />
                    }
                  </Link>

                  <img
                    className="path41SVG"
                    src={path41SVG}
                    onClick={setModalDeleteIsOpenToTrue}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <button onClick={setModalIsOpenToFalse}>x</button>
          <AddUserForm
            name={name}
            lastName={lastName}
            email={email}
            role={role}
            setName={setName}
            setLastName={setLastName}
            setEmail={setEmail}
            setRole={setRole}
            setTempUsers={setTempUsers}
            tempUsers={tempUsers}
          />
        </Modal>
        <Modal
          isOpen={modalDeleteIsOpen}
          style={customStyles}
          onRequestClose={() => setModalDeleteIsOpen(false)}
        >
          <button onClick={setModalDeleteIsOpenToFalse}>x</button>
          <DeleteUserForm
            name={name}
            lastName={lastName}
            setName={setName}
            status={status}
            setStatus={setStatus}
            setLastName={setLastName}
            setTempUsers={setTempUsers}
            tempUsers={tempUsers}
          />
        </Modal>
      </Container>
    </React.Fragment>
  );
};

export default ProjectAccess;

import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import HeaderUser from "./HeaderUser";
import img1 from "../img/img1.svg";
import ToggleButton from "react-toggle-button";

const UserSetupComponent = (props) => {
  const [superAdmin, setSuperAdmin] = useState(false);
  const [permissionGroup1, setPermissionGroup1] = useState(false);
  const [permissionGroup11, setPermissionGroup11] = useState(true);
  const [permissionGroup12, setPermissionGroup12] = useState(true);
  const [permissionGroup13, setPermissionGroup13] = useState(false);
  const [permissionGroup14, setPermissionGroup14] = useState(true);
  const [permissionGroup15, setPermissionGroup15] = useState(true);
  const [permissionGroup2, setPermissionGroup2] = useState(false);
  const [permissionGroup3, setPermissionGroup3] = useState(false);

  const resetInvite = () => {
    console.log("resetInvite");
  };

  const saveChanges = () => {
    console.log("saveChanges");
  };

  const setFirstName = () => {
    console.log("setFirstName", props);
  };

  const setLastName = () => {
    console.log("setLastName", props);
  };

  const setRole = () => {
    console.log("setRole", props);
  };

  return (
    <Container>
      <HeaderUser name={"User Setup"} />
      <Form className="form-body col-md-9 offset-md-1">
        <Row>
          <Col></Col>
          <Col xs={6}></Col>
        </Row>

        <Row>
          <Col>
            <img src={img1} alt="" />
            <Row className={!props.active ? "custom-component" : ""}>
              <p>Upload a photo</p>
            </Row>
            <Row className={!props.active ? "custom-component" : ""}>
              <h1>{props.firstName} </h1>{" "}
            </Row>
            <Row className={!props.active ? "custom-component" : ""}>
              <h1>{props.lastName}</h1>{" "}
            </Row>
            <Row className={!props.active ? "custom-component" : ""}>
              <p>{props.email}</p>{" "}
            </Row>
            <Row>
              {props.active ? (
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => resetInvite()}
                >
                  Reset the invite
                </Button>
              ) : (
                ""
              )}
            </Row>
          </Col>

          <Col>
            <Row>
              <h1>Details</h1>
            </Row>

            <Row>
              <Col>
                <ToggleButton
                  value={props.active}
                  onToggle={(active) => {
                    props.setActive(!active);
                  }}
                />
              </Col>
              <Col>
                <p>The user is {props.active ? "Active" : "Not Active"}</p>
              </Col>
            </Row>
            <Row>
              <Form.Label className={!props.active ? "custom-component" : ""}>
                *First Name{" "}
              </Form.Label>
              <Form.Control
                isRequired={true}
                className={!props.active ? "custom-component" : ""}
                // disabled = {!props.active}
                type="text"
                placeholder="Enter First Name"
                value={props.firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></Form.Control>
            </Row>

            <Row>
              <Form.Label className={!props.active ? "custom-component" : ""}>
                *Last Name{" "}
              </Form.Label>
              <Form.Control
                isRequired={true}
                className={!props.active ? "custom-component" : ""}
                // disabled = {!props.active}
                type="text"
                placeholder="Enter Last Name"
                value={props.lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></Form.Control>
            </Row>

            <Row>
              <Form.Label className={!props.active ? "custom-component" : ""}>
                *Role{" "}
              </Form.Label>
              <Form.Control
                isRequired={true}
                className={!props.active ? "custom-component" : ""}
                // disabled = {!props.active}
                type="text"
                placeholder="Enter Role"
                value={props.role}
                onChange={(e) => setRole(e.target.value)}
              ></Form.Control>
            </Row>
            <Row>
              {props.active ? (
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => saveChanges()}
                >
                  Save Changes
                </Button>
              ) : (
                ""
              )}
            </Row>
          </Col>

          <Col>
            <Row>
              <Col xs={10}>
                <Row>
                  <h1>Permissions</h1>
                </Row>
              </Col>

              <Col xs={2}>
                <Row className={!props.active ? "custom-component" : ""}>
                  <p>Admin</p>
                </Row>
              </Col>

              <Col xs={10}>
                <p className={!props.active ? "custom-component" : ""}>
                  Super Admin
                </p>
              </Col>

              <Col xs={2}>
                <Row className={!props.active ? "custom-component" : ""}>
                  <ToggleButton
                    value={superAdmin}
                    onToggle={(superAdmin) => {
                      setSuperAdmin(!superAdmin);
                    }}
                  />
                </Row>
              </Col>
              <hr />

              <Col xs={10}>
                <p className={!props.active ? "custom-component" : ""}>
                  Permission group 1
                </p>
              </Col>

              <Col xs={2}>
                <Row className={!props.active ? "custom-component" : ""}>
                  <ToggleButton
                    value={permissionGroup1}
                    onToggle={(permissionGroup1) => {
                      setPermissionGroup1(!permissionGroup1);
                    }}
                  />
                </Row>
              </Col>

              <Col xs={10}>
                <p
                  className={!props.active ? "custom-component" : ""}
                  style={{ paddingLeft: "20px" }}
                >
                  Permission group 11
                </p>
              </Col>

              <Col xs={2}>
                <Row className={!props.active ? "custom-component" : ""}>
                  <ToggleButton
                    value={permissionGroup11}
                    onToggle={(permissionGroup11) => {
                      setPermissionGroup11(!permissionGroup11);
                    }}
                  />
                </Row>
              </Col>

              <Col xs={10}>
                <p
                  className={!props.active ? "custom-component" : ""}
                  style={{ paddingLeft: "20px" }}
                >
                  Permission group 12
                </p>
              </Col>

              <Col xs={2}>
                <Row className={!props.active ? "custom-component" : ""}>
                  <ToggleButton
                    value={permissionGroup12}
                    onToggle={(permissionGroup12) => {
                      setPermissionGroup12(!permissionGroup12);
                    }}
                  />
                </Row>
              </Col>

              <Col xs={10}>
                <p
                  className={!props.active ? "custom-component" : ""}
                  style={{ paddingLeft: "20px" }}
                >
                  Permission group 13
                </p>
              </Col>

              <Col xs={2}>
                <Row className={!props.active ? "custom-component" : ""}>
                  <ToggleButton
                    value={permissionGroup13}
                    onToggle={(permissionGroup13) => {
                      setPermissionGroup13(!permissionGroup13);
                    }}
                  />
                </Row>
              </Col>

              <Col xs={10}>
                <p
                  className={!props.active ? "custom-component" : ""}
                  style={{ paddingLeft: "20px" }}
                >
                  Permission group 14
                </p>
              </Col>

              <Col xs={2}>
                <Row className={!props.active ? "custom-component" : ""}>
                  <ToggleButton
                    value={permissionGroup14}
                    onToggle={(permissionGroup14) => {
                      setPermissionGroup14(!permissionGroup14);
                    }}
                  />
                </Row>
              </Col>

              <Col xs={10}>
                <p
                  className={!props.active ? "custom-component" : ""}
                  style={{ paddingLeft: "20px" }}
                >
                  Permission group 15
                </p>
              </Col>

              <Col xs={2}>
                <Row className={!props.active ? "custom-component" : ""}>
                  <ToggleButton
                    value={permissionGroup15}
                    onToggle={(permissionGroup15) => {
                      setPermissionGroup15(!permissionGroup15);
                    }}
                  />
                </Row>
              </Col>
              <hr />

              <Col xs={10}>
                <p className={!props.active ? "custom-component" : ""}>
                  Permission group 2
                </p>
              </Col>

              <Col xs={2}>
                <Row className={!props.active ? "custom-component" : ""}>
                  <ToggleButton
                    value={permissionGroup2}
                    onToggle={(permissionGroup2) => {
                      setPermissionGroup2(!permissionGroup2);
                    }}
                  />
                </Row>
              </Col>

              <Col xs={10}>
                <p className={!props.active ? "custom-component" : ""}>
                  Permission group 3
                </p>
              </Col>

              <Col xs={2}>
                <Row className={!props.active ? "custom-component" : ""}>
                  <ToggleButton
                    value={permissionGroup3}
                    onToggle={(permissionGroup3) => {
                      setPermissionGroup3(!permissionGroup3);
                    }}
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default UserSetupComponent;

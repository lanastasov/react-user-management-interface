import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectAccess from "./components/ProjectAccess";

import { Container } from "react-bootstrap";
import UserSetupComponent from "./components/UserSetupComponent";

function App() {
  const [active, setActive] = useState(true);
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectAccess />} exact />
          <Route
            path="/edit"
            element={
              <UserSetupComponent
                firstName={"ivan"}
                lastName={"petrov"}
                email={"ivanpetrov@gmail.com"}
                role={"admin"}
                active={active}
                setActive={setActive}
              />
            }
            exact
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

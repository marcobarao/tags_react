import React from "react";

import Globals from "./styles";

import MainForm from "./components/MainForm";

import Container from "./objects/Container";
const App = () => (
  <Container>
    <Globals />
    <MainForm />
  </Container>
);

export default App;

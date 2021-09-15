import React from "react";
import Canvas from "../../src/Components/Canvas";
import Container from "../../src/Components/Container";
import Title from "../../src/Components/Title";
import TextEntry from "../../src/Components/TextEntry";
import EmailEntry from "../../src/Components/EmailEntry";
import Separator from "../../src/Components/Separator";
import PasswordEntry from "../../src/Components/PasswordEntry";
import LoginBtn from "../../src/Components/LoginBtn";
import ComplementarText from "../../src/Components/ComplementarText";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "../Views/ForgotPassword";

export default function Login(props) {
  return (
    <Router>
      <Canvas>
        <Container>
          <Title>Faça o login para continuar</Title>
          <TextEntry placeholder="Insira o id da sua clínica" />
          <Separator />
          <EmailEntry placeholder="Insira seu e-mail" />
          <PasswordEntry placeholder="Insiraa senha " />
          <Route path="/">Esqueci minha senha</Route>
          <LoginBtn>Entrar</LoginBtn>
        </Container>
      </Canvas>

      <Route path="/" component={Login}/>
      <Route path="/ForgotPassword" component={ForgotPassword}/>
      <ForgotPassword/>
    </Router>
  );
}

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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ForgotPassword from "../Views/ForgotPassword";
import Routes from "../routes/routes";
import "../../src/Views/Login.module.css";

export default function Login(props) {
  return (
    <Canvas>
      <Container>
        <Title>Faça o login para continuar</Title>
        <TextEntry placeholder="Insira o id da sua clínica" />
        <Separator />
        <EmailEntry placeholder="Insira seu e-mail" />
        <PasswordEntry placeholder="Insira a senha " />
        <div className="remebermeCheck">
          <input type="checkbox" />
          <label className="remembermeLabel">Lembre-me</label>
        </div>
        <Link className="link" to="/ForgotPassword">
          Esqueci minha senha
        </Link>
        <Link to="MainPage">
          <LoginBtn>Entrar</LoginBtn>
        </Link>
      </Container>
    </Canvas>
  );
}

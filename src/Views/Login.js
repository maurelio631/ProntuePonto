import React from "react";
import Canvas from "../Components/Canvas";
import Container from "../Components/Container";
import Title from "../Components/Title";
import TextEntry from "../Components/TextEntry";
import EmailEntry from "../Components/EmailEntry";
import Separator from "../Components/Separator";
import PasswordEntry from "../Components/PasswordEntry";
import LoginBtn from "../Components/LoginBtn";
import ComplementarText from "../Components/ComplementarText";

export default function Login(props) {
  return (
      <Canvas>
        <Container>
          <Title>Faça o login para continuar</Title>
          <TextEntry placeholder="Insira o id da sua clínica" />
          <Separator />
          <EmailEntry placeholder="Insira seu e-mail" />
          <PasswordEntry placeholder="Insira a senha " />
          <ComplementarText>Esqueci minha senha</ComplementarText>
          <LoginBtn>Entrar</LoginBtn>
        </Container>
      </Canvas>
  );
}

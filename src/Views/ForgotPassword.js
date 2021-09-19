import React from "react";
import { Link } from "react-router-dom";
import Canvas from "../Components/Canvas";
import ComplementarText from "../Components/ComplementarText";
import Container from "../Components/Container";
import EmailEntry from "../Components/EmailEntry";
import SubmitBtn from "../Components/LoginBtn";
import Title from "../Components/Title";

export default function ForgotPassword() {
  return (
    <Canvas>
      <Container>
        <Title>Esqueci Minha Senha</Title>
        <ComplementarText>
          Enviaremos uma mensagem de recuperação com os passos para retomar seu
          acesso
        </ComplementarText>
        <EmailEntry placeholder="Insira seu e-mail" />
        <SubmitBtn>Enviar</SubmitBtn>
        <Link to="/">
          <SubmitBtn>Voltar</SubmitBtn>
        </Link>
      </Container>
    </Canvas>
  );
}

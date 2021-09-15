import React from 'react';
import Canvas from '../Components/Canvas';
import ComplementarText from '../Components/ComplementarText';
import Container from '../Components/Container';
import EmailEntry from '../Components/EmailEntry';
import SubmitBtn from '../Components/LoginBtn';
import TextEntry from '../Components/TextEntry';
import Title from '../Components/Title';

export default function ForgotPassword(){
    return (
        <Canvas>
        <Container>
            <Title>Esqueci Minha Senha</Title>
            <ComplementarText>Enviaremos uma mensagem de recuperação com os passos para retomar seu acesso</ComplementarText>
            <EmailEntry  placeholder="Insira seu e-mail"/>
            <SubmitBtn>Enviar</SubmitBtn>
            <SubmitBtn>Voltar</SubmitBtn>
        </Container>
        </Canvas>
    )
}

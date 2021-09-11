import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Canvas from '../components/Canvas';
import ComplementarText from '../components/ComplementarText';
import Container from '../components/Container';
import EmailEntry from '../components/EmailEntry';
import SubmitBtn from '../components/LoginBtn';
import TextEntry from '../components/TextEntry';
import Titulo from '../components/Titulo';
import '@react-navigation/native';

export default ({navigation})=>{
    return (
        <Canvas>
        <Container>
            <Titulo>Esqueci Minha Senha</Titulo>
            <ComplementarText>Enviaremos uma mensagem de recuperação com os passos para retomar seu acesso</ComplementarText>
            <EmailEntry  placeholder="Insira seu e-mail"/>
            <SubmitBtn>Enviar</SubmitBtn>
            <SubmitBtn onPress={()=> navigation.navigate('Login')}>Voltar</SubmitBtn>
        </Container>
        </Canvas>
    )
}

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Titulo from "../components/Titulo";
import Separator from "../components/Separator";
import SubmitBtn from "../components/LoginBtn";
import TextEntry from "../components/TextEntry";
import EmailEntry from "../components/EmailEntry";
import PasswordEntry from "../components/PasswordEntry";
import Container from "../components/Container";
import Footer from "../components/Footer";
import CanvasScreen from "../components/Canvas";
import "@react-navigation/native";

function LoginValidation() {
  
}

export default ({ navigation }) => {
  return (
    <CanvasScreen>
      <Container>
        <Titulo>Faça o login para continuar</Titulo>
        <TextEntry placeholder="Qual sua clínica?" />
        <Separator />
        <EmailEntry placeholder="Insira o e-mail" />
        <PasswordEntry placeholder="Insira sua senha" />
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Esqueci minha senha
        </Text>
        <SubmitBtn onPress={() => navigation.navigate("AdminCreateEmployee")}>Entrar</SubmitBtn>
      </Container>
      <Footer />
    </CanvasScreen>
  );
};
const styles = StyleSheet.create({
  link: {
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});

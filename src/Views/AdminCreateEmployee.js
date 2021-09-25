import React from "react";
import { TextInput, View } from "react-native";
import TextEntry from "../components/TextEntry";
import Titulo from "../components/Titulo";
import Phone from "../components/PhoneEntry";
import EmailEntry from "../components/EmailEntry";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react/cjs/react.development";
import PasswordEntry from "../components/PasswordEntry";
import SubmitBtn from "../components/LoginBtn";
const [employeeType, setEmployeeType] = useState();


function createEmployee(){
    console.warn("Usuário criado com sucesso!!!");
}
export default (props) => {
  return (
    <View>
      <h1>Teste 2 </h1>
      <Titulo>Adicione um novo funcionário à sua clínica</Titulo>
      <TextEntry placeholder="Insira o nome do funcionário" />
      <PhoneEntry placeholder="Insira o telefone do funcionário" />
      <EmailEntry placeholder="Insira o e-mail do funcionário " />
      <PasswordEntry placeholder="Insira a senha que deve ser trocada pelo funcionário"/>
      <PasswordEntry placeholder="Confirme a senha"/>
      <Picker
        selectedValue={selectedEmployeeType}
        onValueChange={(itemValue, itemIndex) => setEmployeeType(itemValue)}
      >
        <Picker.Item label={props.label} value={props.value} />
      </Picker>
      <SubmitBtn onPress={createEmployee}>Criar</SubmitBtn>
      </View>
  );
};

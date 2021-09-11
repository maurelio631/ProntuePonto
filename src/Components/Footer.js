import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Footer() {
  return (
        <View style={styles.container}>
          <Text style={styles.footerText}>Todos os direitos reservados Prontu e Ponto&reg;</Text>
        </View>
  );
}
const styles = StyleSheet.create({
  container:{
    position:"absolute",
    bottom:0,
    marginBottom:10,
  },
  footerText:{
    fontSize:15,
    color:"#ffff",
  },

});

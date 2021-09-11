import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";

export default (props) => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", width: 500, height: 500 }}>
        <View
          style={{
            height: "20%",
            width: "20%",
            backgroundColor: "#2e2e2e",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ textAlign: "center", color: "#000", fontWeight: "bold" }}
          >
            Logo da clínica aqui
          </Text>
        </View>
        <Text style={{ marginLeft: 50, marginTop: 30 }}>Nome da clinica</Text>

        <View style={{flexDirection:"row-reverse"}}>
          <View>
            
          <Text>Nome do funcionário</Text>
          
          <View style={{height:100, width:100, backgroundColor:"#2e2e2e", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
            <Text style={{textAlign:"center"}}>Foto do Funcionário</Text>
          </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

import React from "react";
export default (props) => {
  return (
    <div>
      <div style={{ flexDirection: "row", width: 500, height: 500 }}>
        <div
          style={{
            height: "20%",
            width: "20%",
            backgroundColor: "#2e2e2e",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            style={{ textAlign: "center", color: "#000", fontWeight: "bold" }}
          >
            Logo da clínica aqui
          </label>
        </div>
        <label style={{ marginLeft: 50, marginTop: 30 }}>Nome da clinica</label>

        <duv style={{flexDirection:"row-reverse"}}>
          <div>
            
          <label>Nome do funcionário</label>
          
          <div style={{height:100, width:100, backgroundColor:"#2e2e2e", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
            <label style={{textAlign:"center"}}>Foto do Funcionário</label>
          </div>
          </div>
        </duv>
      </div>
    </div>
  );
};

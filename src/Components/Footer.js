import React from "react";
import './Footer.css';

const Footer = (props) => (
  <div>
    <p>Todos os direitos reservados</p>
    <span>{props.children}</span> &reg;
  </div>
);

export default Footer;

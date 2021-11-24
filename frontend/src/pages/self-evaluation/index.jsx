import React, { useState } from 'react';
import './styles.css';

const initialValue = {
  name: '',
  date: '',
  text: '',
  telephone: '',
  cpf: '',
  email: '',
  address: '',
  search: ''
}

export default function SelfEvaluation() {
  const [values, setValues] = useState({initialValue})
  console.log(values)

  function onChange(ev) {
    const { name, value } = ev.target;    

    setValues({...values, [name]: value})
  }

  function onSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <div>
      <h1>Auto-avaliação - Prontuário de Atendimento de Quiropraxia</h1>
      <form onSubmit={onSubmit} className="form" action="">
        <label>Nome:
          <input type="text" name="name" onChange={onChange} placeholder="Fulano Ferreira da Cruz Nascimento" className="text-input-name" />
        </label>
        <label> Nascimento:
          <input type="text" name="date" onChange={onChange} placeholder="01/02/1993" className="text-input-short" />
        </label>
        <span className="age">
          Idade: 28 anos
        </span>
        <label> Profissão: 
          <input type="text" name="text" onChange={onChange} placeholder="Alguma coisa" className="text-input-short" />
        </label>
        <label> Tel. Contato:
          <input type="number" name="telephone" onChange={onChange} placeholder="(11) 91234-5678" className="text-input-short" />
        </label>
        <label> CPF:
          <input type="number" name="cpf" onChange={onChange} placeholder="000.000.000-00" className="text-input-short" />
        </label>
        <label> E-mail:
          <input type="email" name="email" onChange={onChange} placeholder="fulano_tal@gmail.com" className="text-input-short" />
        </label>
        <label> Endereço:
         <input type="text" name="address" onChange={onChange} placeholder="Rua Num sei o que da onde, 25 - Jardim Tanana" className="text-input-name" />
        </label>
        <label> Como você nos conheceu?
         <input type="text" name="search" onChange={onChange} placeholder="Outro fulano, internet" className="text-input-short" />
        </label>
        <button type="submit" >Próximo</button>
      </form>
    </div>
  )
}

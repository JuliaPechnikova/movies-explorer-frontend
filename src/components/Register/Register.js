import './Register.css';
import Form from '../Form/Form';
import React from 'react';

function Register(props) {
  const [name, setName] = React.useState("");


  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <Form  hello="Добро пожаловать!" button="Зарегистрироваться" register="Уже зарегистрированы?" link="Войти" onUpdateUserAuth={props.onUpdateUserAuth} name={name}>
      <label htmlFor="name" className="form__header">Имя</label>
      <input value={name} className="form__input" id="name" name="name" minLength="2" maxLength="30" required onChange={handleNameChange}/>
    </Form>
  ); 
}

export default Register; 
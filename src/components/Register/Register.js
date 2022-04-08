import './Register.css';
import Form from '../Form/Form';
import React from 'react';

function Register(props) {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState(false);

  function handleNameChange(e) {
    setName(e.target.value)
    if (!e.target.value.match(/^[а-яА-ЯёЁa-zA-Z0-9]+$ -/)) {
      setError(false);
    } 
  }

  return (
    <Form
      hello="Добро пожаловать!" 
      button="Зарегистрироваться"
      register="Уже зарегистрированы?" 
      link="Войти" 
      onUpdateUserAuth={props.onUpdateUserAuth} 
      name={name} 
      registerError={props.registerError}>
      <label htmlFor="name" className="form__header">Имя</label>
      <input value={name} className="form__input" id="name" name="name" minLength="2" maxLength="30" required onChange={handleNameChange}/>
      {error ? <span className="form__error">Поле name должно содержать только латиницу, кириллицу, пробел или дефис</span> : <></>}
    </Form>
  ); 
}

export default Register; 
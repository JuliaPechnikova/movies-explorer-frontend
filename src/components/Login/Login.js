import './Login.css';
import Form from '../Form/Form';
import React from 'react';
import { useFormWithValidation } from '../../utils/Validation.js';

function Login(props) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUserAuth({
      login: values.login,
      password: values.password
    });
  }

  React.useEffect(() => {
    resetForm();
    props.setApiError("");
  }, [resetForm]);

  return (
    <Form 
      hello="Рады видеть!" 
      button="Войти" 
      register="Ещё не зарегистрированы?" 
      link="Регистрация" 
      redirect="/signup"
      values={values} 
      errors={errors} 
      isValid={isValid}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      registerError={props.registerError}
      blockForm={props.blockForm}
    />
  ); 
}

export default Login;
import './Register.css';
import Form from '../Form/Form';
import React from 'react';
import { useFormWithValidation } from '../../utils/Validation.js';

function Register(props) {
  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUserAuth({
      name: values.name,
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
      hello="Добро пожаловать!" 
      button="Зарегистрироваться"
      register="Уже зарегистрированы?" 
      link="Войти" 
      redirect="/signin"
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
      values={values}
      isValid={isValid}
      blockForm={props.blockForm}
      registerError={props.registerError}>
      <label htmlFor="name" className="form__header">Имя</label>
      <input className="form__input" id="name" name="name" disabled={props.blockForm} minLength="2" maxLength="30" required onChange={handleChange}/>
      {errors.name ? <span className="form__error">{errors.name}</span> : <></>}
    </Form>
  ); 
}

export default Register; 
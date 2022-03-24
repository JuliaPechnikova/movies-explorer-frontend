import './Register.css';
import Form from '../Form/Form';

function Register() {
  return (
    <Form  hello="Добро пожаловать!" button="Зарегистрироваться" register="Уже зарегистрированы?" link="Войти">
      <label htmlFor="name" className="form__header">Имя</label>
      <input defaultValue="Виталий" className="form__input" id="name" name="name" minLength="2" maxLength="30" required/>
    </Form>
  ); 
}

export default Register;
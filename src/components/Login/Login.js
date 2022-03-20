import './Login.css';
import Form from '../Form/Form';

function Login() {
  return (
    <Form hello="Рады видеть!" button="Войти" register="Ещё не зарегистрированы?" link="Регистрация" login={true}/>
  ); 
}

export default Login;
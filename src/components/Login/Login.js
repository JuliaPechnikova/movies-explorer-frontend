import './Login.css';
import Form from '../Form/Form';

function Login(props) {
  return (
    <Form hello="Рады видеть!" button="Войти" register="Ещё не зарегистрированы?" link="Регистрация" onUpdateUserAuth={props.onUpdateUserAuth} registerError={props.registerError}/>
  ); 
}

export default Login;
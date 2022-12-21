import { useNavigate } from 'react-router-dom';


import { FORGET_PASSWORD } from '../constants';

const LoginComponent = ({
    email, setEmail, password, setPassword, click,
}) => {
    const navigate = useNavigate();
    return (
        <div>
            <form>
                <h1 className="loginPage_h1_componentLogin">Увійти</h1>
                <div>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Ел. адреса або ім’я користувача"
                        className="loginPage_input_loginComponent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="loginPage_div_input_loginComponent">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Пароль"
                        className="loginPage_input_loginComponent"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <div 
                        className="loginPage_div_sign_forget_password_loginComponent sign"
                        onClick={() => navigate(FORGET_PASSWORD)}
                        >
                        Забули?
                    </div>
                </div>
                <button 
                    className="loginPage_button_enter_loginComponent"
                    onClick={click}
                    >
                        УВІЙТИ
                </button>
            </form>
        </div>
    );
};

export default LoginComponent;
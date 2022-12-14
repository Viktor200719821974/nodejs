import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import crossClose from '../icons/cross-close.svg';
import { HOME_PAGE } from '../constants';
import LoginComponent from '../components/LoginComponent';
import RegistrationComponent from '../components/RegistrationComponent';

const LoginPage = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {

    }, [isLogin]);
    return (
        <div className="loginPage_div_main">
            <div className="loginPage_div_main_button">
                <div
                    className="loginPage_div_button_cross_close" 
                    onClick={() => navigate(HOME_PAGE)}
                    >
                    <img src={crossClose} alt="button close page"/>
                </div>
                {
                    !isLogin ? 
                        <button 
                            className="loginPage_div_button_registration"
                            onClick={() => setIsLogin(true)}
                        >
                            Зареєструватися
                        </button>
                    :
                        <button 
                            className="loginPage_div_button_registration"
                            onClick={() => setIsLogin(false)}
                        >
                            Вхід
                        </button>
                }
            </div>
            <div className="loginPage_div_main_loginComponent">
                { 
                    !isLogin && 
                        <LoginComponent 
                        
                        />
                }
                { 
                    isLogin && 
                        <RegistrationComponent 
                            
                        />
                }
            </div>
        </div>
    );
};

export default LoginPage;
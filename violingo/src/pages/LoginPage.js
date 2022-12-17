import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import crossClose from '../icons/cross-close.svg';
import { HOME_PAGE, CONDITIONS, PRIVACY_POLICY } from '../constants';
import LoginComponent from '../components/LoginComponent';
import RegistrationComponent from '../components/RegistrationComponent';
import facebook from '../icons/facebook.svg';
import google from '../icons/stamp-google.svg';

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
            <div className="loginPage_div_main_loginComponent display_alien_justify">
                <div className="loginPage_div_componentLogin">
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
                    <div className="loginPage_div_main_line_and_or_loginComponent">
                    <div className="loginPage_div_line_loginComponent"></div>
                    <div className="loginPage_div_sign_or_loginComponent sign">або</div>
                    <div className="loginPage_div_line_loginComponent"></div>
                    </div>
                    <div className="loginPage_div_buttons_loginComponent display_alien_justify">
                        <button 
                            className="loginPage_button_facebook_google_loginComponent display_alien_justify"
                            style={{marginRight: '20px'}}
                            >
                            <img 
                                src={facebook} 
                                alt="stamp google" 
                            />
                            <span 
                                className="loginPage_span_sign_loginComponent sign"
                                style={{color: '#3b5998'}}
                                >
                                Facebook
                            </span>
                        </button>
                        <button className="loginPage_button_facebook_google_loginComponent">
                            <img 
                                src={google} 
                                alt="stamp google" 
                                style={{width: '20px', height: '21px'}}
                            />
                            <span 
                                className="loginPage_span_sign_loginComponent sign"
                                style={{color: '#4285f4'}}
                                >
                                Google
                            </span>
                        </button>
                    </div>
                    <div className="loginPage_div_sign_privacy_policy_loginComponent">
                        <span className="loginPage_span_sign_privacy_policy_loginComponent">
                            Увійшовши в Violingo, ви приймаєте наші 
                            <a 
                                href={CONDITIONS}
                                style={{textDecoration: 'none', margin: '0 3px 0 3px'}}
                                >
                                    <b>умови</b>
                            </a>
                            та
                            <a 
                                href={PRIVACY_POLICY}
                                style={{textDecoration: 'none', marginLeft: '3px'}}
                                >
                                <b>Політику конфіденційності</b>
                            </a>                   .
                        </span>
                    </div>
                </div>  
            </div>                            
        </div>
    );
};

export default LoginPage;
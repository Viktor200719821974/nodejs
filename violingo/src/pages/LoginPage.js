import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import crossClose from '../icons/cross-close.svg';
import { 
    HOME_PAGE, CONDITIONS, PRIVACY_POLICY, LOGIN_PAGE, REGISTRATION_PAGE, REGISTER_PAGE, 
} from '../constants';
import LoginComponent from '../components/auth/LoginComponent';
import RegistrationComponent from '../components/auth/RegistrationComponent';
import facebook from '../icons/facebook.svg';
import google from '../icons/stamp-google.svg';
import { login, registration } from '../http/authApi';
import { isLoginUser } from '../redux/actions';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const [isLogin, setIsLogin] = useState(false);
    const [isBool, setIsBool] = useState(false);
    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const click = async(e) => {
        e.preventDefault();
        try {
            let data;
            if (!isLogin) {
                data = await login(email, password)
                    .catch(err => {
                        if (err.response.data) {
                            setError(true);
                            setErrorMessage(err.response.data);
                        }
                    });
            } else {
                data = await registration(email, password, name, age)
                    .catch(err => {
                        if (err.response.data) {
                            setError(true);
                            setErrorMessage(err.response.data);
                        }                       
                    });                
            }
            if (isLogin && data) {
                navigate(LOGIN_PAGE);
                setError(false);
                setErrorMessage('');
            }
            if (!isLogin && data) {
                navigate(REGISTER_PAGE);
                setError(false);
                setErrorMessage('');
                dispatch(isLoginUser(true));
            } 
        } catch(e) {
            console.log(e);
        }
    }
    useEffect(() => {
        if (location.pathname === '/login') {
            setIsLogin(false);
        }
        if (location.pathname === '/registration') {
            setIsLogin(true);
        } 
    }, [isLogin, location.pathname]);
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
                            onClick={() => {
                                navigate(REGISTRATION_PAGE);
                                setError(false);
                                setErrorMessage('');
                            }}
                        >
                            Зареєструватися
                        </button>
                    :
                        <button 
                            className="loginPage_div_button_registration"
                            onClick={() => {
                                navigate(LOGIN_PAGE);
                                setError(false);
                                setErrorMessage('');
                            }}
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
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                click={click}
                            />
                    }
                    { 
                        isLogin && 
                            <RegistrationComponent 
                                isBool={isBool}
                                setIsBool={setIsBool}
                                age={age}
                                setAge={setAge}
                                name={name}
                                setName={setName}
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                click={click}
                            />
                    }
                   {
                        error &&
                            <div className="loginPage_div_error display_alien_justify">                                
                                <span className="loginPage_span_errorMessage display_alien_justify">
                                    <div className="loginPage_div_error_triangle"></div>
                                    {errorMessage}
                                </span> 
                            </div>
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
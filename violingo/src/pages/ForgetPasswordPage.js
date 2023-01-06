import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

import LanguageComponent from '../components/choiseLanguageComponents/LanguageComponent';
import { 
    REGISTRATION_PAGE, LOGIN_PAGE, HOME_PAGE, 
} from '../constants';
import ForgetPasswordComponent from '../components/forgetPassword/ForgetPasswordComponent';
import ChangePasswordComponent from '../components/forgetPassword/ChangePasswordComponent';
import { changePassword, forgetPassword } from '../http/authApi';
import SendForgetPasswordComponent from '../components/forgetPassword/SendForgetPasswordComponent';
import { arrayMenuDownLinks } from '../constants/arrays';
import MenuDownLinksComponent from '../components/MenuDownLinksComponent';

const ForgetPasswordPage = () => {
    let params = useParams();
    let token = params.token;
    const navigate = useNavigate();
    const location = useLocation();
    const [isBool, setIsBool] = useState(false);
    const [value, setValue] = useState('УКРАЇНСЬКА');
    const [isChange, setIsChange] = useState(false);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');
    const [ifSend, setIfSend] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const send = () => {
        if (!isChange) {
            forgetPassword(email)
                .then(data => {
                    if (data.status === 200) {
                        setIfSend(true);
                        setError(false);
                        setErrorMessage('');
                    }
                })
                .catch(err => {
                    if (err.response.data) {
                        setError(true);
                        setErrorMessage(err.response.data);
                    } 
                });
        } else {
            changePassword(password, token, repeatPassword)
                .then(data => {
                    if (data.status === 200) {
                        setError(false);
                        setErrorMessage('');
                        navigate(LOGIN_PAGE);
                    }
                })
                .catch(err => {
                    if (err.response.data) {
                        setError(true);
                        setErrorMessage(err.response.data);
                    }
                });
        } 
    }
    useEffect(() => {
        if (location.pathname === `/change/password/${token}`) {
            setIsChange(true);
        }
    }, [isChange, location.pathname, token, error, errorMessage]);
    return (
        <div>
            <header className="forgetPasswordPage_header">
                <div 
                    className="forgetPasswordPage_sign_violingo sign"
                    onClick={() => navigate(HOME_PAGE)}
                    >
                        Violingo
                </div>
                <span 
                    className="forgetPasswordPage_sign_language sign"
                    >
                    мова сайту: 
                    <span 
                        style={{marginLeft: '10px'}}
                        >
                            {value}
                    </span>
                     <MdKeyboardArrowDown 
                        size={'30px'}
                        onMouseEnter={() => setIsBool(true)}
                        onMouseLeave={() => setIsBool(false)}
                        />
                </span>                
                <button 
                    className="forgetPasswordPage_button_enter"
                    onClick={() => navigate(LOGIN_PAGE)}
                    >
                        Вхід
                </button>
                <button 
                    className="forgetPasswordPage_button_start"
                    onClick={() => navigate(REGISTRATION_PAGE)}
                    >
                        Розпочати
                </button>
            </header>
            <div className="forgetPasswordPage_div_body">
            <span className="forgetPasswordPage_languageComponent">
                        {isBool && 
                            <LanguageComponent
                                setValue={setValue}
                                setIsBool={setIsBool}
                            />
                        }
                    </span>
                <div className="forgetPasswordPage_div_body_forComponents">
                    { (!isChange && !ifSend) && 
                        <ForgetPasswordComponent
                            email={email}
                            setEmail={setEmail}
                        />
                    }
                    { (isChange && !ifSend) &&
                        <ChangePasswordComponent
                            password={password}
                            setPassword={setPassword}
                            repeatPassword={repeatPassword}
                            setRepeatPassword={setRepeatPassword}
                        />
                    }
                    {
                        error &&
                            <div 
                                className={
                                    isChange 
                                        ? "forgetPasswordPage_div_error display_alien_justify" 
                                        : "forgetPasswordPage_div_error_forgetPasswordComponent display_alien_justify"
                                    }
                                >                                
                                <span className="forgetPasswordPage_span_errorMessage display_alien_justify">
                                    <div className="forgetPasswordPage_div_error_triangle"></div>
                                    {errorMessage}
                                </span> 
                            </div>
                        }
                </div>                                
                { ifSend && 
                    <SendForgetPasswordComponent
                    />
                }
                { !ifSend && 
                    <button 
                        className="forgetPasswordPage_button_send sign"
                        onClick={send}
                        >
                        Надіслати
                    </button>
                }
                <div className="forgetPasswordPage_div_line display_alien_justify">
                    <ul className="forgetPasswordPage_ul">
                        { arrayMenuDownLinks.map((c) =>  
                            <MenuDownLinksComponent
                                key={c.id}
                                name={c.name}
                                id={c.id}
                                nav={c.navigate}
                            />
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ForgetPasswordPage;
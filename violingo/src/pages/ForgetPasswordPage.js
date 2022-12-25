import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

import LanguageComponent from '../components/LanguageComponent';
import { 
    REGISTRATION_PAGE, LOGIN_PAGE, HOME_PAGE, 
} from '../constants';
import ForgetPasswordComponent from '../components/ForgetPasswordComponent';
import ChangePasswordComponent from '../components/ChangePasswordComponent';
import { changePassword, forgetPassword } from '../http/authApi';
import SendForgetPasswordComponent from '../components/SendForgetPasswordComponent';
import { arrayForgetPageLinks } from '../constants/arrays';
import ForgetPasswordLinksComponent from '../components/ForgetPasswordLinksComponent';

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
            <header className="forgetPage_header">
                <div 
                    className="forgetPage_sign_violingo sign"
                    onClick={() => navigate(HOME_PAGE)}
                    >
                        Violingo
                </div>
                <span 
                    className="forgetPage_sign_language sign"
                    onMouseEnter={() => setIsBool(true)}
                    onMouseLeave={() => setIsBool(false)}
                    >
                    мова сайту: <span style={{marginLeft: '10px'}}>{value}</span>
                     <MdKeyboardArrowDown size={'30px'}/>
                </span>
                {isBool && 
                    <LanguageComponent
                        setValue={setValue}
                        setIsBool={setIsBool}
                    />
                }
                <button 
                    className="forgetPage_button_enter"
                    onClick={() => navigate(LOGIN_PAGE)}
                    >
                        Вхід
                </button>
                <button 
                    className="forgrtPage_button_start"
                    onClick={() => navigate(REGISTRATION_PAGE)}
                    >
                        Розпочати
                </button>
            </header>
            <div className="forgetPage_div_body">
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
                                    ? "forgetPage_div_error display_alien_justify" 
                                    : "forgetPage_div_error_forgetPasswordComponent display_alien_justify"
                                }
                            >                                
                            <span className="forgetPage_span_errorMessage display_alien_justify">
                                <div className="forgetPage_div_error_triangle"></div>
                                {errorMessage}
                            </span> 
                        </div>
                }   
               { ifSend && 
                    <SendForgetPasswordComponent
                    />
               }
                { !ifSend && 
                    <button 
                        className="forgetPage_button_send sign"
                        onClick={send}
                        >
                        Надіслати
                    </button>
                }
                <div className="forgetPage_div_line display_alien_justify">
                <ul className="forgetPage_ul">
                    { arrayForgetPageLinks.map((c) =>  
                        <ForgetPasswordLinksComponent
                            key={c.id}
                            name={c.name}
                            id={c.id}
                        />
                    )}
                </ul>
            </div>
            </div>
        </div>
    );
};

export default ForgetPasswordPage;
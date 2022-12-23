import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

import LanguageComponent from '../components/LanguageComponent';
import { 
    REGISTRATION_PAGE, LOGIN_PAGE, HOME_PAGE, CHANGE_PASSWORD, 
} from '../constants';
import ForgetPasswordComponent from '../components/ForgetPasswordComponent';
import ChangePasswordComponent from '../components/ChangePasswordComponent';
import { changePassword, forgetPassword } from '../http/authApi';

const ForgetPasswordPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isBool, setIsBool] = useState(false);
    const [value, setValue] = useState('УКРАЇНСЬКА');
    const [isChange, setIsChange] = useState(false);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const send = () => {
        if (!isChange) {
            forgetPassword(email)
                .then(data => console.log(data))
                .catch(err => console.log(err));
        } else {
            changePassword(password)
                .then(data => console.log(data))
                .catch(err => console.log(err));
        } 
    }
    useEffect(() => {
        if (location.pathname === CHANGE_PASSWORD) {
            setIsChange(true);
        }
    }, [isChange, location.pathname]);
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
               { !isChange && 
                    <ForgetPasswordComponent
                        email={email}
                        setEmail={setEmail}
                    />
                }
               { isChange && 
                    <ChangePasswordComponent
                        password={password}
                        setPassword={setPassword}
                        repeatPassword={repeatPassword}
                        setRepeatPassword={setRepeatPassword}
                    />
               }
                <button 
                    className="forgetPage_button_send sign"
                    onClick={send}
                    >
                    Надіслати
                </button>
            </div>
        </div>
    );
};

export default ForgetPasswordPage;
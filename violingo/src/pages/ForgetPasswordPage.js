import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

import LanguageComponent from '../components/LanguageComponent';
import { REGISTER_PAGE, LOGIN_PAGE, HOME_PAGE } from '../constants';

const ForgetPasswordPage = () => {
    const navigate = useNavigate();
    const [isBool, setIsBool] = useState(false);
    const [value, setValue] = useState('УКРАЇНСЬКА');
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
                    onClick={() => navigate(REGISTER_PAGE)}
                    >
                        Вхід
                </button>
                <button 
                    className="forgrtPage_button_start"
                    onClick={() => navigate(LOGIN_PAGE)}
                    >
                        Розпочати
                </button>
            </header>
            <div className="forgetPage_div_body">
                <h2 style={{color: '#4b4b4b', margin: '0 0 8px'}}>
                    Не пам'ятаю пароль
                </h2>
                <h5 style={{color:'#3c3c3c'}}>
                    Ми надішлемо вам інструкцію для скидання пароля електронною поштою.
                </h5>
                <div>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Електронна пошта"
                        className="forgetPage_input_loginComponent"
                        />
                </div>
                <button className="forgetPage_button_send sign">
                    Надіслати
                </button>
            </div>
        </div>
    );
};

export default ForgetPasswordPage;
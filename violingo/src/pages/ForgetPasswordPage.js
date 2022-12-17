import { MdKeyboardArrowDown } from 'react-icons/md';
const ForgetPasswordPage = () => {
    return (
        <div>
            <header className="forgetPage_header">
                <div className="forgetPage_sign_violingo sign">Violingo</div>
                <span className="forgetPage_sign_language sign">
                    мова сайту: УКРАЇНСЬКА <MdKeyboardArrowDown size={'30px'}/>
                </span>
                <button className="forgetPage_button_enter">Вхід</button>
                <button className="forgrtPage_button_start">Розпочати</button>
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
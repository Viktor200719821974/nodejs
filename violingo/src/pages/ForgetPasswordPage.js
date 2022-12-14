import { MdKeyboardArrowDown } from 'react-icons/md';
const ForgetPasswordPage = () => {
    return (
        <div>
            <div className="forgetPage_header">
                <div className="forgetPage_sign_violingo">Violingo</div>
                <span className="forgetPage_sign_language">
                    мова сайту: УКРАЇНСЬКА <MdKeyboardArrowDown size={'30px'}/>
                </span>
                <button className="forgetPage_button_enter">Вхід</button>
                <button className="forgrtPage_button_start">Розпочати</button>
            </div>
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
                <button className="forgetPage_button_send">
                    Надіслати
                </button>
            </div>
        </div>
    );
};

export default ForgetPasswordPage;
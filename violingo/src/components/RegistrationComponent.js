import facebook from '../icons/facebook.svg';
import google from '../icons/stamp-google.svg';

const RegistrationComponent = () => {
    return (
        <div className="loginPage_div_componentLogin">
            <form>
                <h1 className="loginPage_h1_componentLogin">Створення профілю</h1>
                <div>
                    <input 
                        type="number" 
                        name="age" 
                        placeholder="Вік"
                        className="loginPage_input_loginComponent"
                        />
                </div>
                <div>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Ім’я (необов’язково)"
                        className="loginPage_input_loginComponent"
                        />
                </div>
                <div>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Електронна пошта"
                        className="loginPage_input_loginComponent"
                        />
                </div>
                <div className="loginPage_div_input_loginComponent">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Пароль"
                        className="loginPage_input_loginComponent"
                        />
                </div>
                <button className="loginPage_button_enter_loginComponent">
                    Створити обліковий запис
                </button>
            </form>
            <div className="loginPage_div_main_line_and_or_loginComponent">
                <div className="loginPage_div_line_loginComponent"></div>
                <div className="loginPage_div_sign_or_loginComponent">або</div>
                <div className="loginPage_div_line_loginComponent"></div>
            </div>
            <div className="loginPage_div_buttons_loginComponent">
                <button 
                    className="loginPage_button_facebook_google_loginComponent"
                    style={{marginRight: '20px'}}
                    >
                    <img 
                        src={facebook} 
                        alt="stamp google" 
                        />
                    <span 
                        className="loginPage_span_sign_loginComponent"
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
                        className="loginPage_span_sign_loginComponent"
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
                        href='http://localhost:3000'
                        style={{textDecoration: 'none', margin: '0 3px 0 3px'}}
                        >
                        <b>умови</b>
                    </a>
                    та
                    <a 
                        href='http://localhost:3000'
                        style={{textDecoration: 'none', marginLeft: '3px'}}
                        >
                        <b>Політику конфіденційності</b>
                    </a>
                    .
                </span>
            </div>
        </div>
    );
};

export default RegistrationComponent;

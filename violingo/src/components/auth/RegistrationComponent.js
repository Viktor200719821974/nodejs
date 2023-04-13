import { PRIVACY_POLICY } from '../../constants';

const RegistrationComponent = ({
    isBool, setIsBool, age, setAge, name, setName, email, setEmail, password, setPassword, 
    click,
}) => {
    return (
        <div>
            <form>
                <h1 className="loginPage_h1_loginComponent">Створення профілю</h1>
                <div className="loginPage_div_input_span_registrationComponent">
                    <input 
                        type="number"
                        name="age" 
                        placeholder="Вік"
                        className="loginPage_input_loginComponent"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <span 
                        className="loginPage_span_circle_question_registrationComponent display_alien_justify"
                        onMouseEnter={() => setIsBool(true)}
                        onMouseLeave={() => setIsBool(false)}
                        >
                            ?
                    </span> 
                    {isBool && 
                        <div 
                            className="loginPage_div_triangle_and_sign_registrationComponent"
                            onMouseEnter={(e) => setIsBool(true)}
                            onMouseLeave={(e) => setIsBool(false)}
                            >
                            <span className="loginPage_div_triangle_registrationComponent"></span>
                            <span className="loginPage_span_sign_registrationComponent">                                
                                Указавши вік, ви гарантовано отримаєте доступ до належного 
                                навчання в Violingo. Докладніше в нашій 
                                <a 
                                    href={PRIVACY_POLICY}
                                    className="loginPage_a_registrationComponent"
                                    >
                                    Політиці конфіденційності
                                </a>.
                            </span> 
                        </div>    
                    }
                </div>
                <div>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Ім’я (необов’язково)"
                        className="loginPage_input_loginComponent"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Електронна пошта"
                        className="loginPage_input_loginComponent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="loginPage_div_input_loginComponent">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Пароль"
                        className="loginPage_input_loginComponent"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="loginPage_div_wrap_for_button_loginComponent">
                    <button 
                        className="loginPage_button_enter_loginComponent"
                        onClick={click}
                        >
                        Створити обліковий запис
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationComponent;

import { MdKeyboardArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import americaFlag from '../icons/united-states.png';
import { WELCOME_PAGE, HOME_PAGE } from '../constants';
import LanguageComponent from '../components/LanguageComponent';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [isBool, setIsBool] = useState(false);
    const [value, setValue] = useState('УКРАЇНСЬКА');
    return (
        <div>
            <header className="registerPage_header">
                <span 
                    className="registerPage_sign_violingo sign"
                    onClick={() => navigate(HOME_PAGE)}
                    >
                    violingo
                </span>
                <span 
                    className="registerPage_sign_language sign"
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
            </header>
            <div className="registerPage_body display_alien_justify">
                <div className="registerPage_div_center_body">
                    <h1 style={{marginBottom: '50px'}}>Яку мову ви хочете вчити?</h1>
                    <div className="registerPage_main_div_button">
                        <div 
                            className="registerPage_div_button" 
                            onClick={() => navigate(WELCOME_PAGE)}
                        >
                            <img 
                                src={americaFlag} 
                                alt="america flag" 
                                style={{width: '88px', marginTop: '20px'}}
                            />
                            <h4>Англійська</h4>
                            <div className="registerPage_div_sign_amount_student">1,20 млн учні</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import americaFlag from '../icons/united-states.png';
import { WELCOME_PAGE } from '../constants';

const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <header className="registerPage_header">
                <span className="registerPage_sign_violingo">
                    violingo
                </span>
                <span className="registerPage_sign_language">
                    мова сайту: УКРАЇНСЬКА <MdKeyboardArrowDown size={'30px'}/>
                </span>
            </header>
            <div className="registerPage_body">
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
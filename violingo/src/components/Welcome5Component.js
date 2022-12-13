import { BiArrowBack } from 'react-icons/bi';

import stampFacebook from '../icons/stamp-facebook.svg';
import google from '../icons/google.svg';

const Welcome5Component = ({
    setNewComponent3, setNewComponent4,
    }) => {
    const buttonBack = () => {
        setNewComponent3(true);
    }
    return (
        <div>
            <div className="welcomePage_main_div_top">
                <button 
                    className="welcomePage_button_cross" 
                    onClick={buttonBack}
                    >
                    <BiArrowBack color='#d0cccc' size={'22px'}/>
                </button> 
                <div className="welcomePage_div_around_cross">
                    <div className="welcomePage_div_one_download" style={{width: '80%'}}></div>
                </div>
            </div>
            <div className="welcomePage_div_body_welcome5Component">
                <h1 style={{color: '#4b4b4b', margin: '0 24px 24px'}}>
                    Потрібна допомога з дотриманням щоденної цілі?
                </h1>
                <div className="welcomePage_div_main_buttons_welcome5Component">
                    <button className="welcomePage_button_facebook_welcome5Component">
                        <img src={stampFacebook} alt="registration by facebook"/>
                        <span className="welcomePage_span_button_sign_welcome5Component">
                            Продовжити через Facebook
                        </span>
                    </button>
                    <button className="welcomePage_button_google_welcome5Component">
                        <img src={google} alt="registration by google"/>
                        <span className="welcomePage_span_button_sign_welcome5Component">
                            Продовжити через Google
                        </span>
                    </button>
                    <button 
                        className="welcomePage_button_not_now_welcome5Component"
                        onClick={() => setNewComponent4(false)}
                        >
                        <span>Не зараз</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome5Component;

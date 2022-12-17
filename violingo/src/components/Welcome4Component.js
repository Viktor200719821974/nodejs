import { BiArrowBack } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import sovaAllow from '../icons/sova-allow.svg';
import arrowUp from '../icons/arrow-up.svg';

const Welcome4Component = ({
    setNewComponent2, buttonNoActive, setNewComponent3,
    }) => {
    const buttonBack = () => {
        setNewComponent2(true);
    }
    const buttonNextPage = () => {
        setNewComponent3(false);
    }
    return (
        <div>
            <div className="welcomePage_main_div_top display_alien_justify">
                <button 
                    className="welcomePage_button_cross" 
                    onClick={buttonBack}
                    >
                    <BiArrowBack color='#d0cccc' size={'22px'}/>
                </button> 
                <div className="welcomePage_div_around_cross">
                    <div className="welcomePage_div_one_download" style={{width: '60%'}}></div>
                </div>
            </div>
            <div className="welcomePage_div_body_welcome4Component">
                <h1 style={{color: '#4b4b4b', margin: '40px 0 0'}}>
                    Отримуйте нагадування та досягайте своїх навчальних цілей
                </h1>
                <div className="welcomePage_div_image_welcome4Component">
                    <div className="welcomePage_div_image_and_message_welcome4Component">
                        <div className="welcomePage_div_main_image_block_welcome4Component">
                          <img 
                            src={sovaAllow} 
                            alt="stamp sova allow" 
                            className="welcomePage_div_image_block_welcome4Component"
                            style={{width: '246px'}}
                            />  
                        </div>
                        <div className="welcomePage_div_image_message_welcome4Component">
                            Якщо ви раптом забудете повчитися!
                            <div 
                            className="welcomePage_div_image_message_parallelogram_welcome4Component"
                            >
                            </div>
                        </div>
                    </div>
                    <div className="welcomePage_div_main_sign_and_buttons_welcome4Component">
                        <div className="welcomePage_div_help_sign_and_buttons_welcome4Component">
                            <button 
                                className="welcomePage_button_cross_welcome4Component"
                                onClick={buttonNextPage}
                                >
                                <ImCross color='#4b4b4b' style={{width: '12px', height: '15px'}}/>
                            </button> 
                            <div style={{marginBottom: '10px'}}>
                                http://localhost:3000 потрібен дозвіл
                            </div>
                            <div className="welcomePage_div_stamp_bell_and_sign_welcome4Component">
                                <FaBell style={{width: '19px', height: '20px', marginRight: '15px'}}/>
                                <div>
                                    Показувати сповіщення
                                </div>  
                            </div>
                            <div className="welcomePage_div_buttons_welcome4Component">
                                <button 
                                    className="welcomePage_button_blocked_welcome4Component"
                                    onClick={buttonNextPage}
                                    >
                                    ЗАБЛОКУВАТИ
                                </button>
                                <button 
                                    className="welcomePage_button_allow_welcome4Component"
                                    onClick={buttonNextPage}
                                    >
                                    ДОЗВОЛИТИ
                                </button>
                            </div>
                            
                        </div>                        
                    </div>
                    <div 
                        className="welcomePage_div_image_arrowUp_welcome4Component"
                        onClick={buttonNextPage}
                        >
                        <img src={arrowUp} alt="stamp arrow up"/>
                    </div>
                </div>
                <button 
                    className={
                        !buttonNoActive ? "welcomePage_div_button_next"
                         : "welcomePage_div_button_next_noActive"
                    }
                    onClick={buttonNextPage}
                    style={{width: '602px'}}
                    >
                        Продовжити
                </button>
            </div>
        </div>
    );
};

export default Welcome4Component;
import { ImCheckmark } from 'react-icons/im';

import flagPositive from '../../icons/flag_positive.svg';

const FooterMenuPositiveAnswerComponent = ({setModalShow,}) => {
    return (
        <div className="lessonPage_main_div_down_block_footerMenuPositiveAnswerComponent">
            <div className="lessonPage_main_div_left_signs_footerMenuPositiveAnswerComponent">
                <div className="lessonPage_div_circle_footerMenuPositiveAnswerComponent display_alien_justify">
                    <ImCheckmark color='#58a700' size={'40px'}/>
                </div>
                <div>
                    {/* <div> */}
                        <h2 className="lessonPage_h2_footerMenuPositiveAnswerComponent">
                            Гарна робота!
                        </h2>
                    {/* </div> */}
                    {/* <div className="lessonPage_div_answer">{answer}</div> */}
                    <div className="lessonPage_main_div_say_about_footerMenuPositiveAnswerComponent">
                        <img 
                            src={flagPositive} 
                            alt="more about wrong"
                            className="lessonPage_image_flag_more_footerMenuPositiveAnswerComponent"
                        /> 
                        <span 
                            className="lessonPage_span_say_about_footerMenuPositiveAnswerComponent"
                            onClick={() => setModalShow(true)}
                            >
                            Повідомити
                        </span>
                    </div>
                </div>  
            </div>
            <button 
                className="lessonPage_button_next_right_footerMenuPositiveAnswerComponent display_alien_justify"
                >
                <span 
                    className="lessonPage_span_button_next_footerMenuPositiveAnswerComponent"
                    >
                    Продовжити
                </span>
            </button>
        </div>
    );
};

export default FooterMenuPositiveAnswerComponent;
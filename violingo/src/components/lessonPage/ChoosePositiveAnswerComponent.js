import { AiFillSound } from 'react-icons/ai';

import { IMAGES_CHOOSE_IMAGE_COMPONENT } from '../../constants';

const ChoosePositiveAnswerComponent = ({src, alt, question, }) => {
    return (
        <div className="lessonPage_main_div_choosePositiveAnswerComponent">
            <span className="lessonPage_span_title_choosePositiveAnswerComponent">
                Напишіть українською
            </span>
            <div className="lessonPage_main_div_image_choosePositiveAnswerComponent">
                <img 
                    src={IMAGES_CHOOSE_IMAGE_COMPONENT + src} 
                    alt={alt}
                    className="lessonPage_image_choosePositiveAnswerComponent"
                />
                <div className="lessonPage_div_message_choosePositiveAnswerComponent display_alien_justify">                                
                    <span className="lessonPage_span_message_choosePositiveAnswerComponent display_alien_justify">
                        <div className="lessonPage_div_triangle_choosePositiveAnswerComponent"></div>
                        <AiFillSound color={'rgb(28, 176, 246)'} style={{width: '29px', height: '22px'}}/>
                        <span className="lessonPage_span_question_choosePositiveAnswerComponent">
                            {question}
                        </span>
                    </span> 
                </div>
            </div>
        </div>
    );
};

export default ChoosePositiveAnswerComponent;
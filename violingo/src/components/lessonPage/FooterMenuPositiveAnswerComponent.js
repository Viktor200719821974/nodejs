import { ImCheckmark } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';

import flagPositive from '../../icons/flag_positive.svg';
import { arrayWrongAnswer } from '../../redux/actions';

const FooterMenuPositiveAnswerComponent = ({
    setModalShow, workMistakes, footerMenuNext, count, setCount,
}) => {
    const { arrayWrongs } = useSelector(state => state.arrayWrongAnswerReducer);
    const dispatch = useDispatch();

    const continueExercise = () => {
        if (workMistakes && arrayWrongs.length > 0) {
            const id = arrayWrongs.filter((c, index) => index === 0).map(c => c.id)[0];
            const filter = arrayWrongs.filter(c => c.id !== id);
            dispatch(arrayWrongAnswer(filter));
        }
        footerMenuNext();
        setCount(count + 1);
    }
    return (
        <div className="lessonPage_main_div_down_block_footerMenuPositiveAnswerComponent">
            <div className="lessonPage_main_div_left_signs_footerMenuPositiveAnswerComponent">
                <div className="lessonPage_div_circle_footerMenuPositiveAnswerComponent display_alien_justify">
                    <ImCheckmark color='#58a700' size={'40px'}/>
                </div>
                <div>
                    <h2 className="lessonPage_h2_footerMenuPositiveAnswerComponent">
                        Гарна робота!
                    </h2>
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
            <div style={{position: 'relative'}}>
                <button 
                    className="lessonPage_button_next_right_footerMenuPositiveAnswerComponent display_alien_justify"
                    onClick={continueExercise}
                    >
                    <span 
                        className="lessonPage_span_button_next_footerMenuPositiveAnswerComponent"
                        >
                        Продовжити
                    </span>
                </button> 
            </div>          
        </div>
    );
};

export default FooterMenuPositiveAnswerComponent;
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';

import flagMore from '../../icons/flag_more.svg';
import { 
    arrayChoosePositiveAnswerEmpty, arrayIdChoosePositiveAnswerEmpty, arrayWrongAnswer,
} from '../../redux/actions';

const FooterMenuWrongAnswerComponent = ({
    answer, setModalShow, setExerciseNumber, exerciseNumber, setChooseWrong, setPositiveAnswer, 
    setWrong, setIdElement, setChangedElement, setName, workMistakes,
}) => {
    const { arrayWrongs } = useSelector(state => state.arrayWrongAnswerReducer);
    const dispatch = useDispatch();

    const continueExercise = () => {
        if (workMistakes && arrayWrongs.length > 0) {
            const element = arrayWrongs.splice(0, 1)[0];
            const toIndex = arrayWrongs.length;
            arrayWrongs.splice(toIndex, 0, element);
            dispatch(arrayWrongAnswer(arrayWrongs));
        }
        setExerciseNumber(exerciseNumber + 1);
        setChooseWrong(true);
        setPositiveAnswer(false);
        setWrong(false);
        setName('');
        setIdElement(0);
        setChangedElement(false);  
        dispatch(arrayChoosePositiveAnswerEmpty());
        dispatch(arrayIdChoosePositiveAnswerEmpty());   
    }
    return (
        <div className="lessonPage_main_div_down_block_wrong">
            <div className="lessonPage_main_div_left_signs_wrong">
                <div className="lessonPage_div_circle_wrong display_alien_justify">
                    <ImCross color='#ea2b2b' size={'30px'}/>
                </div>
                <div>
                    <div>
                        <h2 className="lessonPage_h2_wrong">
                            Правильна відповідь:
                        </h2>
                    </div>
                    <div className="lessonPage_div_answer">{answer}</div>
                    <div className="lessonPage_main_div_say_about_wrong">
                        <img 
                            src={flagMore} 
                            alt="more about wrong"
                            className="lessonPage_image_flag_more_wrong"
                        /> 
                        <span 
                            className="lessonPage_span_say_about_wrong"
                            onClick={() => setModalShow(true)}
                            >
                            Повідомити
                        </span>
                    </div>
                </div>  
            </div>
            <div className="lessonPage_main_div_button_right_wrong">
                <button 
                    className="lessonPage_button_next_right_wrong display_alien_justify"
                    onClick={continueExercise}
                    >
                    <span 
                        className="lessonPage_span_button_next_wrong"
                        >
                        Продовжити
                    </span>
                </button>
            </div>               
        </div>
    );
};

export default FooterMenuWrongAnswerComponent;
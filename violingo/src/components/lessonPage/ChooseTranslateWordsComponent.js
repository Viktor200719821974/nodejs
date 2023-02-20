import { useDispatch, useSelector } from 'react-redux';

import { arrayChoosePositiveAnswer } from '../../redux/actions';

const ChooseTranslateWordsComponent = ({ 
    task, answerOptions, idElement, setIdElement, answerIdChose, setAnswerIdChose, setAnswerChose, 
    changeClassName, setName, setTaskChose, taskChoseBool, answerChose, changeClassNameNumber,
    changeClassNameName,
}) => {
    const { array } = useSelector(state => state.arrayChoosePositiveAnswerReducer);
    const dispatch = useDispatch();
    console.log(array); 
    const click = (name) => {
        console.log(name);
        if (name !== undefined) {
        //    array.push(name, answerChose);
        //    dispatch(arrayChoosePositiveAnswer(array));  
        } 
    }
    
    return (
        <div className="lessonPage_main_div_chooseTranslateWordsComponent">
            <span className="lessonPage_span_title_chooseTranslateWordsComponent">
                Підберіть переклад
            </span>
            <div className="lessonPage_main_div_task_answer_chooseTranslateWordsComponent">
               <div className="lessonPage_div_task_chooseTranslateWordsComponent">
                    {
                        task.map((c, index) =>
                            <span 
                                key={c.id}
                                className={
                                    (c.id !== idElement)
                                        ? "lessonPage_main_span_chooseTranslateWordsComponent"
                                        : `${changeClassName}`
                                    }
                                onClick={() => {
                                    setIdElement(c.id);
                                    setTaskChose(c.answer);
                                    click(c.name);
                                }}
                                >
                                    <span 
                                        className={
                                            (c.id !== idElement) 
                                                ? "lessonPage_span_number_chooseTranslateWordsComponent"
                                                : `${changeClassNameNumber}`
                                            }
                                        >
                                        {index + 1}
                                    </span>
                                    <span 
                                        className={
                                            (c.id !== idElement) 
                                                ? "lessonPage_span_name_chooseTranslateWordsComponent"
                                                : `${changeClassNameName}`
                                            }
                                        >
                                        {c.name}
                                    </span>
                            </span>
                        )
                    }
                </div>
                <div className="lessonPage_div_task_chooseTranslateWordsComponent">
                    {
                        answerOptions.map((c, index) => 
                            <span 
                                key={c.id}
                                className={
                                    (c.id !== answerIdChose)
                                        ? "lessonPage_main_span_chooseTranslateWordsComponent"
                                        : `${changeClassName}`
                                    }
                                onClick={() => {
                                    setAnswerIdChose(c.id);
                                    setAnswerChose(c.name);
                                    click();
                                }}
                                >
                                    <span 
                                        className={
                                            (c.id !== answerIdChose) 
                                                ? "lessonPage_span_number_chooseTranslateWordsComponent"
                                                : `${changeClassNameNumber}`
                                            }
                                        >
                                            {index + task.length + 1}
                                    </span>
                                    <span 
                                        className={
                                            (c.id !== answerIdChose) 
                                                ? "lessonPage_span_name_chooseTranslateWordsComponent"
                                                : `${changeClassNameName}`
                                            }
                                        >
                                            {c.name}
                                    </span>
                            </span>
                        )
                    }
                </div> 
            </div>
        </div>
    );
};

export default ChooseTranslateWordsComponent;
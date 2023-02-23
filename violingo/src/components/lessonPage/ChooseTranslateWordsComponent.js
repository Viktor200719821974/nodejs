import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ChooseTranslateWordsComponent = ({ 
    task, answerOptions, answerIdChose, setAnswerIdChose, setAnswerChose, changeClassName, 
    setTaskChose, changeClassNameNumber,changeClassNameName, questionIdChose, 
    setQuestionIdChose, setQuestionNameChose, setPositiveAnswer,
}) => {
    const { array } = useSelector(state => state.arrayChoosePositiveAnswerReducer);
    
    const filterTask = (array1, array2) => {
        array2.forEach(element => {
            array1 = array1.filter(item => item.name !== element);
        });
        return array1;
    };
    const firstArray = filterTask(task, array);
    const secondArray = filterTask(answerOptions, array);
    
    useEffect(() => {
        if (firstArray.length === 0 && secondArray.length === 0) {
            setPositiveAnswer(true);
        }
        // eslint-disable-next-line
    }, [firstArray, secondArray]);
    return (
        <div className="lessonPage_main_div_chooseTranslateWordsComponent">
            <span className="lessonPage_span_title_chooseTranslateWordsComponent">
                Підберіть переклад
            </span>
            <div className="lessonPage_main_div_task_answer_chooseTranslateWordsComponent">
               <div className="lessonPage_div_task_chooseTranslateWordsComponent">
                    {
                        firstArray.map((c, index) =>
                            <span 
                                key={c.id}
                                className={
                                    (c.id !== questionIdChose)
                                        ? "lessonPage_main_span_chooseTranslateWordsComponent"
                                        : `${changeClassName}`
                                    }
                                onClick={() => {
                                    setTaskChose(c.answer);
                                    setQuestionNameChose(c.name);
                                    setQuestionIdChose(c.id);
                                }}
                                >
                                    <span 
                                        className={
                                            (c.id !== questionIdChose) 
                                                ? "lessonPage_span_number_chooseTranslateWordsComponent"
                                                : `${changeClassNameNumber}`
                                            }
                                        >
                                        {index + 1}
                                    </span>
                                    <span 
                                        className={
                                            (c.id !== questionIdChose) 
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
                        secondArray.map((c, index) => 
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
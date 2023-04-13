import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ChooseTranslateWordsComponent = ({ 
    task, answer, answerIdChose, setAnswerIdChose, setAnswerChose, changeClassName, 
    setTaskChose, changeClassNameNumber,changeClassNameName, questionIdChose, titleTask,
    setQuestionIdChose, setQuestionNameChose, setPositiveAnswer, taskArray, answerArray,
    widthValue, setWidthValue, changeWidth, setChangeWidth,
}) => {
    const { array } = useSelector(state => state.arrayChoosePositiveAnswerReducer);
    
    const filterTask = (array1, array2) => {
        array2.forEach(element => {
            array1 = array1.filter(item => item.name !== element);
        });
        return array1;
    };
    const firstArray = filterTask(task, array);
    const secondArray = filterTask(answer, array);

    useEffect(() => {
        const keyDownHandlerTranslate = (e) => { 
            if (e.key > 0 && e.key <= taskArray.length) {
                setQuestionIdChose(Number(e.key));
                setTaskChose(taskArray.filter(c => c.id === Number(e.key))
                    .map(c => c.answer)[0]); 
                setQuestionNameChose(taskArray.filter(c => c.id === Number(e.key))
                    .map(c => c.name)[0]); 
            }
            if (e.key > taskArray.length && e.key <= taskArray.length + answerArray.length){
                setAnswerIdChose(Number(e.key) - taskArray.length);
                setAnswerChose(answerArray
                    .filter(c => c.id === Number(e.key) - taskArray.length)
                    .map(c => c.name)[0]);
            }
        }
        if (firstArray.length === 0 && secondArray.length === 0) {
            setPositiveAnswer(true);
            if(changeWidth) {
               setWidthValue(widthValue + 6.67); 
               setChangeWidth(false);
            }  
        }
        document.addEventListener('keydown',  keyDownHandlerTranslate);
        return function cleanup() {
            document.removeEventListener('keydown', keyDownHandlerTranslate);
          }
        // eslint-disable-next-line
    }, [firstArray, secondArray, widthValue, changeWidth]);
    return (
        <div className="lessonPage_main_div_chooseTranslateWordsComponent">
            <span className="lessonPage_span_title_chooseTranslateWordsComponent">
                {titleTask}
            </span>
            <div className="lessonPage_main_div_task_answer_chooseTranslateWordsComponent">
               <div className="lessonPage_div_task_chooseTranslateWordsComponent">
                    {
                        firstArray.map((c) =>
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
                                        {c.id}
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
                        secondArray.map((c) => 
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
                                            {c.id + task.length}
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
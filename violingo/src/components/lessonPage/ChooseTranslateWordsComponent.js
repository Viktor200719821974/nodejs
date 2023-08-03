import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { createLookLessonAnswers } from '../../http/lookLessonAnswersApi';

const ChooseTranslateWordsComponent = ({ 
    task, answerIdChose, setAnswerIdChose, setAnswerChose, changeClassName, 
    setTaskChose, changeClassNameNumber,changeClassNameName, questionIdChose, titleTask,
    setQuestionIdChose, setQuestionNameChose, setPositiveAnswer, arrayLessonPageChooseImage,
    widthValue, setWidthValue, changeWidth, setChangeWidth, arrayAnswers,
}) => {
    const { array } = useSelector(state => state.arrayChoosePositiveAnswerReducer);
    const { user } = useSelector(state => state.userReducer);
    
    const answers = task && task.map(c => c.answer).join();
    const questions = task && task.map(c => c.question).join();
    
    const filterTask = (array1, array2) => {
        array2.forEach(element => {
            array1 = array1.filter(item => item !== element);
        });
        return array1;
    };
    const firstArray = filterTask(task && task.map(c => c.question), array);
    const secondArray = filterTask(arrayAnswers, array);

    useEffect(() => {
        const keyDownHandlerTranslate = (e) => { 
            if (e.key > 0 && e.key <= (task && task.length)) {
                setQuestionIdChose(Number(e.key));
                setTaskChose(task.filter((c, index) => index + 1 === Number(e.key))
                    .map(c => c.answer)[0]); 
                setQuestionNameChose(task.filter((c, index) => index + 1 === Number(e.key))
                    .map(c => c.question)[0]); 
            }
            if (e.key > (arrayAnswers && arrayAnswers.length) && e.key <= arrayAnswers.length * 2){
                setAnswerIdChose(Number(e.key) - arrayAnswers.length);
                setAnswerChose(arrayAnswers
                    .filter((c, index) => index + 1 === Number(e.key) - arrayAnswers.length)
                    .map(c => c)[0]);
            }
            if (Number(e.key) === 0) {
                setAnswerIdChose(arrayAnswers.length);
                setAnswerChose(arrayAnswers
                    .filter((c, index) => index === arrayAnswers.length - 1)
                    .map(c => c)[0]);
            }
        }
        if ((firstArray && secondArray) && (firstArray.length === 0 && secondArray.length === 0)) {
            setPositiveAnswer(true);
            if(changeWidth) {
               setWidthValue(widthValue + (100 / arrayLessonPageChooseImage.length)); 
               setChangeWidth(false);
               try {
                    const formData = new FormData();
                    formData.append('answerUser', answers);
                    formData.append('answerTrue', answers);
                    formData.append('wrong', 'true');
                    formData.append('lessonId', user.lesson_id);
                    formData.append('titleTask', titleTask);
                    formData.append('question', questions);
                    formData.append('chooseTranslateWords', 'true');
                    createLookLessonAnswers(formData).then(data => {
                        if (data.status === 200) {
                            console.log(data.data);
                        }
                    });
                } catch(e) {
                    console.log(e.message);
                } 
            }  
        }
        document.addEventListener('keydown',  keyDownHandlerTranslate);
        return function cleanup() {
            document.removeEventListener('keydown', keyDownHandlerTranslate);
          }
        // eslint-disable-next-line
    }, [ widthValue, changeWidth, task, firstArray, secondArray]);
    return (
        <div className="lessonPage_main_div_chooseTranslateWordsComponent">
            <span className="lessonPage_span_title_chooseTranslateWordsComponent">
                {titleTask}
            </span>
            <div className="lessonPage_main_div_task_answer_chooseTranslateWordsComponent">
               <div className="lessonPage_div_task_chooseTranslateWordsComponent">
                    {
                        task && task.map((c, index) =>
                            <div key={c.id}>
                                {
                                    c.question !== array.filter(a => a === c.question)[0] 
                                        ?
                                            <span 
                                                className={
                                                    (index + 1 !== questionIdChose)
                                                        ? "lessonPage_main_span_chooseTranslateWordsComponent"
                                                        : `${changeClassName}`
                                                    }
                                                onClick={() => {
                                                    setTaskChose(c.answer);
                                                    setQuestionNameChose(c.question);
                                                    setQuestionIdChose(index + 1);
                                                }}
                                            >
                                                <span 
                                                    className={
                                                        (index + 1 !== questionIdChose) 
                                                            ? "lessonPage_span_number_chooseTranslateWordsComponent"
                                                            : `${changeClassNameNumber}`
                                                        }
                                                    >
                                                    {index + 1}
                                                </span>
                                                <span 
                                                    className={
                                                        (index + 1 !== questionIdChose) 
                                                            ? "lessonPage_span_name_chooseTranslateWordsComponent"
                                                            : `${changeClassNameName}`
                                                        }
                                                    >
                                                    {c.question}
                                                </span>
                                            </span>
                                        :
                                            <span 
                                                className={"lessonPage_main_span_noActive_chooseTranslateWordsComponent"}
                                            >
                                                <span 
                                                    className={"lessonPage_span_number_noActive_chooseTranslateWordsComponent"}
                                                    >
                                                    {index + 1}
                                                </span>
                                                <span 
                                                    className={"lessonPage_span_name_noActive_chooseTranslateWordsComponent"}
                                                    >
                                                    {c.question}
                                                </span>
                                            </span>
                                }
                            </div>
                        )
                    }
                </div>
                <div className="lessonPage_div_task_chooseTranslateWordsComponent">
                    {
                        arrayAnswers && arrayAnswers.map((c, index) => 
                            <div key={index}>
                                {
                                    c !== array.filter(a => a === c)[0]
                                        ?
                                            <span 
                                                className={
                                                    (index + 1 !== answerIdChose)
                                                        ? "lessonPage_main_span_chooseTranslateWordsComponent"
                                                        : `${changeClassName}`
                                                    }
                                                onClick={() => {
                                                    setAnswerIdChose(index + 1);
                                                    setAnswerChose(c);
                                                }}
                                            >
                                                <span 
                                                    className={
                                                        (index + 1 !== answerIdChose) 
                                                            ? "lessonPage_span_number_chooseTranslateWordsComponent"
                                                            : `${changeClassNameNumber}`
                                                        }
                                                    >
                                                        {index < arrayAnswers.length - 1 ? index + 1 + arrayAnswers.length : 0}
                                                </span>
                                                <span 
                                                    className={
                                                        (index + 1 !== answerIdChose) 
                                                            ? "lessonPage_span_name_chooseTranslateWordsComponent"
                                                            : `${changeClassNameName}`
                                                        }
                                                    >
                                                        {c}
                                                </span>
                                            </span>
                                        :
                                            <span 
                                                className={"lessonPage_main_span_noActive_chooseTranslateWordsComponent"}
                                            >
                                                <span 
                                                    className={"lessonPage_span_number_noActive_chooseTranslateWordsComponent"}
                                                    >
                                                        {index < arrayAnswers.length - 1 ? index + 1 + arrayAnswers.length : 0}
                                                </span>
                                                <span 
                                                    className={"lessonPage_span_name_noActive_chooseTranslateWordsComponent"}
                                                    >
                                                        {c}
                                                </span>
                                            </span>
                                }
                            </div>
                        )
                    }
                </div> 
            </div>
        </div>
    );
};

export default ChooseTranslateWordsComponent;
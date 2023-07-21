import { useEffect, useState } from 'react';

import ChooseImageComponent from './ChooseImageComponent';
import ChooseAnswerComponent from './ChooseAnswerComponent';
import ChooseMissingWordComponent from './ChooseMissingWordComponent';
import ChoosePositiveAnswerComponent from './ChoosePositiveAnswerComponent';
import ChooseTranslateWordsComponent from './ChooseTranslateWordsComponent';
import wrongAnswer from '../../icons/wrongAnswer.svg';
import { getTaskById, getTaskByIdForChooseTranslateWords, getTaskByArrayId } from '../../http/tasksApi';

const LessonPageBodyComponent = ({
    tasks, answerIdChose, setAnswerIdChose, setAnswerChose, changeClassName, 
    setTaskChose, changeClassNameNumber,changeClassNameName, questionIdChose, titleTask,
    setQuestionIdChose, setQuestionNameChose, setPositiveAnswer,
    widthValue, setWidthValue, changeWidth, setChangeWidth, chooseImage, chooseMissingWord,
    chooseTranslateWords, choosePositiveAnswer, chooseAnswer, question, setIdElement, idElement,
    setName, chooseWrong, name, wrong, showBlockTranslate, setShowBlockTranslate,
    arrayChange, nameTranslate, setNameTranslate, moreInfo, setArrayChange, setMoreInfo,
    workMistakes, image,
}) => {
    const [task, setTask] = useState(null);
    const [arrayAnswers, setArrayAnswers] = useState(null);
    useEffect(() => {
        let action = true;
        if (action) {
            const fetchTask = async() => {
                try {
                    if (!chooseTranslateWords && !chooseImage) {
                        await getTaskById(tasks[0]).then(data => {
                            if (data.status === 200) {
                                setTask(data.data.optionsAnswer);
                            }
                        });
                    }
                    if (chooseTranslateWords) {
                        await getTaskByIdForChooseTranslateWords(tasks[0]).then(data => {
                            if (data.status === 200) {
                                setTask(data.data.arrayTasks);
                                setArrayAnswers(data.data.arrayAnswers);
                            }
                        });
                    }
                    if (chooseImage) {
                        const tasksIdString = tasks.join(' ');
                        await getTaskByArrayId(tasksIdString).then(data => {
                            if (data.status === 200) {
                                setTask(data.data);
                            }
                        });
                    }
                } catch (e) {
                    console.log(e.message);
                }
            }
            fetchTask();
        }
        return (() => {
            action = false;
        });
    }, [tasks, chooseTranslateWords, chooseImage, ]);
    return (
        <div className="lessonPage_main_div_lessonPageBodyComponent">
            {
                workMistakes && 
                    <div className="lessonPage_main_div_wrong_answer">
                        <img 
                            src={wrongAnswer} 
                            alt='wrong answer'
                            className="lessonPage_image_wrong_answer"
                        />
                        <span className="lessonPage_span_wrong_answer_title">
                            Неправильно минулого разу
                        </span>
                    </div>
            }
            {
                chooseImage && 
                    <ChooseImageComponent
                        question={question}
                        task={task}
                        setIdElement={setIdElement}
                        idElement={idElement}
                        setName={setName}
                        chooseWrong={chooseWrong}
                        titleTask={titleTask}
                    />
            }
            {
                choosePositiveAnswer && 
                    <ChoosePositiveAnswerComponent
                        question={question}
                        task={task}
                        setIdElement={setIdElement}
                        idElement={idElement}
                        setName={setName}
                        name={name}
                        chooseWrong={chooseWrong}
                        wrong={wrong}
                        src={image.src}
                        alt={image.alt}
                        showBlockTranslate={showBlockTranslate}
                        setShowBlockTranslate={setShowBlockTranslate}
                        arrayChange={arrayChange}
                        setArrayChange={setArrayChange}
                        nameTranslate={nameTranslate}
                        setNameTranslate={setNameTranslate}
                        moreInfo={moreInfo}
                        setMoreInfo={setMoreInfo}
                        titleTask={titleTask}
                    />
                }
                {
                    chooseAnswer &&
                        <ChooseAnswerComponent
                            question={question}
                            task={task}
                            setIdElement={setIdElement}
                            idElement={idElement}
                            setName={setName}
                            chooseWrong={chooseWrong}
                            titleTask={titleTask}
                        />
                }
                {
                    chooseMissingWord && 
                        <ChooseMissingWordComponent
                            question={question}
                            task={task}
                            idElement={idElement}
                            setIdElement={setIdElement}
                            setName={setName}
                            titleTask={titleTask}
                            chooseWrong={chooseWrong}
                        />
                }
                {
                    chooseTranslateWords && 
                        <ChooseTranslateWordsComponent
                            task={task}
                            setAnswerChose={setAnswerChose}
                            setAnswerIdChose={setAnswerIdChose}
                            answerIdChose={answerIdChose}
                            changeClassName={changeClassName}
                            setTaskChose={setTaskChose}
                            changeClassNameNumber={changeClassNameNumber}
                            changeClassNameName={changeClassNameName}
                            questionIdChose={questionIdChose}
                            setQuestionIdChose={setQuestionIdChose}
                            setQuestionNameChose={setQuestionNameChose}
                            setPositiveAnswer={setPositiveAnswer}
                            titleTask={titleTask}
                            widthValue={widthValue}
                            setWidthValue={setWidthValue}
                            changeWidth={changeWidth}
                            setChangeWidth={setChangeWidth}
                            arrayAnswers={arrayAnswers}
                        />
                }
        </div>
    );
};

export default LessonPageBodyComponent;
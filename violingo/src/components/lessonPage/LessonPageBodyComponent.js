import ChooseImageComponent from './ChooseImageComponent';
import ChooseAnswerComponent from './ChooseAnswerComponent';
import ChooseMissingWordComponent from './ChooseMissingWordComponent';
import ChoosePositiveAnswerComponent from './ChoosePositiveAnswerComponent';
import ChooseTranslateWordsComponent from './ChooseTranslateWordsComponent';

const LessonPageBodyComponent = ({
    task, answer, answerIdChose, setAnswerIdChose, setAnswerChose, changeClassName, 
    setTaskChose, changeClassNameNumber,changeClassNameName, questionIdChose, titleTask,
    setQuestionIdChose, setQuestionNameChose, setPositiveAnswer, taskArray, answerArray,
    widthValue, setWidthValue, changeWidth, setChangeWidth, chooseImage, chooseMissingWord,
    chooseTranslateWords, choosePositiveAnswer, chooseAnswer, question, setIdElement, idElement,
    setName, chooseWrong, name, wrong, src, alt, showBlockTranslate, setShowBlockTranslate,
    arrayChange, nameTranslate, setNameTranslate, moreInfo, setArrayChange, setMoreInfo,
}) => {
    return (
        <div>
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
                        src={src}
                        alt={alt}
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
                            answer={answer}
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
                            taskArray={taskArray}
                            answerArray={answerArray}
                            titleTask={titleTask}
                            widthValue={widthValue}
                            setWidthValue={setWidthValue}
                            changeWidth={changeWidth}
                            setChangeWidth={setChangeWidth}
                        />
                }
        </div>
    );
};

export default LessonPageBodyComponent;
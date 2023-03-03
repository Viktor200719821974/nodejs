import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross1 } from 'react-icons/rx';
// import { useNavigate } from 'react-router-dom';

import { arrayLessonPageChooseImage } from '../constants/arrays';
import SayAboutWrongModalComponent from '../components/lessonPage/SayAboutWrongModalComponent';
import FooterMenuFirstPositionComponent from '../components/lessonPage/FooterMenuFirstPositionComponent';
import FooterMenuWrongAnswerComponent from '../components/lessonPage/FooterMenuWrongAnswerComponent';
import FooterMenuPositiveAnswerComponent from '../components/lessonPage/FooterMenuPositiveAnswerComponent';
import { 
    arrayChoosePositiveAnswer, arrayWrongAnswer, arrayChoosePositiveAnswerEmpty, 
    arrayIdChoosePositiveAnswerEmpty,
 } from '../redux/actions';
// import { SUCCESS_EXERCISE } from '../constants';
import LessonPageBodyComponent from '../components/lessonPage/LessonPageBodyComponent';
import FinishTestComponent from '../components/lessonPage/FinishTestComponent';
import FooterMenuFinishTestComponent from '../components/lessonPage/FooterMenuFinishTestComponent';
import LookLessonModalComponent from '../components/lessonPage/LookLessonModalComponent';

const LessonPage = () => {
    const [idElement, setIdElement] = useState(0);
    const [changedElement, setChangedElement] = useState(false);
    const [name, setName] = useState('');
    const [wrong, setWrong] = useState(false);
    const [chooseWrong, setChooseWrong] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [chooseSendWrong, setChooseSendWrong] = useState(false);
    const [whichWrongs, setWhichWrongs] = useState([]);
    const [positiveAnswer, setPositiveAnswer] = useState(false);
    const [widthValue, setWidthValue] = useState(0);
    const [exerciseNumber, setExerciseNumber] = useState(0);
    const [showBlockTranslate, setShowBlockTranslate] = useState(false);
    const [arrayChange, setArrayChange] = useState([]);
    const [nameTranslate, setNameTranslate] = useState('');
    const [moreInfo, setMoreInfo] = useState(false);
    const [answerChose, setAnswerChose] = useState('');
    const [answerIdChose, setAnswerIdChose] = useState(0);
    const [questionIdChose, setQuestionIdChose] = useState(0);
    const [questionNameChose, setQuestionNameChose] = useState('');
    const [changeClassName, setChangeClassName] = useState('');
    const [trueAnswer, setTrueAnswer] = useState(false);
    const [taskChose, setTaskChose] = useState('');
    const [changeClassNameNumber, setChangeClassNameNumber] = useState('');
    const [changeClassNameName, setChangeClassNameName] = useState('');
    const [workMistakes, setWorkMistakes] = useState(false);
    const [numberSuborder, setNumberSuborder] = useState(false);
    const [changeWidth, setChangeWidth] = useState(true);
    const [count, setCount] = useState(1);
    const [backgroundValue, setBackgroundValue] = useState('#58cc02');
    const [finishTest, setFinishTest] = useState(false);
    const [modalFinishTest, setModalFinishTest] = useState(false);
    const [arrayDifferent, setArrayDifferent] = useState([]);
   
    // const navigate = useNavigate();
    const { array } = useSelector(state => state.arrayChoosePositiveAnswerReducer);
    const { arrayWrongs } = useSelector(state => state.arrayWrongAnswerReducer);
    const dispatch = useDispatch();
    
    const answer = arrayDifferent
        .filter((c, index) => index === exerciseNumber)
        .map(c => c.answer)[0]
    const taskArray = arrayLessonPageChooseImage.filter(c => c.chooseTranslateWords === true)
        .map(c => c.task)[0];
    const answerArray = arrayLessonPageChooseImage.filter(c => c.chooseTranslateWords === true)
        .map(c => c.answer)[0];

    const clickNext = () => {
        setWrong(true);
        setChooseWrong(false);
        arrayWrongs.push(arrayLessonPageChooseImage
            .filter((c, index) => index === exerciseNumber)[0]);
           dispatch(arrayWrongAnswer(arrayWrongs));
    }
    const click = () => {

    }
    const cleaner = () => {
        setTaskChose('');
        setAnswerChose('');
        setQuestionNameChose('');
        setQuestionIdChose(0);
        setAnswerIdChose(0);
    }
    const verify = () => {
        if (idElement > 0) {
            if (name === answer) {
                setWrong(false);
                setPositiveAnswer(true);
                setWidthValue(widthValue + 6.67);
                setChooseWrong(false);
                if (count >= 2) {
                    setNumberSuborder(true);
                } else {
                    setNumberSuborder(false);
                } 
                if (count >= 6) {
                    setBackgroundValue('#ffc800');
                } 
            } else {
                setWrong(true);
                setPositiveAnswer(false);
                setChooseWrong(false);
            }
        }       
    }
    const footerMenuNext = () => {
        !workMistakes && setExerciseNumber(exerciseNumber + 1);
        setChooseWrong(true);
        setPositiveAnswer(false);
        setWrong(false);
        setName('');
        setIdElement(0);
        setChangedElement(false); 
        setNumberSuborder(false); 
        setChangeWidth(true);
        dispatch(arrayChoosePositiveAnswerEmpty());
        dispatch(arrayIdChoosePositiveAnswerEmpty()); 
    }

    useEffect(() => {
        if (idElement > 0) {
            setChangedElement(true);
        }
        if (whichWrongs.length > 0) {
            setChooseSendWrong(true);
        } else {
            setChooseSendWrong(false);
        }
        if (exerciseNumber >= 15) {
            setExerciseNumber(0);
            setWorkMistakes(true);
        }
        if (taskChose === answerChose && taskChose !== '' && answerChose !== '') {
            array.push(questionNameChose, answerChose);
            // let unique = [...new Set(array)];
            dispatch(arrayChoosePositiveAnswer(array));
            setTrueAnswer(false);
            const timer = setTimeout(() => {
                cleaner();
            }, 100);
            if (trueAnswer) {
                clearTimeout(timer);
            }
        }
        if (taskChose !== answerChose && taskChose !== '' && answerChose !== '') {
            setTrueAnswer(true);
            setChangeClassName('lessonPage_main_span_wrong_answer_chooseTranslateWordsComponent');
            setChangeClassNameNumber('lessonPage_span_number_wrong_answer_chooseTranslateWordsComponent');
            setChangeClassNameName('lessonPage_span_name_wrong_answer_chooseTranslateWordsComponent');
            const timer = setTimeout(() => {  
                setTrueAnswer(false);
                cleaner();
            }, 500);
            if (!trueAnswer) {
               clearTimeout(timer); 
            }  
        }
        if (!trueAnswer) {
            setChangeClassName('lessonPage_main_span_select_chooseTranslateWordsComponent');
            setChangeClassNameNumber("lessonPage_span_number_select_chooseTranslateWordsComponent");
            setChangeClassNameName("lessonPage_span_name_select_chooseTranslateWordsComponent");
        }   
        if (wrong && !workMistakes) {
            arrayWrongs.push(arrayLessonPageChooseImage.filter((c, index) => index === exerciseNumber)[0]);
            dispatch(arrayWrongAnswer(arrayWrongs));
        } 
        if (workMistakes && arrayWrongs.length === 0) {
            setWorkMistakes(false);
            // navigate(SUCCESS_EXERCISE);
            setFinishTest(true);
        }
        if (!workMistakes) {
            setArrayDifferent(arrayLessonPageChooseImage);
        } else {
            setArrayDifferent(arrayWrongs);
        }
        // eslint-disable-next-line
    }, [
        idElement, changedElement, name, wrong, answer, chooseWrong, modalShow, chooseSendWrong,
        whichWrongs, positiveAnswer, widthValue, exerciseNumber, showBlockTranslate, arrayChange,
        nameTranslate, moreInfo, answerChose, answerIdChose, changeClassName, trueAnswer,
        taskChose, changeClassNameNumber, changeClassNameName, questionIdChose, changeWidth,
        questionNameChose, answerArray, taskArray, workMistakes, numberSuborder, count,
        backgroundValue, finishTest, modalFinishTest, arrayDifferent,
    ]);
    return (
        <div className="lessonPage_main_div">
            {
                !finishTest && 
                    <div className="lessonPage_main_div_top display_alien_justify">
                        <button 
                            className="lessonPage_button_cross" 
                            onClick={click}
                            >
                            <RxCross1 color='#d0cccc' size={'22px'}/>
                        </button> 
                        <div className="lessonPage_div_around_cross">
                            <div 
                                className="lessonPage_div_one_download"
                                style={{ width: `${widthValue}%`, background: `${backgroundValue}` }}
                                > 
                                { 
                                numberSuborder && 
                                    <span 
                                        className="lessonPage_span_value_positive_answer"
                                        style={{ color: `${backgroundValue}` }}
                                        >
                                        {count} підряд
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
            }
            <div>
                {
                    finishTest &&  
                        <FinishTestComponent/> 
                }
            </div>
            <SayAboutWrongModalComponent
                show={modalShow}
                onHide={() => setModalShow(false)}
                chooseSendWrong={chooseSendWrong}
                setWhichWrongs={setWhichWrongs}
                whichWrongs={whichWrongs}
                setChooseSendWrong={setChooseSendWrong}
            />
            <LookLessonModalComponent
                show={modalFinishTest}
                onHide={() => setModalFinishTest(false)}
            />
           { 
                !finishTest &&
                    <div>
                        <div className="lessonPage_main_div_body">
                            {
                                arrayDifferent.filter((a, index) => index === exerciseNumber)
                                    .map(c => 
                                        <LessonPageBodyComponent
                                            key={c.id}
                                            chooseImage={c.chooseImage}
                                            choosePositiveAnswer={c.choosePositiveAnswer}
                                            chooseAnswer={c.chooseAnswer}
                                            chooseMissingWord={c.chooseMissingWord}
                                            chooseTranslateWords={c.chooseTranslateWords}
                                            question={c.question}
                                            task={c.task}
                                            setIdElement={setIdElement}
                                            idElement={idElement}
                                            setName={setName}
                                            name={name}
                                            chooseWrong={chooseWrong}
                                            titleTask={c.titleTask}
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
                                            widthValue={widthValue}
                                            setWidthValue={setWidthValue}
                                            changeWidth={changeWidth}
                                            setChangeWidth={setChangeWidth}
                                            wrong={wrong}
                                            src={c.src}
                                            alt={c.alt}
                                            setShowBlockTranslate={setShowBlockTranslate}
                                            arrayChange={arrayChange}
                                            setArrayChange={setArrayChange}
                                            nameTranslate={nameTranslate}
                                            setNameTranslate={setNameTranslate}
                                            moreInfo={moreInfo}
                                            setMoreInfo={setMoreInfo}
                                            answer={answer}
                                            workMistakes={workMistakes}
                                        />
                                )
                            } 
                        </div>
                    </div>
            }
            {
                (!wrong && !positiveAnswer) && !finishTest &&                 
                    <FooterMenuFirstPositionComponent
                        clickNext={clickNext}
                        verify={verify}
                        changedElement={changedElement}
                    />                       
            }  
            {
                wrong && 
                    <FooterMenuWrongAnswerComponent
                        setModalShow={setModalShow}
                        answer={answer}
                        workMistakes={workMistakes}
                        footerMenuNext={footerMenuNext}
                        setCount={setCount}
                        setBackgroundValue={setBackgroundValue}
                    />
            }  
            {
                positiveAnswer && 
                    <FooterMenuPositiveAnswerComponent
                        setModalShow={setModalShow}
                        workMistakes={workMistakes}
                        footerMenuNext={footerMenuNext}
                        setCount={setCount}
                        count={count}
                    />
            }         
            {
                finishTest && 
                    <FooterMenuFinishTestComponent
                        setModalFinishTest={setModalFinishTest}
                    />
            }                  
        </div>
    );
};

export default LessonPage;
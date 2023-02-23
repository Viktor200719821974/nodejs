import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross1 } from 'react-icons/rx';

import ChooseImageComponent from '../components/lessonPage/ChooseImageComponent';
import { arrayLessonPageChooseImage } from '../constants/arrays';
import SayAboutWrongModalComponent from '../components/lessonPage/SayAboutWrongModalComponent';
import FooterMenuFirstPositionComponent from '../components/lessonPage/FooterMenuFirstPositionComponent';
import FooterMenuWrongAnswerComponent from '../components/lessonPage/FooterMenuWrongAnswerComponent';
import FooterMenuPositiveAnswerComponent from '../components/lessonPage/FooterMenuPositiveAnswerComponent';
import ChoosePositiveAnswerComponent from '../components/lessonPage/ChoosePositiveAnswerComponent';
import ChooseAnswerComponent from '../components/lessonPage/ChooseAnswerComponent';
import ChooseMissingWordComponent from '../components/lessonPage/ChooseMissingWordComponent';
import ChooseTranslateWordsComponent from '../components/lessonPage/ChooseTranslateWordsComponent';
import { arrayChoosePositiveAnswer } from '../redux/actions';

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
    const [exerciseNumber, setExerciseNumber] = useState(1);
    const [showBlockTranslate, setShowBlockTranslate] = useState(true);
    const [arrayChange, setArrayChange] = useState([]);
    const [nameTranslate, setNameTranslate] = useState('Boy');
    const [moreInfo, setMoreInfo] = useState(false);
    const [answerChose, setAnswerChose] = useState('');
    const [answerIdChose, setAnswerIdChose] = useState(0);
    const [questionIdChose, setQuestionIdChose] = useState(0);
    const [questionNameChose, setQuestionNameChose] = useState(0);
    const [changeClassName, setChangeClassName] = useState('');
    const [trueAnswer, setTrueAnswer] = useState(false);
    const [taskChose, setTaskChose] = useState('');
    const [changeClassNameNumber, setChangeClassNameNumber] = useState('');
    const [changeClassNameName, setChangeClassNameName] = useState('');
   
    const { array } = useSelector(state => state.arrayChoosePositiveAnswerReducer);
    const dispatch = useDispatch();
    const answer = arrayLessonPageChooseImage.filter(c => c.exercise === exerciseNumber)
        .map(c => c.answer)[0];
    const clickNext = () => {
        setWrong(true);
        setChooseWrong(false);
    }
    const click = () => {

    }
    const verify = () => {
        if (idElement > 0) {
            if (name === answer) {
                setWrong(false);
                setPositiveAnswer(true);
                setWidthValue(widthValue + 5);
                setChooseWrong(false);
            } else {
                setWrong(true);
                setPositiveAnswer(false);
                setChooseWrong(false);
            }
        }       
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
        if (taskChose === answerChose && taskChose !== '' && answerChose !== '') {
            array.push(questionNameChose, answerChose);
            let unique = [...new Set(array)];
            dispatch(arrayChoosePositiveAnswer(unique));
            setTrueAnswer(false);
            setTaskChose('');
            setAnswerChose('');
            setQuestionNameChose('');
            setQuestionIdChose(0);
            setAnswerIdChose(0);
        }
        if (taskChose !== answerChose && taskChose !== '' && answerChose !== '') {
            setTrueAnswer(true);
            setChangeClassName('lessonPage_main_span_wrong_answer_chooseTranslateWordsComponent');
            setChangeClassNameNumber('lessonPage_span_number_wrong_answer_chooseTranslateWordsComponent');
            setChangeClassNameName('lessonPage_span_name_wrong_answer_chooseTranslateWordsComponent');
            const timer = setTimeout(() => {  
                setTrueAnswer(false);
                setTaskChose('');
                setAnswerChose('');
                setQuestionNameChose('');
                setQuestionIdChose(0);
                setAnswerIdChose(0);
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
        const keyDownHandler = (e) => {
            if (e.key > 0 && e.key <= 3) {
                setIdElement(Number(e.key));
            } else {
                setIdElement(idElement);
            } 
        }
        document.addEventListener('keydown', keyDownHandler);
        // eslint-disable-next-line
    }, [
        idElement, changedElement, name, wrong, answer, chooseWrong, modalShow, chooseSendWrong,
        whichWrongs, positiveAnswer, widthValue, exerciseNumber, showBlockTranslate, arrayChange,
        nameTranslate, moreInfo, answerChose, answerIdChose, changeClassName, trueAnswer,
        taskChose, changeClassNameNumber, changeClassNameName, questionIdChose,
        questionNameChose,
    ]);
    
    return (
        <div>
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
                    style={{ width: `${widthValue}%` }}
                    >                  
                </div>
                </div>
            </div>
            <SayAboutWrongModalComponent
                show={modalShow}
                onHide={() => setModalShow(false)}
                chooseSendWrong={chooseSendWrong}
                setWhichWrongs={setWhichWrongs}
                whichWrongs={whichWrongs}
                setChooseSendWrong={setChooseSendWrong}
            />
            <div>
                {
                    arrayLessonPageChooseImage.filter(c => c.exercise === exerciseNumber)
                        .map(c => 
                            <div key={c.id} className="lessonPage_main_div_body">
                                {
                                    c.chooseImage && 
                                        <ChooseImageComponent
                                            question={c.question}
                                            task={c.task}
                                            setIdElement={setIdElement}
                                            idElement={idElement}
                                            setName={setName}
                                            chooseWrong={chooseWrong}
                                        />
                                }
                                {
                                    c.choosePositiveAnswer && 
                                        <ChoosePositiveAnswerComponent
                                            question={c.question}
                                            task={c.task}
                                            setIdElement={setIdElement}
                                            idElement={idElement}
                                            setName={setName}
                                            name={name}
                                            chooseWrong={chooseWrong}
                                            wrong={wrong}
                                            src={c.src}
                                            alt={c.alt}
                                            showBlockTranslate={showBlockTranslate}
                                            setShowBlockTranslate={setShowBlockTranslate}
                                            arrayChange={arrayChange}
                                            setArrayChange={setArrayChange}
                                            nameTranslate={nameTranslate}
                                            setNameTranslate={setNameTranslate}
                                            moreInfo={moreInfo}
                                            setMoreInfo={setMoreInfo}
                                            titleTask={c.titleTask}
                                        />
                                }
                                {
                                    c.chooseAnswer &&
                                        <ChooseAnswerComponent
                                            question={c.question}
                                            task={c.task}
                                            setIdElement={setIdElement}
                                            idElement={idElement}
                                            setName={setName}
                                            chooseWrong={chooseWrong}
                                        />
                                }
                                {
                                    c.chooseMissingWord && 
                                        <ChooseMissingWordComponent
                                        question={c.question}
                                        task={c.task}
                                        idElement={idElement}
                                        setIdElement={setIdElement}
                                        setName={setName}
                                    />
                                }
                                {
                                    c.chooseTranslateWords && 
                                        <ChooseTranslateWordsComponent
                                            task={c.task}
                                            answerOptions={c.answer}
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
                                        />
                                }
                            </div>
                        )
                } 
            </div>
            {
                (!wrong && !positiveAnswer) &&                    
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
                        exerciseNumber={exerciseNumber}
                        setExerciseNumber={setExerciseNumber}
                        setChooseWrong={setChooseWrong}
                        setPositiveAnswer={setPositiveAnswer}
                        setWrong={setWrong}
                        setIdElement={setIdElement}
                        setChangedElement={setChangedElement}
                    />
            }  
            {
                positiveAnswer && 
                    <FooterMenuPositiveAnswerComponent
                        setModalShow={setModalShow}
                        exerciseNumber={exerciseNumber}
                        setExerciseNumber={setExerciseNumber}
                        setChooseWrong={setChooseWrong}
                        setPositiveAnswer={setPositiveAnswer}
                        setWrong={setWrong}
                        setIdElement={setIdElement}
                        setChangedElement={setChangedElement}
                    />
            }                           
        </div>
    );
};

export default LessonPage;
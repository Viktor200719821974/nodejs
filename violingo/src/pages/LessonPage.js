import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

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
import { arrayChoosePositiveAnswer, arrayWrongAnswer } from '../redux/actions';
import { SUCCESS_EXERCISE } from '../constants';

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

    const navigate = useNavigate();
    const { array } = useSelector(state => state.arrayChoosePositiveAnswerReducer);
    const { arrayWrongs } = useSelector(state => state.arrayWrongAnswerReducer);
    const dispatch = useDispatch();
    const answer = !workMistakes ? arrayLessonPageChooseImage
        .filter(c => c.exercise === exerciseNumber)
        .map(c => c.answer)[0]
        : arrayWrongs.filter((c, index) => index === 0)
        .map(c => c.answer)[0];
    const taskArray = arrayLessonPageChooseImage.filter(c => c.chooseTranslateWords === true)
        .map(c => c.task)[0];
    const answerArray = arrayLessonPageChooseImage.filter(c => c.chooseTranslateWords === true)
        .map(c => c.answer)[0];

    const clickNext = () => {
        setWrong(true);
        setChooseWrong(false);
        arrayWrongs.push(arrayLessonPageChooseImage
            .filter(c => c.exercise === exerciseNumber)[0]);
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
                setWidthValue(widthValue + 7.2);
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
        if (exerciseNumber > 4) {
            setExerciseNumber(1);
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
            arrayWrongs.push(arrayLessonPageChooseImage.filter(c => c.exercise === exerciseNumber)[0]);
            dispatch(arrayWrongAnswer(arrayWrongs));
        } 
        if (workMistakes && arrayWrongs.length === 0) {
            setWorkMistakes(false);
            navigate(SUCCESS_EXERCISE);
        }
        // eslint-disable-next-line
    }, [
        idElement, changedElement, name, wrong, answer, chooseWrong, modalShow, chooseSendWrong,
        whichWrongs, positiveAnswer, widthValue, exerciseNumber, showBlockTranslate, arrayChange,
        nameTranslate, moreInfo, answerChose, answerIdChose, changeClassName, trueAnswer,
        taskChose, changeClassNameNumber, changeClassNameName, questionIdChose, 
        questionNameChose, answerArray, taskArray, workMistakes,
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
            { !workMistakes 
                ?
                    <div>
                    {
                        arrayLessonPageChooseImage.filter(a => a.exercise === exerciseNumber)
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
                                                titleTask={c.titleTask}
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
                                                titleTask={c.titleTask}
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
                                            titleTask={c.titleTask}
                                            chooseWrong={chooseWrong}
                                        />
                                    }
                                    {
                                        c.chooseTranslateWords && 
                                            <ChooseTranslateWordsComponent
                                                task={c.task}
                                                answer={c.answer}
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
                                                titleTask={c.titleTask}
                                            />
                                    }
                                </div>
                            )
                    } 
                    </div>
                :
                    <div>
                        {
                            arrayWrongs.filter((a, index) => index === 0)
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
                                                    titleTask={c.titleTask}
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
                                                    titleTask={c.titleTask}
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
                                                titleTask={c.titleTask}
                                                chooseWrong={chooseWrong}
                                            />
                                        }
                                        {
                                            c.chooseTranslateWords && 
                                                <ChooseTranslateWordsComponent
                                                    task={c.task}
                                                    answer={c.answer}
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
                                                    titleTask={c.titleTask}
                                                />
                                        }
                                    </div>
                                )
                        } 
                    </div>
            }
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
                        setName={setName}
                        workMistakes={workMistakes}
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
                        setName={setName}
                        workMistakes={workMistakes}
                    />
            }                           
        </div>
    );
};

export default LessonPage;
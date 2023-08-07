import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

import SayAboutWrongModalComponent from '../components/lessonPage/SayAboutWrongModalComponent';
import FooterMenuFirstPositionComponent from '../components/lessonPage/FooterMenuFirstPositionComponent';
import FooterMenuWrongAnswerComponent from '../components/lessonPage/FooterMenuWrongAnswerComponent';
import FooterMenuPositiveAnswerComponent from '../components/lessonPage/FooterMenuPositiveAnswerComponent';
import { 
    arrayChoosePositiveAnswer, arrayWrongAnswer, arrayChoosePositiveAnswerEmpty, 
    arrayIdChoosePositiveAnswerEmpty, fetchUser, isEndModuleActions, pointsUserForDay, valueSuccessForActiveButtton,
 } from '../redux/actions';
import LessonPageBodyComponent from '../components/lessonPage/LessonPageBodyComponent';
import FinishTestComponent from '../components/lessonPage/FinishTestComponent';
import FooterMenuFinishTestComponent from '../components/lessonPage/FooterMenuFinishTestComponent';
import LookLessonModalComponent from '../components/lessonPage/LookLessonModalComponent';
import { getExercisesForLesson } from '../http/exercisesApi';
import { LEARN_PAGE } from '../constants';
import { updateUserLessonId, updateUserModuleId, updateUserThemeId } from '../http/userApi';
import { createLookLessonAnswers, getLookLessonAnswers } from '../http/lookLessonAnswersApi';

const LessonPage = () => {
    const { array } = useSelector(state => state.arrayChoosePositiveAnswerReducer);
    const { arrayWrongs } = useSelector(state => state.arrayWrongAnswerReducer);
    const { user } = useSelector(state => state.userReducer);
    const { themes } = useSelector(state => state.arrayThemesReducer);
    const { lessons } = useSelector(state => state.arrayLessonsReducer);
    const { modules } = useSelector(state => state.arrayModulesReducer);
    const { points } = useSelector(state => state.pointsUserForDayReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
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
    const [arrayDifferent, setArrayDifferent] = useState(null);
    const [arrayLessonPageChooseImage, setArrayLessonPageChooseImage] = useState(null);
    const [arrayAnswers, setArrayAnswers] = useState(null);
    const [showSubLookLessonModal, setShowSubLookLessonModal] = useState(false);
    const [idForSubLookLessonModal, setIdForSubLookLessonModal] = useState(0);
    const [countWrongs, setCountWrongs] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [pointsUser, setPointsUser] = useState(0);
    // const [activeCoffer, setActiveCoffer] = useState(false);
   
    const moduleId = user.module_id;
    const lessonId = user.lesson_id;
    const themeId = user.theme_id;
    
    const lessonsForModuleId = lessons.filter(c => c.moduleId === moduleId);
    const modulesForTheme = modules.filter(c => c.themeId === themeId);
    const indexLesson = lessonsForModuleId.findIndex(c => c.id === lessonId);
    const lessonIdNext = lessonsForModuleId.filter((c, index) => index === indexLesson + 1).map(c => c.id)[0];
    const indexModule = modulesForTheme.findIndex(c => c.id === user.module_id);
    const moduleIdNext = modulesForTheme.filter((c, index) => index === indexModule + 1).map(c => c.id)[0];
    const indexTheme = themes.findIndex(c => c.id === themeId);
    const themeIdNext = themes.filter((c, index) => index === indexTheme + 1).map(c => c.id)[0];
    
    const answer = arrayDifferent && arrayDifferent
        .sort((a, b) => a.id - b.id)
        .filter((c, index) => index === exerciseNumber)
        .map(c => c.answer)[0];
    const taskArray = arrayLessonPageChooseImage && arrayLessonPageChooseImage.filter(c => c.chooseTranslateWords === true)
        .map(c => c.task)[0];
    const answerArray = arrayLessonPageChooseImage && arrayLessonPageChooseImage.filter(c => c.chooseTranslateWords === true)
        .map(c => c.answer)[0];
    const exercise = arrayDifferent && arrayDifferent.filter((c, index) => index === exerciseNumber)[0];
    
    const clickNext = () => {
        setWrong(true);
        setChooseWrong(false);
        arrayWrongs.push(arrayLessonPageChooseImage
            .filter((c, index) => index === exerciseNumber)[0]);
           dispatch(arrayWrongAnswer(arrayWrongs));
    }
    const click = () => {
        navigate(LEARN_PAGE);
        dispatch(arrayChoosePositiveAnswerEmpty());
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
                if (arrayLessonPageChooseImage && arrayLessonPageChooseImage.length > 0) {
                    setWidthValue(widthValue + (100 / arrayLessonPageChooseImage.length));
                } else {
                    setWidthValue(0);
                }
                if (count >= 2) {
                    setNumberSuborder(true);
                } else {
                    setNumberSuborder(false);
                } 
                if (count >= 6) {
                    setBackgroundValue('#ffc800');
                }
                setChooseWrong(false);
            } else {
                setWrong(true);
                setPositiveAnswer(false);
                setChooseWrong(false);
                setCountWrongs(countWrongs + 1);
            }
        }   
        try {
            const formData = new FormData();
            formData.append('answerUser', name);
            formData.append('answerTrue', answer);
            formData.append('wrong', wrong);
            formData.append('lessonId', lessonId);
            formData.append('titleTask', exercise.titleExercise);
            formData.append('question', exercise.question);
            formData.append('choosePositiveAnswer', exercise.choosePositiveAnswer);
            formData.append('chooseImage', exercise.chooseImage);
            formData.append('chooseAnswer', exercise.chooseAnswer);
            formData.append('chooseMissingWord', exercise.chooseMissingWord);
            formData.append('chooseTranslateWords', exercise.chooseTranslateWords);
            createLookLessonAnswers(formData).then(data => {
                if (data.status === 200) {
                    console.log(data.data);
                }
            });
        } catch(e) {
            console.log(e.message);
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
    const fetchUpdateUserLessonId = async(idNext) => {
        try {
            await updateUserLessonId(idNext).then(data => {
                if(data.status === 200) {
                    dispatch(fetchUser(data.data));
                }
            });
        } catch(e) {
            console.log(e.message);
        }
    }
    const fetchUpdateUserModuleId = async(idNext) => {
        try {
            await updateUserModuleId(idNext).then(data => {
                if (data.status === 200) {
                    dispatch(fetchUser(data.data));
                    dispatch(isEndModuleActions(true));
                }
            });
        } catch(e) {
            console.log(e.message);
        }
    }
    const fetchUpdateUserThemeId = async(idNext) => {
        try {
            await updateUserThemeId(idNext).then(data => {
                if (data.status === 200) {
                    dispatch(fetchUser(data.data));
                }
            }); 
        } catch(e) {
            console.log(e.message);
        }
    }
    const continueExercise = async() => {
        if (indexLesson + 1 <= lessonsForModuleId.length && lessonIdNext !== undefined) {
            fetchUpdateUserLessonId(lessonIdNext);
        }
        if (lessonIdNext === undefined && moduleIdNext !== undefined) { 
            const time = () => {
                dispatch(valueSuccessForActiveButtton(0));
                dispatch(isEndModuleActions(false));
                fetchUpdateUserModuleId(moduleIdNext);
            }; 
            setTimeout(time, 5000);
        }
        if (moduleIdNext === undefined && lessonIdNext === undefined && themeId !== undefined) {
            const newModuleId = modules.filter(c => c.themeId === themeIdNext).map(c => c.id)[0];
            const newLessonId = lessons.filter(c => c.moduleId === newModuleId).map(c => c.id)[0];
            if (newLessonId === undefined || newModuleId === undefined) {
                newLessonId === undefined && alert('The next module do not content the lessons. ');
                newModuleId === undefined && alert('The next block do not content the modules. ');
            } else {
                fetchUpdateUserThemeId(themeIdNext);
                fetchUpdateUserLessonId(newLessonId);
                fetchUpdateUserModuleId(newModuleId);
            }
        }
        navigate(LEARN_PAGE);
        cleaner();
        dispatch(arrayChoosePositiveAnswerEmpty());
        dispatch(arrayIdChoosePositiveAnswerEmpty());
        dispatch(pointsUserForDay(pointsUser));
        lessonIdNext !== undefined &&  
            dispatch(valueSuccessForActiveButtton(Math.round((100 / lessonsForModuleId.length) * (indexLesson + 1))));
        lessonIdNext === undefined && 
                dispatch(valueSuccessForActiveButtton(100));
        lessonIdNext === undefined && dispatch(isEndModuleActions(true));
    }
    const lookLessonUserAnswers = async() => {
        setModalFinishTest(true);
        try {
            await getLookLessonAnswers(lessonId).then(data => {
                if (data.status === 200) {
                    setArrayAnswers(data.data);
                }
            });
        } catch(e) {
            console.log(e.message);
        }
    }
    const openClosedSubLookLessonModalComponent = (id) => {
        setShowSubLookLessonModal(true);
        setIdForSubLookLessonModal(id);
    }

    useEffect(() => {
        let action = true;
        if (action) {
            if (idElement > 0) {
                setChangedElement(true);
            }
            if (whichWrongs.length > 0) {
                setChooseSendWrong(true);
            } else {
                setChooseSendWrong(false);
            }
            if (arrayDifferent && exerciseNumber >= arrayDifferent.length) {
                setExerciseNumber(0);
                setWorkMistakes(true);
            }
            if (taskChose === answerChose && taskChose !== '' && answerChose !== '') {
                array.push(questionNameChose, answerChose);
                let unique = [...new Set(array)];
                dispatch(arrayChoosePositiveAnswer(unique));
                setTrueAnswer(false);
                const timer = setTimeout(() => {
                    setTrueAnswer(true);
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
            // if (!workMistakes && arrayLessonPageChooseImage) {
            //     setArrayDifferent(arrayLessonPageChooseImage);
            // } else {
            //     setArrayDifferent(arrayWrongs);
            // }
            
        }
        return (() => {
            action = false;
        })
        // eslint-disable-next-line
    }, [
        idElement, changedElement, name, wrong, answer, chooseWrong, modalShow, chooseSendWrong,
        whichWrongs, positiveAnswer, widthValue, exerciseNumber, showBlockTranslate, arrayChange,
        nameTranslate, moreInfo, answerChose, answerIdChose, changeClassName, trueAnswer,
        taskChose, changeClassNameNumber, changeClassNameName, questionIdChose, changeWidth,
        questionNameChose, answerArray, taskArray,  numberSuborder, count, 
        backgroundValue, finishTest, modalFinishTest, points,
        // arrayDifferent, workMistakes,
    ]);
    useMemo(() => {
        try {
            const getExercises = async() => {
                await getExercisesForLesson(lessonId).then(data => {
                    if (data.status === 200) {
                        setArrayLessonPageChooseImage(data.data);
                        if (!workMistakes) {
                            setArrayDifferent(data.data);
                        } else {
                            setArrayDifferent(arrayWrongs);
                        }
                    }
                });
            }
            getExercises();
        } catch (e) {
            console.log(e.message);
        }
    // eslint-disable-next-line
    }, [arrayWrongs, lessonId, workMistakes, user.theme_id, ]);
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
                        <FinishTestComponent
                            points={points}
                            countWrongs={countWrongs}
                            arrayLessonPageChooseImage={arrayLessonPageChooseImage}
                            bonus={bonus}
                            setBonus={setBonus}
                            setPointsUser={setPointsUser}
                        /> 
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
                arrayAnswers={arrayAnswers}
                openClosedSubLookLessonModalComponent={openClosedSubLookLessonModalComponent}
                showSubLookLessonModal={showSubLookLessonModal}
                idForSubLookLessonModal={idForSubLookLessonModal}
            />
           { 
                !finishTest &&
                    <div>
                        <div className="lessonPage_main_div_body">
                            {
                                arrayDifferent && arrayDifferent.filter((a, index) => index === exerciseNumber)
                                    .map(c => 
                                        <LessonPageBodyComponent
                                            key={c.id}
                                            chooseImage={c.chooseImage}
                                            choosePositiveAnswer={c.choosePositiveAnswer}
                                            chooseAnswer={c.chooseAnswer}
                                            chooseMissingWord={c.chooseMissingWord}
                                            chooseTranslateWords={c.chooseTranslateWords}
                                            question={c.question}
                                            tasks={c.tasks}
                                            setIdElement={setIdElement}
                                            idElement={idElement}
                                            setName={setName}
                                            name={name}
                                            chooseWrong={chooseWrong}
                                            titleTask={c.titleExercise}
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
                                            widthValue={widthValue}
                                            setWidthValue={setWidthValue}
                                            changeWidth={changeWidth}
                                            setChangeWidth={setChangeWidth}
                                            wrong={wrong}
                                            setShowBlockTranslate={setShowBlockTranslate}
                                            arrayChange={arrayChange}
                                            setArrayChange={setArrayChange}
                                            nameTranslate={nameTranslate}
                                            setNameTranslate={setNameTranslate}
                                            moreInfo={moreInfo}
                                            setMoreInfo={setMoreInfo}
                                            workMistakes={workMistakes}
                                            showBlockTranslate={showBlockTranslate}
                                            image={c.image}
                                            arrayLessonPageChooseImage={arrayLessonPageChooseImage}
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
                        continueExercise={continueExercise}
                        lookLessonUserAnswers={lookLessonUserAnswers}
                    />
            }                  
        </div>
    );
};

export default LessonPage;
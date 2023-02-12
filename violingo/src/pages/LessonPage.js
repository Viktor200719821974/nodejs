import { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

import ChooseImageComponent from '../components/lessonPage/ChooseImageComponent';
import { arrayLessonPageChooseImage } from '../constants/arrays';
import SayAboutWrongModalComponent from '../components/lessonPage/SayAboutWrongModalComponent';
import FooterMenuFirstPositionComponent from '../components/lessonPage/FooterMenuFirstPositionComponent';
import FooterMenuWrongAnswerComponent from '../components/lessonPage/FooterMenuWrongAnswerComponent';
import FooterMenuPositiveAnswerComponent from '../components/lessonPage/FooterMenuPositiveAnswerComponent';
import ChoosePositiveAnswerComponent from '../components/lessonPage/ChoosePositiveAnswerComponent';
import ChooseAnswerComponent from '../components/lessonPage/ChooseAnswerComponent';

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
    const [array, setArray] = useState([]);
    const [arrayId, setArrayId] = useState([]);
    const [idExist, setIdExist] = useState(false);
    // const [answer, setAnswer] = useState('');

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
                setWidthValue(widthValue + 10);
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
        // if (array.length === 0) {
        //     setIdElement(0);
        // }
        if (arrayId.filter(c => c === idElement)) {
            setIdExist(true);
        }
    }, [
        idElement, changedElement, name, wrong, answer, chooseWrong, modalShow, chooseSendWrong,
        whichWrongs, positiveAnswer, widthValue, exerciseNumber, showBlockTranslate, array,
        array.length, arrayId, idExist,
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
                                            translate={c.translate}
                                            showBlockTranslate={showBlockTranslate}
                                            setShowBlockTranslate={setShowBlockTranslate}
                                            array={array}
                                            setArray={setArray}
                                            arrayId={arrayId}
                                            setArrayId={setArrayId}
                                            idExist={idExist}
                                            setIdExist={setIdExist}
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
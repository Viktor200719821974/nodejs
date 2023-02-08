import { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

import ChooseImageComponent from '../components/lessonPage/ChooseImageComponent';
import { arrayLessonPageChooseImage } from '../constants/arrays';
import SayAboutWrongModalComponent from '../components/lessonPage/SayAboutWrongModalComponent';
import FooterMenuFirstPositionComponent from '../components/lessonPage/FooterMenuFirstPositionComponent';
import FooterMenuWrongAnswerComponent from '../components/lessonPage/FooterMenuWrongAnswerComponent';
import FooterMenuPositiveAnswerComponent from '../components/lessonPage/FooterMenuPositiveAnswerComponent';

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
    // const [answer, setAnswer] = useState('');
    
    const answer = arrayLessonPageChooseImage.map(c => c.answer)[0];
    const clickNext = () => {
        setWrong(true);
        setChooseWrong(false);
    }
    const click = () => {

    }
    const verify = () => {
        if (name === answer) {
            setWrong(false);
            setPositiveAnswer(true);
            setChooseWrong(false);
        } else {
            setWrong(true);
            setPositiveAnswer(false);
            setChooseWrong(false);
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
    }, [
        idElement, changedElement, name, wrong, answer, chooseWrong, modalShow, chooseSendWrong,
        whichWrongs, positiveAnswer,
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
                    style={{width: '0'}}
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
            <div className="lessonPage_main_div_body">
                {
                    arrayLessonPageChooseImage.map(c => 
                        <ChooseImageComponent
                            key={c.id}
                            question={c.question}
                            task={c.task}
                            setIdElement={setIdElement}
                            idElement={idElement}
                            setName={setName}
                            chooseWrong={chooseWrong}
                        />
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
                    />
            }  
            {
                positiveAnswer && 
                    <FooterMenuPositiveAnswerComponent
                        setModalShow={setModalShow}
                    />
            }               
                        
        </div>
    );
};

export default LessonPage;
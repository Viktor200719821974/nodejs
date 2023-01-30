import { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { ImCross } from 'react-icons/im';

import ChooseImageComponent from '../components/lessonPage/ChooseImageComponent';
import { arrayLessonPageChooseImage } from '../constants/arrays';
import flagMore from '../icons/flag_more.svg';

const LessonPage = () => {
    const [idElement, setIdElement] = useState(0);
    const [changedElement, setChangedElement] = useState(false);
    const [name, setName] = useState('');
    const [wrong, setWrong] = useState(false);

    const answer = arrayLessonPageChooseImage.map(c => c.answer)[0];
    const click = () => {

    }
    useEffect(() => {
        if (idElement > 0) {
            setChangedElement(true);
        }
        if (name === answer) {
            setWrong(true);
        }
    }, [idElement, changedElement, name, wrong, answer,]);
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
                        />
                    )
                }
                
            </div>
            {
                !wrong 
                    ? 
                        <div className="lessonPage_main_div_down_block">
                            <div className="lessonPage_main_div_button_left">
                                <button 
                                    className="lessonPage_button_next_left display_alien_justify"
                                    >
                                    <span 
                                        className="lessonPage_span_button_next"
                                        onClick={() => setWrong(true)}
                                        >
                                        Далі
                                    </span> 
                                </button>
                            </div>
                            <div className="lessonPage_main_div_button_right">
                                <button 
                                    className={
                                        !changedElement 
                                            ? "lessonPage_button_next_right display_alien_justify"
                                            : "lessonPage_button_next_right_select display_alien_justify"
                                        }
                                    >
                                    <span 
                                        className={
                                            !changedElement 
                                                ? "lessonPage_span_button_next"
                                                : "lessonPage_span_button_next_select"
                                            }
                                        >
                                        Перевірити
                                    </span>
                                </button>
                            </div>               
                        </div>
                    :
                    <div className="lessonPage_main_div_down_block_wrong">
                        <div className="lessonPage_main_div_left_signs_wrong">
                            <div className="lessonPage_div_circle_wrong display_alien_justify">
                                <ImCross color='#ea2b2b' size={'30px'}/>
                            </div>
                            <div>
                                <div>
                                    <h2 className="lessonPage_h2_wrong">
                                        Правильна відповідь:
                                    </h2>
                                </div>
                                <div className="lessonPage_div_answer">{answer}</div>
                                <div className="lessonPage_main_div_say_about_wrong">
                                    <img 
                                        src={flagMore} 
                                        alt="more about wrong"
                                        className="lessonPage_image_flag_more_wrong"
                                        /> 
                                    <span className="lessonPage_span_say_about_wrong">
                                        Продовжити
                                    </span>
                                </div>
                            </div>  
                        </div>
                        <div className="lessonPage_main_div_button_right_wrong">
                            <button 
                                className="lessonPage_button_next_right_wrong display_alien_justify"
                                >
                                <span 
                                    className="lessonPage_span_button_next_wrong"
                                    >
                                    Продовжити
                                </span>
                            </button>
                        </div>               
                    </div>
            }
        </div>
    );
};

export default LessonPage;
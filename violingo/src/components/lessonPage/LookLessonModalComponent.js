import Modal from 'react-bootstrap/Modal';
import { BsCheck } from 'react-icons/bs';

import { arrayLessonPageChooseImage } from '../../constants/arrays';
import SubLookLessonModalComponent from './SubLookLessonModalComponent';
import cross from '../../icons/cross-closedModal.svg';

const LookLessonModalComponent = ({ show, onHide }) => {
    arrayLessonPageChooseImage.length = 15;
    
    return (
        <Modal
            size="lg"
            centered
            // className="lessonPage_modal_lookLessonModalComponent"
            show={show}
            onHide={onHide}
        >
            <div 
                className="lessonPage_div_image_cross_sayAboutWrongModalComponent display_alien_justify"
                onClick={onHide}
                >
                <img src={cross} alt="cross closed modal"/>
            </div>
            <div className="lessonPage_main_div_lookLessonModalComponent">
                <div className="lessonPage_div_title_subtitle_lookLessonModalComponent">
                    <span className="lessonPage_title_lookLessonModalComponent">
                        Прогляньте свою карту оцінок!
                    </span>
                    <span className="lessonPage_subtitle_lookLessonModalComponent">
                        Натисніть на картку, щоб відкрити відповіді
                    </span>
                </div>
                <div className="lessonPage_main_div_blocks_lookLessonModalComponent">
                    {
                        arrayLessonPageChooseImage.map((c, index) =>
                            <div 
                                key={index}
                                className="lessonPage_div_block_title_image_success_lookLessonModalComponent"
                                >
                                <span 
                                    className="lessonPage_main_spain_title_image_successes_lookLessonModalCompoent"
                                    >
                                    <span 
                                        className="lessonPage_span_title_task_lookLessonModalComponent"
                                        >
                                        {c.titleTask}
                                    </span>
                                    <span 
                                        className="lessonPage_span_image_success_lookLessonModalComponent display_alien_justify"
                                        >
                                        <BsCheck color='green' size={'25px'}/>
                                    </span>
                                </span>
                                <div className={
                                        c.chooseImage || c.chooseAnswer
                                            ? "lessonPage_span_question_chooseImage_lookLessonModalComponent"
                                            : "lessonPage_span_question_no_chooseImage_lookLessonModalComponent"
                                    }
                                    >
                                    {   
                                        c.question.length === 1 &&
                                            c.question.map(d => 
                                                <span 
                                                    key={d.id}
                                                    >
                                                    {
                                                        (c.chooseImage || c.chooseAnswer) 
                                                            ? 
                                                                <span>
                                                                    «{d.word}»
                                                                    {c.chooseAnswer ? '?' : ''}
                                                                </span>
                                                            :   
                                                                <span>
                                                                    {d.word}
                                                                </span>
                                                    }
                                                </span>
                                            )
                                    }
                                    {
                                        c.question.length === 0 && 
                                            <SubLookLessonModalComponent
                                                answer={c.answer}
                                                choosePositiveAnswer={c.choosePositiveAnswer}
                                            />
                                    }
                                    {
                                        c.question.length > 1 &&
                                            <SubLookLessonModalComponent
                                                question={c.question}
                                                choosePositiveAnswer={c.choosePositiveAnswer}
                                            />
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                
            </div>
        </Modal>
    );
};

export default LookLessonModalComponent;
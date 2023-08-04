import Modal from 'react-bootstrap/Modal';
import { BsCheck } from 'react-icons/bs';

import cross from '../../icons/cross-closedModal.svg';
import SubLookLessonModalComponent from './SubLookLessonModalComponent';

const LookLessonModalComponent = ({ 
    show, onHide, arrayAnswers, openClosedSubLookLessonModalComponent, showSubLookLessonModal, idForSubLookLessonModal,
}) => {
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
                        arrayAnswers && arrayAnswers.map((c, index) =>
                            <div 
                                key={index}
                                className="lessonPage_div_block_title_image_success_lookLessonModalComponent"
                                onClick={() => openClosedSubLookLessonModalComponent(c.id)}
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
                                        (c.chooseAnswer || c.chooseImage)
                                            ?
                                                <span>
                                                    «{c.question}»
                                                    {c.chooseAnswer ? '?' : ''} 
                                                </span>  
                                            :
                                                <span>
                                                    {!c.chooseTranslateWords && c.question}
                                                    {
                                                        c.chooseTranslateWords &&
                                                            c.question.split(',').map((a, index) => 
                                                                <div 
                                                                    key={index}
                                                                    className='lessonPage_div_question_lookLessonModalComponent'
                                                                >
                                                                    {a}
                                                                </div>
                                                            )
                                                    }
                                                </span>
                                    }
                                </div>
                                {
                                    (showSubLookLessonModal && c.id === idForSubLookLessonModal) &&
                                        <SubLookLessonModalComponent 
                                            
                                        />
                                }
                            </div>
                        )
                    }
                </div>
                
            </div>
        </Modal>
    );
};

export default LookLessonModalComponent;
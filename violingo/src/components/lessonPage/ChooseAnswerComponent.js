import { useEffect } from 'react';

const ChooseAnswerComponent = ({
    question, task, idElement, setIdElement, setName, chooseWrong, titleTask,
}) => {
    
    useEffect(() => {
        const keyDownHandler = (e) => {
            if (e.key > 0 && e.key <= 3 && chooseWrong) {
                setIdElement(Number(e.key));
                const chooseAnswer = task && task.filter((c, index) => index + 1 === Number(e.key))[0];
                setName(chooseAnswer);
            } else {
                    setIdElement(idElement);
            }  
        }
        document.addEventListener('keydown', keyDownHandler);
        return function cleanup() {
            document.removeEventListener('keydown', keyDownHandler);
        }
        // eslint-disable-next-line
    }, [chooseWrong, task]);
    return (
        <div className="lessonPage_main_div_chooseAnswerComponent">          
            <span className="lessonPage_span_question_chooseAnswerComponent">
                {titleTask} «{question}»?
            </span> 
            <div className="lessonPage_main_div_choose_answer_chooseAnswerComponent">
                {
                    task && task.map((c, index) => 
                        <div 
                            key={index}
                            className={
                                (idElement !== index + 1) 
                                    ? "lessonPage_div_choose_answer_chooseAnswerComponent display_alien_justify " +
                                    "lessonPage_choose_answer_joint_style"
                                    : "lessonPage_div_choose_answer_select_chooseAnswerComponent display_alien_justify " +
                                    "lessonPage_choose_answer_joint_style"
                            }
                            style={{top: `${index * 63}px`}}
                            onClick={() => {
                                chooseWrong && setIdElement(index + 1);
                                chooseWrong && setName(c);
                            }}
                            >
                            <span className={
                                    (idElement !== index + 1) 
                                        ? "lessonPage_span_choose_answer_number_chooseAnswerComponent display_alien_justify"
                                        : "lessonPage_span_choose_answer_number_select_chooseAnswerComponent display_alien_justify"
                                }
                                >
                                {index + 1}
                            </span>
                            <span className={
                                (idElement !== index + 1) 
                                    ? "lessonPage_span_choose_answer_name_chooseAnswerComponent"
                                    : "lessonPage_span_choose_answer_name_select_chooseAnswerComponent"
                                }
                                >
                                {c}
                            </span>
                        </div>
                    )
                }          
            </div>
        </div>
    );
};

export default ChooseAnswerComponent;
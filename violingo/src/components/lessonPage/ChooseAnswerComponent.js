import { useEffect } from 'react';

const ChooseAnswerComponent = ({
    question, task, idElement, setIdElement, setName, chooseWrong, titleTask,
}) => {
    
    useEffect(() => {
        const keyDownHandler = (e) => {
            if (e.key > 0 && e.key <= 3 && chooseWrong) {
                setIdElement(Number(e.key));
                const chooseAnswer = task.filter(c => c.id === Number(e.key))
                    .map(item => item.name)[0];
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
    }, [chooseWrong]);
    return (
        <div className="lessonPage_main_div_chooseAnswerComponent">          
            <span className="lessonPage_span_question_chooseAnswerComponent">
                {titleTask} «{question}»?
            </span> 
            <div className="lessonPage_main_div_choose_answer_chooseAnswerComponent">
                {
                    task.map((c, index) => 
                        <div 
                            key={c.id}
                            className={
                                (idElement !== c.id) 
                                    ? "lessonPage_div_choose_answer_chooseAnswerComponent display_alien_justify " +
                                    "lessonPage_choose_answer_joint_style"
                                    : "lessonPage_div_choose_answer_select_chooseAnswerComponent display_alien_justify " +
                                    "lessonPage_choose_answer_joint_style"
                            }
                            style={{top: `${index * 63}px`}}
                            onClick={() => {
                                chooseWrong && setIdElement(c.id);
                                chooseWrong && setName(c.name);
                            }}
                            >
                            <span className={
                                    (idElement !== c.id) 
                                        ? "lessonPage_span_choose_answer_number_chooseAnswerComponent display_alien_justify"
                                        : "lessonPage_span_choose_answer_number_select_chooseAnswerComponent display_alien_justify"
                                }
                                >
                                {c.id}
                            </span>
                            <span className={
                                (idElement !== c.id) 
                                    ? "lessonPage_span_choose_answer_name_chooseAnswerComponent"
                                    : "lessonPage_span_choose_answer_name_select_chooseAnswerComponent"
                                }
                                >
                                {c.name}
                            </span>
                        </div>
                    )
                }          
            </div>
        </div>
    );
};

export default ChooseAnswerComponent;
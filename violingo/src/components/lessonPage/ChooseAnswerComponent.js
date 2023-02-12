const ChooseAnswerComponent = ({
    question, task, idElement, setIdElement, setName, chooseWrong,
}) => {
    return (
        <div className="lessonPage_main_div_chooseAnswerComponent">          
            <span className="lessonPage_span_question_chooseAnswerComponent">
                Як сказати «{question}»?
            </span> 
            <div className="lessonPage_main_div_choose_answer_chooseAnswerComponent">
                {
                    task.map(c => 
                        <div 
                            key={c.id}
                            className={
                                (idElement !== c.id) 
                                    ? "lessonPage_div_choose_answer_chooseAnswerComponent display_alien_justify"
                                    : "lessonPage_div_choose_answer_select_chooseAnswerComponent display_alien_justify"
                            }
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
                            <span className="lessonPage_span_choose_answer_name_chooseAnswerComponent">
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
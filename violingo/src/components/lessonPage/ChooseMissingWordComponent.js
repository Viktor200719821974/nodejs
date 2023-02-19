const ChooseMissingWordComponent = ({ question, task, }) => {
    return (
        <div className="lessonPage_main_div_chooseMissingWordComponent">
            <span className="lessonPage_span_title_chooseMissingWordComponent">
                Виберіть пропущене слово
            </span>
            <div className="lessonPage_main_div_question_chooseMissingWordComponent">
                {
                    question.map(c => 
                        c.part1.map(d =>
                            <span 
                                key={d.id}
                                className="lessonPage_span_question_part_chooseMissingComponent"
                                >
                                {d.text}
                            </span>
                        )
                    )      
                }
                <div className="lessonPage_div_wrap_for_empty_span_chooseMissingWordComponent">
                    <span 
                        className="lessonPage_span_question_empty_chooseMissingWordComponent">
                    </span>
                </div>
                {
                    question.map(c => 
                        c.part2.map(d =>
                            <span 
                                key={d.id}
                                className="lessonPage_span_question_part_chooseMissingWordComponent"
                                >
                                {d.text}
                            </span>
                        )
                    )
                }
            </div>
            <div className="lessonPage_main_div_task_chooseMissingWordComponent">
                {
                    task.map((c, index) => 
                        <div 
                            key={index}
                            className="lessonPage_block_div_task_chooseMissingWordComponent"
                            >
                           <span 
                            className="lessonPage_number_block_chooseMissingWordComponent"
                            >
                                {index + 1}
                            </span> 
                           <div 
                            className="lessonPage_block_answer_chooseMissingWordComponent"
                            >
                                {c.name}
                            </div>
                        </div>
                        
                    )
                }
            </div>
        </div>
    );
};

export default ChooseMissingWordComponent;

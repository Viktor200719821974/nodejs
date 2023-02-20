const ChooseMissingWordComponent = ({ 
    question, task, idElement, setIdElement, setName,
}) => {
    const click = (id, chooseAnswer) => {
        try {
            let arr = [];
            setIdElement(id);
            const part1 = question.map(c => c.part1.map(d => d.text)[0])[0];
            const part2 = question.map(c => c.part2.map(d => d.text)[0])[0];
            arr.push(part1, chooseAnswer, part2);
            setName(arr.join(' '));
        } catch (e) {
            console.log(e.message);
        }
    }
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
                            className={
                                (c.id !== idElement) 
                                    ? "lessonPage_block_div_task_chooseMissingWordComponent"
                                    : "lessonPage_block_div_task_select_chooseMissingComponent"
                                }
                            onClick={() => click(c.id, c.name)}
                            >
                           <span 
                            className={
                                (c.id !== idElement) 
                                    ? "lessonPage_number_block_chooseMissingWordComponent"
                                    : "lessonPage_number_block_select_chooseMissingComponent"
                                }
                            
                            >
                                {index + 1}
                            </span> 
                           <div 
                            className={
                                (c.id !== idElement) 
                                    ? "lessonPage_block_answer_chooseMissingWordComponent"
                                    : "lessonPage_block_answer_select_chooseMissingComponent"
                                }
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

import { useEffect } from "react";

const ChooseMissingWordComponent = ({ 
    question, task, idElement, setIdElement, setName, titleTask, chooseWrong,
}) => {
    const click = (id, chooseAnswer) => {
        try {
            setIdElement(id);
            const arr = question.split(" ");
            const index = arr.indexOf('____');
            if (index !== -1) {
                arr[index] = chooseAnswer;
            }
            setName(arr.join(' '));
        } catch (e) {
            console.log(e.message);
        }
    }
    
    useEffect(() => {
        const keyDownHandlerMissingWords = (e) => {
            if ((e.key > 0 && e.key <= 4) && chooseWrong ) {
                const chooseAnswer = task && task.filter((c, index) => index + 1 === Number(e.key))[0];
                click(Number(e.key), chooseAnswer);
            } else {
                setIdElement(idElement);
            } 
        };
        document.addEventListener('keydown', keyDownHandlerMissingWords);
        return function cleanup() {
            document.removeEventListener('keydown', keyDownHandlerMissingWords);
        }
        // eslint-disable-next-line
    }, [chooseWrong, task]);

    return (
        <div className="lessonPage_main_div_chooseMissingWordComponent">
            <span className="lessonPage_span_title_chooseMissingWordComponent">
                {titleTask}
            </span>
            <div className="lessonPage_main_div_question_chooseMissingWordComponent">    
                <span>{question}</span>
            </div>
            <div className="lessonPage_main_div_task_chooseMissingWordComponent">
                {
                    task && task.map((c, index) =>
                        <div 
                            key={index}
                            className={
                                (index + 1 !== idElement) 
                                    ? "lessonPage_block_div_task_chooseMissingWordComponent"
                                    : "lessonPage_block_div_task_select_chooseMissingComponent"
                                }
                            onClick={() => chooseWrong && click(index + 1, c)}
                            >
                           <span 
                            className={
                                (index + 1 !== idElement) 
                                    ? "lessonPage_number_block_chooseMissingWordComponent"
                                    : "lessonPage_number_block_select_chooseMissingComponent"
                                }
                            
                            >
                                {index + 1}
                            </span> 
                           <div 
                            className={
                                (index + 1 !== idElement) 
                                    ? "lessonPage_block_answer_chooseMissingWordComponent"
                                    : "lessonPage_block_answer_select_chooseMissingComponent"
                                }
                            >
                                {c}
                            </div>
                        </div> 
                    )
                }
            </div>
        </div>
    );
};

export default ChooseMissingWordComponent;

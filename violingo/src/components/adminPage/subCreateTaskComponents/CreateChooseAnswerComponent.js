const CreateChooseAnswerComponent = ({ question, setQuestion, answer, setAnswer, sendTask, }) => {
    return (
        <form>
            <input
                type="text"
                name="question"
                value={question}
                placeholder="Напишіть своє запитаннє"
                className="loginPage_input_loginComponent"
                onChange={(e) => setQuestion(e.target.value)}
            />
            <input
                type="text"
                name="answer"
                value={answer}
                placeholder="Напишіть відповідь на запитаннє"
                className="loginPage_input_loginComponent"
                onChange={(e) => setAnswer(e.target.value)}
            />
            <div className="loginPage_div_wrap_for_button_loginComponent">
                <button
                    className="loginPage_button_enter_loginComponent"
                    onClick={sendTask}
                >
                    Create task
                </button>
            </div>
        </form>
    );
};

export default CreateChooseAnswerComponent;
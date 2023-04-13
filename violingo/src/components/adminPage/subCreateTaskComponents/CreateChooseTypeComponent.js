const CreateChooseTypeComponent = (
    {
        question, setQuestion, answer, setAnswer, sendTask, setWord, chooseMissingWord, word,
    }) => {
    return (
        <form>
            {
                !chooseMissingWord &&
                    <input
                        type="text"
                        name="question"
                        value={question}
                        placeholder="Напишіть своє запитаннє"
                        className="loginPage_input_loginComponent"
                        onChange={(e) => setQuestion(e.target.value)}
                    />
            }
            {
                chooseMissingWord &&
                    <input
                        type="text"
                        name="word"
                        value={word}
                        placeholder="Напишіть слово яке потрібно буде вписати"
                        className="loginPage_input_loginComponent"
                        onChange={(e) => setWord(e.target.value)}
                    />
            }
            <input
                type="text"
                name="answer"
                value={answer}
                placeholder="Напишіть відповідь на питаннє"
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

export default CreateChooseTypeComponent;
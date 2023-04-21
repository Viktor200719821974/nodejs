import FieldForLoadFiles from './FieldForLoadFiles';

const CreateTaskFormComponent = (
    {
        question, setQuestion, answer, setAnswer, sendTask, setWord, chooseMissingWord, word, error, errorMessage, translate,
        setTranslate, chooseImage, setFile, setDrag, drag,
    }) => {
    return (
        <form>
            {
                error && 
                    <div className="adminPage_div_error_createThemeComponent">
                        {errorMessage}
                    </div>
            }
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
                        placeholder="Напишіть слово яке потрібно буде вибрати"
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
            {
                chooseMissingWord &&
                    <input
                        type="text"
                        name="translate"
                        value={translate}
                        placeholder="Напишіть переклад відповіді"
                        className="loginPage_input_loginComponent"
                        onChange={(e) => setTranslate(e.target.value)}
                    />
            }
            {
                chooseImage &&
                    <div>
                        <FieldForLoadFiles
                            setFile={setFile}
                            setDrag={setDrag}
                            drag={drag}
                        />
                        <input
                            type="file"
                            placeholder="Select image"
                            className="adminPage_input_type_file"
                            onChange={(e) => setFile(e.target.files[0])}
                        /> 
                    </div>            
            }
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

export default CreateTaskFormComponent;
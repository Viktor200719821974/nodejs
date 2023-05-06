const CreateTaskChooseTranslateWordsComponent = ({ arrayIdTranslateWords, deleteSelectedTask, }) => {
    return (
        <div>
            {
                arrayIdTranslateWords && arrayIdTranslateWords.map(c => 
                    <div key={c.id} className="adminPage_first_div_createTaskChooseTranslateWordsComponent">
                        <div 
                            className="adminPage_second_div_createTaskChooseTranslateWordsComponent"
                            >
                            <span className="adminPage_span_createTaskChooseTranslateWordsComponent">
                                <b>Question:</b> {c.question}
                            </span>
                            <span><b>Answer:</b> {c.answer}</span>
                        </div>
                        <span 
                            className="adminPage_span_button_createTaskChooseTranslateWordsComponent"
                            onClick={() => deleteSelectedTask(c.id)}
                            >
                            delete
                        </span>
                    </div>
                    
                )
            }
        </div>
    );
};

export default CreateTaskChooseTranslateWordsComponent;
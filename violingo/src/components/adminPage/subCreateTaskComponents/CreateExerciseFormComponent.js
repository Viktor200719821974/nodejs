const CreateExerciseFormComponent = ({ clickCreateExercise, tasks, taskId, error, errorMessage, }) => {
    return (
        <div>
            {
                error && 
                    <div className="adminPage_div_error_createThemeComponent">
                        {errorMessage}
                    </div>
            }
            {
                tasks.filter(c => c.id === taskId).map(d => 
                    <div 
                        key={d.id} 
                        className="adminPage_main_div_createExerciseFormComponent" 
                        id={'exerciseForm'}
                        >
                        <span className="adminPage_span_createExerciseFormComponent">
                            <b>Question:</b> {d.question}
                        </span>
                        <span className="adminPage_span_createExerciseFormComponent">
                            <b>Answer:</b> {d.answer}
                        </span>
                    </div>
                )
            }
            <div className="adminPage_div_button_createExerciseFormComponent">
                <button 
                    className="adminPage_button_createExerciseFormComponent"
                    onClick={clickCreateExercise}
                    >
                        Create exercise
                </button>
            </div>
        </div>
    );
};

export default CreateExerciseFormComponent;
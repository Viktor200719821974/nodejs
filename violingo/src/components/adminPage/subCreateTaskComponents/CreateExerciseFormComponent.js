import FieldForLoadFiles from './FieldForLoadFiles';

const CreateExerciseFormComponent = ({ 
    clickCreateExercise, error, errorMessage, questionForExercise, answerForExercise, showFieldAddImage, setDrag, setFile,
    drag,
}) => {
    return (
        <div>
            {
                error && 
                    <div className="adminPage_div_error_createThemeComponent">
                        {errorMessage}
                    </div>
            }
            {
                showFieldAddImage &&
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
            <div 
                className="adminPage_main_div_createExerciseFormComponent" 
                id={'exerciseForm'}
                >
                <span className="adminPage_span_createExerciseFormComponent">
                    <b>Question:</b> {questionForExercise}
                </span>
                <span className="adminPage_span_createExerciseFormComponent">
                    <b>Answer:</b> {answerForExercise}
                </span>
            </div>
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
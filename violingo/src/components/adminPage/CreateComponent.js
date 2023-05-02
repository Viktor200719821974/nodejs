import CreateTasksBodyComponent from './subCreateTaskComponents/CreateTasksBodyComponent';
import CreateNavBarComponent from './subComponents/CreateNavBarComponent';

const CreateComponent = ({
    typeTask, chooseImage, chooseMissingWord, choose, errorEmptyArrayLessons, errorEmptyArrayThemes,
    dropdown, answer, question, title, word, onHide, error, errorMessage, tasks, setOnHide, setTaskId,
    translate, dropdownTypeMenu, imageExample, drag, themes, setFile, setDrag, setChoose,  lessonNumber,
    setQuestion, setAnswer, setWord, setDropdownTypeMenu, onMouse, setTypeTask, setImageExample, setOnMouse, 
    setTranslate, click, openCloseDropdownMenu, sendTask, fetchDeleteTask, createWhat, functionBack,
    dropdownMenuLessons, lessons, chooseLesson, openCloseDropdownMenuLessons, createExerciseBool, showFieldAddImage,
    clickCreateExercise, lessonId, countExecisesLesson, questionForExercise, clickMenuCreateExercise, answerForExercise,
    errorEmptyArrayLessonsMessage, errorEmptyArrayThemesMessage,
}) => {
    return (
        <div className={"adminPage_main_div_createComponent"}>
            <CreateNavBarComponent
                dropdown={dropdown} 
                themes={themes} 
                click={click} 
                title={title} 
                openCloseDropdownMenu={openCloseDropdownMenu} 
                setChoose={setChoose} 
                setAnswer={setAnswer} 
                setDropdownTypeMenu={setDropdownTypeMenu} 
                dropdownTypeMenu={dropdownTypeMenu} 
                setTypeTask={setTypeTask} 
                choose={choose} 
                typeTask={typeTask} 
                setImageExample={setImageExample} 
                setOnMouse={setOnMouse} 
                imageExample={imageExample} 
                onMouse={onMouse} 
                question={question} 
                setQuestion={setQuestion} 
                answer={answer} 
                sendTask={sendTask} 
                setWord={setWord} 
                chooseMissingWord={chooseMissingWord} 
                word={word} 
                error={error} 
                errorMessage={errorMessage} 
                translate={translate} 
                setTranslate={setTranslate}
                chooseImage={chooseImage} 
                setFile={setFile} 
                setDrag={setDrag} 
                drag={drag}
                createWhat={createWhat}
                functionBack={functionBack}
                dropdownMenuLessons={dropdownMenuLessons} 
                lessons={lessons} 
                chooseLesson={chooseLesson}
                openCloseDropdownMenuLessons={openCloseDropdownMenuLessons}
                lessonNumber={lessonNumber}
                createExerciseBool={createExerciseBool}
                clickCreateExercise={clickCreateExercise}
                answerForExercise={answerForExercise}
                questionForExercise={questionForExercise}
                showFieldAddImage={showFieldAddImage}
                errorEmptyArrayLessons={errorEmptyArrayLessons}
                errorEmptyArrayThemes={errorEmptyArrayThemes}
                errorEmptyArrayLessonsMessage={errorEmptyArrayLessonsMessage}
                errorEmptyArrayThemesMessage={errorEmptyArrayThemesMessage}
            />
            <CreateTasksBodyComponent
                tasks={tasks}
                lessonId={lessonId}
                setOnHide={setOnHide}
                setTaskId={setTaskId}
                onHide={onHide}
                fetchDeleteTask={fetchDeleteTask}
                title={title}
                createWhat={createWhat}
                lessonNumber={lessonNumber}
                countExecisesLesson={countExecisesLesson}
                clickMenuCreateExercise={clickMenuCreateExercise}
            />
        </div>
    );
};

export default CreateComponent;
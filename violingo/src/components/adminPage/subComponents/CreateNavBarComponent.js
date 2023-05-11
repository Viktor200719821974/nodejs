import { IoMdArrowDropdown } from 'react-icons/io';

import ArrowBackComponent from './ArrowBackComponent';
import DropDownMenuComponent from './DropDownMenuComponent';
import ChooseTypeTaskComponent from './ChooseTypeTaskComponent';
import CreateTaskFormComponent from '../subCreateTaskComponents/CreateTaskFormComponent';
import CreateExerciseFormComponent from '../subCreateTaskComponents/CreateExerciseFormComponent';
import DropDownMenuLessonsComponent from './DropDownMenuLessonsComponent';

const CreateNavBarComponent = ({
    dropdown, themes, click, title, openCloseDropdownMenu, setChoose, setAnswer, setDropdownTypeMenu, showFieldAddImage,
    dropdownTypeMenu, setTypeTask, choose, typeTask, setImageExample, setOnMouse, imageExample, onMouse, question, 
    setQuestion, answer, sendTask, setWord, chooseMissingWord, word, error, errorMessage, translate, setTranslate,
    chooseImage, setFile, setDrag, drag, createWhat, functionBack, dropdownMenuLessons, lessons, chooseLesson,
    openCloseDropdownMenuLessons, lessonNumber, createExerciseBool, clickCreateExercise, questionForExercise, answerForExercise,
    errorEmptyArrayLessons, errorEmptyArrayThemes, errorEmptyArrayLessonsMessage, errorEmptyArrayThemesMessage, setPage,
    chooseTranslateWords, arrayIdTranslateWords, taskId, chooseAnswer, choosePositiveAnswer, deleteSelectedTask,
    arraytTranslateWordsTasks,
}) => {
    return(
        <div className={"adminPage_div_navBar_createComponent"}>
            <div style={{display: 'flex'}}>
                <h2 className={"adminPage_h2_navBar_createComponent"}>
                    { createWhat === 'task' ? "Create task:" : "Create exercise:" }
                </h2>
                <ArrowBackComponent functionBack={functionBack}/>
            </div>   
            <DropDownMenuComponent
                dropdown={dropdown}
                themes={themes}
                click={click}
                title={title}
                openCloseDropdownMenu={openCloseDropdownMenu}
                lessonMenu={dropdownMenuLessons}
                errorEmptyArrayThemes={errorEmptyArrayThemes}
                errorEmptyArrayThemesMessage={errorEmptyArrayThemesMessage}
            />
            {
                (createWhat === 'exercise' && title !== 'Choose theme task') &&
                    <div>
                        {
                            errorEmptyArrayLessons && 
                                <div className="adminPage_div_error_createThemeComponent">
                                    {errorMessage}
                                </div>
                        }
                        <DropDownMenuLessonsComponent
                            dropdownMenuLessons={dropdownMenuLessons}
                            lessons={lessons}
                            chooseLesson={chooseLesson}
                            openCloseDropdownMenuLessons={openCloseDropdownMenuLessons}
                            createWhat={createWhat}
                            lessonNumber={lessonNumber}
                            errorEmptyArrayLessons={errorEmptyArrayLessons}
                            errorEmptyArrayLessonsMessage={errorEmptyArrayLessonsMessage}
                        />
                    </div>
            }
            {
                title !== '' &&
                    <div className={"adminPage_main_div_chooseTypeTaskComponent"}>
                        <div className="adminPage_div_dropdown_chooseTypeTask">
                            <h3 className={"adminPage_h3_navBar_createComponent"}>Choose type task:</h3>
                            <span 
                                className="adminPage_span_image_dropdown_chooseTypeTask"
                                onClick={() => setDropdownTypeMenu(value => !value)}
                                >
                                <IoMdArrowDropdown size={'30px'}/>
                            </span>
                        </div>
                        {
                            dropdownTypeMenu &&
                                <div>
                                    <ChooseTypeTaskComponent
                                        setChoose={setChoose}
                                        setTypeTask={setTypeTask}
                                        choose={choose}
                                        typeTask={typeTask}
                                        setImageExample={setImageExample}
                                        setOnMouse={setOnMouse}
                                        imageExample={imageExample}
                                        onMouse={onMouse}
                                        setPage={setPage}
                                    />  
                                </div>
                        }
                    </div>
            }
            {
                (choose && createWhat === 'task') &&
                    <div className={"adminPage_main_div_form_createComponent display_alien_justify"}>
                        <CreateTaskFormComponent
                            question={question}
                            setQuestion={setQuestion}
                            answer={answer}
                            setAnswer={setAnswer}
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
                            chooseTranslateWords={chooseTranslateWords}
                            arrayIdTranslateWords={arrayIdTranslateWords}
                            taskId={taskId}
                            chooseAnswer={chooseAnswer}
                            choosePositiveAnswer={choosePositiveAnswer}
                            deleteSelectedTask={deleteSelectedTask}
                        />   
                    </div>
            }
            {
                (createExerciseBool && title !== 'Choose theme task' && createWhat === 'exercise') &&
                    <CreateExerciseFormComponent
                        clickCreateExercise={clickCreateExercise}
                        error={error}
                        errorMessage={errorMessage}
                        questionForExercise={questionForExercise}
                        answerForExercise={answerForExercise}
                        showFieldAddImage={showFieldAddImage}
                        setFile={setFile}
                        setDrag={setDrag}
                        drag={drag}
                        arraytTranslateWordsTasks={arraytTranslateWordsTasks}
                    />   
            }
        </div>
    );
};

export default CreateNavBarComponent;
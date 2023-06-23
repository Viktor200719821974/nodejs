import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CreateThemesComponent from '../components/adminPage/CreateThemesComponent';
import {createTheme, getThemes} from '../http/themesApi';
import CreateLessonsComponent from '../components/adminPage/CreateLessonsComponent';
import { createLesson, getLessons } from '../http/lessonsApi';
import { createTask, deleteTask, getTasks, getAllTasks, } from '../http/tasksApi';
import { fetchTasks, fetchAllTasksWithoutFilters, } from '../redux/actions';
import CreateComponent from '../components/adminPage/CreateComponent';
import { createExercise, getExercisesForLesson } from '../http/exercisesApi';
import { 
    arrayIdChoosePositiveAnswerEmpty, arrayChoosePositiveAnswer, arrayIdChoosePositiveAnswer, 
    arrayChoosePositiveAnswerEmpty,
} from '../redux/actions';
import { getModules, createModule } from '../http/modulesApi';
import ArrowBackComponent from '../components/adminPage/subComponents/ArrowBackComponent';
import { LEARN_PAGE } from '../constants';

const AdminPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { tasks } = useSelector(state => state.tasksReducer);
    const { arrayId } = useSelector(state => state.arrayIdChoosePositiveAnswerReducer);
    const { array } = useSelector(state => state.arrayChoosePositiveAnswerReducer);
    const { allTasks } = useSelector(state => state.allTasksWithoutFiltersReducer);
    
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [lessonNumber, setLessonNumber] = useState(0);
    const [themeId, setThemeId] = useState(0);
    const [themes, setThemes] = useState([]);
    const [themeTitle, setThemeTitle] = useState('Choose theme');
    const [dropdown, setDropdown] = useState(false);
    const [chooseImage, setChooseImage] = useState(false);
    const [choosePositiveAnswer, setChoosePositiveAnswer] = useState(false);
    const [chooseAnswer, setChooseAnswer] = useState(false);
    const [chooseMissingWord, setChooseMissingWord] = useState(false);
    const [chooseTranslateWords, setChooseTranslateWords] = useState(false);
    const [file, setFile] = useState(null);
    const [onMouse, setOnMouse] = useState(false);
    const [typeTask, setTypeTask] = useState('');
    const [choose, setChoose] = useState(false);
    const [title, setTitle] = useState('Choose theme task');
    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState('');
    const [word, setWord] = useState('');
    const [onHide, setOnHide] = useState(false);
    const [taskId, setTaskId] = useState(0);
    const [translate, setTranslate] = useState('');
    const [dropdownTypeMenu, setDropdownTypeMenu] = useState(true);
    const [imageExample, setImageExample] = useState('');
    const [drag, setDrag] = useState(false);
    const [dragLeft, setDragLeft] = useState(false);
    const [showComponentCreate, setShowComponentCreate] = useState(false);
    const [createWhat, setCreateWhat] = useState('');
    const [lessons, setLessons] = useState([]);
    const [dropdownMenuLessons, setDropdownMenuLessons] = useState(false);
    const [lessonId, setLessonId] = useState(0);
    const [createExerciseBool, setCreateExerciseBool] = useState(false);
    const [countExecisesLesson, setCountExercisesLesson] = useState(0);
    const [questionForExercise, setQuestionForExercise] = useState('');
    const [answerForExercise, setAnswerForExercise] = useState('');
    const [showFieldAddImage, setShowFieldAddImage] = useState(false);
    const [errorEmptyArrayLessons, setErrorEmptyArrayLessons] = useState(false);
    const [errorEmptyArrayThemes, setErrorEmptyArrayThemes] = useState(false);
    const [errorEmptyArrayLessonsMessage, setErrorEmptyArrayLessonsMessage] = useState('');
    const [errorEmptyArrayThemesMessage, setErrorEmptyArrayThemesMessage] = useState('');
    const [arrayIdTranslateWords, setArrayIdTranslateWords] = useState(null);
    const [page, setPage] = useState(1);
    const [countPage, setCountPage] = useState();
    const [arraytTranslateWordsTasks, setArrayTranslateWordsTasks] = useState([]);
    const [moduleNumber, setModuleNumber] = useState('Choose number of module');
    const [modules, setModules] = useState([]);
    const [dropdownMenuModules, setDropdownMenuModules] = useState(false);
    const [moduleId, setModuleId] = useState(0);
    const [backgroundTheme, setBackgroundTheme] = useState(null);
    const [themeImageLeft, setThemeImageLeft] = useState(null);
    const [themeImageRight, setThemeImageRight] = useState(null);
    
    let numberPage = [];
    for (let i = 1; i <= countPage; i++ ){
        Number(i);
        numberPage.push(i);
    }
    const filterTasksForChooseTranslateWords = (array1, array2) => {
        let arr = [];
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array2.length; j++) {
                if (array1[i].id === array2[j]) {
                    arr.push(array1[i]);
                }
            }
        }
        return arr;
    }
    const filterTasksForChooseTranslateWordsNotEqual = (array1, array2) => {
        array2.forEach(element => {
            array1 = array1.filter(item => item.id !== element);
        });
        return array1;
    }
    const clickCreateTheme = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('background_theme', backgroundTheme);
            formData.append('imageLeft', themeImageLeft);
            formData.append('imageRight', themeImageRight);
            await createTheme(formData).then(data => {
                if (data.status === 201) {
                    setShow(false);
                    setErrorMessage('');
                    setError(false);
                }
            }).catch(err => {
                if (err.response) {
                    setError(true);
                    setErrorMessage(err.response.data);
                }
            });
        } catch (err) {
            console.log(err.message);
        }
    }
    const clickLesson = async (e) => {
        e.preventDefault();
        try {
            if (createWhat === 'lesson') {
                await createLesson(lessonNumber, themeId, moduleId).then(data => {
                    if (data.status === 201) {
                        setShowModal(false);
                        setThemeTitle('Choose theme');
                        setModuleNumber('Choose number of module');
                        setModuleId(0);
                        setError(false);
                        setErrorMessage('');
                    }
                }).catch (err => {
                    if (err.response) {
                        setError(true);
                        setErrorMessage(err.response.data);
                    }
                });
            }
            if (createWhat === 'module') {
                await createModule(moduleNumber, themeId).then(data => {
                    if (data.status === 201) {
                        setShowModal(false);
                        setThemeTitle('Choose theme');
                        setModuleNumber('Choose number of module');
                        setModuleId(0);
                        setError(false);
                        setErrorMessage('');
                    }
                }).catch (err => {
                    if (err.response) {
                        setError(true);
                        setErrorMessage(err.response.data);
                    }
                });
            }
        } catch (err) {
            console.log(err.message);
        }
    }
    const clickCreateModule = async (newTitleTheme, id) => {
        try {
            setThemeTitle(newTitleTheme);
            setThemeId(id);
            setDropdown(false);
        } catch (e) {
            console.log(e.message);
        }
    }
    const clickCreateLesson = async (newModuleNumber, id) => {
        try {
            setModuleNumber(newModuleNumber);
            setModuleId(id);
            setDropdownMenuModules(false);
        } catch (e) {
            console.log(e.message);
        }
    }
    const openCloseDropdownMenu = async () => {
        try {
            if (arrayId.length === 0) {
                setDropdown(value => !value);
                setDropdownMenuModules(false);
                setModuleNumber('Choose number of module');
                setModuleId(0);
                setLessonId(0);
            }
            await getThemes().then(data => {
                if (data.status === 200) {
                    setThemes(data.data);
                    if (data.data.length === 0) {
                        setErrorEmptyArrayThemes(true);
                        setErrorEmptyArrayThemesMessage('There are no created themes')
                    } else {
                        setErrorEmptyArrayThemes(false);
                        setErrorEmptyArrayThemesMessage('');
                    }
                }
            });
        } catch (e) {
            console.log(e.message);
        }
    }
    const openCloseDropdownMenuModules = async () => {
        try {
            setDropdownMenuModules(value => !value);
            setDropdown(false);
            await getModules(themeId).then(data => {
                if (data.status === 200) {
                    setModules(data.data);
                }
            })
        } catch (e) {
            console.log(e.message);
        }
    }
    const closeModalLessonOrModule = () => {
        setShowModal(false);
        setLessonNumber(0);
        setModuleNumber('Choose number of module');
        setThemeTitle('Choose theme');
        setError(false);
        setErrorMessage('');
    }
    const click = async (titleTheme, id) => {
        try {
            setTitle(titleTheme);
            setThemeId(id);
            setDropdown(false);
            setPage(1);
            if (createWhat === 'exercise') {
                await getLessons(id).then(data => {
                    if (data.status === 200) {
                        setLessons(data.data);
                        if (data.data.length === 0) {
                            setErrorEmptyArrayLessons(true);
                            setErrorEmptyArrayLessonsMessage('There are no created lessons');
                        } else {
                            setErrorEmptyArrayLessons(false);
                            setErrorEmptyArrayLessonsMessage('');
                        }
                    }
                });
            }
        } catch (e) {
            console.log(e.message);
        }
    }
    const sendTask = async(e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('question', question);
            formData.append('answer', answer);
            formData.append('themeId', themeId);
            formData.append('chooseImage', chooseImage);
            formData.append('chooseAnswer', chooseAnswer);
            formData.append('choosePositiveAnswer', choosePositiveAnswer);
            formData.append('chooseMissingWord', chooseMissingWord);
            formData.append('chooseTranslateWords', chooseTranslateWords);
            formData.append('word', word);
            formData.append('translate', translate);
            formData.append('translateWordsTasks', arrayId);
            formData.append('image', file);
            
            await createTask(formData).then(data => {
                if (data.status === 201) {
                    setQuestion('');
                    setAnswer('');
                    setWord('');
                    setTranslate('');
                    setError(false);
                    setErrorMessage('');
                    setFile(null);
                    dispatch(dispatch(arrayIdChoosePositiveAnswerEmpty()));
                    dispatch(arrayChoosePositiveAnswerEmpty());
                }
            }).catch(err => {
                setErrorMessage(err.response.data);
                setError(true);
            });
            setDrag(false);
        } catch (e) {
            console.log(e.message);
        }
    }
    const fetchDeleteTask = async() => {
        try {
            await deleteTask(taskId).then(data => {
                if (data.status === 200) {
                    setOnHide(false);
                    setTaskId(0);
                }
            }).catch (err => {
                if (err.response) {
                    setError(true);
                    setErrorMessage(err.response.data);
                }
            });
        } catch (e) {
            console.log(e.message);
        }
    }
    const functionBackOnLearnPage = () => {
        navigate(LEARN_PAGE);
    }
    const functionBack = () => {
        setShowComponentCreate(false);
        setCreateWhat('');
        setTypeTask('');
        setTitle('Choose theme task');
        setChoose(false);
        setThemeId(0);
        setLessonId(0);
        setLessonNumber(0);
        setDropdownMenuLessons(false);
        setCreateExerciseBool(false);
        setTaskId(0);
        dispatch(dispatch(arrayIdChoosePositiveAnswerEmpty()));
        dispatch(arrayChoosePositiveAnswerEmpty());
        setPage(1);
    }
    const openCloseDropdownMenuLessons = () => {
        setDropdownMenuLessons(value => !value);
    }
    const chooseLesson = (number, id) => {
        try {
            setLessonNumber(number);
            setLessonId(id);
            setDropdownMenuLessons(false);
        } catch (e) {
            console.log(e.message);
        }
    }
    const clickCreateExercise = async () => {
        try {
            const formData = new FormData();
            formData.append('lessonId', lessonId);
            formData.append('taskId', taskId);
            formData.append('image', file);
            await createExercise(formData).then(data => {
                if (data.status === 201) {
                    setCreateExerciseBool(false);
                    setTaskId(0);
                    setError(false);
                    setErrorMessage('');
                    setArrayTranslateWordsTasks([]);
                }
            }).catch(err => {
                if (err.response) {
                    setError(true);
                    setErrorMessage(err.response.data);
                }
            });
        } catch (e) {
            console.log(e.message);
        }
    }
    const clickMenuCreateExercise = (id, questionTask, answerTask, choosePositiveAnswerValue) => {
        if (lessonId !== 0) {
            setCreateExerciseBool(true);
            setTaskId(id);
            setQuestionForExercise(questionTask);
            setAnswerForExercise(answerTask);
            if (createWhat === 'exercise') {
                const task = allTasks.filter(c => c.id === id);
                const chooseTranslateWordsTrue = task.map(c => c.chooseTranslateWords)[0];
                if (chooseTranslateWordsTrue) {
                    const arrayTasks = task.map(c => c.translatewordsTasks)[0];
                    setArrayTranslateWordsTasks(filterTasksForChooseTranslateWords(allTasks, arrayTasks));
                }
            }   
        }
        if (createWhat === 'task') {
            arrayId.push(id);
        }
        if (chooseTranslateWords && arrayId.length > 0 && createWhat === 'task') {
            array.push(tasks.filter(c => c.id === id)[0]);
            dispatch(fetchTasks(filterTasksForChooseTranslateWordsNotEqual(tasks, arrayId)));
            setArrayIdTranslateWords(array);
        }
        if (choosePositiveAnswerValue) {
            setShowFieldAddImage(true);
        } else {
            setShowFieldAddImage(false);
        }
    }
    const deleteSelectedTask = (id) => {
        tasks.push(array.filter(c => c.id === id)[0]);
        dispatch(arrayIdChoosePositiveAnswer(arrayId.filter(c => c !== id)));
        dispatch(arrayChoosePositiveAnswer(filterTasksForChooseTranslateWords(array, arrayId.filter(c => c !== id))));
        setArrayIdTranslateWords(filterTasksForChooseTranslateWords(array, arrayId.filter(c => c !== id)));
    }
    const functionPrev = () => {
        if (page > 1)  {
            setPage(() => page - 1);
        }
    }
    const functionNext = () => {
        if (page !== countPage) {
            setPage(() => page + 1);
        }
    }
    useEffect(() => {
        let active = true;
        if (active) {
            if (typeTask === 'Choose image') {
                setChooseImage(true);
            } else {
                setChooseImage(false);
            }
            if (typeTask === 'Choose true answer') {
                setChoosePositiveAnswer(true);
            } else {
                setChoosePositiveAnswer(false);
            }
            if (typeTask === 'Choose answer') {
                setChooseAnswer(true);
            } else {
                setChooseAnswer(false);
            }
            if (typeTask === 'Choose missing word') {
                setChooseMissingWord(true);
            } else {
                setChooseMissingWord(false);
            }
            if (typeTask === 'Choose translate words') {
                setChooseTranslateWords(true);
            } else {
                setChooseTranslateWords(false);
            }
            if (!choose && showComponentCreate && !createExerciseBool ) {
                setTypeTask('');
                setAnswer('');
                setWord('');
                setQuestion('');
                setErrorMessage('');
                setError(false);
                // setTaskId(0);
                dispatch(dispatch(arrayIdChoosePositiveAnswerEmpty()));
                dispatch(arrayChoosePositiveAnswerEmpty());
                setArrayIdTranslateWords([]);
            }
            if (dropdown) {
                setDropdownMenuLessons(false);
                setLessonNumber(0);
                setCreateExerciseBool(false);
                setLessonId(0);
            }
            if (arrayId.length === 0 && chooseTranslateWords) {
                setTaskId(0);
            }
            if (document.getElementById('exerciseForm') === null && arraytTranslateWordsTasks.length === 0) {
                setCreateExerciseBool(false);
            }
        }
        const fetchTasksFunc = async () => {
            try {
                await getTasks(
                    themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord, chooseTranslateWords,
                    question, answer, word, lessonId, taskId, page, createWhat,
                ).then(data => {
                    if (data.status === 200 && data.data.rows !== undefined) {
                        if(arrayId.length === 0) {
                            dispatch(fetchTasks(data.data.rows));
                        }
                        if (data.data.count && data.data.perPage){
                            let count = Number(data.data.count);
                            let perPage = Number(data.data.perPage);
                            setCountPage(Math.ceil(count/perPage));
                        }
                        if (data.data.count === 0) {
                            setCountPage(0);
                        }
                    }
                });
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchTasksFunc().then();
        const fetchExercisesForLesson = async (id) => {
            try {
                await getExercisesForLesson(id).then(data => {
                    if (data.status === 200) {      
                        setCountExercisesLesson(data.data.length);
                    }
                });
            } catch (e) {
                console.log(e.message);
            }
        }
        const fetchAllTasks = async () => {
            try {
                getAllTasks().then(data => {
                    if (data.status === 200) {
                        dispatch(fetchAllTasksWithoutFilters(data.data));
                    }
                });
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchAllTasks().then();
        if (lessonId !== 0) {
            fetchExercisesForLesson(lessonId).then();
        }
        return () => {
            active = false;
        };
    // eslint-disable-next-line
    },[ 
        show, title, errorMessage, error, showModal, themeId, themeTitle, dropdown, typeTask, chooseImage, 
        choosePositiveAnswer, chooseAnswer, chooseMissingWord, chooseTranslateWords, choose, lessonNumber,
        dropdown, answer, question, word, tasks.length, onHide, taskId, translate, dropdownTypeMenu, imageExample, 
        file, drag, showComponentCreate, createWhat, dropdownMenuLessons, lessons, lessonId, createExerciseBool,
        countExecisesLesson, questionForExercise, answerForExercise, showFieldAddImage, errorEmptyArrayLessons,
        errorEmptyArrayThemes, errorEmptyArrayLessonsMessage, errorEmptyArrayThemesMessage, arrayId.length, page, countPage,
        arraytTranslateWordsTasks, moduleNumber, modules, dropdownMenuModules, moduleId, backgroundTheme, themeImageLeft,
        themeImageRight, dragLeft,
    ]);
    return (
        <div className={"adminPage_main_div display_alien_justify"}>
            <div className="adminPage_div_button_back">
                <ArrowBackComponent functionBack={functionBackOnLearnPage}/>
            </div>
            
            <div
                className={"adminPage_div_type_button"}
                onClick={ () => setShow(true) }
            >
                Create themes
            </div>
            <div
                className={"adminPage_div_type_button"}
                onClick={() => {
                    setShowModal(true); 
                    setCreateWhat('module')
                }}
            >
                Create modules
            </div>
            <div
                className={"adminPage_div_type_button"}
                onClick={() => {
                    setShowModal(true); 
                    setCreateWhat('lesson')
                }}
            >
                Create lessons
            </div>
            <div
                className={"adminPage_div_type_button"}
                onClick={() => {
                    setCreateWhat('task'); 
                    setShowComponentCreate(true);
                }}
            >
                Create tasks
            </div>
            <div
                className={"adminPage_div_type_button"}
                onClick={() => {
                    setCreateWhat('exercise'); 
                    setShowComponentCreate(true);
                }}
            >
                Create exercises
            </div>
            {
                show &&
                    <CreateThemesComponent
                        show={show}
                        onHide={() => setShow(false)}
                        title={title}
                        setTitle={setTitle}
                        click={clickCreateTheme}
                        error={error}
                        errorMessage={errorMessage}
                        setBackgroundTheme={setBackgroundTheme}
                        setThemeImageLeft={setThemeImageLeft}
                        setThemeImageRight={setThemeImageRight}
                        setDrag={setDrag}
                        drag={drag}
                        setDragLeft={setDragLeft}
                        dragLeft={dragLeft}
                    />
            }
            {
                showModal && 
                    <CreateLessonsComponent
                        show={showModal}
                        closeModalLessonOrModule={closeModalLessonOrModule}
                        setLessonNumber={setLessonNumber}
                        clickLesson={clickLesson}
                        error={error}
                        errorMessage={errorMessage}
                        themes={themes}
                        themeTitle={themeTitle}
                        dropdown={dropdown}
                        clickCreateLesson={clickCreateLesson}
                        openCloseDropdownMenu={openCloseDropdownMenu}
                        createWhat={createWhat}
                        setModuleNumber={setModuleNumber}
                        openCloseDropdownMenuModules={openCloseDropdownMenuModules}
                        modules={modules}
                        moduleNumber={moduleNumber}
                        dropdownMenuModules={dropdownMenuModules}
                        clickCreateModule={clickCreateModule}
                    />
            }
            {
                showComponentCreate && 
                    <CreateComponent
                        typeTask={typeTask} 
                        chooseImage={chooseImage} 
                        chooseMissingWord={chooseMissingWord} 
                        choose={choose}
                        dropdown={dropdown} 
                        answer={answer} 
                        question={question} 
                        title={title} 
                        word={word} 
                        onHide={onHide} 
                        error={error} 
                        errorMessage={errorMessage} 
                        tasks={tasks} 
                        setOnHide={setOnHide} 
                        setTaskId={setTaskId}
                        translate={translate} 
                        dropdownTypeMenu={dropdownTypeMenu} 
                        imageExample={imageExample} 
                        drag={drag} 
                        themes={themes} 
                        setFile={setFile} 
                        setDrag={setDrag} 
                        setDropdown={setDropdown} 
                        setChoose={setChoose} 
                        setQuestion={setQuestion} 
                        setAnswer={setAnswer} 
                        setWord={setWord} 
                        setDropdownTypeMenu={setDropdownTypeMenu} 
                        onMouse={onMouse} 
                        setTypeTask={setTypeTask} 
                        setImageExample={setImageExample} 
                        setOnMouse={setOnMouse} 
                        setTranslate={setTranslate} 
                        click={click} 
                        openCloseDropdownMenu={openCloseDropdownMenu} 
                        sendTask={sendTask} 
                        fetchDeleteTask={fetchDeleteTask}
                        createWhat={createWhat}
                        functionBack={functionBack}
                        dropdownMenuLessons={dropdownMenuLessons}
                        lessons={lessons}
                        openCloseDropdownMenuLessons={openCloseDropdownMenuLessons}
                        chooseLesson={chooseLesson}
                        lessonNumber={lessonNumber}
                        createExerciseBool={createExerciseBool}
                        clickCreateExercise={clickCreateExercise}
                        lessonId={lessonId}
                        countExecisesLesson={countExecisesLesson}
                        questionForExercise={questionForExercise}
                        clickMenuCreateExercise={clickMenuCreateExercise}
                        answerForExercise={answerForExercise}
                        showFieldAddImage={showFieldAddImage}
                        errorEmptyArrayLessons={errorEmptyArrayLessons}
                        errorEmptyArrayThemes={errorEmptyArrayThemes}
                        errorEmptyArrayLessonsMessage={errorEmptyArrayLessonsMessage}
                        errorEmptyArrayThemesMessage={errorEmptyArrayThemesMessage}
                        chooseTranslateWords={chooseTranslateWords}
                        taskId={taskId}
                        arrayIdTranslateWords={arrayIdTranslateWords}
                        chooseAnswer={chooseAnswer}
                        choosePositiveAnswer={choosePositiveAnswer}
                        themeId={themeId}
                        deleteSelectedTask={deleteSelectedTask}
                        numberPage={numberPage}
                        page={page}
                        setPage={setPage}
                        functionPrev={functionPrev}
                        functionNext={functionNext}
                        countPage={countPage}
                        arraytTranslateWordsTasks={arraytTranslateWordsTasks}
                        moduleId={moduleId}
                        modules={modules} 
                        dropdownMenuModules={dropdownMenuModules} 
                        clickCreateLesson={clickCreateLesson} 
                        moduleNumber={moduleNumber}
                        openCloseDropdownMenuModules={openCloseDropdownMenuModules}
                    />
            }
        </div>
    );
};

export default AdminPage;
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateThemesComponent from '../components/adminPage/CreateThemesComponent';
import {createTheme, getThemes} from '../http/themesApi';
import CreateLessonsComponent from '../components/adminPage/CreateLessonsComponent';
import { createLesson, getLessons } from '../http/lessonsApi';
import { createTask, deleteTask, getTasks } from '../http/tasksApi';
import { fetchTasks } from '../redux/actions';
import CreateComponent from '../components/adminPage/CreateComponent';
import { createExercise, getExercisesForLesson } from '../http/exercisesApi';

const AdminPage = () => {
    const dispatch = useDispatch();
    let { tasks } = useSelector(state => state.tasksReducer);

    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [lessonNumber, setLessonNumber] = useState(0);
    const [themeId, setThemeId] = useState();
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
    const [word, setWord] = useState(null);
    const [onHide, setOnHide] = useState(false);
    const [taskId, setTaskId] = useState(0);
    const [translate, setTranslate] = useState('');
    const [dropdownTypeMenu, setDropdownTypeMenu] = useState(true);
    const [imageExample, setImageExample] = useState('');
    const [drag, setDrag] = useState(false);
    const [showComponentCreate, setShowComponentCreate] = useState(false);
    const [createWhat, setCreateWhat] = useState('');
    const [lessons, setLessons] = useState([]);
    const [dropdownMenuLessons, setDropdownMenuLessons] = useState(false);
    const [lessonId, setLessonId] = useState(0);
    const [createExerciseBool, setCreateExerciseBool] = useState(false);
    const [countExecisesLesson, setCountExercisesLesson] = useState(0);
    // const [arrayNumber, setArrayNumber] = useState([]);
    // console.log(taskId);
    // let merged = [].concat(...arrayNumber);
    // console.log(merged);
    const clickCreateTheme = async (e) => {
        e.preventDefault();
        try {
            await createTheme(title).then(data => {
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
            await createLesson(lessonNumber, themeId).then(data => {
                if (data.status === 201) {
                    setShowModal(false);
                    setError(false);
                    setErrorMessage('');
                }
            }).catch (err => {
                console.log(err);
                if (err.response) {
                    setError(true);
                    setErrorMessage(err.response.data);
                }
            });
        } catch (err) {
            console.log(err.message);
        }
    }
    const clickCreateLesson = async (newTitleTheme, id) => {
        try {
            setThemeTitle(newTitleTheme);
            setThemeId(id);
            setDropdown(false);
        } catch (e) {
            console.log(e.message);
        }
    }
    const openCloseDropdownMenu = async () => {
        try {
            setDropdown(value => !value);
            await getThemes().then(data => {
                if (data.status === 200) {
                    setThemes(data.data);
                }
            });
        } catch (e) {
            console.log(e.message);
        }
    }
    const click = async (titleTheme, id) => {
        try {
            setTitle(titleTheme);
            setThemeId(id);
            setDropdown(false);
            if (createWhat === 'exercise') {
                await getLessons(id).then(data => {
                    if (data.status === 200) {
                        setLessons(data.data);
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
            formData.append('image', file);
            await createTask(formData).then(data => {
                if (data.status === 201) {
                    setQuestion('');
                    setAnswer('');
                    setWord('');
                    setError(false);
                    setErrorMessage('');
                    setFile(null);
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
    const functionBack = () => {
        setShowComponentCreate(false);
        setCreateWhat('');
        setTypeTask('');
        setTitle('Choose theme task');
        setChoose(false);
        setThemeId();
        setLessonId(0);
        setLessonNumber(0);
        setDropdownMenuLessons(false);
        setCreateExerciseBool(false);
        setTaskId(0);
        // setArrayNumber([]);
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
            await createExercise(lessonId, taskId).then(data => {
                if (data.status === 201) {
                    setCreateExerciseBool(false);
                    setTaskId(0);
                    // setLessonId(0);
                    setError(false);
                    setErrorMessage('');
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
            }
            if (dropdown) {
                setDropdownMenuLessons(false);
                setLessonNumber(0);
                setCreateExerciseBool(false);
                setLessonId(0);
            }
            if (document.getElementById('exerciseForm') === null) {
                setCreateExerciseBool(false);
            }
        }
        const fetchTasksFunc = async () => {
            try {
                await getTasks(
                    themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord, chooseTranslateWords,
                    question, answer, word,
                ).then(data => {
                    if (data.status === 200) {
                        dispatch(fetchTasks(data.data));
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
                        // setArrayNumber(data.data.map(c => c.tasks));
                    }
                });
            } catch (e) {
                console.log(e.message);
            }
        }
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
        countExecisesLesson,
    ]);
    return (
        <div className={"adminPage_main_div display_alien_justify"}>
            <div
                className={"adminPage_div_type_button"}
                onClick={ () => setShow(true) }
            >
                Create themes
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
                    />
            }
            <div
                className={"adminPage_div_type_button"}
                onClick={() => setShowModal(true)}
            >
                Create lessons
            </div>
            {
                showModal && 
                    <CreateLessonsComponent
                        show={showModal}
                        onHide={() => setShowModal(false)}
                        lessonNumber={lessonNumber}
                        setLessonNumber={setLessonNumber}
                        clickLesson={clickLesson}
                        error={error}
                        errorMessage={errorMessage}
                        themes={themes}
                        themeTitle={themeTitle}
                        dropdown={dropdown}
                        clickCreateLesson={clickCreateLesson}
                        openCloseDropdownMenu={openCloseDropdownMenu}
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
                        taskId={taskId} 
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
                        setCreateExerciseBool={setCreateExerciseBool}
                        clickCreateExercise={clickCreateExercise}
                        lessonId={lessonId}
                        countExecisesLesson={countExecisesLesson}
                    />
            }
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
        </div>
    );
};

export default AdminPage;
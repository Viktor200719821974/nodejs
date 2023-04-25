// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';

// import { getThemes } from '../../http/themesApi';
// import { createTask, deleteTask, getTasks } from '../../http/tasksApi';
// import { fetchTasks } from '../../redux/actions';
import CreateTasksBodyComponent from './subCreateTaskComponents/CreateTasksBodyComponent';
import CreateNavBarComponent from './subComponents/CreateNavBarComponent';

const CreateComponent = ({
    typeTask, chooseImage, chooseMissingWord, choose,
    dropdown, answer, question, title, word, onHide, taskId, error, errorMessage, tasks, setOnHide, setTaskId,
    translate, dropdownTypeMenu, imageExample, drag, themes, setFile, setDrag, setChoose,  lessonNumber,
    setQuestion, setAnswer, setWord, setDropdownTypeMenu, onMouse, setTypeTask, setImageExample, setOnMouse, 
    setTranslate, click, openCloseDropdownMenu, sendTask, fetchDeleteTask, createWhat, functionBack,
    dropdownMenuLessons, lessons, chooseLesson, openCloseDropdownMenuLessons,
}) => {
    // const dispatch = useDispatch();
    // const { tasks } = useSelector(state => state.tasksReducer);
    // const location = useLocation();
    
    // const [chooseImage, setChooseImage] = useState(false);
    // const [choosePositiveAnswer, setChoosePositiveAnswer] = useState(false);
    // const [chooseAnswer, setChooseAnswer] = useState(false);
    // const [chooseMissingWord, setChooseMissingWord] = useState(false);
    // const [chooseTranslateWords, setChooseTranslateWords] = useState(false);
    // const [file, setFile] = useState(null);
    // const [onMouse, setOnMouse] = useState(false);
    // const [typeTask, setTypeTask] = useState('');
    // const [choose, setChoose] = useState(false);
    // const [dropdown, setDropdown] = useState(false);
    // const [themes, setThemes] = useState(null);
    // const [title, setTitle] = useState('Choose theme task');
    // const [answer, setAnswer] = useState('');
    // const [question, setQuestion] = useState('');
    // const [themeId, setThemeId] = useState();
    // const [word, setWord] = useState(null);
    // const [onHide, setOnHide] = useState(false);
    // const [taskId, setTaskId] = useState(0);
    // const [error, setError] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');
    // const [translate, setTranslate] = useState('');
    // const [dropdownTypeMenu, setDropdownTypeMenu] = useState(true);
    // const [imageExample, setImageExample] = useState('');
    // const [drag, setDrag] = useState(false);
    // const [createBool, setCreateBool] = useState(false);
    
    // const click = async (titleTheme, id) => {
    //     try {
    //         setTitle(titleTheme);
    //         setThemeId(id);
    //         setDropdown(false);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }
    // const sendTask = async(e) => {
    //     e.preventDefault();
    //     try {
    //         const formData = new FormData();
    //         formData.append('question', question);
    //         formData.append('answer', answer);
    //         formData.append('themeId', themeId);
    //         formData.append('chooseImage', chooseImage);
    //         formData.append('chooseAnswer', chooseAnswer);
    //         formData.append('choosePositiveAnswer', choosePositiveAnswer);
    //         formData.append('chooseMissingWord', chooseMissingWord);
    //         formData.append('chooseTranslateWords', chooseTranslateWords);
    //         formData.append('word', word);
    //         formData.append('translate', translate);
    //         formData.append('image', file);
    //         await createTask(formData).then(data => {
    //             if (data.status === 201) {
    //                 setQuestion('');
    //                 setAnswer('');
    //                 setWord('');
    //                 setError(false);
    //                 setErrorMessage('');
    //                 setFile(null);
    //             }
    //         }).catch(err => {
    //             setErrorMessage(err.response.data);
    //             setError(true);
    //         });
    //         setDrag(false);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }
    // const openCloseDropdownMenu = async () => {
    //     try {
    //         setDropdown(value => !value);
    //         await getThemes().then(data => {
    //             if (data.status === 200) {
    //                 setThemes(data.data);
    //             }
    //         });
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }
    // const fetchDeleteTask = async() => {
    //     try {
    //         await deleteTask(taskId).then(data => {
    //             if (data.status === 200) {
    //                 setOnHide(false);
    //             }
    //         }).catch (err => console.log(err));
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }
    // useEffect(() => {
    //     // const fetchTasksFunc = async () => {
    //     //     try {
    //     //         await getTasks(
    //     //             themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord, chooseTranslateWords,
    //     //             question, answer, word,
    //     //         ).then(data => {
    //     //             if (data.status === 200) {
    //     //                 dispatch(fetchTasks(data.data));
    //     //             }
    //     //         });
    //     //     } catch (e) {
    //     //         console.log(e.message);
    //     //     }
    //     // }
    //     // fetchTasksFunc().then();
    //     // if (typeTask === 'Choose image') {
    //     //     setChooseImage(true);
    //     // } else {
    //     //     setChooseImage(false);
    //     // }
    //     // if (typeTask === 'Choose true answer') {
    //     //     setChoosePositiveAnswer(true);
    //     // } else {
    //     //     setChoosePositiveAnswer(false);
    //     // }
    //     // if (typeTask === 'Choose answer') {
    //     //     setChooseAnswer(true);
    //     // } else {
    //     //     setChooseAnswer(false);
    //     // }
    //     // if (typeTask === 'Choose missing word') {
    //     //     setChooseMissingWord(true);
    //     // } else {
    //     //     setChooseMissingWord(false);
    //     // }
    //     // if (typeTask === 'Choose translate words') {
    //     //     setChooseTranslateWords(true);
    //     // } else {
    //     //     setChooseTranslateWords(false);
    //     // }
    //     // if (!choose) {
    //     //     setTypeTask('');
    //     //     setAnswer('');
    //     //     setWord('');
    //     //     setQuestion('');
    //     //     setErrorMessage('');
    //     //     setError(false);
    //     // }
    //     // if (location.state.create === 'tasks') {
    //     //     setCreateBool(true);
    //     // } else {
    //     //     setCreateBool(false);
    //     // }
    //     // eslint-disable-next-line
    // },[
    //     typeTask, chooseImage, choosePositiveAnswer, chooseAnswer, chooseMissingWord, chooseTranslateWords, choose,
    //     dropdown, answer, question, title, word, themeId, tasks.length, onHide, taskId, error, errorMessage, 
    //     translate, dropdownTypeMenu, imageExample, file, drag, createBool,
    // ]);
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
            />
            <CreateTasksBodyComponent
                tasks={tasks}
                taskId={taskId}
                setOnHide={setOnHide}
                setTaskId={setTaskId}
                onHide={onHide}
                fetchDeleteTask={fetchDeleteTask}
                title={title}
            />
        </div>
    );
};

export default CreateComponent;
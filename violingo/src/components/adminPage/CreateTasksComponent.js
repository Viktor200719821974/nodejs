import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdArrowDropdown } from 'react-icons/io';

import { getThemes } from '../../http/themesApi';
import { createTask, deleteTask, getTasks } from '../../http/tasksApi';
import DropDownMenuComponent from './subComponents/DropDownMenuComponent';
import ArrowBackComponent from './subComponents/ArrowBackComponent';
import ChooseTypeTaskComponent from './subComponents/ChooseTypeTaskComponent';
import CreateTaskFormComponent from './subCreateTaskComponents/CreateTaskFormComponent';
import { fetchTasks } from '../../redux/actions';
import cross from '../../icons/cross-closedModal.svg';
import DeleteTaskModalComponent from './subCreateTaskComponents/DeleteTaskModalComponent';

const CreateTasksComponent = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector(state => state.tasksReducer);
    
    const [chooseImage, setChooseImage] = useState(false);
    const [choosePositiveAnswer, setChoosePositiveAnswer] = useState(false);
    const [chooseAnswer, setChooseAnswer] = useState(false);
    const [chooseMissingWord, setChooseMissingWord] = useState(false);
    const [chooseTranslateWords, setChooseTranslateWords] = useState(false);
    const [image, setImage] = useState('');
    const [onMouse, setOnMouse] = useState(false);
    const [typeTask, setTypeTask] = useState('');
    const [choose, setChoose] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [themes, setThemes] = useState(null);
    const [title, setTitle] = useState('Choose theme task');
    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState('');
    const [themeId, setThemeId] = useState();
    const [word, setWord] = useState(null);
    const [onHide, setOnHide] = useState(false);
    const [taskId, setTaskId] = useState(0);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [translate, setTranslate] = useState('');
    const [dropdownTypeMenu, setDropdownTypeMenu] = useState(true);

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
    const click = async (titleTheme, id) => {
        try {
            setTitle(titleTheme);
            setThemeId(id);
            setDropdown(false);
        } catch (e) {
            console.log(e.message);
        }
    }
    const sendTask = async(e) => {
        e.preventDefault();
        try {
            await createTask(
                question, answer, themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord,
                chooseTranslateWords, word, translate,
            ).then(data => {
                if (data.status === 201) {
                    setQuestion('');
                    setAnswer('');
                    setWord('');
                    setError(false);
                    setErrorMessage('');
                }
            }).catch(err => {
                setErrorMessage(err.response.data);
                setError(true);
            });
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
    const fetchDeleteTask = async(id) => {
        try {
            await deleteTask(taskId).then(data => {
                if (data.status === 200) {
                    setOnHide(false);
                }
            }).catch (err => console.log(err));
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        fetchTasksFunc().then();
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
        if (!choose) {
            setTypeTask('');
            setAnswer('');
            setWord('');
            setQuestion('');
        }
        // eslint-disable-next-line
    },[
        typeTask, chooseImage, choosePositiveAnswer, chooseAnswer, chooseMissingWord, chooseTranslateWords, choose,
        image, dropdown, answer, question, title, word, themeId, tasks.length, onHide, taskId, error, errorMessage, 
        translate, dropdownTypeMenu,
    ]);
    return (
        <div className={"adminPage_main_div_createComponent"}>
            <div className={"adminPage_div_navBar_createComponent"}>
                <ArrowBackComponent/>
                <h2 className={"adminPage_h2_navBar_createComponent"}>Create task:</h2>
                <DropDownMenuComponent
                    dropdown={dropdown}
                    setDropdown={setDropdown}
                    themes={themes}
                    click={click}
                    title={title}
                    openCloseDropdownMenu={openCloseDropdownMenu}
                />
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
                                            setImage={setImage}
                                            setOnMouse={setOnMouse}
                                            image={image}
                                            onMouse={onMouse}
                                        />  
                                    </div>
                            }
                        </div>
                }
                <div className={"adminPage_main_div_form_createComponent display_alien_justify"}>
                    {
                        choose &&
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
                            />
                    }
                </div>
            </div>
            <div className={"adminPage_div_body_createComponent"}>
                <h1 className={"adminPage_h1_title_createComponent"}>{title}</h1>
                    {                
                        tasks.length === 0 &&
                            <h2 className={"adminPage_h2_no_tasks_createComponent"}>
                                No tasks
                            </h2>
                    }
                
                <div className={"adminPage_main_div_question_answer_createComponent"}>
                    {
                        tasks.length > 0 &&
                            tasks.map(c =>
                                <div key={c.id} className={"adminPage_div_question_answer_createComponent"}>
                                    <div
                                        className="adminPage_div_image_cross_createTasksComponent display_alien_justify"
                                        onClick={() => {
                                            setOnHide(true);
                                            setTaskId(c.id);
                                        }}
                                        >
                                        <img 
                                            src={cross} 
                                            alt="cross open modal"
                                            className="adminPage_image_cross_createTasksComponent"
                                        />
                                    </div>
                                    <span><b>Question:</b> {c.question}</span>
                                    <span><b>Answer:</b> {c.answer}</span>
                                    {
                                        onHide &&
                                            <div className="adminPage_modal_window_delete display_alien_justify">
                                                <DeleteTaskModalComponent 
                                                    id={taskId} 
                                                    fetchDeleteTask={fetchDeleteTask} 
                                                    setOnHide={setOnHide}
                                                />
                                            </div>
                                    }
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default CreateTasksComponent;
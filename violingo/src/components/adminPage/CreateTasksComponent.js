import { useEffect, useState } from 'react';

import { getThemes } from '../../http/themesApi';
import { createTask, getTasks } from '../../http/tasksApi';
import DropDownMenuComponent from './subComponents/DropDownMenuComponent';
import ArrowBackComponent from './subComponents/ArrowBackComponent';
import ChooseTypeTaskComponent from './subComponents/ChooseTypeTaskComponent';
import CreateChooseAnswerComponent from './subCreateTaskComponents/CreateChooseAnswerComponent';

const CreateTasksComponent = () => {
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
    const [arrayTasks, setArrayTasks] = useState([]);
    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState('');
    const [themeId, setThemeId] = useState();

    const filterTasks = arrayTasks.filter(c => c.themeId === themeId);
    const click = (titleTheme, id) => {
        try {
            setTitle(titleTheme);
            setThemeId(id);
        } catch (e) {
            console.log(e.message);
        }
    }
    const sendTask = (e) => {
        e.preventDefault();
        try {
            createTask(
                question, answer, themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord,
                chooseTranslateWords,
            ).then(data => {
                if (data.status === 201) {
                    setQuestion('');
                    setAnswer('');
                }
            }).catch(err => {
                console.log(err);
            });
        } catch (e) {
            console.log(e.message);
        }
    }
    const fetchTasks = async () => {
        await getTasks().then(data => {
            if (data.status === 200) {
                setArrayTasks(data.data);
            }
        });
    }
    const fetchThemes = async () => {
        await getThemes().then(data => {
            if (data.status === 200) {
                setThemes(data.data);
                // console.log(data);
            }
        });
    }
    useEffect(() => {
        fetchThemes().then();
        fetchTasks().then();
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
        }
    },[
        typeTask, chooseImage, choosePositiveAnswer, chooseAnswer, chooseMissingWord, chooseTranslateWords, choose,
        onMouse, image, dropdown, answer, question, title,
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
                />
                {
                    title !== '' &&
                        <div className={"adminPage_main_div_chooseTypeTaskComponent"}>
                            <h3 className={"adminPage_h3_navBar_createComponent"}>Choose type task:</h3>
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
                <div className={"adminPage_main_div_form_createComponent display_alien_justify"}>
                    {
                        chooseAnswer &&
                            <CreateChooseAnswerComponent
                                question={question}
                                setQuestion={setQuestion}
                                answer={answer}
                                setAnswer={setAnswer}
                                sendTask={sendTask}
                            />
                    }
                </div>
            </div>
            <div className={"adminPage_div_body_createComponent"}>
                <h1 className={"adminPage_h1_title_createComponent"}>{title}</h1>
                {
                    (filterTasks.length === 0 && title !== '') &&
                        <h2 className={"adminPage_h2_no_tasks_createComponent"}>
                            No tasks
                        </h2>
                }
                {
                    filterTasks.length > 0 &&
                        filterTasks.map(c =>
                            <div>
                                <span>{c.question}</span>
                                <span>{c.answer}</span>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default CreateTasksComponent;
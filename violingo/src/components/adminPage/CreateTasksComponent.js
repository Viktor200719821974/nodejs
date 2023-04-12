import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getThemes } from '../../http/themesApi';
import { createTask, getTasks } from '../../http/tasksApi';
import DropDownMenuComponent from './subComponents/DropDownMenuComponent';
import ArrowBackComponent from './subComponents/ArrowBackComponent';
import ChooseTypeTaskComponent from './subComponents/ChooseTypeTaskComponent';
import CreateChooseTypeComponent from './subCreateTaskComponents/CreateChooseTypeComponent';
import { fetchTasks } from '../../redux/actions';

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
    const [word, setWord] = useState('');

    // const filterTasks = tasks.filter(c => c.themeId === themeId);
    // const filterTasksForType = filterTasks.filter(c => c.chooseImage === chooseImage)
    //     .filter(c => c.chooseAnswer === chooseAnswer)
    //     .filter(c => c.choosePositiveAnswer === choosePositiveAnswer)
    //     .filter(c => c.chooseMissingWord === chooseMissingWord)
    //     .filter(c => c.chooseTranslateWords === chooseTranslateWords);
    const fetchTasksFunc = async () => {
        try {
            await getTasks(
                themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord, chooseTranslateWords
            ).then(data => {
                console.log(data);
                if (data.status === 200) {
                    // setArrayTasks(data.data);
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
            // await getTasks().then(data => {
            //     if (data.status === 200) {
            //         setArrayTasks(data.data);
            //     }
            // });
            setDropdown(false);
        } catch (e) {
            console.log(e.message);
        }
    }
    const sendTask = (e) => {
        e.preventDefault();
        try {
            createTask(
                question, answer, themeId, chooseImage, chooseAnswer, choosePositiveAnswer, chooseMissingWord,
                chooseTranslateWords, word,
            ).then(async data => {
                if (data.status === 201) {
                    setQuestion('');
                    setAnswer('');
                    setWord('');
                    // await getTasks().then(item => {
                    //     if (item.status === 200) {
                    //         dispatch(fetchTasks(item.data));
                    //     }
                    // });
                }
            }).catch(err => {
                console.log(err);
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
    },[
        typeTask, chooseImage, choosePositiveAnswer, chooseAnswer, chooseMissingWord, chooseTranslateWords, choose,
        image, dropdown, answer, question, title, word, themeId,
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
                        choose &&
                            <CreateChooseTypeComponent
                                question={question}
                                setQuestion={setQuestion}
                                answer={answer}
                                setAnswer={setAnswer}
                                sendTask={sendTask}
                                setWord={setWord}
                                chooseMissingWord={chooseMissingWord}
                                word={word}
                            />
                    }
                </div>
            </div>
            <div className={"adminPage_div_body_createComponent"}>
                <h1 className={"adminPage_h1_title_createComponent"}>{title}</h1>
                {/*{*/}
                {/*    ((filterTasks.length === 0 && title !== 'Choose theme task' && typeTask === '') ||*/}
                {/*        (tasks.length === 0 && title === 'Choose theme task') ||*/}
                {/*        (filterTasksForType.length === 0 && typeTask !== '' && title !== 'Choose theme task')) &&*/}
                {/*        <h2 className={"adminPage_h2_no_tasks_createComponent"}>*/}
                {/*            No tasks*/}
                {/*        </h2>*/}
                {/*}*/}
                <div className={"adminPage_main_div_question_answer_createComponent"}>
                    {
                        // (tasks.length > 0 && typeTask === '' && title === 'Choose theme task') &&
                            tasks.map(c =>
                                <div key={c.id} className={"adminPage_div_question_answer_createComponent"}>
                                    <span><b>Question:</b> {c.question}</span>
                                    <span><b>Answer:</b> {c.answer}</span>
                                </div>
                            )
                    }
                    {/*{*/}
                    {/*    (filterTasks.length > 0 && typeTask === '' && title !== 'Choose theme task') &&*/}
                    {/*        filterTasks.map(c =>*/}
                    {/*            <div key={c.id} className={"adminPage_div_question_answer_createComponent"}>*/}
                    {/*                <span><b>Question:</b> {c.question}</span>*/}
                    {/*                <span><b>Answer:</b> {c.answer}</span>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    (filterTasksForType.length > 0 && typeTask !== '' && title !== 'Choose theme task') &&*/}
                    {/*        filterTasksForType.map(c =>*/}
                    {/*            <div key={c.id} className={"adminPage_div_question_answer_createComponent"}>*/}
                    {/*                <span><b>Question:</b> {c.question}</span>*/}
                    {/*                <span><b>Answer:</b> {c.answer}</span>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    );
};

export default CreateTasksComponent;
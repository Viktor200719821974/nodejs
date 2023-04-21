import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';

import { ADMIN_PAGE_CREATE } from '../constants';
import CreateThemesComponent from '../components/adminPage/CreateThemesComponent';
import {createTheme, getThemes} from '../http/themesApi';
import CreateLessonsComponent from '../components/adminPage/CreateLessonsComponent';
import { createLesson } from '../http/lessonsApi';

const AdminPage = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [lessonNumber, setLessonNumber] = useState();
    const [themeId, setThemeId] = useState(null);
    const [themes, setThemes] = useState([]);
    const [themeTitle, setThemeTitle] = useState('Choose theme');
    const [dropdown, setDropdown] = useState(false);
   
    const click = async (e) => {
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
    useEffect(() => {
        // if (!show) {
        //     setTitle('');
        //     setError(false);
        //     setErrorMessage('');
        // }
        // if (!showModal) {
        //     setThemeTitle('Choose theme');
        //     setError(false);
        //     setErrorMessage('');
        //     setThemeId(null);
        //     setLessonNumber();
        // }
    },[ show, title, errorMessage, error, showModal, themeId, themeTitle, dropdown, ]);
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
                        click={click}
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
            <div
                className={"adminPage_div_type_button"}
                onClick={() => navigate(ADMIN_PAGE_CREATE,  { state: { create: 'tasks' } })}
            >
                Create tasks
            </div>
            <div
                className={"adminPage_div_type_button"}
                onClick={() => navigate(ADMIN_PAGE_CREATE,  { state: { create: 'exercises' } })}
            >
                Create exercises
            </div>
        </div>
    );
};

export default AdminPage;
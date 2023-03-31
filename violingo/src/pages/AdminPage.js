import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';

import { ADMIN_PAGE_CREATE_EXERCISES, ADMIN_PAGE_CREATE_TASKS, } from '../constants';
import CreateThemesComponent from '../components/adminPage/CreateThemesComponent';
import {createTheme} from '../http/themesApi';

const AdminPage = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    const click = (e) => {
        e.preventDefault();
        try {
            createTheme(title).then(data => {
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
        } catch (e) {
            console.log(e.message);
        }
    }
    useEffect(() => {
        if (!show) {
            setTitle('');
            setError(false);
            setErrorMessage('');
        }
    },[show, title, errorMessage, error]);
    return (
        <div className={"adminPage_main_div display_alien_justify"}>
            <div
                className={"adminPage_div_type_button"}
                onClick={ () => setShow(true) }
            >
                Create theme
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
                onClick={() => navigate(ADMIN_PAGE_CREATE_TASKS)}
            >
                Create tasks
            </div>
            <div
                className={"adminPage_div_type_button"}
                onClick={() => navigate(ADMIN_PAGE_CREATE_EXERCISES)}
            >
                Create exercises
            </div>
        </div>
    );
};

export default AdminPage;
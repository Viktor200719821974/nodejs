import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import './style/style.css';
import { 
    fetchUser, isAdminUser, isLoginUser, isStatisticUser, arrayLessons, arrayThemes, arrayModules, 
} from './redux/actions';
import ApiRouter from './components/ApiRouter';
import { getUserById } from './http/userApi';
import violingoLoading from './icons/violingo_loading.png';
import { getLessons } from './http/lessonsApi';
import { getThemes } from './http/themesApi';
import { getModules } from './http/modulesApi';

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { isLogin } = useSelector(state => state.isLoginUserReducer);
   
    useEffect(() => {
        let action = true;
            if (action) {
                try{
                    const accessToken = localStorage.getItem('accessToken');
                    if (accessToken) {
                        getUserById(accessToken).then(data => {
                            if (data.status === 200) {
                                dispatch(fetchUser(data.data));
                                dispatch(isLoginUser(true));
                                dispatch(isStatisticUser(data.data.statistic));
                                dispatch(isAdminUser(data.data.is_staff));
                            }
                        });
                        const fetchThemes = async() => {
                            try {
                                await getThemes().then(data => {
                                    if (data.status === 200) {
                                        dispatch(arrayThemes(data.data));
                                    }
                                });
                            } catch(e) {
                                console.log(e.message);
                            }
                        }
                        fetchThemes();
                        const fetchLessons = async () => {
                            await getLessons().then(data => {
                                if (data.status === 200) {
                                    dispatch(arrayLessons(data.data));
                                }
                            });
                        }  
                        fetchLessons(); 
                        const fetchModules = async() => {
                            await getModules().then(data => {
                                if (data.status === 200) {
                                    dispatch(arrayModules(data.data));
                                }
                            });
                        }
                        fetchModules();
                    }
                } catch(err) {
                    console.log(err);
                }
            }
        setLoading(false);
        return () => {
            action = false;
        };
        // eslint-disable-next-line
    }, [isLogin]);
    if (loading){
        return (
            <div className={"app_spinner_main_div display_alien_justify"}>
                <img className={"app_spinner_image"} src={violingoLoading} alt={"loading violingo"}/>
                <div className={"app_spinner_div"}>
                    <Spinner animation={"grow"} variant={"success"} size={"sm"} style={{marginRight: "4px"}}/>
                    <Spinner animation={"grow"} variant={"success"} size={"sm"} style={{marginRight: "4px"}}/>
                    <Spinner animation={"grow"} variant={"success"} size={"sm"} style={{marginRight: "4px"}}/>
                    <Spinner animation={"grow"} variant={"success"} size={"sm"}/>
                </div>
            </div>
        )
    }
    return (
        <BrowserRouter>
            <ApiRouter/>
        </BrowserRouter>
    );
}

export default App;

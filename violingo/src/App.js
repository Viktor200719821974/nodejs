import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import './style/style.css';
import { fetchUser, isAdminUser, isLoginUser, isStatisticUser} from './redux/actions';
import ApiRouter from './components/ApiRouter';
import { getUserById } from './http/userApi';
import violingoLoading from './icons/violingo_loading.png';
// import { getTasks } from './http/tasksApi';
// import { getStatistic } from './http/statisticApi';

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { isLogin } = useSelector(state => state.isLoginUserReducer);
    // const { isStatistic } = useSelector(state => state.isStatisticUserReducer);
    // const { isAdmin } = useSelector(state => state.isAdminUserReducer);
    useEffect(() => {
        try{
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                getUserById(accessToken).then(data => {
                    if (data.status === 200) {
                        dispatch(fetchUser(data.data));
                        dispatch(isLoginUser(true));
                        dispatch(isStatisticUser(data.data.statistic));
                        dispatch(isAdminUser(data.data.is_staff));
                        // window.location.href = '/learn';
                        // if (data.data.is_staff) {
                        //     getTasks().then(data => {
                        //         if (data.status === 200) {
                        //             dispatch(fetchTasks(data.data));
                        //         }
                        //     });
                        // }
                    }
                });
                // getStatistic().then(data => {
                //   if (data.status === 200) {
                //     dispatch(statisticUser(data.data));
                //   }
                // });
            }
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
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

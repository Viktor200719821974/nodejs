import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authRoutes, publicRoutes, statisticRoutes } from '../routes';
import Error404Page from '../pages/Error404Page';

const ApiRouter = () => {

    const { isLogin } = useSelector(state => state.isLoginUserReducer);
    const { isStatistic } = useSelector(state => state.isStatisticUserReducer);

    return (
        <Routes>
            { 
                publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component/>} exact/> 
                )               
            },
            {
                (!isStatistic && isLogin) && 
                    authRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} element={<Component/>} loader={() => console.log(path)} exact/>
                    )
            },
            {
                isStatistic &&
                    statisticRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} element={<Component/>} exact/>
                    )
            }
            <Route path='*' element={<Error404Page/>}/>   
        </Routes>
    );
}

export default ApiRouter;

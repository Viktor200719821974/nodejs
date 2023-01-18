import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authRoutes, publicRoutes, statisticRoutes } from '../routes';

const ApiRouter = () => {
    const { isLogin } = useSelector(state => state.isLoginUserReducer);
    const { user } = useSelector(state => state.userReducer);
    console.log();
    return (
        <Routes>
            {
                isLogin && 
                    authRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {
                // !user.statistic &&
                    publicRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} element={<Component/>} exact/> 
            )}
            {
                // user.statistic && 
                    statisticRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to="/" replace />}/>   
        </Routes>
    );
}

export default ApiRouter;

import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authRoutes, publicRoutes } from '../routes';

const ApiRouter = () => {
    const { isLogin } = useSelector(state => state.isLoginUserReducer);
    return (
        <Routes>
            {isLogin && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/> 
            )}
            <Route path='*' element={<Navigate to="/" replace />}/>   
        </Routes>
    );
}

export default ApiRouter;

import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authRoutes, publicRoutes, statisticRoutes } from '../../routes';
import { ERROR_404_PAGE } from '../../constants';

const ApiRouterPublic = () => {
    const { isLogin } = useSelector(state => state.isLoginUserReducer);
    const { isStatistic } = useSelector(state => state.statisticUserReducer);
    console.log(isLogin, isStatistic);
    return (
        <Routes>
            { 
                // !isLogin &&
                    publicRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} element={<Component/>} exact/> 
                    )               
            }
            {
                // (isLogin && !isStatistic) && 
                    authRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} element={<Component/>} loader={() => console.log(path)} exact/>
                    )
            }
            {
                // (isLogin && isStatistic) &&
                    statisticRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} element={<Component/>} exact/>
                    )
            }
            <Route path='*' element={<Navigate to={ERROR_404_PAGE} replace />}/>   
        </Routes>
    );
}

export default ApiRouterPublic;

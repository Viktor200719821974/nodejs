import { Routes, Route, Navigate } from 'react-router-dom';

import { statisticRoutes } from '../../routes';

const ApiRouterStatistic = () => {

    return (
        <Routes>
            {
                statisticRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to= "/learn" replace />}/>   
        </Routes>
    );
}

export default ApiRouterStatistic;
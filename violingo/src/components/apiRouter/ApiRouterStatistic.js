import { Routes, Route, Navigate } from 'react-router-dom';
import { ERROR_404_PAGE } from '../../constants';

import { statisticRoutes } from '../../routes';

const ApiRouterStatistic = () => {

    return (
        <Routes>
            {
                statisticRoutes.map(({ path, Component }) =>
                    
                    <Route key={path} path={path} element={<Component/>}/>
                )
            }
            <Route path='*' element={<Navigate to= {ERROR_404_PAGE} replace />}/>   
        </Routes>
    );
}

export default ApiRouterStatistic;
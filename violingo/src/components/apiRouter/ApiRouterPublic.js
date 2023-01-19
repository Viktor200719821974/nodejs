import { Routes, Route, Navigate } from 'react-router-dom';

import { publicRoutes } from '../../routes';

const ApiRouterPublic = () => {

    return (
        <Routes>
            {
                publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component/>} exact/> 
            )}
            <Route path='*' element={<Navigate to= "/" replace />}/>   
        </Routes>
    );
}

export default ApiRouterPublic;

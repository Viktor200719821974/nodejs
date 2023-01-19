import { Routes, Route, Navigate } from 'react-router-dom';

import { authRoutes } from '../../routes';

const ApiRouterAuth = () => {
    
    return (
        <Routes>
            {
                authRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to= "/register" replace />}/>   
        </Routes>
    );
};

export default ApiRouterAuth;
import React from "react";
import { Route, Routes } from "react-router-dom";

import { pablicRoutes } from "../routes";

const ApiRouter = () => {
    return (
        <Routes>
            {
                pablicRoutes.map(({ path, Component }) => 
                    <Route key={path} path={path} element={<Component/>} exact/>
                )
            }
        </Routes>
    );
    
};

export default ApiRouter;
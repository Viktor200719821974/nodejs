import React, { useEffect } from "react";
import { fetchGenres } from "../../http";

const LoginComponent = () => {
    useEffect(() => {
        fetchGenres().then(data => {
            console.log(data);
        })
    }, []);
    return(
        <div>
            Login
        </div>
    );
};

export default LoginComponent;
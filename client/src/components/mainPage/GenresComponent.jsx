import React from "react";
import { useSelector } from "react-redux";

import "../../style/GenresComponent.css";

const GenresComponent = () => {
    const { genres } = useSelector(state => state.genresReducer);
    
    return (
        <div className="main_div_genresComponent">
            {
                genres && genres.map(c => 
                    <span className="span_genresComponent" key={c.id}>{c.name}</span>   
                )
            }
        </div>
    );
};

export default GenresComponent;
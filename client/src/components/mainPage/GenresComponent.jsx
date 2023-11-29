import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../style/GenresComponent.css";
import { arrayChooseGenresRedux } from "../../redux/actions/actions";

const GenresComponent = () => {
    const { genres } = useSelector(state => state.genresReducer);
    const { arrayChooseGenres } = useSelector(state => state.arrayChooseGenresReducer);
    const dispatch = useDispatch();
    
    const chooseGenre = (id) => {
        if (arrayChooseGenres.length === 0) {
            arrayChooseGenres.push(id);
        } else {
            const exist = arrayChooseGenres.filter(c => c === id);
            if (exist.length !== 0) {
                const indexElement = arrayChooseGenres.indexOf(exist[0]);
                arrayChooseGenres.splice(indexElement, 1);
            } else {
                arrayChooseGenres.push(id);
            }
        } 
        dispatch(arrayChooseGenresRedux(arrayChooseGenres));
    }
    return (
        <>
            <h2 className="h2_genresComponent">Genres:</h2>
            <div className="main_div_genresComponent">            
                {
                    genres && genres.map(c => 
                        <span 
                            className={
                                arrayChooseGenres
                                    .filter(a => a === c.id)[0] !== c.id ? "span_genresComponent" : "span_genresComponent_active"
                            } 
                            key={c.id}
                            onClick={() => chooseGenre(c.id)}
                        >
                            {c.name}
                        </span>   
                    )
                }
            </div>
        </>
    );
};

export default GenresComponent;
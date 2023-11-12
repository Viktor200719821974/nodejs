import React, { useEffect, useState } from "react";

import "../style/MainPage.css";
import { fetchMovie } from "../http";
import BodyComponent from "../components/mainPage/BodyComponent";
import NavBarComponent from "../components/mainPage/NavBarComponent";
import HeaderComponent from "../components/mainPage/HeaderComponent";

const MainPage = () => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        try {
            fetchMovie().then(data => {
                if (data.status === 200) {
                    console.log(data.data.results);
                    setMovies(data.data.results);
                }
            });
        } catch (e) {
            console.log(e.message);
        }
    }, []);
    return(
        <>
            <div className="header_mainPage">
                <HeaderComponent/>
            </div>
            <div className="wrap">
                <div className="navBar_mainPage">
                    <NavBarComponent/>
                </div>
                <div className="body_mainPage">
                    {
                        movies && movies.map(c => 
                            <BodyComponent 
                                title={c.title} 
                                key={c.id} 
                                id={c.id} 
                                poster_path={c.poster_path} 
                                release_date={c.release_date}
                                vote_average={c.vote_average}
                            />
                        )
                    }
                </div>
            </div>
        </>
        
    );
};

export default MainPage;
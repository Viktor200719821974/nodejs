import React, { useEffect, useState } from "react";

import "../style/MainPage.css";
import { fetchMovie, fetchMovieSearch } from "../http";
import BodyComponent from "../components/mainPage/BodyComponent";
import NavBarComponent from "../components/mainPage/NavBarComponent";
import HeaderComponent from "../components/mainPage/HeaderComponent";

const MainPage = () => {
    const [movies, setMovies] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    
    const functionSearch = (e) => {
        setPage(1);
        if (e.target.value === '') {
            setPage(1);
        }
        setSearchText(e.target.value);
    }

    useEffect(() => {
        try {
            if (searchText === '') {
                fetchMovie(page).then(data => {
                    if (data.status === 200) {
                        console.log(data);
                        setMovies(data.data.results);
                        setTotalPage(500);
                    }
                });
            } else {
                fetchMovieSearch(searchText, page).then(data => {
                    if (data.status === 200) {
                        setMovies(data.data.results);
                        setTotalPage(data.data.total_pages);
                    }
                });
            }
        } catch (e) {
            console.log(e.message);
        }
    }, [searchText, page]);
    return(
        <>
            <div className="header_mainPage">
                <HeaderComponent
                    setSearchText={setSearchText}
                    functionSearch={functionSearch}
                />
            </div>
            <div className="wrap">
                <div className="navBar_mainPage">
                    <NavBarComponent/>
                </div>
                <div className="body_mainPage">
                    <BodyComponent 
                        movies={movies}
                        page={page}
                        setPage={setPage}
                        totalPage={totalPage}
                    />
                </div>
            </div>
            
        </>
        
    );
};

export default MainPage;
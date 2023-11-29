import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../style/MainPage.css";
import { fetchGenres, fetchMovies, fetchMoviesSearch } from "../http/moviesApi";
import BodyComponent from "../components/mainPage/BodyComponent";
import NavBarComponent from "../components/mainPage/NavBarComponent";
import HeaderComponent from "../components/mainPage/HeaderComponent";
import { fetchGenresRedux, fetchMoviesRedux } from "../redux/actions/actions";

const MainPage = () => {
    const dispatch = useDispatch();
    const { arrayChooseGenres } = useSelector(state => state.arrayChooseGenresReducer);
    // const [movies, setMovies] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();

    const genresUrl = arrayChooseGenres.join();
    console.log(genresUrl);
    
    const functionSearch = (e) => {
        setPage(1);
        if (e.target.value === '') {
            setPage(1);
        }
        setSearchText(e.target.value);
    }

    useEffect(() => {
        try {
            if (searchText === '' || arrayChooseGenres.length > 0) {
                fetchMovies(page, genresUrl).then(data => {
                    if (data.status === 200) {
                        // console.log(data);
                        // setMovies(data.data.results);
                        dispatch(fetchMoviesRedux(data.data.results));
                        console.log(data.data);
                        if (genresUrl === '') {
                            setTotalPage(500);
                        } else {
                            setTotalPage(data.data.total_pages);
                        }
                    }
                });
            } else {
                fetchMoviesSearch(searchText, page).then(data => {
                    if (data.status === 200) {
                        // setMovies(data.data.results);
                        setTotalPage(data.data.total_pages);
                        dispatch(fetchMoviesRedux(data.data.results));
                        console.log(data.data);
                    }
                });
            }
            fetchGenres().then(data => {
                if (data.status === 200) {
                    dispatch(fetchGenresRedux(data.data.genres));
                }
            })
        } catch (e) {
            console.log(e.message);
        }
    // eslint-disable-next-line
    }, [searchText, page, arrayChooseGenres.length]);
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
                        // movies={movies}
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
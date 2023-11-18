import React, { useEffect, useState } from "react";

import "../style/MainPage.css";
import { fetchMovie, fetchMovieSearch } from "../http";
import BodyComponent from "../components/mainPage/BodyComponent";
import NavBarComponent from "../components/mainPage/NavBarComponent";
import HeaderComponent from "../components/mainPage/HeaderComponent";
import PaginationComponent from "../components/mainPage/pagination/PaginationComponent";

const MainPage = () => {
    const [movies, setMovies] = useState(null);
    const [searchText, setSearchText] = useState('');
    // const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState(1);
    // const [previousPage, setPreviousPage] = useState();
    // const [nextPage, setNextPage] = useState();
    const [totalPage, setTotalPage] = useState();
    console.log(totalPage);
    console.log(page);
    useEffect(() => {
        try {
            if (searchText === '') {
                fetchMovie(page).then(data => {
                    if (data.status === 200) {
                        console.log(data);
                        setMovies(data.data.results);
                        setTotalPage(500);
                        // setPage(data.data.page);
                    }
                });
            } else {
                fetchMovieSearch(searchText, page).then(data => {
                    if (data.status === 200) {
                        setMovies(data.data.results);
                        setTotalPage(data.data.total_pages);
                        console.log(data);
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
                />
            </div>
            <div className="wrap">
                <div className="navBar_mainPage">
                    <NavBarComponent/>
                </div>
                <div className="body_pagination_mainPage">
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
                    <div className="pagination_mainPage">
                        <PaginationComponent
                            page={page}
                            setPage={setPage}
                            totalPage={totalPage}
                        />
                    </div>
                </div>
            </div>
            
        </>
        
    );
};

export default MainPage;
import React from "react";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

import PaginationComponent from "../../components/mainPage/pagination/PaginationComponent";
import "../../style/BodyComponent.css";
import { image_300 } from "../../constants";
// import star from "../../static/star12s.png";
import noImage from "../../static/noImage.png";

const BodyComponent = ({ page, setPage, totalPage, }) => {
    const { movies } = useSelector(state => state.moviesReducer);
    
    return (
        <div className="main_div">
            {
                movies && movies.map(c => 
                    <div key={c.id} className="div_movie">
                        <img src={ c.poster_path === null ? noImage : image_300 + c.poster_path} alt="poster" className="image_300"/>
                        <span className="title_span">
                            {c.title}
                        </span>
                        <div className="date_release_rating_div">
                            <span className="date_release_span">{c.release_date}</span>
                            <div className="rating_image_div">
                                <FaStar color="yellow"/>
                                {/* <img src={star} alt="star" className="image_rating_star"/> */}
                                <span className="rating_span">{c.vote_average}</span>
                            </div>
                        </div>
                    </div>    
                )
            }
            {
                totalPage === 0 &&
                    <span className="span_no_content">No content</span>
            }
            <div className="div_pagination">
                <PaginationComponent
                    page={page}
                    setPage={setPage}
                    totalPage={totalPage}
                />
            </div>
        </div>
    );
};

export default BodyComponent;
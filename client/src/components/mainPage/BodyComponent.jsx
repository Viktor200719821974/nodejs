import React from "react";

import "../../style/BodyComponent.css";
import { image_300 } from "../../constants";
import star from "../../static/star12s.png";
import noImage from "../../static/noImage.png";

const BodyComponent = ({ title, id, poster_path, release_date, vote_average }) => {
    return (
        <div className="main_div">
            <img src={ poster_path === null ? noImage : image_300 + poster_path} alt="poster" className="image_300"/>
            <span className="title_span">
                {title}
            </span>
            <div className="date_release_rating_div">
                <span className="date_release_span">{release_date}</span>
                <div className="rating_image_div">
                    <img src={star} alt="star" className="image_rating_star"/>
                    <span className="rating_span">{vote_average}</span>
                </div>
            </div>
        </div>
    );
};

export default BodyComponent;
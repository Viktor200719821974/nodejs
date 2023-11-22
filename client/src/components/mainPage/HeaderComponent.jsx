import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogoZoom } from "react-icons/bi";

import "../../style/HeaderComponent.css";

const HeaderComponent = ({ setSearchText, functionSearch, }) => {
    return (
        <header className="main_header_headerComponent">
            <div className="logo_div_headerComponent"> 
                <BiLogoZoom size={"40px"}/>
                <span className="logo_sign_span_headerComponent">Movies</span>
            </div>
            <div className="search_div_headerComponent">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="input_search_headerComponent"
                    onChange={(e) => functionSearch(e)}
                />
                <div 
                    className="icon_search_div_headerComponent"
                    >
                    <AiOutlineSearch size={"30px"} color="#0f0f0f"/>
                </div>
               
            </div>
        </header>
    );
};

export default HeaderComponent;
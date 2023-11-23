import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogoZoom } from "react-icons/bi";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

import "../../style/HeaderComponent.css";
import { LOGIN_PAGE } from "../../constants";

const HeaderComponent = ({ setSearchText, functionSearch, }) => {
    const { isLogin } = useSelector(state => state.isLoginReducer);
    const navigate = useNavigate();

    const logout = () => {
        
    }
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
            {
                !isLogin && 
                    <div className="div_sign_in_sign_out">
                        <span className="span_main_sign_in_sign_out" onClick={() => navigate(LOGIN_PAGE)}>
                            <LuLogIn color="#cac6c6" size={"30px"} style={{cursor: "pointer"}}/>
                            <span className="span_sign_in_sign_out">sing in</span>
                        </span>
                    </div>
            }
            {
                isLogin && 
                    <div className="div_sign_in_sign_out">
                        <span className="span_main_sign_in_sign_out" onClick={logout}>
                            <LuLogOut color="#cac6c6" size={"30px"} style={{cursor: "pointer"}}/>
                            <span className="span_sign_in_sign_out">sing out</span>
                        </span>
                    </div>
            }
        </header>
    );
};

export default HeaderComponent;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";

import "../../style/LoginRegistrationComponent.css";
import { HOME_PAGE, LOGIN_PAGE, REGISTRATION_PAGE } from "../../constants";
import RegistrationComponent from "./RegistrationComponent";

const LoginRegistrationComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // console.log(email, password);
    return(
        <div>
            <div className="div_buttons_home_sign_in">
                <button
                    className="button_home button"
                    onClick={() => navigate(HOME_PAGE)} 
                >
                    <RiHome2Line size={"20px"} style={{marginRight: "4px"}}/>
                    Home
                </button>
                {
                    location.pathname === REGISTRATION_PAGE &&
                        <button
                            className="button_sign_in_up button"
                            onClick={() => navigate(LOGIN_PAGE)}
                        >
                            <LuLogIn size={"20px"} style={{marginRight: "4px"}}/>
                            Sing in
                        </button>
                }
            </div>
            <div className="main_div_form">
                <form className="form_class">
                    <div className="div_input">
                        <input 
                            type="email"
                            name="email"
                            placeholder="example@mail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            className="input_class"
                        />
                    </div>
                    <div className="div_input">
                        <input 
                            type="password"
                            name="password"
                            placeholder="*********"
                            onChange={(e) => setPassword(e.target.value)}
                            className="input_class"
                        />
                    </div>  
                    {
                        location.pathname === REGISTRATION_PAGE &&
                            <RegistrationComponent
                                setFirstName={setFirstName}
                                setLastName={setLastName}
                            />     
                    }
                    {
                        location.pathname === LOGIN_PAGE &&
                            <div className="div_forget_password_and_registration">
                                <span
                                    onClick={() => navigate()}
                                    className="span_forget_password"
                                    >
                                        Forget password?
                                </span> 
                                <span
                                    onClick={() => navigate(REGISTRATION_PAGE)}
                                    className="span_forget_password justifyContentFlexEnd"
                                    >
                                        No account?
                                </span>  
                            </div>
                    }
                    <div className="div_button_sign_in">
                        <button
                            className="button_sign_in button"
                            onClick={(e) => e.preventDefault()}
                            >
                                { location.pathname === LOGIN_PAGE ? 'sign in' : 'send' }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegistrationComponent;
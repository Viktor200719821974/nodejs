import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";

import "../../style/LoginRegistrationComponent.css";
import { HOME_PAGE, LOGIN_PAGE, REGISTRATION_PAGE, FORGET_PASSWORD_PAGE, } from "../../constants";
import RegistrationComponent from "./RegistrationComponent";
import { forgetPasswordUser, loginUser, registrationUser } from "../../http/authApi";

const LoginRegistrationComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const singIn = async(e) => {
        e.preventDefault();
        try {
                await loginUser(email, password).then(data => {
                    if (data.status === 200) {
                        console.log(data);
                    }
                });
            } catch (e) {
                console.log(e.message);
        }
    };
    const registration = async(e) => {
        e.preventDefault();
        try {
            await registrationUser(email, password, firstName, lastName).then(data => {
                if (data.status === 200) {
                    console.log(data);
                }
            });
        } catch (e) {
            console.log(e.message);
        }
    };
    const forgetPassword = async(e) => {
        e.preventDefault();
        try {
            await forgetPasswordUser(email).then(data => {
                if (data.status === 200) {
                    console.log(data);
                }
            });
        } catch (e) {
            console.log(e.message);
        }
    };
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
                    (location.pathname === REGISTRATION_PAGE || location.pathname === FORGET_PASSWORD_PAGE) &&
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
                    {
                        (location.pathname === LOGIN_PAGE || location.pathname === REGISTRATION_PAGE) &&
                            <div className="div_input">
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder="*********"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input_class"
                                />
                            </div>  
                    }
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
                                    onClick={() => navigate(FORGET_PASSWORD_PAGE)}
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
                        {
                            location.pathname === LOGIN_PAGE &&
                                <button
                                    className="button_sign_in button"
                                    onClick={singIn}
                                    >
                                       sign in
                                </button>
                        }
                        {
                            location.pathname === REGISTRATION_PAGE &&
                                <button
                                    className="button_sign_in button"
                                    onClick={registration}
                                    >
                                        send
                                </button>
                        }
                        {
                            location.pathname === FORGET_PASSWORD_PAGE && 
                                <button
                                    className="button_sign_in button"
                                    onClick={forgetPassword}
                                    >
                                        send
                                </button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegistrationComponent;
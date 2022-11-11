import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { SiTrendmicro } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { CgLogIn } from 'react-icons/cg';
import { MdOutlineLogout } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';

import '../styles/style.css';
import { HOME_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from '../constants';
import { logOutUser } from '../http/authApi';
import { isLoginUser, noUser } from '../redux/actions';

const NavBar = observer(() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userReducer);
    const { isLogin } = useSelector(state => state.isLoginUserReducer);
    
    const logOut = async() => {
        dispatch(isLoginUser(false));
        dispatch(noUser());
        await logOutUser();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
    return (
        <div className={'navBar_main_div'}>
            <Navbar bg="primary" variant="dark">
                    <NavLink className={'navBar_navLink'} to={HOME_ROUTE}>
                        <div style={{marginRight: '10px', marginLeft: '10px'}}>
                            <SiTrendmicro/>
                        </div>
                        Home
                    </NavLink>
                    <div className="navBar_div_title_button">
                        <Nav className="navBar_title">Site Name</Nav>
                        <Nav className="navBar_nav_button">
                            { user.is_staff && <Button
                                variant={"outline-warning"}
                                onClick={() => navigate(ADMIN_ROUTE)}
                                >
                                    <RiAdminLine/> Адмін панель
                            </Button> }
                            { isLogin && <Button 
                                variant={"outline-warning"}
                                style={{marginLeft: 20}}
                                onClick={() => logOut()}
                                >
                                    <MdOutlineLogout/> 
                                    Вийти
                            </Button> }
                            { !isLogin && <Button 
                                variant={"outline-warning"} 
                                onClick={() => navigate(LOGIN_ROUTE)}
                                >
                                    <CgLogIn/> 
                                    Авторизація
                            </Button>}
                        </Nav>   
                    </div> 
            </Navbar>
        </div>
    );
});

export default NavBar;
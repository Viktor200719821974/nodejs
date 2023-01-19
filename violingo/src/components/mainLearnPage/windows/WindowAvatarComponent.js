import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LOGIN_PAGE, HOME_PAGE } from '../../../constants';
import { logOutUser } from '../../../http/authApi';
import { isLoginUser } from '../../../redux/actions';

const WindowAvatarComponent = ({
    setMouseOnAvatar, 
    }) => {
    const { isLogin } = useSelector(state => state.isLoginUserReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const click = () => {
        try {
            !isLogin && navigate(LOGIN_PAGE);
            isLogin && logOutUser().then(data => {
                if (data.status === 200) {
                    dispatch(isLoginUser(false));
                    navigate(HOME_PAGE);
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');  
                }
            }).catch(e => console.log(e));
        } catch(e) {
            console.log(e);
        }       
    }
    return (
        <div
            className="mainLearnPage_main_div_windowAvatarComponent" 
            onMouseEnter={() => setMouseOnAvatar(true)}
            onMouseLeave={() => setMouseOnAvatar(false)}
            >
            <div className="mainLearnPage_div_triangle_windowAvatarComponent"></div>
            <div className="mainLearnPage_div_windowAvatarComponent">
                <span className="mainLearnPage_span_title_windowAvatarComponent">
                    Обліковий запис
                </span>
                <div className="mainLearnPage_div_line_windowAvatarComponent"></div>
                <span className="mainLearnPage_span_windowAvatarComponent">
                    Створити профіль
                </span>      
                <div className="mainLearnPage_div_line_windowAvatarComponent"></div>      
                <span className="mainLearnPage_span_windowAvatarComponent">
                    Налаштування
                </span>
                <div className="mainLearnPage_div_line_windowAvatarComponent"></div>
                <span className="mainLearnPage_span_windowAvatarComponent">
                    Довідка
                </span>
                <div className="mainLearnPage_div_line_windowAvatarComponent"></div>
                <span 
                    className="mainLearnPage_span_windowAvatarComponent"
                    onClick={click}
                    >
                    {!isLogin ? "Увійти" : "Вихід"}
                </span>
            </div>
        </div>
    );
};

export default WindowAvatarComponent;
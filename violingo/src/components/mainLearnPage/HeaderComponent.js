import { useNavigate } from 'react-router-dom';
import { RiAdminLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import america from '../../icons/united-states.png';
import fire from '../../icons/fire.png';
import ruby from '../../icons/ruby.png';
import fireNoActive from '../../icons/fire-stamp-noActive.svg';
import rubyNoActive from '../../icons/ruby-noActive.svg';
import avatar from '../../icons/avatar.jpeg';
import WindowFlagComponent from './windows/WindowFlagComponent';
import WindowAvatarComponent from './windows/WindowAvatarComponent';
import WindowRubyComponent from './windows/WindowRubyComponent';
import WindowFireComponent from './windows/WindowFireComponent';
import {ADMIN_PAGE, HOME_PAGE} from '../../constants';

function HeaderComponent({
    isActive, mouseOnFlag, setMouseOnFlag, mouseOnFire, setMouseOnFire, mouseOnRuby, 
    setMouseOnRuby, mouseOnAvatar, setMouseOnAvatar,
}) {
    const navigate = useNavigate();
    // const { user } = useSelector(state => state.userReducer);
    const { isAdmin } = useSelector(state => state.isAdminUserReducer);

    return (
        <header 
            className="mainLearnPage_main_headerComponent" 
            onClick={() => window.scroll(0, 0)}
            >
            <div className="mainLearnPage_div_sign_headerComponent">
                <span onClick={() => navigate(HOME_PAGE)}>violingo</span>
            </div>
            <div className="mainLearnPage_main_div_right_headerComponent">
                <div style={{position: 'relative'}}>
                    <img
                        className="mainLearnPage_image_header_flag_headerComponent"
                        src={america}
                        alt="language"
                        onMouseEnter={() => setMouseOnFlag(true)}
                        onMouseLeave={() => setMouseOnFlag(false)}
                    />
                    {
                        mouseOnFlag &&
                        <WindowFlagComponent
                            setMouseOnFlag={setMouseOnFlag}
                        />
                    }
                </div>
                <div 
                    className="mainLearnPage_image_number_headerComponent"
                    onMouseEnter={() => setMouseOnFire(true)}
                    onMouseLeave={() => setMouseOnFire(false)}
                    >
                    <img 
                        className="mainLearnPage_image_header_other_headerComponent" 
                        src={!isActive ? fireNoActive : fire} 
                        alt="fire"
                    />
                    <span className="mainLearnPage_span_number_headerComponent">
                        0
                    </span>
                    {
                        mouseOnFire &&
                            <WindowFireComponent
                                setMouseOnFire={setMouseOnFire}
                            />
                    }
                </div>
                <div 
                    className="mainLearnPage_image_number_headerComponent"
                    onMouseEnter={() => setMouseOnRuby(true)}
                    onMouseLeave={() => setMouseOnRuby(false)}
                    >
                    <img 
                        className="mainLearnPage_image_header_other_headerComponent" 
                        src={!isActive ? rubyNoActive : ruby} 
                        alt="ruby"
                    /> 
                    <span className="mainLearnPage_span_number_headerComponent">
                        0
                    </span>
                    {
                        mouseOnRuby &&
                            <WindowRubyComponent
                                setMouseOnRuby={setMouseOnRuby}
                            />
                    }
                </div>
                <div className="mainLearnPage_main_div_avatar_headerComponent">
                    <img 
                        src={avatar} 
                        alt="avatar"
                        className="mainLearnPage_image_avatar_headerComponent"
                        onMouseEnter={() => setMouseOnAvatar(true)}
                        onMouseLeave={() => setMouseOnAvatar(false)}
                    /> 
                    {/* <span className="mainLearnPage_span_user_name_headerComponent">
                        {user.name}
                    </span>    */}
                    {
                        mouseOnAvatar &&
                            <WindowAvatarComponent
                                setMouseOnAvatar={setMouseOnAvatar}
                            />
                    }
                </div>
                {
                    isAdmin &&
                        <button
                            className="mainLearnPage_button_admin_headerComponent"
                            onClick={() => navigate(ADMIN_PAGE)}
                            >
                            <RiAdminLine color={'#afafaf'}/>
                            <span className="mainLearnPage_span_button_admin_headerComponent">
                                Admin panel
                            </span>
                        </button>
                }
            </div>
            <div className="mainLearnPage_main_div_windows">
                {
                    (mouseOnFire || mouseOnRuby || mouseOnAvatar || mouseOnFlag) &&
                        <div className="mainLearnPage_modal_window"></div>
                }
            </div>
        </header>
    );
}

export default HeaderComponent;
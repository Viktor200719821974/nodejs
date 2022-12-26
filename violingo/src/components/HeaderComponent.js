import '../style/style.css';
import america from '../icons/united-states.png';
import fire from '../icons/fire.png';
import ruby from '../icons/ruby.png';
import fireNoActive from '../icons/fire-stamp-noActive.svg';
import rubyNoActive from '../icons/ruby-noActive.svg';
import avatar from '../icons/avatar.jpeg';
import WindowFlagComponent from './windows/WindowFlagComponent';
import WindowAvatarComponent from './windows/WindowAvatarComponent';
import WindowRubyComponent from './windows/WindowRubyComponent';
import WindowFireComponent from './windows/WindowFireComponent';

function HeaderComponent({
    isActive, mouseOnFlag, setMouseOnFlag, mouseOnFire, setMouseOnFire, mouseOnRuby, 
    setMouseOnRuby, mouseOnAvatar, setMouseOnAvatar,
}) {
    return (
        <header className="mainLearnPage_main_headerComponent" onClick={() => window.scroll(0, 0)}>
            <div className="mainLearnPage_div_sign_headerComponent">
                violingo
            </div>
            <div className="mainLearnPage_main_div_right_headerComponent">
                <img 
                    className="mainLearnPage_image_header_flag_headerComponent" 
                    src={america} 
                    alt="language"
                    onMouseEnter={() => setMouseOnFlag(true)}
                    onMouseLeave={() => setMouseOnFlag(false)}
                    />
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
                </div>
                <img 
                    src={avatar} 
                    alt="avatar"
                    className="mainLearnPage_image_avatar_headerComponent"
                    onMouseEnter={() => setMouseOnAvatar(true)}
                    onMouseLeave={() => setMouseOnAvatar(false)}
                />               
            </div>
            {
                mouseOnFlag && 
                    <WindowFlagComponent
                        setMouseOnFlag={setMouseOnFlag}
                    />
            }  
            {
                mouseOnFire && 
                    <WindowFireComponent
                        setMouseOnFire={setMouseOnFire}
                    />
            }
            {
                mouseOnRuby && 
                    <WindowRubyComponent
                        setMouseOnRuby={setMouseOnRuby}
                    />
            }
            {
                mouseOnAvatar && 
                    <WindowAvatarComponent
                        setMouseOnAvatar={setMouseOnAvatar}
                    />
            }        
        </header>
    );
}

export default HeaderComponent;
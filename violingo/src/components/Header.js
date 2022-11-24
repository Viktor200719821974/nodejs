import '../style/style.css';
import america from '../icons/united-states.png';
import fire from '../icons/fire.png';
import ruby from '../icons/ruby.png';


function Header() {
    return (
        <header className="main_header" onClick={() => window.scroll(0, 0)}>
            <div className="div_sign">
                violingo
            </div>
            <div className="div_image_right">
                <img className="image_header_flag" src={america} alt="language"/>
                <div className="image_number">
                    <img className="image_header_other" src={fire} alt="fire"/>
                    <span className="span_number_fire">0</span>
                </div>
                <div className="image_number">
                     <img className="image_header_other" src={ruby} alt="ruby"/> 
                     <span className="span_number_ruby">0</span>
                </div>
                <div className="header_div_avatar">
                    V
                </div>
            </div>
            
        </header>
    );
}

export default Header;
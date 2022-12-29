import { useNavigate } from 'react-router-dom';

import { SHOP_PAGE } from '../../../constants';
import boxRuby from '../../../icons/box-ruby.svg';

const WindowRubyComponent = ({
    setMouseOnRuby,
}) => {
    const navigate = useNavigate();
    return (
        <div
            className="mainLearnPage_main_div_windowRubyComponent" 
            onMouseEnter={() => setMouseOnRuby(true)}
            onMouseLeave={() => setMouseOnRuby(false)}
            >
            <div className="mainLearnPage_div_triangle_windowRubyComponent"></div>
            <div className="mainLearnPage_div_windowRubyComponent">
                <img 
                    src={boxRuby} 
                    alt="stamp box rubys"
                    className="mainLearnPage_image_windowRubyComponent"
                    />
                <div className="mainLearnPage_signs_windowRubyComponent">
                    <h2 style={{color: '#3c3c3c', margin: '0 0 10px'}}>Лінготи</h2>
                    <span style={{color: '#777'}}>У вас {0} лінготів.</span>
                    <span 
                        className="mainLeanerPage_span_link_windowRubyComponent"
                        onClick={() => navigate(SHOP_PAGE)}
                        >
                            До магазину
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WindowRubyComponent;
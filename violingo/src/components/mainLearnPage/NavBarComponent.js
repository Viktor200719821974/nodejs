import { useNavigate } from 'react-router-dom';

import { IMGES_MAIN_LEARN_PAGE_NAV_BAR_COMPONENT } from '../../constants';
import { arrayNavBarComponent } from '../../constants/arrays';

const NavBarComponent = ({
    idElement, setIdElement,
}) => {
    const navigate = useNavigate();
    return (
        <div className="mainLearnPage_navBar_buttons_navBarComponent">
            {
                arrayNavBarComponent.map(c => 
                    <div 
                        className={
                            idElement === c.id 
                                ? "mainLearnPage_navBar_button_select_navBarComponent"
                                : "mainLearnPage_navBar_button_navBarComponent"
                        }
                        key={c.id}
                        onClick={() => {
                            navigate(c.navigate);
                            setIdElement(c.id);
                        }}
                        >
                        <img 
                            className="mainLearnPage_navBar_button_image_navBarComponent" 
                            src={IMGES_MAIN_LEARN_PAGE_NAV_BAR_COMPONENT + c.src} 
                            alt={c.alt}
                        /> 
                         <div className="mainLearnPage_navBar_button_text_navBarComponent">
                            {c.title}
                        </div>   
                    </div>
                )
            }
        </div>
    );
}

export default NavBarComponent;
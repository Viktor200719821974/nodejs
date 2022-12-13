import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import sovaBaby from '../icons/sova-baby.svg';
import sovaScientist from '../icons/sova-scientist.svg';
import { LESSON_PAGE, PLACEMENT_PAGE } from '../constants';

const Welcome6Component = ({
    setNewComponent4,
    }) => {
    const navigate = useNavigate();
    const buttonBack = () => {
        setNewComponent4(true);
    }
    return (
        <div>
            <div className="welcomePage_main_div_top">
                <button 
                    className="welcomePage_button_cross" 
                    onClick={buttonBack}
                    >
                    <BiArrowBack color='#d0cccc' size={'22px'}/>
                </button> 
                <div className="welcomePage_div_around_cross">
                    <div className="welcomePage_div_one_download" style={{width: '100%'}}></div>
                </div>
            </div>
            <div className="welcomePage_div_body_welcome5Component">
                <h1 style={{color: '#4b4b4b', margin: '0 24px 24px'}}>
                    Виберіть шлях
                </h1>
                <div className="welcomePage_div_main_image_and_sign_welcome6Component">
                    <div 
                        className="welcomePage_div_image_and_sign_welcome6Component"
                        onClick={() => navigate(LESSON_PAGE)}
                        >
                        <img 
                            src={sovaBaby} 
                            alt="beginner" 
                            style={{width: '100px', height: '100px', margin: '18px 49px 10px'}}
                            />
                        <h4 style={{color: '#4b4b4b'}}>Раніше не вивчали англійську?</h4>
                        <h5>Почніть з основ!</h5>
                    </div>
                    <div 
                        className="welcomePage_div_image_and_sign_welcome6Component"
                        onClick={() => navigate(PLACEMENT_PAGE)}
                        >
                        <img 
                            src={sovaScientist} 
                            alt="scientist"
                            style={{width: '130px', height: '130px', margin: '-10px 34px 3px'}}
                            />
                        <h4 style={{color: '#4b4b4b'}}>Уже трохи знаєте англійську?</h4>
                        <h5>Перевірте свій рівень!</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome6Component;
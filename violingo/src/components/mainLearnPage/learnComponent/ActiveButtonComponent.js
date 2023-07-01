import { IMAGES_LEARN_COMPONENT } from '../../../constants';
import LessonStartWindowModalComponent from './LessonStartWindowModalComponent';

const ActiveButtonComponent = ({ style, backgroundTheme, show, setShow, lessons, }) => {
    return (
        <div 
            style={{marginLeft: style}}
            className="mainLearnPage_main_div_active_button_with_image_learnComponent"
        >
            <div className="mainLearnPage_active_button_second_div_learnComponent">
                <div className="mainLearnPage_active_button_third_div_learnComponent">
                    <button 
                        className="mainLearnPage_active_button_with_image_learnComponent"
                        onClick={() => setShow(value => !value)}
                    >
                        <img 
                            src={IMAGES_LEARN_COMPONENT + 'starForActiveModule.svg'} 
                            alt={'active button'}
                        />
                    </button>
                </div>
            </div>
            {
                show &&
                    <LessonStartWindowModalComponent 
                        backgroundTheme={backgroundTheme}
                        lessons={lessons}
                    />
            }
        </div>
    );
};

export default ActiveButtonComponent;
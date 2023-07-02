import { useState } from 'react';

import { IMAGES_LEARN_COMPONENT } from '../../../constants';
import { getLessons } from '../../../http/lessonsApi';
import LessonStartWindowModalComponent from './LessonStartWindowModalComponent';

const ActiveButtonComponent = ({ style, backgroundTheme, show, setShow, moduleId, }) => {
    const [lessons, setLessons] = useState([]);

    const openModal = async() => {
        setShow(value => !value);
        await getLessons(moduleId).then(data => {
            if (data.status === 200) {
                setLessons(data.data);
            }
        });
    }
    return (
        <div 
            style={{marginLeft: style}}
            className="mainLearnPage_main_div_active_button_with_image_learnComponent"
        >
            <div className="mainLearnPage_active_button_second_div_learnComponent">
                <div className="mainLearnPage_active_button_third_div_learnComponent">
                    <button 
                        className="mainLearnPage_active_button_with_image_learnComponent"
                        onClick={openModal}
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
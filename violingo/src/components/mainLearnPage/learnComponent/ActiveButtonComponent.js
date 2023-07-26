import { useSelector } from 'react-redux';

import { IMAGES_LEARN_COMPONENT } from '../../../constants';
import LessonStartWindowModalComponent from './LessonStartWindowModalComponent';

const ActiveButtonComponent = ({ style, backgroundTheme, show, setShow, moduleId, }) => {
    const { user } = useSelector(state => state.userReducer);
    const { lessons } = useSelector(state => state.arrayLessonsReducer);
   
    const numberLesson = lessons.filter(c => c.moduleId === moduleId).findIndex(c => c.id === user.lesson_id);
    const valueSuccess = `${(100 / lessons.length) * numberLesson}%`;

    const openModal = () => {
        setShow(value => !value);
    }
    return (
        <div 
            style={{marginLeft: style}}
            className="mainLearnPage_main_div_active_button_with_image_learnComponent"
        >
            <div 
                className="mainLearnPage_active_button_second_div_learnComponent" 
                style={{background: `conic-gradient(#ffc800 ${valueSuccess}, transparent 0)`}}
            >
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
                        lessons={lessons.filter(c => c.moduleId === moduleId)}
                        numberLesson={numberLesson}
                    />
            }
        </div>
    );
};

export default ActiveButtonComponent;
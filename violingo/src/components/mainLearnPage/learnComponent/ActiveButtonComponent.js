import { useSelector } from 'react-redux';

import { IMAGES_LEARN_COMPONENT } from '../../../constants';
import LessonStartWindowModalComponent from './LessonStartWindowModalComponent';
import WindowStartLessonComponent from './WindowStartLessonComponent';

const ActiveButtonComponent = ({ style, backgroundTheme, show, setShow, moduleId, topBlock, topTriangle, points, }) => {
    const { user } = useSelector(state => state.userReducer);
    const { lessons } = useSelector(state => state.arrayLessonsReducer);
   
    const lessonsModule = lessons.filter(c => c.moduleId === moduleId);
    const numberLesson = lessonsModule.findIndex(c => c.id === user.lesson_id);
    const valueSuccess = `${(100 / lessonsModule.length) * numberLesson}%`;
    console.log(numberLesson);
    console.log(lessonsModule);
    console.log(user.lesson_id);
    const openModal = () => {
        setShow(value => !value);
    }
    console.log(points, 'activeButton');
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
                        points={points}
                    />
            }
            
            {
                !show &&
                    <WindowStartLessonComponent 
                        backgroundTheme={backgroundTheme}
                        topBlock={topBlock}
                        topTriangle={topTriangle}
                    />
            }
        </div>
    );
};

export default ActiveButtonComponent;
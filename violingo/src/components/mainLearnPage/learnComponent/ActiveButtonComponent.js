import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IMAGES_LEARN_COMPONENT } from '../../../constants';
import { getLessons } from '../../../http/lessonsApi';
import LessonStartWindowModalComponent from './LessonStartWindowModalComponent';

const ActiveButtonComponent = ({ style, backgroundTheme, show, setShow, moduleId, }) => {
    const { user } = useSelector(state => state.userReducer);
    const [lessons, setLessons] = useState([]);
    // const [countProcents, setCountProcents] = useState(0);
    const numberLesson = lessons.findIndex(c => c.id === user.lesson_id);
    // console.log(countProcents);
    // console.log((100 / lessons.length) * numberLesson);
    const valueSuccess = `${(100 / lessons.length) * numberLesson}%`;
    const openModal = () => {
        setShow(value => !value);
    }
    useEffect(() => {
        let action = true;
        if (action) {
            // setCountProcents((100 / lessons.length) * numberLesson);
            try {
                const fetchLessons = async () => {
                    await getLessons(moduleId).then(data => {
                        if (data.status === 200) {
                            setLessons(data.data);
                        }
                    });
                }  
                fetchLessons(); 
            }catch (e) {
                console.log(e.message);
            }  
        }  
        return(() => {
            action = false;
        });
    // eslint-disable-next-line
    }, []);
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
                        lessons={lessons}
                        numberLesson={numberLesson}
                    />
            }
        </div>
    );
};

export default ActiveButtonComponent;
// import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { LESSON_PAGE } from '../../../constants';

const LessonStartWindowModalComponent = ({ backgroundTheme, lessons, numberLesson, }) => {
    const navigate = useNavigate();
    // const { user } = useSelector(state => state.userReducer);
    const startLesson = () => {
        navigate(LESSON_PAGE);
    }
    
    return (
        <div 
            className="main_div_lessonStartWindowModalComponent"
            style={{background: backgroundTheme}}
        >
            <div className="div_triangle_lessonStartWindowModalComponent" style={{background: backgroundTheme}}></div>
            <div className="div_wrap_lessonStartWindowModalComponent">
                <h3 className="h3_lessonStartWindowModalComponent">Персоналізована практика</h3>
                <p className="p_lessonStartWindowModalComponent">Урок {numberLesson + 1} з {lessons.length}</p>
                <button
                    style={{color: backgroundTheme}}
                    className="button_lessonStartWindowModalComponent"
                    onClick={startLesson}
                >
                    Почати +10 балів
                </button>
            </div>
            
        </div>
    );
};

export default LessonStartWindowModalComponent;
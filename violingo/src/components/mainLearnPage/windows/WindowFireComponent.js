import CalendarComponent from './CalendarComponent';
import 'react-calendar/dist/Calendar.css';

const WindowFireComponent = ({
    setMouseOnFire,
}) => {
    return (
        <div
            className="mainLearnPage_main_div_windowFireComponent" 
            onMouseEnter={() => setMouseOnFire(true)}
            onMouseLeave={() => setMouseOnFire(false)}
            >
            <div className="mainLearnPage_div_triangle_windowFireComponent"></div>
            <div className="mainLearnPage_div_windowFireComponent">
                <span className="mainLearnPage_span_title_windowFireComponent">
                    Відрізок
                </span> 
                <span className="mainLearnPage_span_sign_windowFireComponent">
                    Навчаючись щодня, ви продовжуєте свій відрізок. 
                    Але якщо пропустите день - втратите його!
                </span>
                <div className="mainLearnPage_div_main_calendar_windowFireComponent">
                    <CalendarComponent/>
                </div>
            </div>
        </div>
    );
};

export default WindowFireComponent;
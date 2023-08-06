import { SETTINGS_COACH } from '../../../constants';
import boxClose from '../../../icons/box-close.svg';
import GraphicComponent from './GraphicComponent';

const AgendaComponent = ({
    points, navigate, setIdElement, purposeDay, daysOfWeekArray, pointsOfDayArray, maxNumberInArrayPoints,
}) => {
    const click = () => {
        navigate(SETTINGS_COACH);
        setIdElement(10);
    }
    return (
        <div className='mainLearnPage_main_div_agendaComponent'>
            <div className="mainLearnPage_div_main_sign_agendaComponent display_alien_justify">
                <h2 className="mainLearnPage_h2_agendaComponent">Накопичення балів</h2>
                <span 
                    className="mainLearnPage_span_sign_agendaComponent display_alien_justify"
                    onClick={click}
                    >
                    Змінити ціль
                </span>
            </div>
            <div className="mainLearnPage_div_image_purpose_agendaComponent">
                <img src={boxClose} alt="box close" className="mainLearn_image_agendaComponet"/>
                <div className="mainLearnPage_div_main_purpose_line_success_agendaComponent">
                    <h5>Щоденна ціль</h5>
                    <div className="mainLearnPage_div_main_line_success_agendaComponent">
                        <div className="mainLearnPage_div_line_success_agendaComponent"> 
                            <div 
                                style={{
                                    background: '#ffc800' ,
                                    height: '14px',
                                    borderRadius: '14px',
                                    marginRight: '12px',
                                    width: `${(points/purposeDay)*100}%`,
                                    maxWidth: '100%'
                                    }}
                                >
                            </div>                       
                        </div>
                        <h5 className="mainLearnPage_h5_success_agendaComponent">
                            {points}/{purposeDay} балів
                        </h5> 
                    </div>            
                </div>
            </div>
            <div className='mainLearnPage_main_div_graphic_agendaComponet'>
                <GraphicComponent 
                    points={points}
                    daysOfWeekArray={daysOfWeekArray}
                    pointsOfDayArray={pointsOfDayArray}
                    maxNumberInArrayPoints={maxNumberInArrayPoints}
                />
            </div>
        </div>
    );
};

export default AgendaComponent;
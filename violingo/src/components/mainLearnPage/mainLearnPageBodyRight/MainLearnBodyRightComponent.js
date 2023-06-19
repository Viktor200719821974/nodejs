import AgendaComponent from './AgendaComponent';
import SettingsCoachSoundBodyRightComponent from './SettingsCoachSoundBodyRightComponent';
import { arrayPurposeSettingsCoachComponent } from '../../../constants/arrays';

const MainLearnBodyRightComponent = ({
    points, setSettingsCoach, setIdElement, settingsCoach, settingsSound, navigate, daysOfWeekArray, pointsOfDayArray,
    setSettingsSound, changeBodyRight, activeButton, choosePurposeDay, everyDayTarget, maxNumberInArrayPoints,
}) => {
    const purposeDay = everyDayTarget && arrayPurposeSettingsCoachComponent
        .filter(c => c.name === everyDayTarget) 
        .map(c => c.point)[0].slice(0,3);
    return (
        <>
            {changeBodyRight &&
                <SettingsCoachSoundBodyRightComponent
                    settingsCoach={settingsCoach}
                    settingsSound={settingsSound}
                    navigate={navigate}
                    setSettingsCoach={setSettingsCoach}
                    setSettingsSound={setSettingsSound}
                    activeButton={activeButton}
                    choosePurposeDay={choosePurposeDay}
                />             
            }
            {!changeBodyRight &&
                <div>
                    <div className="mainLearnPage_div_body_legia">
                    
                    </div>
                    <div className="mainLearnPage_div_body_agenda"> 
                        <AgendaComponent
                            points={points}
                            purposeDay={purposeDay !== '' ? purposeDay : 10}
                            setSettingsCoach={setSettingsCoach}
                            setIdElement={setIdElement}
                            navigate={navigate}
                            daysOfWeekArray={daysOfWeekArray}
                            pointsOfDayArray={pointsOfDayArray}
                            maxNumberInArrayPoints={maxNumberInArrayPoints}
                        />      
                    </div> 
                </div>
            }
            
        </>
    );
};

export default MainLearnBodyRightComponent;
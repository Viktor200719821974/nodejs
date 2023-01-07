import AgendaComponent from './AgendaComponent';
import SettingsCoachSoundBodyRightComponent from './SettingsCoachSoundBodyRightComponent';

const MainLearnBodyRightComponent = ({
    points, purposeDay, setSettingsCoach, setIdElement, settingsCoach, settingsSound, navigate,
    setSettingsSound, changeBodyRight, activeButton,
}) => {
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
                />
                
            }
            {!changeBodyRight &&
                <div>
                    <div className="mainLearnPage_div_body_legia">
                    
                    </div>
                    <div className="mainLearnPage_div_body_agenda"> 
                        <AgendaComponent
                            points={points}
                            purposeDay={purposeDay}
                            setSettingsCoach={setSettingsCoach}
                            setIdElement={setIdElement}
                            navigate={navigate}
                        />      
                    </div> 
                </div>
            }
            
        </>
    );
};

export default MainLearnBodyRightComponent;
import { LEARN_PAGE, SETTINGS_COACH, SETTINGS_SOUND } from '../../../constants';
import { updateEveryDayTarget } from '../../../http/statisticApi';

const SettingsCoachSoundBodyRightComponent = ({
    navigate, settingsSound, settingsCoach, setSettingsSound, setSettingsCoach, activeButton,
    choosePurposeDay,
}) => {
    
    const click = () => {
        try {
            updateEveryDayTarget(choosePurposeDay).then(data => {
                if (data.status === 200) {
                    navigate(LEARN_PAGE);
                }
            }).catch(e => console.log(e));
        } catch(e) {
            console.log(e);
        }
    }
    return (
        <div className="mainLearnPage_main_div_settingsCoachSoundComponent">
            <div className="mainLearnPage_div_button_settingsCoachSoundComponent">
                <button 
                    onClick={click}
                    className={
                        activeButton
                            ? "mainLearnPage_button_settingsCoachSoundComponent display_alien_justify"
                            : "mainLearnPage_button_noActive_settingsCoachSoundComponent display_alien_justify"
                    }
                    >
                        Зберегти зміни
                </button>
            </div>
            <div className="mainLearnPage_div_choose_settings_settingsCoachSoundComponent">
                <span 
                    className={
                        !settingsSound 
                            ? "mainLearnPage_span_button_settingsCoachSoundComponent"
                            : "mainLearnPage_span_button_select_settingsCoachSoundComponent"
                        }
                    onClick={() => {navigate(SETTINGS_SOUND); setSettingsCoach(false);}}
                    >
                    Звук
                </span>
                <span 
                    className={
                        !settingsCoach
                            ? "mainLearnPage_span_button_settingsCoachSoundComponent"
                            : "mainLearnPage_span_button_select_settingsCoachSoundComponent"
                        }
                    onClick={() => {navigate(SETTINGS_COACH); setSettingsSound(false);}}
                    >
                    Змінити щоденну ціль
                </span>
            </div>
        </div>
    );
};

export default SettingsCoachSoundBodyRightComponent;

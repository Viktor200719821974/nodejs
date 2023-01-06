import { arrayPurposeSettingsCoachComponent } from '../../constants/arrays';
import coach from '../../icons/coach.svg';

const SettingsCoachComponent = ({
    navigate,
}) => {
    return (
        <div className="mainLearnPage_main_div_settingsCoachComponent">
            <div>
                <h1 style={{color: '#3c3c3c', marginBottom: '22px', fontSize: '27px'}}>
                    Змінити щоденну ціль
                </h1>
                <p style={{marginBottom: '48px', paddingTop: '12px', color: '#999'}}>
                    Тренер на місці! Встановлення щоденної цілі допоможе підтримувати мотивацію 
                    під час вивчення мови. Ви зможете змінити ціль у будь-який момент.
                </p>
                <div className="mainLearnPage_main_div_image_table_settingsCoachComponent">
                    <img 
                        src={coach} 
                        alt="stamp coach"
                        className="mainLearnPage_image_coach_settingsCoachComponent"
                        />
                    <div
                        className="mainLearnPage_main_div_choose_purpose_settingsCoachComponent" 
                        >
                        {
                            arrayPurposeSettingsCoachComponent.map(c => 
                                <span 
                                    key={c.id}
                                    className="mainLearnPage_main_span_choose_purpose_settingsCoachComponent"
                                    >
                                    <span
                                        className="welcomePage_div_table_column_left_welcome3Component"
                                        >
                                            <b>{c.title}</b>
                                    </span> 
                                    <span className="welcomePage_div_table_column_right_welcome3Component">
                                        {c.point}
                                    </span>
                                </span>                           
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsCoachComponent;
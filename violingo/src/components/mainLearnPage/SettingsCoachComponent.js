import { arrayPurposeSettingsCoachComponent } from '../../constants/arrays';
import coach from '../../icons/coach.svg';

const SettingsCoachComponent = ({
    idElement, setChoosePurposeDay, setIdElement,
}) => {
    return (
        <div>
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
                                <div key={c.id}>
                                   {(c.id === 11) && 
                                        <span 
                                            className={
                                                idElement !== c.id 
                                                    ? "mainLearnPage_main_span_choose_purpose_top_settingsCoachComponent"
                                                    : "mainLearnPage_main_span_choose_purpose_top_select_settingsCoachComponent"
                                            }
                                            onClick={() => {
                                                setChoosePurposeDay(c.title); 
                                                setIdElement(c.id)
                                            }}
                                            >
                                            <span
                                                className="mainLearnPage_div_table_column_left_settingsCoachComponent"
                                                >
                                                <b>{c.title}</b>
                                            </span> 
                                            <span className="mainLearnPage_div_table_column_right_settingsCoachComponent">
                                            {c.point}
                                            </span>
                                        </span> 
                                    } 
                                    {((c.id !== 11) && (c.id !== 15)) && 
                                        <span 
                                            className={
                                                idElement !== c.id 
                                                    ? "mainLearnPage_main_span_choose_purpose_center_settingsCoachComponent"
                                                    : "mainLearnPage_main_span_choose_purpose_center_select_settingsCoachComponent"
                                            }
                                            onClick={() => {
                                                setChoosePurposeDay(c.title); 
                                                setIdElement(c.id)
                                            }}
                                            >
                                            <span
                                                className="mainLearnPage_div_table_column_left_settingsCoachComponent"
                                                >
                                                <b>{c.title}</b>
                                            </span> 
                                            <span className="mainLearnPage_div_table_column_right_settingsCoachComponent">
                                            {c.point}
                                            </span>
                                        </span> 
                                    }
                                    {(c.id === 15) && 
                                        <span 
                                            className={
                                                idElement !== c.id 
                                                    ? "mainLearnPage_main_span_choose_purpose_down_settingsCoachComponent"
                                                    : "mainLearnPage_main_span_choose_purpose_down_select_settingsCoachComponent"
                                            }
                                            onClick={() => {
                                                setChoosePurposeDay(c.title); 
                                                setIdElement(c.id)
                                            }}
                                            >
                                            <span
                                                className="mainLearnPage_div_table_column_left_settingsCoachComponent"
                                                >
                                                <b>{c.title}</b>
                                            </span> 
                                            <span className="mainLearnPage_div_table_column_right_settingsCoachComponent">
                                            {c.point}
                                            </span>
                                        </span> 
                                    }
                                </div>                                    
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsCoachComponent;
const SettingsSoundComponent = ({
    offSoundEffects, setOffSoundEffects, offExerciseToSpeak, setOffExerciseToSpeak,
    offExerciseToAudio, setOffExerciseToAudio,
}) => {
    return (
        <div>
            <h1 style={{color: '#3c3c3c', marginBottom: '22px', fontSize: '27px'}}>
                Звук
            </h1>
            <div className="mainLearnPage_div_sign_and_button_settingsSoundComponent">
                <span className="mainLearnPage_span_sign_settingsSoundComponent">
                    Звукові ефекти
                </span>
                <div 
                    className="mainLearnPage_div_ellipse_and_quadrate_settingsSoundComponent"
                    onClick={() => setOffSoundEffects(value => !value)}
                    >
                    <span 
                        className={
                            offSoundEffects 
                                ? "mainLearnPage_span_ellipse_on_settingSoundComponent"
                                : "mainLearnPage_span_ellipse_off_settingSoundComponent"
                        } 
                        >
                    </span>
                    <span 
                        className={
                            offSoundEffects
                                ? "mainLearnPage_span_quadrate_on_settingsSoundComponent " +
                                "mainLearnPage_main_style_settingSoundComponent "
                                : "mainLearnPage_span_quadrate_off_settingsSoundComponent " +
                                "mainLearnPage_main_style_settingSoundComponent "
                        }
                        >                    
                    </span> 
                </div>   
            </div>
            <div className="mainLearnPage_div_sign_and_button_settingsSoundComponent">
                <span className="mainLearnPage_span_sign_settingsSoundComponent">
                    Вправи на говоріння
                </span>
                <div 
                    className="mainLearnPage_div_ellipse_and_quadrate_settingsSoundComponent"
                    onClick={() => setOffExerciseToSpeak(value => !value)}
                    >
                    <span 
                        className={
                            offExerciseToSpeak
                                ? "mainLearnPage_span_ellipse_on_settingSoundComponent"
                                : "mainLearnPage_span_ellipse_off_settingSoundComponent"
                        } 
                        >
                    </span>
                    <span 
                        className={
                            offExerciseToSpeak
                                ? "mainLearnPage_span_quadrate_on_settingsSoundComponent " +
                                "mainLearnPage_main_style_settingSoundComponent "
                                : "mainLearnPage_span_quadrate_off_settingsSoundComponent " +
                                "mainLearnPage_main_style_settingSoundComponent "
                        }
                        >                    
                    </span> 
                </div> 
            </div>
            <div className="mainLearnPage_div_sign_and_button_settingsSoundComponent">
                <span className="mainLearnPage_span_sign_settingsSoundComponent">
                    Вправи на аудіювання
                </span>
                <div 
                    className="mainLearnPage_div_ellipse_and_quadrate_settingsSoundComponent"
                    onClick={() => setOffExerciseToAudio(value => !value)}
                    >
                    <span 
                        className={
                            offExerciseToAudio
                                ? "mainLearnPage_span_ellipse_on_settingSoundComponent"
                                : "mainLearnPage_span_ellipse_off_settingSoundComponent"
                        } 
                        >
                    </span>
                    <span 
                        className={
                            offExerciseToAudio
                                ? "mainLearnPage_span_quadrate_on_settingsSoundComponent " +
                                "mainLearnPage_main_style_settingSoundComponent "
                                : "mainLearnPage_span_quadrate_off_settingsSoundComponent " +
                                "mainLearnPage_main_style_settingSoundComponent "
                        }
                        >                    
                    </span> 
                </div> 
            </div>
        </div>
    );
};

export default SettingsSoundComponent;
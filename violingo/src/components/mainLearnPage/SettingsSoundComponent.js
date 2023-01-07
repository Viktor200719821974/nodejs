const SettingsSoundComponent = ({
    offSoundEffects, setOffSoundEffects, offExeciseToSpeak, setOffExeciseToSpeak, 
    offExeciseToAudio, setOffExeciseToAudio,
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
                                ? "mainLearnPage_span_quadrate_on_settingsSoundComponent"
                                : "mainLearnPage_span_quadrate_off_settingsSoundComponent"
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
                    onClick={() => setOffExeciseToSpeak(value => !value)}
                    >
                    <span 
                        className={
                            offExeciseToSpeak 
                                ? "mainLearnPage_span_ellipse_on_settingSoundComponent"
                                : "mainLearnPage_span_ellipse_off_settingSoundComponent"
                        } 
                        >
                    </span>
                    <span 
                        className={
                            offExeciseToSpeak
                                ? "mainLearnPage_span_quadrate_on_settingsSoundComponent"
                                : "mainLearnPage_span_quadrate_off_settingsSoundComponent"
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
                    onClick={() => setOffExeciseToAudio(value => !value)}
                    >
                    <span 
                        className={
                            offExeciseToAudio
                                ? "mainLearnPage_span_ellipse_on_settingSoundComponent"
                                : "mainLearnPage_span_ellipse_off_settingSoundComponent"
                        } 
                        >
                    </span>
                    <span 
                        className={
                            offExeciseToAudio
                                ? "mainLearnPage_span_quadrate_on_settingsSoundComponent"
                                : "mainLearnPage_span_quadrate_off_settingsSoundComponent"
                        }
                        >                    
                    </span> 
                </div> 
            </div>
        </div>
    );
};

export default SettingsSoundComponent;
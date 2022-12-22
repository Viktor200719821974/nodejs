import { BiArrowBack } from 'react-icons/bi';

import { arrayWelcome2 } from '../constants/arrays';
import WelcomeUnderComponent from './WelcomeUnderComponent';

const Welcome2Component = ({
    buttonNoActive, setNewComponent, setNewComponent1, setIdElement, idElement, 
    setButtonNoActive, setWhyStudyValue, newComponent, setFromKnewValue,
    }) => {

    const buttonBack = () => {
        setNewComponent(false);
        setIdElement(0);
        setButtonNoActive(false);
    }
    return (
        <div>
            <div className="welcomePage_main_div_top display_alien_justify">
                <button 
                    className="welcomePage_button_cross" 
                    onClick={buttonBack}
                    >
                    <BiArrowBack color='#d0cccc' size={'22px'}/>
                </button> 
                <div className="welcomePage_div_around_cross">
                    <div className="welcomePage_div_one_download"></div>
                </div>
            </div>
            <div className="welcomePage_div_body" style={{marginTop: '180px'}}>
                <h1 style={{color: '#4b4b4b', margin: '0 24px 24px'}}>
                    Для чого ви вивчаєте мову?
                </h1>
                <div className="welcomePage_div_main_blocks">
                    { newComponent &&
                        arrayWelcome2.map(c => 
                            <WelcomeUnderComponent
                                key={c.id}
                                name={c.name}
                                src={c.src}
                                alt={c.alt}
                                sign={c.sign}
                                id={c.id}
                                setIdElement={setIdElement}
                                idElement={idElement}
                                setButtonNoActive={setButtonNoActive}
                                setWhyStudyValue={setWhyStudyValue}
                                setFromKnewValue={setFromKnewValue}
                            />)
                    }  
                </div>
                <div 
                    className={
                        buttonNoActive ? "welcomePage_div_button_next display_alien_justify"
                         : "welcomePage_div_button_next_noActive display_alien_justify"
                    }
                    onClick={() => {
                        buttonNoActive &&
                        setNewComponent1(false);
                        setButtonNoActive(false);
                        setIdElement(0);
                    }}
                    >
                        Продовжити
                </div>
            </div> 
        </div>
    );
};

export default Welcome2Component;
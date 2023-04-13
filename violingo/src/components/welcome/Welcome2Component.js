import { BiArrowBack } from 'react-icons/bi';

import { arrayWelcome1, arrayWelcome2, arrayWelcome3 } from '../../constants/arrays';
import { IMAGES_WELCOME_PATH } from '../../constants';

const Welcome2Component = ({
    buttonNoActive, setNewComponent, setNewComponent1, setIdElement, idElement, 
    setButtonNoActive, setWhatAreYouStuding, newComponent, howDidYouKnow, everyDayTarget,
    setEveryDayTarget,
    }) => {
    
    const buttonBack = () => {
        setNewComponent(false);
        setIdElement(arrayWelcome1.filter(c => c.name === howDidYouKnow).map(c => c.id)[0]);
        (howDidYouKnow === '') && setButtonNoActive(false);
        (howDidYouKnow !== '') && setButtonNoActive(true);
    }
    const click = () => {
        setNewComponent1(false);
        setEveryDayTarget('usual');
        (everyDayTarget === '') && setIdElement(2);
        (everyDayTarget !== '') && setIdElement(arrayWelcome3
            .filter(c => c.name === everyDayTarget).map(c => c.id)[0]);
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
                            <div 
                                key={c.id}
                                className={
                                    (c.id !== idElement) ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                                }
                                onClick={() => {
                                    setIdElement(c.id);
                                    setButtonNoActive(true);
                                    setWhatAreYouStuding(c.name);
                                }}
                                >
                                    <img 
                                        className="welcomePage_image"
                                        src={IMAGES_WELCOME_PATH + c.src} 
                                        alt={c.alt}
                                    />
                                    <span className="welcomePage_span_sign_in_block sign">
                                        <b>{c.sign}</b>
                                    </span>
                            </div>
                        )
                    }  
                </div>
                <div 
                    className={
                        buttonNoActive ? "welcomePage_div_button_next display_alien_justify"
                            : "welcomePage_div_button_next_noActive display_alien_justify"
                    }
                    onClick={click}
                    >
                        Продовжити
                </div>
            </div> 
        </div>
    );
};

export default Welcome2Component;
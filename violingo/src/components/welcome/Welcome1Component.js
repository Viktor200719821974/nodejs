import { RxCross1 } from 'react-icons/rx';

import { arrayWelcome1 } from '../../constants/arrays';
import WelcomeUnderComponent from './WelcomeUnderComponent';

const Welcome1Component = ({
        buttonNoActive, setNewComponent, setNewComponent5, setNewComponent4,
        setFromKnewValue, setIdElement, idElement, setButtonNoActive, newComponent,
    }) => {
    return (
        <div>
           <div className="welcomePage_main_div_top display_alien_justify">
                <button 
                    className="welcomePage_button_cross"
                    onClick={() => {
                        setNewComponent5(true);
                        setNewComponent4(false);
                    }}
                    >
                    <RxCross1 color='#d0cccc' size={'22px'}/>
                </button> 
                <div className="welcomePage_div_around_cross"></div>
            </div>
            <div className="welcomePage_div_body">
                <h1 style={{color: '#4b4b4b', margin: '0 24px 24px'}}>
                    Звідки ви дізналися про Violingo?
                </h1>
                <div className="welcomePage_div_main_blocks">
                    { !newComponent &&
                        arrayWelcome1.map(c => 
                            <WelcomeUnderComponent
                                key={c.id}
                                name={c.name}
                                src={c.src}
                                alt={c.alt}
                                sign={c.sign}
                                id={c.id}
                                setFromKnewValue={setFromKnewValue}
                                setIdElement={setIdElement}
                                idElement={idElement}
                                setButtonNoActive={setButtonNoActive}
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
                        setNewComponent(true);
                        setIdElement(0);
                        setButtonNoActive(false);
                    }}
                    >
                        Продовжити
                </div>
            </div> 
        </div>
    );
};

export default Welcome1Component;
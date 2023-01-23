import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

import { arrayWelcome1, arrayWelcome2 } from '../../constants/arrays';
import { IMAGES_WELCOME_PATH, LOGIN_PAGE } from '../../constants';

const Welcome1Component = ({
        buttonNoActive, setNewComponent, setHowDidYouKnow, setIdElement, idElement, 
        setButtonNoActive, newComponent, whatAreYouStuding,
}) => {
    const navigate = useNavigate();
    const click = () => {
        setNewComponent(true);
        (whatAreYouStuding === '') && setIdElement(0);
        (whatAreYouStuding !== '') && 
            setIdElement(arrayWelcome2.filter(c => c.name === whatAreYouStuding)
                .map(c => c.id)[0]);
        (whatAreYouStuding === '') && setButtonNoActive(false);
        (whatAreYouStuding !== '') && setButtonNoActive(true);
    }
    return (
        <div>
           <div className="welcomePage_main_div_top display_alien_justify">
                <button 
                    className="welcomePage_button_cross"
                    onClick={() => {
                        navigate(LOGIN_PAGE);
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
                            <div 
                                key={c.id}
                                className={
                                    (c.id !== idElement) ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                                }
                                onClick={() => {
                                    setIdElement(c.id);
                                    setHowDidYouKnow(c.name);
                                    setButtonNoActive(true);
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

export default Welcome1Component;
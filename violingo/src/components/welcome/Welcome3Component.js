import { BiArrowBack } from 'react-icons/bi';
import { arrayWelcome3 } from '../../constants/arrays';
import Welcome3UnderComponent from './Welcome3UnderComponent';

const Welcome3Component = ({
    setNewComponent1, setNewComponent2, setIdElement, idElement, 
    setTimeToExeciseValue, setButtonNoActive,
    }) => {

    const buttonBack = () => {
        setNewComponent1(true);
        setButtonNoActive(false);
        setIdElement(0);
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
                    <div className="welcomePage_div_one_download" style={{width: '40%'}}></div>
                </div>
            </div>
            <div className="welcomePage_div_body_welcome3Component">
                <h1 style={{color: '#4b4b4b', margin: '0 24px 24px'}}>
                    Чудово! Тепер виберіть щоденну ціль
                </h1>
                <div className="welcomePage_div_main_table_welcome3Component">
                   {
                    arrayWelcome3.map(c => 
                        <Welcome3UnderComponent
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            time={c.time}
                            title={c.title}
                            setIdElement={setIdElement}
                            idElement={idElement}
                            setTimeToExeciseValue={setTimeToExeciseValue}
                        />
                    )
                   }
                </div>
                <div 
                    className="welcomePage_div_button_next display_alien_justify"
                    onClick={() => setNewComponent2(false)}
                    style={{width: '580px'}}
                    >
                        Продовжити
                </div>
            </div>
        </div>
    );
};

export default Welcome3Component;
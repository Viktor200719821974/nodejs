import { BiArrowBack } from 'react-icons/bi';
import { arrayWelcome3 } from '../../constants/arrays';
import { postStatistic } from '../../http/statisticApi';

const Welcome3Component = ({
    setNewComponent1, setNewComponent2, setIdElement, idElement, 
    setEveryDayTarget, howDidYouKnow, whatAreYouStuding, everyDayTarget, setButtonNoActive,
    }) => {
    const buttonBack = () => {
        setNewComponent1(true);
    }
    const click = () => {
        try {
            setButtonNoActive(false);
            setNewComponent2(false);
            postStatistic(howDidYouKnow, whatAreYouStuding, everyDayTarget).then(data => {
                console.log(data);
            }).catch(e => {
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        }        
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
                        <div key={c.id}>
                            {(c.id === 1) && 
                                <div 
                                    className={
                                        (idElement !== c.id) 
                                            ? "welcomePage_div_table_row_top_welcome3Component" 
                                            : "welcomePage_div_table_row_top_welcome3Component_select"
                                    }
                                    onClick={() => {
                                        setEveryDayTarget(c.name);
                                        setIdElement(c.id); 
                                    }}
                                     >
                                    <span className="welcomePage_div_table_column_left_welcome3Component">
                                        <b>{c.title}</b>
                                    </span>
                                    <span className="welcomePage_div_table_column_right_welcome3Component">
                                        {c.time} 
                                    </span>
                                </div>
                            }
                            {((c.id !== 1) && (c.id !== 4)) && 
                                <div 
                                    className={
                                        (idElement !== c.id) 
                                            ? "welcomePage_div_table_row_center_welcome3Component" 
                                            : "welcomePage_div_table_row_center_welcome3Component_select"
                                    }
                                    onClick={() => {
                                        setEveryDayTarget(c.name);
                                        setIdElement(c.id); 
                                    }}
                                    >
                                    <span className="welcomePage_div_table_column_left_welcome3Component">
                                        <b>{c.title}</b>
                                    </span>
                                    <span className="welcomePage_div_table_column_right_welcome3Component">
                                        {c.time} 
                                    </span>
                                </div>
                            }
                            {(c.id === 4) && 
                                <div 
                                    className={
                                        (idElement !== c.id) 
                                            ? "welcomePage_div_table_row_down_welcome3Component" 
                                            : "welcomePage_div_table_row_down_welcome3Component_select"
                                    }
                                    onClick={() => {
                                        setEveryDayTarget(c.name);
                                        setIdElement(c.id); 
                                    }}
                                    >
                                    <span className="welcomePage_div_table_column_left_welcome3Component">
                                        <b>{c.title}</b>
                                    </span>
                                    <span className="welcomePage_div_table_column_right_welcome3Component">
                                        {c.time} 
                                    </span>
                                </div>
                            }    
                        </div>
                    )
                   }
                </div>
                <div 
                    className="welcomePage_div_button_next display_alien_justify"
                    onClick={click}
                    style={{width: '580px'}}
                    >
                        Продовжити
                </div>
            </div>
        </div>
    );
};

export default Welcome3Component;
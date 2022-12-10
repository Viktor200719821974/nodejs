import { BiArrowBack } from 'react-icons/bi';

const Welcom3Component = ({
    setNewComponent1, buttonNoActive, easy, setEasy, usual, setUsual, serious, setSerious,
    intensive, setIntensive, setValue,
    }) => {

    const buttonBack = () => {
        setNewComponent1(true);
    }
    return (
        <div>
            <div className="welcomePage_main_div_top">
                <button 
                    className="welcomePage_button_cross" 
                    onClick={buttonBack}
                    >
                    <BiArrowBack color='#d0cccc' size={'22px'}/>
                </button> 
                <div className="welcomePage_div_around_cross">
                    <div className="welcomePage_div_one_download" style={{width: '400px'}}></div>
                </div>
            </div>
            <div className="welcomePage_div_body_welcome3Component">
                <h1 style={{color: '#4b4b4b', margin: '0 24px 24px'}}>
                    Чудово! Тепер виберіть щоденну ціль
                </h1>
                <div className="welcomePage_div_main_table_welcome3Component">
                    <div 
                        className={
                            !easy ? "welcomePage_div_table_row_top_welcome3Component" 
                                : "welcomePage_div_table_row_top_welcome3Component_select"
                            }
                        onClick={() => setValue('easy')}
                        >
                        <span className="welcomePage_div_table_column_left_welcome3Component">
                            <b>Проста</b>
                        </span>
                        <span className="welcomePage_div_table_column_right_welcome3Component">
                            5 хв/день
                        </span>
                    </div>
                    <div 
                        className={ 
                            !usual ? "welcomePage_div_table_row_center_welcome3Component"
                                : "welcomePage_div_table_row_center_welcome3Component_select"
                            }
                        onClick={() => setValue('usual')}
                        >
                        <span className="welcomePage_div_table_column_left_welcome3Component">
                            <b>Звичайна</b>
                        </span>
                        <span className="welcomePage_div_table_column_right_welcome3Component">
                            10 хв/день
                        </span>
                    </div>
                    <div 
                        className={ 
                            !serious ? "welcomePage_div_table_row_center_welcome3Component"
                                : "welcomePage_div_table_row_center_welcome3Component_select"
                            }
                        onClick={() => setValue('serious')}
                        >
                        <span className="welcomePage_div_table_column_left_welcome3Component">
                            <b>Серйозна</b>
                        </span>
                        <span className="welcomePage_div_table_column_right_welcome3Component">
                            15 хв/день
                        </span>
                    </div>
                    <div 
                        className={
                            !intensive ? "welcomePage_div_table_row_down_welcome3Component"
                                : "welcomePage_div_table_row_down_welcome3Component_select"
                            }
                        onClick={() => setValue('intensive')}
                        >
                        <span className="welcomePage_div_table_column_left_welcome3Component">
                            <b>Інтенсив</b>
                        </span>
                        <span className="welcomePage_div_table_column_right_welcome3Component">
                            20 хв/день
                        </span>
                    </div>
                </div>
                <button 
                    className={
                        !buttonNoActive ? "welcomePage_div_button_next"
                         : "welcomePage_div_button_next_noActive"
                    }
                    onClick={() => setNewComponent1(false)}
                    style={{width: '580px'}}
                    >
                        Продовжити
                </button>
            </div>
        </div>
    );
};

export default Welcom3Component;
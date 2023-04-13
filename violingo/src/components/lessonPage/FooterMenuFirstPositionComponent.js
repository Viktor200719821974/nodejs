const FooterMenuFirstPositionComponent = ({changedElement, clickNext, verify}) => {
    return (
        <div className="lessonPage_main_div_down_block">
            <div className="lessonPage_main_div_button_left">
                <button 
                    className="lessonPage_button_next_left display_alien_justify"
                    >
                    <span 
                        className="lessonPage_span_button_next"
                        onClick={clickNext}
                        >
                        Далі
                    </span> 
                </button>
            </div>
            <div className="lessonPage_main_div_button_right">
                <button 
                    className={
                        !changedElement 
                            ? "lessonPage_button_next_right display_alien_justify"
                            : "lessonPage_button_next_right_select display_alien_justify"
                    }
                    onClick={verify}
                    >
                    <span 
                        className={
                            !changedElement 
                                ? "lessonPage_span_button_next"
                                : "lessonPage_span_button_next_select"
                        }
                        >
                        Перевірити
                    </span>
                </button>
            </div>               
        </div>
    );
};

export default FooterMenuFirstPositionComponent;
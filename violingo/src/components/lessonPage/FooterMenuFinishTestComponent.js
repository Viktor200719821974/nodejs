const FooterMenuFinishTestComponent = ({ continueExercise, lookLessonUserAnswers, }) => {
    return (
        <div className="lessonPage_main_div_down_block">
            <div className="lessonPage_main_div_button_left">
                <button 
                    className="lessonPage_button_next_left display_alien_justify"
                    >
                    <span 
                        className="lessonPage_span_button_next"
                        onClick={lookLessonUserAnswers}
                        >
                        Проглянути урок
                    </span> 
                </button>
            </div>
            <div className="lessonPage_main_div_button_right">
                <button 
                    className="lessonPage_button_next_right_footerMenuPositiveAnswerComponent display_alien_justify"
                    onClick={continueExercise}
                    >
                    <span 
                        className="lessonPage_span_button_next_footerMenuPositiveAnswerComponent"
                        >
                        Продовжити
                    </span>
                </button>
            </div>               
        </div>
    );
};

export default FooterMenuFinishTestComponent;
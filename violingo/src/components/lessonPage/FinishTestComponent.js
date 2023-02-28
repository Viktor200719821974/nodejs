import finishTestImage from '../../icons/finishTestImage.gif';

const FinishTestComponent = () => {
    return (
        <div className="lessonPage_main_div_finishTestComponent display_alien_justify">
            <div className="lessonPage_div_image_and_signs_finishTestComponent">
                <img 
                    src={finishTestImage} 
                    alt="finish test gratulation"
                    className="lessonPage_image_finishTestComponent"
                />
                <h2>Сьогодні ви заробили 28 балів</h2>
                <div className="lessonPage_div_points_finishTestComponent">
                    <span className="lessonPage_span_left_part_sign_finishTestComponent">
                        Урок завершено!
                    </span>
                    <span className="lessonPage_span_right_part_sign_finishTestComponent">
                        +10 балів
                    </span>
                </div>
                <div className="lessonPage_div_points_finishTestComponent">
                    <span className="lessonPage_span_left_part_sign_finishTestComponent">
                        Бонус комбо!
                    </span>
                    <span className="lessonPage_span_right_part_sign_finishTestComponent">
                        +5 балів
                    </span>
                </div>
            </div>
            
        </div>
    );
};

export default FinishTestComponent;
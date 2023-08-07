import { useEffect } from 'react';

import finishTestImage from '../../icons/finishTestImage.gif';


const FinishTestComponent = ({ 
    countWrongs, arrayLessonPageChooseImage, bonus, setBonus, setPointsUser, points,  
}) => {
    
    const procentOfMisteaks = Math.round((countWrongs / arrayLessonPageChooseImage.length) * 100);
    
    useEffect(() => {
        if (procentOfMisteaks >= 20) {
            setBonus(4);
        }
        if (procentOfMisteaks === 0) {
            setBonus(5);
        }
        if (procentOfMisteaks > 20 && procentOfMisteaks <= 50) {
            setBonus(3);
        }
        if (procentOfMisteaks > 50 && procentOfMisteaks <= 80) {
            setBonus(2);
        }
        if (procentOfMisteaks > 80) {
            setBonus(1);
        }
        if(bonus > 0) {
            setPointsUser(points + bonus + 10);
        }
    // eslint-disable-next-line
    },[procentOfMisteaks, bonus, points]);
    return (
        <div className="lessonPage_main_div_finishTestComponent display_alien_justify">
            <div className="lessonPage_div_image_and_signs_finishTestComponent">
                <img 
                    src={finishTestImage} 
                    alt="finish test gratulation"
                    className="lessonPage_image_finishTestComponent"
                />
                <h2>Сьогодні ви заробили {points + bonus + 10} балів</h2>
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
                        +{bonus} балів
                    </span>
                </div>
            </div>
            
        </div>
    );
};

export default FinishTestComponent;
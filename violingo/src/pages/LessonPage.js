import { RxCross1 } from 'react-icons/rx';

const LessonPage = () => {
    return (
        <div>
            <div className="welcomePage_main_div_top display_alien_justify">
                <button 
                    className="welcomePage_button_cross" 
                    onClick={''}
                    >
                    <RxCross1 color='#d0cccc' size={'22px'}/>
                </button> 
                <div className="welcomePage_div_around_cross">
                    <div className="welcomePage_div_one_download"></div>
                </div>
            </div>
        </div>
    );
};

export default LessonPage;
import { RiFolderAddLine } from 'react-icons/ri';

import flag from '../../../icons/united-states.png';

const WindowFlagComponent = ({
    setMouseOnFlag,
}) => {
    return (
        <div
            className="mainLearnPage_main_div_windowFlagComponent"
            onMouseEnter={() => setMouseOnFlag(true)}
            onMouseLeave={() => setMouseOnFlag(false)}
            >
            <div className="mainLearnPage_div_triangle_windowFlagComponent"></div>
            <div className="mainLearnPage_div_flag_windowFlagComponent">
                <span className="mainLearnPage_span_image_flag_windowFlagComponent">
                    <img
                        src={flag}
                        alt="stamp flag of America"
                        className="mainLearnPage_image_flag_windowFlagComponent"
                    />
                    <h4 style={{color: '#3c3c3c'}}>Англійська</h4>
                </span>
                <span
                    className="mainLearnPage_span_flag_windowFlagComponent"
                >
                    <RiFolderAddLine color='#e1d6d6' size={'30px'}/>
                    <h4 style={{color: '#e1d6d6', marginLeft: '20px'}}>Додати новий курс</h4>
                </span>
            </div>
        </div>
    );
};

export default WindowFlagComponent;
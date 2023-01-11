import { IMAGES_LEARN_COMPONENT } from "../../../constants";

const Part1LearnComponent = ({
    part1, 
}) => {
    return (
        <>
            {part1.map(c => 
                <div 
                    className="mainLearn_div_button_learnComponent"
                    style={{width: `${c.width}`}}
                    >
                    <button className="mainLearnPage_button_with_image_learnComponent">
                        <img src={IMAGES_LEARN_COMPONENT + c.src} alt={c.alt}/>
                    </button>
                </div>
            )} 
            {/* <div 
                className="mainLearn_div_button_learnComponent"
                style={{width: '30%'}}
                >
                <button 
                    className="mainLearnPage_button_with_image_learnComponent"                                
                    >
                    <img src={} alt={""}/>
                </button> 
            </div> */}
        </>    
    );
};

export default Part1LearnComponent;
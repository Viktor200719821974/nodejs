import { IMAGES_LEARN_COMPONENT } from '../../../constants';

const Part2LearnComponent = ({
    part2,
}) => {
    return (
        <>
            {part2.map(c => 
                <div 
                    className="mainLearn_div_button_learnComponent"
                    style={{width: `${c.width}`}}
                    key={c.id}
                    >
                    <button className="mainLearnPage_button_with_image_learnComponent">
                        <img src={IMAGES_LEARN_COMPONENT + c.src} alt={c.alt}/>
                    </button>
                </div>
            // <div 
            //     className="mainLearn_div_button_learnComponent"
            // // style={{width: '40%'}}
            //     >
            //     <button className="mainLearnPage_button_with_image_learnComponent">
            //         <img src={cup} alt={""}/>
            //     </button>  
            // </div> 
            )}
        </>
    );
};

export default Part2LearnComponent;
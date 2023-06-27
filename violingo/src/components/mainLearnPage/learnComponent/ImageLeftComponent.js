import coffer from '../../../icons/coffer.svg';
import { IMAGES_SERVER_PATH } from '../../../constants';

const ImageLeftComponent = ({ module, image_left, themeNumber, moduleNumber, themeId, }) => {
    return (
        <div className="mainLearnPage_div_main_buttons_with_image_learnComponent">
            <div className="mainLearnPage_div_big_image_left_learnComponent">
                <img 
                    src={IMAGES_SERVER_PATH + image_left} 
                    alt={'left aplication'}
                    className="mainLearnPage_big_image_learnComponent"
                />
            </div>
            <div className="mainLearnPage_div_button_learnComponent">
                {
                    module.sort((a, b) => a.moduleNumber - b.moduleNumber).map((c, index) =>
                        <div key={c.id}>
                            {
                                index < 2 && 
                                    <button 
                                        className="mainLearnPage_button_with_image_learnComponent" 
                                        style={{marginLeft: `${50 * index}px`}}
                                        >
                                        <img 
                                            src={IMAGES_SERVER_PATH + c.image_module}
                                            alt={'module stamp'}
                                        />
                                    </button>
                            }
                        </div> 
                    )
                }
                {
                    module.length > 0 &&
                        <img src={coffer} alt={"coffer stamp"} style={{marginLeft: '60px', cursor: 'pointer'}}/>
                }
                {
                    module.sort((a, b) => a.moduleNumber - b.moduleNumber).map((c, index) =>
                        <div key={c.id}>
                            {
                                (index < 4 && index > 1) &&
                                    <button 
                                        className="mainLearnPage_button_with_image_learnComponent" 
                                        style={{marginLeft: `${index % 2 === 0 ? 25 * index : 25}px`}}
                                        >
                                        <img 
                                            src={IMAGES_SERVER_PATH + c.image_module}
                                            alt={'module stamp'}
                                        />
                                    </button>
                            }
                        </div> 
                    )
                }
            </div>
        </div>
    );
};

export default ImageLeftComponent;
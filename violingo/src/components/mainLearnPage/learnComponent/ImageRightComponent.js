import { IMAGES_SERVER_PATH, IMAGES_LEARN_COMPONENT } from '../../../constants';
import coffer from '../../../icons/coffer.svg';

const ImageRightComponent = ({ module, image_right, image_left, themeNumber, moduleNumber, themeId, }) => {
    return (
        <div className="mainLearnPage_div_main_buttons_with_image_learnComponent">
            <div className="mainLearnPage_div_button_right_learnComponent">
                {
                    module.sort((a, b) => a.moduleNumber - b.moduleNumber).map((c, index) =>
                        <div key={c.id}>
                            {
                                (index < 2 && !image_left) && 
                                    <div>
                                       {
                                            moduleNumber !== c.moduleNumber
                                            ?
                                            <button 
                                                className="mainLearnPage_button_with_image_learnComponent" 
                                                style={{marginLeft: `${270 - index * 90}px`}}
                                                >
                                                <img 
                                                    src={IMAGES_SERVER_PATH + c.image_module}
                                                    alt={'module stamp'}
                                                />
                                            </button>
                                            :
                                            <div 
                                                style={{marginLeft: `${270 - index * 90}px`}}
                                                className="mainLearnPage_main_div_active_button_with_image_learnComponent"
                                                >
                                                    {/* <div className='loader'></div> */}
                                                    {/* <div 
                                                        className="mainLearnPage_second_div_active_button_with_image_learnComponent"
                                                        > */}
                                                        {/* <button className="mainLearnPage_active_button_with_image_learnComponent">Nlljdslk</button> */}
                                                        <button className="mainLearnPage_active_button_with_image_learnComponent">
                                                            <img 
                                                                src={IMAGES_LEARN_COMPONENT + 'starForActiveModule.svg'} 
                                                                alt={'active button'}
                                                            />
                                                        </button>
                                                    {/* </div> */}
                                            </div>
                                        }
                                    </div>
                            }
                        </div> 
                    )
                }
                {
                    module.sort((a, b) => a.moduleNumber - b.moduleNumber).map((c, index) =>
                        <div key={c.id}>
                            {
                                (index > 3 && index < 6 && image_left) &&
                                    <button 
                                        className="mainLearnPage_button_with_image_learnComponent" 
                                        style={{marginLeft: `${index % 2 === 0 ? 270 : 180}px`}}
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
                        <img src={coffer} alt={"coffer stamp"} style={{marginLeft: '140px', cursor: 'pointer'}}/>
                }
                {
                    module.sort((a, b) => a.moduleNumber - b.moduleNumber).map((c, index) =>
                        <div key={c.id}>
                            {
                                (index < 4 && index > 1 && !image_left) &&
                                    <button 
                                        className="mainLearnPage_button_with_image_learnComponent" 
                                        style={{marginLeft: `${index * 90}px`}}
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
                    module.sort((a, b) => a.moduleNumber - b.moduleNumber).map((c, index) =>
                        <div key={c.id}>
                            {
                                (index > 5 && image_left) &&
                                    <button 
                                        className="mainLearnPage_button_with_image_learnComponent" 
                                        style={{marginLeft: `${index % 2 === 0 ? 180 : 270}px`}}
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
            <div className="mainLearnPage_div_big_image_right_learnComponent">
                <img 
                    src={IMAGES_SERVER_PATH + image_right} 
                    alt={'left aplication'}
                    className="mainLearnPage_big_image_learnComponent"
                />
            </div>
        </div>
    );
};

export default ImageRightComponent;
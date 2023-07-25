import coffer from '../../../icons/coffer.svg';
import { IMAGES_SERVER_PATH } from '../../../constants';
import NoActiveButtonComponent from './NoActiveButtonComponent';
import ActiveButtonComponent from './ActiveButtonComponent';

const ImageLeftComponent = ({ module, image_left, moduleId, backgroundTheme, show, setShow, }) => {
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
                                    <div>
                                        {
                                            moduleId !== c.id  
                                            ?
                                                <NoActiveButtonComponent
                                                    style={`${50 * index}px`} 
                                                    image_module={c.image_module}
                                                />
                                            :
                                                <ActiveButtonComponent 
                                                    style={`${50 * index}px`}
                                                    backgroundTheme={backgroundTheme}
                                                    show={show}
                                                    setShow={setShow}
                                                    moduleId={c.id}
                                                    themeId={c.themeId}
                                                />
                                        }
                                    </div>
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
                                    <div>
                                        {
                                            moduleId !== c.id 
                                            ?
                                                <NoActiveButtonComponent
                                                    style={`${index % 2 === 0 ? 25 * index : 25}px`} 
                                                    image_module={c.image_module}
                                                />
                                            :
                                                <ActiveButtonComponent 
                                                    style={`${index % 2 === 0 ? 25 * index : 25}px`}
                                                    backgroundTheme={backgroundTheme}
                                                    show={show}
                                                    setShow={setShow}
                                                    moduleId={c.id}
                                                />
                                        }
                                    </div>
                            }
                        </div> 
                    )
                }
            </div>
        </div>
    );
};

export default ImageLeftComponent;
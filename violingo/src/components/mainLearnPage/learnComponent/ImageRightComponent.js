import { IMAGES_SERVER_PATH } from '../../../constants';
import coffer from '../../../icons/coffer.svg';
import ActiveButtonComponent from './ActiveButtonComponent';
import NoActiveButtonComponent from './NoActiveButtonComponent';
import ClosedModuleComponent from './ClosedModuleComponent';

const ImageRightComponent = ({ 
    module, image_right, image_left, moduleId, backgroundTheme, show, setShow, falseOrTrue, topBlock, topTriangle, 
}) => {
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
                                            !falseOrTrue(c.id) && c.id !== moduleId &&
                                                <NoActiveButtonComponent 
                                                    style={`${270 - index * 90}px`} 
                                                    image_module={c.image_module}
                                                />
                                        }
                                        {
                                            !falseOrTrue(c.id) && c.id === moduleId &&
                                                <ActiveButtonComponent 
                                                    style={`${270 - index * 90}px`}
                                                    backgroundTheme={backgroundTheme}
                                                    show={show}
                                                    setShow={setShow}
                                                    moduleId={c.id}
                                                    topBlock={topBlock}
                                                    topTriangle={topTriangle}
                                                />
                                        }
                                        {
                                            falseOrTrue(c.id) && c.id !== moduleId &&
                                                <ClosedModuleComponent style={`${270 - index * 90}px`}/>
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
                                    <div>
                                        {  
                                            !falseOrTrue(c.id) && c.id !== moduleId &&
                                                <NoActiveButtonComponent
                                                    style={`${index % 2 === 0 ? 270 : 180}px`} 
                                                    image_module={c.image_module}
                                                />
                                        }
                                        {
                                            !falseOrTrue(c.id) && c.id === moduleId &&
                                                <ActiveButtonComponent 
                                                    style={`${index % 2 === 0 ? 270 : 180}px`}
                                                    backgroundTheme={backgroundTheme}
                                                    show={show}
                                                    setShow={setShow}
                                                    moduleId={c.id}
                                                    topBlock={topBlock}
                                                    topTriangle={topTriangle}
                                                />
                                        }
                                        {
                                            falseOrTrue(c.id) && c.id !== moduleId &&
                                                <ClosedModuleComponent style={`${index % 2 === 0 ? 270 : 180}px`}/>
                                        }
                                    </div>
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
                                    <div>
                                        {  
                                            !falseOrTrue(c.id) && c.id !== moduleId &&
                                                <NoActiveButtonComponent
                                                    style={`${index * 90}px`} 
                                                    image_module={c.image_module}
                                                />
                                        }
                                        {
                                            !falseOrTrue(c.id) && c.id === moduleId &&
                                                <ActiveButtonComponent 
                                                    style={`${index * 90}px`}
                                                    backgroundTheme={backgroundTheme}
                                                    show={show}
                                                    setShow={setShow}
                                                    moduleId={c.id}
                                                    topBlock={topBlock}
                                                    topTriangle={topTriangle}
                                                />
                                        }
                                        {
                                            falseOrTrue(c.id) && c.id !== moduleId &&
                                                <ClosedModuleComponent style={`${index * 90}px`}/>
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
                                (index > 5 && image_left) &&
                                    <div>
                                        {  
                                            !falseOrTrue(c.id) && c.id !== moduleId &&
                                                <NoActiveButtonComponent
                                                    style={`${index % 2 === 0 ? 180 : 270}px`} 
                                                    image_module={c.image_module}
                                                />
                                        }
                                        {
                                            !falseOrTrue(c.id) && c.id === moduleId &&
                                                <ActiveButtonComponent 
                                                    style={`${index % 2 === 0 ? 180 : 270}px`}
                                                    backgroundTheme={backgroundTheme}
                                                    show={show}
                                                    setShow={setShow}
                                                    moduleId={c.id}
                                                    topBlock={topBlock}
                                                    topTriangle={topTriangle}     
                                                />
                                        }
                                        {
                                            falseOrTrue(c.id) && c.id !== moduleId &&
                                                <ClosedModuleComponent style={`${index % 2 === 0 ? 180 : 270}px`}/>
                                        }
                                    </div>
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
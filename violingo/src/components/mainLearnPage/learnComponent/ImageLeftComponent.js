import coffer from '../../../icons/coffer.svg';
import { IMAGES_SERVER_PATH } from '../../../constants';
import NoActiveButtonComponent from './NoActiveButtonComponent';
import ActiveButtonComponent from './ActiveButtonComponent';
import ClosedModuleComponent from './ClosedModuleComponent';

const ImageLeftComponent = ({
    module, image_left, moduleId, backgroundTheme, show, setShow, falseOrTrue, topBlock, topTriangle, points,
}) => {
    console.log(points, 'imageLeftComponent');
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
                                            !falseOrTrue(c.id) && c.id !== moduleId &&
                                                <NoActiveButtonComponent
                                                    style={`${50 * index}px`} 
                                                    image_module={c.image_module}
                                                />
                                        }       
                                        {   
                                            falseOrTrue(c.id) && c.id !== moduleId &&
                                                <ClosedModuleComponent style={`${50 * index}px`}/>
                                        }
                                        {
                                            !falseOrTrue(c.id) && c.id === moduleId &&
                                                <ActiveButtonComponent 
                                                    style={`${50 * index}px`}
                                                    backgroundTheme={backgroundTheme}
                                                    show={show}
                                                    setShow={setShow}
                                                    moduleId={c.id}
                                                    topBlock={topBlock}
                                                    topTriangle={topTriangle}
                                                    points={points}
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
                                            !falseOrTrue(c.id) && c.id !== moduleId &&
                                                <NoActiveButtonComponent
                                                    style={`${index % 2 === 0 ? 25 * index : 25}px`} 
                                                    image_module={c.image_module}
                                                />
                                        }
                                        {
                                            !falseOrTrue(c.id) && c.id === moduleId &&
                                                <ActiveButtonComponent 
                                                    style={`${index % 2 === 0 ? 25 * index : 25}px`}
                                                    backgroundTheme={backgroundTheme}
                                                    show={show}
                                                    setShow={setShow}
                                                    moduleId={c.id}
                                                    topBlock={topBlock}
                                                    topTriangle={topTriangle}
                                                    points={points}
                                                />
                                        }
                                        {
                                            falseOrTrue(c.id) && c.id !== moduleId &&
                                                <ClosedModuleComponent style={`${index % 2 === 0 ? 25 * index : 25}px`}/>
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
import { IMAGES_LEARN_COMPONENT } from '../../../constants';

const ClosedModuleComponent = ({ style, }) => {
    return (
        <div>
            <button 
                className="mainLearnPage_button_with_image_closedModuleComponent" 
                style={{marginLeft: style}}
            >
                <img
                    src={IMAGES_LEARN_COMPONENT + 'closedModuleImage.svg'}
                    alt={'module closed stamp'}
                    className='mainLearnPage_image_light_closedModuleComponent'
                />
                {/* <img 
                    src={IMAGES_LEARN_COMPONENT + 'closedModuleSuccess.svg'}
                    alt={'module closed stamp'}
                    className='mainLearnPage_image_success_closedModuleComponent'
                /> */}
            </button>
        </div>
    );
};

export default ClosedModuleComponent;
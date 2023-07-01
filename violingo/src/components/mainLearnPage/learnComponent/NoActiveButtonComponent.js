import { IMAGES_SERVER_PATH } from '../../../constants';

const NoActiveButtonComponent = ({ style, image_module}) => {
    return (
        <button 
            className="mainLearnPage_button_with_image_learnComponent" 
            style={{marginLeft: style}}
        >
            <img 
                src={IMAGES_SERVER_PATH + image_module}
                alt={'module stamp'}
            />
        </button>
    );
};

export default NoActiveButtonComponent;
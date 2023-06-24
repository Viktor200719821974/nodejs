import { IMAGES_SERVER_PATH } from '../../../constants';

const ImageRightComponent = ({ module, image_right }) => {
    return (
        <div className="mainLearnPage_div_main_buttons_with_image_learnComponent">
            <div className="mainLearnPage_div_big_image1_learnComponent">
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
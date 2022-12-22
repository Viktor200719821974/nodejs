import { IMAGES_FLAGS_PATH } from '../constants';

const LanguageUnderComponent = ({name, src, alt, setValue}) => {
    return (
        <li className="languageComponent_li" onClick={() => setValue(name)}>
            <img src={IMAGES_FLAGS_PATH + src} alt={alt} className="languageComponent_img"/>
            <span>{name}</span>
        </li> 
    );
};

export default LanguageUnderComponent;
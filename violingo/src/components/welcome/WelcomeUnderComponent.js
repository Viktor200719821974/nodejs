import { IMAGES_WELCOME_PATH } from '../../constants';

const WelcomeUnderComponent = ({
    name, src, alt, sign, id, setFromKnewValue, setIdElement, idElement, setButtonNoActive,
    setWhyStudyValue, newComponent,
}) => {
    const click = () => {
        setIdElement(id);
        !newComponent && setFromKnewValue(name);
        setButtonNoActive(true);
        newComponent && setWhyStudyValue(name);
    }
    return (
        <div 
            className={
                (id !== idElement) ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
            }
            onClick={click}
            >
            <img 
                src={IMAGES_WELCOME_PATH + src} 
                alt={alt}
                style={{width: '108px', height: '80px', margin: '20px 13px 10px'}}
            />
            <span className="welcomePage_span_sign_in_block sign">
                <b>{sign}</b>
            </span>
        </div>
    );
};

export default WelcomeUnderComponent;
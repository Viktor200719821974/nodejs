import { arrayLanguages } from '../constants/arrays';
import LanguageUnderComponent from './LanguageUnderComponent';

const LanguageComponent = ({
    setValue, setIsBool,
}) => {
    return (
        <div
            className="languageComponent_main_div" 
            onMouseEnter={() => setIsBool(true)}
            onMouseLeave={() => setIsBool(false)}
            >
            <div className="languageComponent_div_triangle"></div>
            <ul className="languageComponent_ul">
                {
                    arrayLanguages.map((c, index) => 
                        <LanguageUnderComponent
                            key={index}
                            name={c.name}
                            src={c.src}
                            alt={c.alt}
                            setValue={setValue}
                        />)
                }
            </ul>
        </div>
    );
};

export default LanguageComponent;
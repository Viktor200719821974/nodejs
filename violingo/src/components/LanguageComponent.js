import ar from '../icons/arabia.svg';
import bn from '../icons/bn.svg';
import cn from '../icons/china.svg';
import cs from '../icons/czech.svg';
import fr from '../icons/france.svg';
import de from '../icons/germany.svg';
import hu from '../icons/hungary.svg';
import id from '../icons/id.svg';
import india from '../icons/india.svg';
import il from '../icons/israel.svg';
import it from '../icons/italy.svg';
import ja from '../icons/japan.svg';
import nl from '../icons/netherlands.svg';
import pl from '../icons/poland.svg';
import pt from '../icons/portugal.svg';
import ro from '../icons/romania.svg';
import ru from '../icons/rusha.svg';
import kr from '../icons/southKorea.svg';
import es from '../icons/spain.svg';
import th from '../icons/thailand.svg';
import tl from '../icons/tl.svg';
import tr from '../icons/turkey.svg';
import ua from '../icons/ukraine.svg';
import us from '../icons/unitedStateOfAmerica.svg';
import vn from '../icons/vn.svg';

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
                <li className="languageComponent_li" onClick={() => setValue('العربية')}>
                    <img src={ar} alt="Saudi Arabia" className="languageComponent_img"/>
                    <span>العربية</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('বাংলা')}>
                    <img src={bn} alt="Brunei Darussalam" className="languageComponent_img"/>
                    <span>বাংলা</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Čeština')}>
                    <img src={cs} alt="Czech Republic" className="languageComponent_img"/>
                    <span>Čeština</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Deutsch')}>
                    <img src={de} alt="Germany" className="languageComponent_img"/>
                    <span>Deutsch</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Ελληνικά')}>
                    <img src={il} alt="Israel" className="languageComponent_img"/>
                    <span>Ελληνικά</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('English')}>
                    <img src={us} alt="English" className="languageComponent_img"/>
                    <span>English</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Español')}>
                    <img src={es} alt="Spain" className="languageComponent_img"/>
                    <span>Español</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Français')}>
                    <img src={fr} alt="France" className="languageComponent_img"/>
                    <span>Français</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('हिंदी')}>
                    <img src={india} alt="India" className="languageComponent_img"/>
                    <span>हिंदी</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Magyar')}>
                    <img src={hu} alt="Hunguary" className="languageComponent_img"/>
                    <span>Magyar</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Indonesia')}>
                    <img src={id} alt="Indonesia" className="languageComponent_img"/>
                    <span>Indonesia</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Italiano')}>
                    <img src={it} alt="Italy" className="languageComponent_img"/>
                    <span>Italiano</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('日本語한국어')}>
                    <img src={ja} alt="Japan" className="languageComponent_img"/>
                    <span>日本語한국어</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('한국어')}>
                    <img src={kr} alt="South Korea" className="languageComponent_img"/>
                    <span>한국어</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Nederlands')}>
                    <img src={nl} alt="Netherlands" className="languageComponent_img"/>
                    <span>Nederlands</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Polski')}>
                    <img src={pl} alt="Poland" className="languageComponent_img"/>
                    <span>Polski</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Português')}>
                    <img src={pt} alt="Portugal" className="languageComponent_img"/>
                    <span>Português</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Română')}>
                    <img src={ro} alt="Romania" className="languageComponent_img"/>
                    <span>Română</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Русский')}>
                    <img src={ru} alt="rusha" className="languageComponent_img"/>
                    <span>Русский</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('ภาษาไทย')}>
                    <img src={th} alt="Thailand" className="languageComponent_img"/>
                    <span>ภาษาไทย</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Tagalog')}>
                    <img src={tl} alt="Tagalog" className="languageComponent_img"/>
                    <span>Tagalog</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Türkçe')}>
                    <img src={tr} alt="Turkey" className="languageComponent_img"/>
                    <span>Türkçe</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Українською')}>
                    <img src={ua} alt="Ukraine" className="languageComponent_img"/>
                    <span>Українською</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('Tiếng Việt')}>
                    <img src={vn} alt="Vietnam" className="languageComponent_img"/>
                    <span>Tiếng Việt</span>
                </li>
                <li className="languageComponent_li" onClick={() => setValue('中文')}>
                    <img src={cn} alt="China" className="languageComponent_img"/>
                    <span>中文</span>
                </li>
            </ul>
        </div>
    );
};

export default LanguageComponent;
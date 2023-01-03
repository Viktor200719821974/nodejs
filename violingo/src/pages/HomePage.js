import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import { 
  MdKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, 
} from 'react-icons/md';

import earth from '../icons/earth.png';
import americaflag from '../icons/united-states.png';
import sova from '../icons/sova.svg';
import fire from '../icons/fire-stamp.svg';
import success from '../icons/success-stamp.svg';
import computer from '../icons/computer.svg';
import crown from '../icons/crown-stamp.svg';
import face from '../icons/face-stamp.svg';
import superSova from '../icons/super-sova.svg';
import sovaTravel from '../icons/sova-travel.svg';
import computer2 from '../icons/computer2.svg';
import sovaGift from '../icons/sova-gift.svg';
import sovaStudy from '../icons/sova-study.svg';
import { 
  LOGIN_PAGE, REGISTER_PAGE, VIOLINGO_HOME_PAGE, ENGLISH_PAGE, EFFICACY_PAGE, SUPER_VIOLINGO,
  DOWNLOAD_APP_STORE, DOWNLOAD_GOOGLE_PLAY, VIOLINGO_FOR_SCHOOL, ENGLISH_TEST, 
  REGISTRATION_PAGE,
} from '../constants';
import LanguageComponent from '../components/choiseLanguageComponents/LanguageComponent';

const HomePage = () =>  {
    const navigate = useNavigate();
    const [isBool, setIsBool] = useState(false);
    const [value, setValue] = useState('УКРАЇНСЬКА');
    return (
      <div>
        <header className="homePage_header">
          <span 
            className="homePage_sign_violingo sign"
            onClick={() => navigate(VIOLINGO_HOME_PAGE)}
            >
            violingo
          </span>
          <span 
            className="homePage_sign_language sign"
            >
            мова сайту: 
            <span 
              style={{marginLeft: '10px'}}
              >
                {value}
              </span> 
              <MdKeyboardArrowDown 
                size={'30px'}
                onMouseEnter={() => setIsBool(true)}
                onMouseLeave={() => setIsBool(false)}
                />
            </span>
            <span className="homePage_languageComponent">
              {isBool && 
                <LanguageComponent
                  setValue={setValue}
                  setIsBool={setIsBool}
                />
              }
            </span>
        </header>
        <div className="homePage_body">
          <div className="homePage_div_center_body">
            <div className="homePage_div_ringEarth1">
              <div className="homePage_div_ringEarth2">
                <img src={earth} alt="earth" className="homePage_image_earth"/>
              </div>
            </div>
            <div className="homePage_div_main_right">
              <span className="homePage_span_sign_right sign">
                  Безкоштовний, веселий та ефективний спосіб вивчення мови!
              </span>
              <span 
                className="homePage_span_button1 display_alien_justify" 
                onClick={() => navigate(REGISTRATION_PAGE)}
                >
                РОЗПОЧАТИ
              </span>
              <span 
                className="homePage_span_button2 display_alien_justify"
                onClick={() => navigate(LOGIN_PAGE)}
                >
                УЖЕ МАЮ ОБЛІКОВИЙ ЗАПИС
              </span>
            </div>
          </div>
        </div>
        <div 
          className="homePage_div_choice_language"
          onClick={() => navigate(ENGLISH_PAGE)}
          >
          <MdOutlineKeyboardArrowLeft size={'40px'} color={'#c5b9b9'} style={{cursor: "pointer"}}/>
          <img src={americaflag} alt="america flag" className="homePage_image_choice_language"/>
          <span className="homePage_span_sign_language sign">
            АНГЛІЙСЬКА
          </span>
          <MdOutlineKeyboardArrowRight size={'40px'} color={'#c5b9b9'} style={{cursor: "pointer"}}/>
        </div> 
        <div className="homePage_main_div_image_sova display_alien_justify">
          <img src={sova} alt="sova" className="homePage_image_sova"/>
          <span className="homePage_span_sign_about_image_sova">
            <h2>
              Найкращий спосіб вивчити мову
            </h2>
            <span className="homePage_span_sign_about_title">
              Навчатися в Violingo цікаво й <a href={EFFICACY_PAGE}><b><u>ефективно</u></b></a>! 
              Заробляйте бали за короткі уроки та вчіться спілкуватися іноземною мовою.
            </span>
          </span>
        </div>
        <div className="homePage_div_line"></div>
        <div className="homePage_div_main_sign_why_like">
          <h2 style={{display: "flex", justifyContent: "center"}}>
          Чому вам сподобається навчатися в Violingo
          </h2>
          <div className="homePage_div_main_sign_stamps">
            <div className="homePage_div_one_block_sign_stamps">
              <div style={{display: "flex"}}>
                <img src={fire} alt="fire stamp" style={{width: "43px", height: "43px"}}/>
                <div className="homePage_div_stamp_fire">
                  <h3>Ефективно й дієво</h3>
                  <span>
                    Наші курси ефективно й дієво розвивають навички читання, 
                    слухання та говоріння. Ознайомтеся з  
                    <b 
                      style={{color: "#1cb0f6", cursor: "pointer", marginLeft: '3px'}}
                      onClick={() => navigate(EFFICACY_PAGE)}
                      > 
                        найновішим дослідженням
                    </b>.
                  </span>
                </div>
              </div>
              <div style={{display: "flex"}}>
                <img src={success} alt="success stamp" style={{width: "43px", height: "43px"}}/>
                <div className="homePage_div_stamp_fire">
                  <h3>Персоналізоване навчання</h3>
                  <span>
                  Поєднуючи найкраще зі штучного інтелекту та мовознавства, 
                  уроки допомагають навчатися в потрібному темпі та на відповідному рівні.
                  </span>
                </div>
              </div>
            </div>
            <div className="homePage_div_two_block_sign_stamps">
              <img src={computer} alt="computer"/>
            </div>
            <div className="homePage_div_one_block_sign_stamps">
              <div style={{display: "flex"}}>
                <img src={crown} alt="crown stamp" style={{width: "43px", height: "43px"}}/>
                <div className="homePage_div_stamp_fire">
                  <h3>Підтримка мотивації</h3>
                  <span>
                  Ми полегшуємо формування звички до вивчення мови за допомогою ігрових функцій, 
                  веселих завдань і нагадувань від нашого доброзичливого талісмана — сови Duo.
                  </span>
                </div>
              </div>
              <div style={{display: "flex"}}>
                <img src={face} alt="face stamp" style={{width: "43px", height: "43px"}}/>
                <div className="homePage_div_stamp_fire">
                  <h3>Радість від навчання</h3>
                  <span>
                  Ефективне навчання не мусить бути нудним! 
                  Удосконалюйте свої знання щодня за допомогою захопливих вправ і грайливих персонажів.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homePage_div_line"></div>
        <div className="homePage_div_main_superSova">
          <img 
            src={superSova} 
            alt="super violingo" 
            style={{width: "185px", height: "180px", marginRight: "48px"}}/>
          <div className="homePage_div_all_signs">
            <h2>Навчайтесь ефективніше із Super Violingo</h2>
            <span className="homePage_span_sign_about_title">
            Вивчення мови в Violingo абсолютно безкоштовне, але ви можете підписатися на Super, 
            щоб видалити рекламу та підтримати безкоштовну освіту. Перші 2 тижні безкоштовно!
            </span>
            <span 
              className="homePage_span_learn_more"
              onClick={() => navigate(SUPER_VIOLINGO)}
              >
              ДОКЛАДНІШЕ ПРО SUPER VIOLINGO
            </span>
          </div>
        </div>
        <div className="homePage_div_line"></div>
        <div className="homePage_div_main_download_app">
          <div>
            <h2>Навчайтесь де завгодно і коли завгодно</h2>
            <span className="homePage_span_sign_about_title">
              Проводьте перерви та час у дорозі продуктивніше з нашими додатками для iPhone і Android. 
              Завантажте їх і дізнайтеся, чому Apple та Google відзначили нас найвищими нагородами.
            </span>
            <div style={{display: "flex"}}>
              <span 
                className="homePage_span_button_download display_alien_justify"
                onClick={() => navigate(DOWNLOAD_APP_STORE)}
                >
              <BsApple size={"34px"} style={{marginRight: "10px"}}/>
              <span style={{display: "flex", flexDirection: "column"}}>
                <span>Завантажити з</span>
                <b style={{fontSize: "16px"}}>App Store</b>  
              </span> 
            </span>
            <span 
              className="homePage_span_button_download display_alien_justify"
              onClick={() => navigate(DOWNLOAD_GOOGLE_PLAY)}
              >
              <FaGooglePlay size={"34px"} style={{marginRight: "10px"}}/>
              <span style={{display: "flex", flexDirection: "column"}}>
                <span>Встановити з</span>
                <b style={{fontSize: "16px"}}>Google Play</b>
              </span>  
            </span>
            </div> 
          </div>
          <img src={sovaTravel} alt="sova travel"/>
        </div>
        <div className="homePage_div_line"></div>
        <div className="homePage_div_main_image_computer">
          <img 
            src={computer2} 
            alt="super violingo" 
            style={{width: "185px", height: "180px", marginRight: "48px"}}/>
          <div className="homePage_div_all_signs">
            <h2>Violingo for Schools</h2>
            <span className="homePage_span_sign_about_title">
            Безкоштовні інструменти для вчителів, щоб допомогти учням вивчати мови за допомогою 
            Violingo у класі та за його межами.
            </span>
            <span 
              className="homePage_span_learn_more"
              onClick={() => navigate(VIOLINGO_FOR_SCHOOL)}
              >
              ВИКОРИСТОВУЙТЕ VIOLINGO ЗІ СВОЇМ КЛАСОМ
            </span>
          </div>
        </div>
        <div className="homePage_div_line"></div>
        <div className="homePage_div_main_certificate">
          <div className="homePage_div_all_signs">
            <h2>Violingo English Test</h2>
            <span className="homePage_span_sign_about_title">
            Представляємо вам зручний, короткий і доступний тест англійської мови, 
            що приймається закладами в усьому світі. Завдяки найновішим досягненням 
            у галузях оцінювання знань та штучного інтелекту ми даємо можливість пройти тест
            у найзручніший для вас час.
            </span>
            <span 
              className="homePage_span_learn_more"
              onClick={() => navigate(ENGLISH_TEST)}
              >
              ОТРИМАТИ СЕРТИФІКАТ ПРО ВОЛОДІННЯ АНГЛІЙСЬКОЮ
            </span>
          </div>
          <img 
            src={sovaGift} 
            alt="super violingo" 
            style={{width: "185px", height: "180px", marginLeft: "48px"}}/>
        </div>
        <div className="homePage_div_line"></div>
        <div className="homePage_div_main_image_sovaStudy">
          <img 
            src={sovaStudy} 
            alt="super violingo" 
            style={{width: "185px", height: "180px", marginRight: "48px"}}/>
          <div className="homePage_div_all_signs">
            <h2>Ефективні й дієві курси</h2>
            <span className="homePage_span_sign_about_title">
              Наші курси ефективно й дієво розвивають навички читання, слухання та говоріння. 
              Ознайомтеся з нашим найновішим дослідженням.
            </span>
            <span 
              className="homePage_span_learn_more"
              onClick={() => navigate(EFFICACY_PAGE)}
              >
              ДОКЛАДНІШЕ ПРО ДОСЛІДЖЕННЯ
            </span>
          </div>
        </div>
        <div className="homePage_div_main_produce">
          <div className="homePage_div_sign_and_button display_alien_justify">
            <h1 style={{marginRight: '48px'}}>Вивчайте англійську з Violingo.</h1>
            <span 
              className="homePage_span_button3 display_alien_justify"
              onClick={() => navigate(REGISTER_PAGE)}
              >
                РОЗПОЧАТИ
            </span>
          </div>
          <div className="homePage_div_main_signs">
            <div className="homePage_div_signs_and_title">
              <div className="homePage_div_title">Про нас</div>
              <ul>
                <li onClick={() => navigate()}>Курси</li>
                <li onClick={() => navigate()}>Місія</li>
                <li onClick={() => navigate()}>Підхід</li>
                <li onClick={() => navigate()}>Ефективність</li>
                <li onClick={() => navigate()}>Команда</li>
                <li onClick={() => navigate()}>Дослідження</li>
                <li onClick={() => navigate()}>Інкубатор</li>
                <li onClick={() => navigate()}>Вакансії</li>
                <li onClick={() => navigate()}>Правила бренду</li>
                <li onClick={() => navigate()}>Магазин</li>
                <li onClick={() => navigate()}>Преса</li>
                <li onClick={() => navigate()}>Інвестори</li>
                <li onClick={() => navigate()}>Зв’язатися з нами</li>
              </ul> 
            </div>
            <div className="homePage_div_signs_and_title">
              <div className="homePage_div_title">Продукти</div>
                <ul>
                  <li onClick={() => navigate()}> Violingo</li>
                  <li onClick={() => navigate()}>Violingo for Schools</li>
                  <li onClick={() => navigate()}>Violingo English Test</li>
                  <li onClick={() => navigate()}>Подкаст</li>
                  <li onClick={() => navigate()}>Історії</li>
                  <li onClick={() => navigate()}>Violingo for Business</li>
                </ul>
            </div>
            <div className="homePage_div_signs_and_title">
              <div className="homePage_div_title">Додатки</div>
              <ul>
                <li onClick={() => navigate()}>Violingo для Android</li>
                <li onClick={() => navigate()}>Violingo для iOS</li>
              </ul>
            </div>
            <div className="homePage_div_signs_and_title">
              <div className="homePage_div_title">Довідка та підтримка</div>
              <ul>
                <li onClick={() => navigate()}>Часті питання Violingo</li>
                <li onClick={() => navigate()}>Schools: питання</li>
                <li onClick={() => navigate()}>Violingo English Test: часті питання</li>
                <li onClick={() => navigate()}>Статус</li>
              </ul>
            </div>
            <div className="homePage_div_signs_and_title">
              <div className="homePage_div_title">Умови та конфіденційність</div>
              <ul>
                <li onClick={() => navigate()}>Правила спільноти</li>
                <li onClick={() => navigate()}>Умови</li>
                <li onClick={() => navigate()}>Конфіденційність</li>
              </ul>
              <div className="homePage_div_title">Соцмережі</div>
              <ul>
                <li onClick={() => navigate()}>Блог</li>
                <li onClick={() => navigate()}>Instagram</li>
                <li onClick={() => navigate()}>Facebook</li>
                <li onClick={() => navigate()}>Twitter</li>
                <li onClick={() => navigate()}>YouTube</li>
              </ul>
            </div>
          </div>
          <div className="homePage_div_main_languages">
            <div className="homePage_div_title_languages sign">Мова сайту:</div>
            <ul className="homePage_ul_languages">
              <li className="homePage_li_languages" onClick={() => navigate()}>العربية</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>বাংলা</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Čeština</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Deutsch</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Ελληνικά</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>English</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Español</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Français</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>हिंदी</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>MagyarBahasa</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Indonesia</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Italiano</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>日本語한국어</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Nederlands</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Polski</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Português</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Română</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Русский</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>ภาษาไทย</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Tagalog</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Türkçe</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Українською</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Tiếng</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>Việt</li>
              <li className="homePage_li_languages" onClick={() => navigate()}>中文</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default HomePage;
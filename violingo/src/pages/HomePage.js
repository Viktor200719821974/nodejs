import { useNavigate } from 'react-router-dom';
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
import { REGISTER_PAGE } from '../constants';

const HomePage = () =>  {
  const navigate = useNavigate();
    return (
      <div>
        <header className="homePage_header">
          <span className="homePage_sign_violingo">
            violingo
          </span>
          <span className="homePage_sign_language">
            мова сайту: УКРАЇНСЬКА <MdKeyboardArrowDown size={'30px'}/>
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
              <span className="homePage_span_sign_right">
                  Безкоштовний, веселий та ефективний спосіб вивчення мови!
              </span>
              <span className="homePage_span_button1" onClick={() => navigate(REGISTER_PAGE)}>
                РОЗПОЧАТИ
              </span>
              <span className="homePage_span_button2">
                УЖЕ МАЮ ОБЛІКОВИЙ ЗАПИС
              </span>
            </div>
          </div>
        </div>
        <div className="homePage_div_choice_language">
          <MdOutlineKeyboardArrowLeft size={'40px'} color={'#c5b9b9'} style={{cursor: "pointer"}}/>
          <img src={americaflag} alt="america flag" className="homePage_image_choice_language"/>
          <span className="homePage_span_sign_language">
            АНГЛІЙСЬКА
          </span>
          <MdOutlineKeyboardArrowRight size={'40px'} color={'#c5b9b9'} style={{cursor: "pointer"}}/>
        </div> 
        <div className="homePage_main_div_image_sova">
          <img src={sova} alt="sova" className="homePage_image_sova"/>
          <span className="homePage_span_sign_about_image_sova">
            <h2>
              Найкращий спосіб вивчити мову
            </h2>
            <span className="homePage_span_sign_about_title">
              Навчатися в Duolingo цікаво й <a href="http://localhost:3000"><b><u>ефективно</u></b></a>! 
              Заробляйте бали за короткі уроки та вчіться спілкуватися іноземною мовою.
            </span>
          </span>
        </div>
        <div className="homePage_div_line"></div>
        <div className="homePage_div_main_sign_why_like">
          <h2 style={{display: "flex", justifyContent: "center"}}>
          Чому вам сподобається навчатися в Duolingo
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
                    <b style={{color: "#1cb0f6", cursor: "pointer"}}> найновішим дослідженням</b>.
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
            <h2>Навчайтесь ефективніше із Super Duolingo</h2>
            <span className="homePage_span_sign_about_title">
            Вивчення мови в Duolingo абсолютно безкоштовне, але ви можете підписатися на Super, 
            щоб видалити рекламу та підтримати безкоштовну освіту. Перші 2 тижні безкоштовно!
            </span>
            <span className="homePage_span_learn_more">
              ДОКЛАДНІШЕ ПРО SUPER DUOLINGO
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
              <span className="homePage_span_button_download">
              <BsApple size={"34px"} style={{marginRight: "10px"}}/>
              <span style={{display: "flex", flexDirection: "column"}}>
                <span>Завантажити з</span>
                <b style={{fontSize: "16px"}}>App Store</b>  
              </span> 
            </span>
            <span className="homePage_span_button_download">
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
            <h2>Duolingo for Schools</h2>
            <span className="homePage_span_sign_about_title">
            Безкоштовні інструменти для вчителів, щоб допомогти учням вивчати мови за допомогою 
            Duolingo у класі та за його межами.
            </span>
            <span className="homePage_span_learn_more">
              ВИКОРИСТОВУЙТЕ DUOLINGO ЗІ СВОЇМ КЛАСОМ
            </span>
          </div>
        </div>
        <div className="homePage_div_line"></div>
        <div className="homePage_div_main_certificate">
          <div className="homePage_div_all_signs">
            <h2>Duolingo English Test</h2>
            <span className="homePage_span_sign_about_title">
            Представляємо вам зручний, короткий і доступний тест англійської мови, 
            що приймається закладами в усьому світі. Завдяки найновішим досягненням 
            у галузях оцінювання знань та штучного інтелекту ми даємо можливість пройти тест
            у найзручніший для вас час.
            </span>
            <span className="homePage_span_learn_more">
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
            <span className="homePage_span_learn_more">
              ДОКЛАДНІШЕ ПРО ДОСЛІДЖЕННЯ
            </span>
          </div>
        </div>
        <div className="homePage_div_main_produce">
          <div className="homePage_div_sign_and_button">
            <h1 style={{marginRight: '48px'}}>Вивчайте англійську з Duolingo.</h1>
            <span className="homePage_span_button3">
                РОЗПОЧАТИ
            </span>
          </div>
          <div className="homePage_div_main_signs">
            <div className="homePage_div_signs_and_title">
              <div className="homePage_div_title">Про нас</div>
              <ul>
                <li>Курси</li>
                <li>Місія</li>
                <li>Підхід</li>
                <li>Ефективність</li>
                <li>Команда</li>
                <li>Дослідження</li>
                <li>Інкубатор</li>
                <li>Вакансії</li>
                <li>Правила бренду</li>
                <li>Магазин</li>
                <li>Преса</li>
                <li>Інвестори</li>
                <li>Зв’язатися з нами</li>
              </ul> 
            </div>
            <div className="homePage_div_signs_and_title">
              <div className="homePage_div_title">Продукти</div>
                <ul>
                  <li> Duolingo</li>
                  <li>Duolingo for Schools</li>
                  <li>Duolingo English Test</li>
                  <li>Подкаст</li>
                  <li>Історії</li>
                  <li>Duolingo for Business</li>
                </ul>
            </div>
            <div className="homePage_div_signs_and_title">
              <div className="homePage_div_title">Додатки</div>
              <ul>
                <li>Duolingo для Android</li>
                <li>Duolingo для iOS</li>
              </ul>
            </div>
            <div className="homePage_div_signs_and_title">
              <div className="homePage_div_title">Довідка та підтримка</div>
              <ul>
                <li>Часті питання Duolingo</li>
                <li>Schools: питання</li>
                <li>Duolingo English Test: часті питання</li>
                <li>Статус</li>
              </ul>
            </div>
            <div className="homePage_div_signs_and_title">
              <div className="homePage_div_title">Умови та конфіденційність</div>
              <ul>
                <li>Правила спільноти</li>
                <li>Умови</li>
                <li>Конфіденційність</li>
              </ul>
              <div className="homePage_div_title">Соцмережі</div>
              <ul>
                <li>Блог</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <div className="homePage_div_main_languages">
            <div className="homePage_div_title_languages">Мова сайту:</div>
            <ul className="homePage_ul_languages">
              <li className="homePage_li_languages">العربية</li>
              <li className="homePage_li_languages">বাংলা</li>
              <li className="homePage_li_languages">Čeština</li>
              <li className="homePage_li_languages">Deutsch</li>
              <li className="homePage_li_languages">Ελληνικά</li>
              <li className="homePage_li_languages">English</li>
              <li className="homePage_li_languages">Español</li>
              <li className="homePage_li_languages">Français</li>
              <li className="homePage_li_languages">हिंदी</li>
              <li className="homePage_li_languages">MagyarBahasa</li>
              <li className="homePage_li_languages">Indonesia</li>
              <li className="homePage_li_languages">Italiano</li>
              <li className="homePage_li_languages">日本語한국어</li>
              <li className="homePage_li_languages">Nederlands</li>
              <li className="homePage_li_languages">Polski</li>
              <li className="homePage_li_languages">Português</li>
              <li className="homePage_li_languages">Română</li>
              <li className="homePage_li_languages">Русский</li>
              <li className="homePage_li_languages">ภาษาไทย</li>
              <li className="homePage_li_languages">Tagalog</li>
              <li className="homePage_li_languages">Türkçe</li>
              <li className="homePage_li_languages">Українською</li>
              <li className="homePage_li_languages">Tiếng</li>
              <li className="homePage_li_languages">Việt</li>
              <li className="homePage_li_languages">中文</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default HomePage;
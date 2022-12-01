 import earth from '../icons/earth.png';
 import americaflag from '../icons/united-states.png';
 import { MdKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const HomePage = () =>  {
    return (
      <div>
        <header className="homePage_header">
          <div className="homePage_div_sign">
            <span className="homePage_sign_violingo">
              violingo
            </span>
            <span className="homePage_sign_language">
              мова сайту: украінська <MdKeyboardArrowDown size={'30px'}/>
            </span>
          </div> 
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
              <span className="homePage_span_button1">
                РОЗПОЧАТИ
              </span>
              <span className="homePage_span_button2">
                УЖЕ МАЮ ОБЛІКОВИЙ ЗАПИС
              </span>
            </div>
          </div>
        </div>
        <div className="homePage_div_choice_language">
          <MdOutlineKeyboardArrowLeft size={'40px'} color={'#c5b9b9'}/>
          <img src={americaflag} alt="america flag" className="homePage_image_choice_language"/>
          <span className="homePage_span_sign_language">
            АНГЛІЙСЬКА
          </span>
          <MdOutlineKeyboardArrowRight size={'40px'} color={'#c5b9b9'}/>
        </div> 
      </div>
    );
};

export default HomePage;
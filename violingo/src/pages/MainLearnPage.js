import { useState, useEffect } from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';

import { 
    LEARN_PAGE, REVIEW_PAGE, SHOP_PAGE, SCHOOLS_PAGE, SETTINGS_COACH, SETTINGS_SOUND, 
} from '../constants';
import NavBarComponent from '../components/mainLearnPage/NavBarComponent';
import HeaderComponent from '../components/mainLearnPage/HeaderComponent';
import LearnComponent from '../components/mainLearnPage/learnComponent/LearnComponent';
import ReviewComponent from '../components/mainLearnPage/ReviewComponent';
import ShopComponent from '../components/mainLearnPage/ShopComponent';
import SchoolsComponent from '../components/mainLearnPage/SchoolsComponent';
import MenuDownLinksComponent from '../components/MenuDownLinksComponent';
import { arrayMenuDownLinks } from '../constants/arrays';
import SettingsCoachComponent from '../components/mainLearnPage/SettingsCoachComponent';
import SettingsSoundComponent from '../components/mainLearnPage/SettingsSoundComponent';
import MainLearnBodyRightComponent from '../components/mainLearnPage/mainLearnPageBodyRight/MainLearnBodyRightComponent';
import arrow from '../icons/arrow-up-blue.svg';

const MainLearnPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [learnPage, setLearnPage] = useState(false);
    const [reviewPage, setReviewPage] = useState(false);
    const [shopPage, setShopPage] = useState(false);
    const [schoolPage, setSchoolPage] = useState(false);
    const [settingsCoach, setSettingsCoach] = useState(false);
    const [settingsSound, setSettingsSound] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [mouseOnFlag, setMouseOnFlag] = useState(false);
    const [mouseOnFire, setMouseOnFire] = useState(false);
    const [mouseOnRuby, setMouseOnRuby] = useState(false);
    const [mouseOnAvatar, setMouseOnAvatar] = useState(false);
    const [idElement, setIdElement] = useState(1);
    const [points, setPoints] = useState(0);
    const [purposeDay, setPurposeDay] = useState(50);
    const [choosePurposeDay, setChoosePurposeDay] = useState('');
    const [changeBodyRight, setChangeBodyRight] = useState(false);
    const [offSoundEffects, setOffSoundEffects] = useState(true);
    const [offExeciseToSpeak, setOffExeciseToSpeak] = useState(true);
    const [offExeciseToAudio, setOffExeciseToAudio] = useState(true);
    const [activeButton, setActiveButton] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollBool, setScrollBool] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        if (location.pathname === LEARN_PAGE) {
            setLearnPage(true);
            setReviewPage(false);
            setSchoolPage(false);
            setShopPage(false);
            setIdElement(1);
            setSettingsCoach(false);
            setSettingsSound(false);
            setChangeBodyRight(false);
            setActiveButton(false);
        }
        if (location.pathname === REVIEW_PAGE) {
            setReviewPage(true);
            setLearnPage(false);
            setSchoolPage(false);
            setShopPage(false);
            setIdElement(2);
            setSettingsCoach(false);
            setSettingsSound(false);
            setChangeBodyRight(false);
            setActiveButton(false);
        }
        if (location.pathname === SHOP_PAGE) {
            setShopPage(true);
            setReviewPage(false);
            setLearnPage(false);
            setSchoolPage(false);
            setIdElement(3);
            setSettingsCoach(false);
            setSettingsSound(false);
            setChangeBodyRight(false);
            setActiveButton(false);
        } 
        if (location.pathname === SCHOOLS_PAGE) {
            setSchoolPage(true);
            setShopPage(false);
            setReviewPage(false);
            setLearnPage(false);
            setIdElement(4);
            setSettingsCoach(false);
            setSettingsSound(false);
            setChangeBodyRight(false);
            setActiveButton(false);
        }
        if (location.pathname === SETTINGS_COACH) {
            setSettingsCoach(true);
            setLearnPage(false);
            setReviewPage(false);
            setSchoolPage(false);
            setShopPage(false);
            setChangeBodyRight(true);
        }
        if (location.pathname === SETTINGS_SOUND) {
            setSettingsCoach(false);
            setSettingsSound(true);
            setLearnPage(false);
            setReviewPage(false);
            setSchoolPage(false);
            setShopPage(false);
            setChangeBodyRight(true);
        }
        if (idElement > 10 || !offSoundEffects || !offExeciseToSpeak || !offExeciseToAudio) {
            setActiveButton(true);
        }
        if (offSoundEffects && offExeciseToSpeak && offExeciseToAudio && idElement <= 10) {
            setActiveButton(false);
        }
        if (mouseOnFlag || mouseOnFire || mouseOnRuby || mouseOnAvatar) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        if (scrollPosition >= 250) {
            setScrollBool(true);
        } else {
            setScrollBool(false);
        }
    }, [
        learnPage, shopPage, reviewPage, location.pathname, schoolPage, isActive, mouseOnAvatar,
        mouseOnFire, mouseOnFlag, mouseOnRuby, idElement, points, purposeDay, settingsCoach,
        settingsSound, choosePurposeDay, changeBodyRight, offSoundEffects, offExeciseToSpeak,
        offExeciseToAudio, activeButton, scrollBool, scrollPosition,
    ]);
    return (
        <>
        <HeaderComponent
            isActive={isActive}
            mouseOnFlag={mouseOnFlag} 
            setMouseOnFlag={setMouseOnFlag}
            mouseOnFire={mouseOnFire}
            setMouseOnFire={setMouseOnFire}
            mouseOnRuby={mouseOnRuby} 
            setMouseOnRuby={setMouseOnRuby}
            mouseOnAvatar={mouseOnAvatar} 
            setMouseOnAvatar={setMouseOnAvatar}
        /> 
        <div 
            className={isActive ? "mainLearnPage_box_for_body" : undefined}
            >
            <div className={
                !isActive 
                    ? "mainLearnPage_main_body" 
                    : "mainLearnPage_main_body_isActive"
                }
                >
                <span className="mainLearnPage_main_navBar">
                <NavBarComponent
                    idElement={idElement}
                    setIdElement={setIdElement}
                /> 
                </span>  
                <div className="mainLearnPage_div_body_component">
                    { learnPage && <LearnComponent/> }
                    { reviewPage && <ReviewComponent/> }
                    { shopPage && <ShopComponent/> }
                    { schoolPage && <SchoolsComponent/> }
                    { settingsCoach && <SettingsCoachComponent 
                                            navigate={navigate}
                                            idElement={idElement}
                                            etChoosePurposeDay={setChoosePurposeDay}
                                            setIdElement={setIdElement}
                                            setPoints={setPoints}
                                            setPurposeDay={setPurposeDay}
                                        /> 
                    }
                    { settingsSound && <SettingsSoundComponent
                                            offSoundEffects={offSoundEffects}
                                            setOffSoundEffects={setOffSoundEffects}
                                            offExeciseToSpeak={offExeciseToSpeak}
                                            setOffExeciseToSpeak={setOffExeciseToSpeak}
                                            offExeciseToAudio={offExeciseToAudio}
                                            setOffExeciseToAudio={setOffExeciseToAudio}
                                        /> 
                    }
                    {scrollBool && 
                        <div className="mainLearnPage_div_button_scroll_up">
                            <button
                                className="mainLearnPage_button_scroll_up"
                                onClick={() => window.scroll(0, 0)}
                                >
                                <img src={arrow} alt="arrow stamp"/>
                            </button>
                        </div>
                    }
                    <div className="mainLearnPage_div_line display_alien_justify">
                        <ul className="mainLearnPage_ul">
                            { arrayMenuDownLinks.map((c) =>  
                                <MenuDownLinksComponent
                                    key={c.id}
                                    name={c.name}
                                    id={c.id}
                                    nav={c.navigate}
                                />
                            )}
                        </ul>
                    </div>
                </div>           
                <div className="mainLearnPage_div_body_right">
                    <MainLearnBodyRightComponent
                        points={points}
                        purposeDay={purposeDay}
                        navigate={navigate}
                        setSettingsCoach={setSettingsCoach}
                        setIdElement={setIdElement}
                        setSettingsSound={setSettingsSound}
                        settingsCoach={settingsCoach}
                        settingsSound={settingsSound}
                        changeBodyRight={changeBodyRight}
                        activeButton={activeButton}
                    />
                </div>
            </div> 
        </div>       
        </>
    );
}

export default MainLearnPage;
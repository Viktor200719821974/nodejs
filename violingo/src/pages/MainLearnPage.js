import { useState, useEffect } from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';

import { 
    LEARN_PAGE, REVIEW_PAGE, SHOP_PAGE, SCHOOLS_PAGE, SETTINGS_COACH, SETTINGS_SOUND, 
} from '../constants';
import NavBarComponent from '../components/mainLearnPage/NavBarComponent';
import HeaderComponent from '../components/mainLearnPage/HeaderComponent';
import LearnComponent from '../components/mainLearnPage/LearnComponent';
import ReviewComponent from '../components/mainLearnPage/ReviewComponent';
import ShopComponent from '../components/mainLearnPage/ShopComponent';
import SchoolsComponent from '../components/mainLearnPage/SchoolsComponent';
import AgendaComponent from '../components/mainLearnPage/AgendaComponent';
import MenuDownLinksComponent from '../components/MenuDownLinksComponent';
import { arrayMenuDownLinks } from '../constants/arrays';
import SettingsCoachComponent from '../components/mainLearnPage/SettingsCoachComponent';
import SettingsSoundComponent from '../components/mainLearnPage/SettingsSoundComponent';

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

    useEffect(() => {
        if (location.pathname === LEARN_PAGE) {
            setLearnPage(true);
            setReviewPage(false);
            setSchoolPage(false);
            setShopPage(false);
            setIdElement(1);
            setSettingsCoach(false);
        }
        if (location.pathname === REVIEW_PAGE) {
            setReviewPage(true);
            setLearnPage(false);
            setSchoolPage(false);
            setShopPage(false);
            setIdElement(2);
            setSettingsCoach(false);
        }
        if (location.pathname === SHOP_PAGE) {
            setShopPage(true);
            setReviewPage(false);
            setLearnPage(false);
            setSchoolPage(false);
            setIdElement(3);
            setSettingsCoach(false);
        } 
        if (location.pathname === SCHOOLS_PAGE) {
            setSchoolPage(true);
            setShopPage(false);
            setReviewPage(false);
            setLearnPage(false);
            setIdElement(4);
            setSettingsCoach(false);
        }
        if (location.pathname === SETTINGS_COACH) {
            setSettingsCoach(true);
            setLearnPage(false);
            setReviewPage(false);
            setSchoolPage(false);
            setShopPage(false);
            setIdElement(0);
        }
        if (location.pathname === SETTINGS_SOUND) {
            setSettingsCoach(false);
            setSettingsSound(true);
            setLearnPage(false);
            setReviewPage(false);
            setSchoolPage(false);
            setShopPage(false);
            setIdElement(0);
        }
    }, [
        learnPage, shopPage, reviewPage, location.pathname, schoolPage, isActive, mouseOnAvatar,
        mouseOnFire, mouseOnFlag, mouseOnRuby, idElement, points, purposeDay, settingsCoach,
        settingsSound,
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
        <div className="mainLearnPage_main_body">
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
                { settingsCoach && <SettingsCoachComponent navigate={navigate}/> }
                { settingsSound && <SettingsSoundComponent/> }
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
                <div className="mainLearnPage_div_body_legia">
                    
                </div>
                <div className="mainLearnPage_div_body_agenda"> 
                    <AgendaComponent
                        points={points}
                        purposeDay={purposeDay}
                        setSettingsCoach={setSettingsCoach}
                        navigate={navigate}
                    />      
                </div>
            </div>
        </div>
        </>
    );
}

export default MainLearnPage;
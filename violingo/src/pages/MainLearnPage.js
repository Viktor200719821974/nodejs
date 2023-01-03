import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { LEARN_PAGE, REVIEW_PAGE, SHOP_PAGE, SCHOOLS_PAGE } from '../constants';
import NavBarComponent from '../components/mainLearnPage/NavBarComponent';
import HeaderComponent from '../components/mainLearnPage/HeaderComponent';
import LearnComponent from '../components/mainLearnPage/LearnComponent';
import ReviewComponent from '../components/mainLearnPage/ReviewComponent';
import ShopComponent from '../components/mainLearnPage/ShopComponent';
import SchoolsComponent from '../components/mainLearnPage/SchoolsComponent';
import AgendaComponent from '../components/mainLearnPage/AgendaComponent';

const MainLearnPage = () => {
    const location = useLocation();
    const [learnPage, setLearnPage] = useState(false);
    const [reviewPage, setReviewPage] = useState(false);
    const [shopPage, setShopPage] = useState(false);
    const [schoolPage, setSchoolPage] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [mouseOnFlag, setMouseOnFlag] = useState(false);
    const [mouseOnFire, setMouseOnFire] = useState(false);
    const [mouseOnRuby, setMouseOnRuby] = useState(false);
    const [mouseOnAvatar, setMouseOnAvatar] = useState(false);
    const [idElement, setIdElement] = useState(1);

    useEffect(() => {
        if (location.pathname === LEARN_PAGE) {
            setLearnPage(true);
            setReviewPage(false);
            setSchoolPage(false);
            setShopPage(false);
            setIdElement(1);
        }
        if (location.pathname === REVIEW_PAGE) {
            setReviewPage(true);
            setLearnPage(false);
            setSchoolPage(false);
            setShopPage(false);
            setIdElement(2);
        }
        if (location.pathname === SHOP_PAGE) {
            setShopPage(true);
            setReviewPage(false);
            setLearnPage(false);
            setSchoolPage(false);
            setIdElement(3);
        } 
        if (location.pathname === SCHOOLS_PAGE) {
            setSchoolPage(true);
            setShopPage(false);
            setReviewPage(false);
            setLearnPage(false);
            setIdElement(4);
        }
    }, [
        learnPage, shopPage, reviewPage, location.pathname, schoolPage, isActive, mouseOnAvatar,
        mouseOnFire, mouseOnFlag, mouseOnRuby, idElement,
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
            <span className="mainLearnPage_span_body_component">
                { learnPage && <LearnComponent/> }
                { reviewPage && <ReviewComponent/> }
                { shopPage && <ShopComponent/> }
                { schoolPage && <SchoolsComponent/> }
            </span>
            <div className="mainLearnPage_div_body_right">
                <div className="mainLearnPage_div_body_legia">
                    
                </div>
                <div className="mainLearnPage_div_body_agenda"> 
                    <AgendaComponent/>      
                </div>
            </div>
        </div>
        </>
    );
}

export default MainLearnPage;
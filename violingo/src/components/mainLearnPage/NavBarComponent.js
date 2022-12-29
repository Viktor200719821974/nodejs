import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import home from '../../icons/home.png';
import heart from '../../icons/heart.png';
import shop from '../../icons/shop.png';
import school from '../../icons/school.png';
import { LEARN_PAGE, REVIEW_PAGE, SCHOOLS_PAGE, SHOP_PAGE } from '../../constants';

const NavBarComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [learnPage, setLearnPage] = useState(false);
    const [reviewPage, setReviewPage] = useState(false);
    const [shopPage, setShopPage] = useState(false);
    const [schoolPage, setSchoolPage] = useState(false);
    
    useEffect(() => {
        if (location.pathname === LEARN_PAGE) {
            setLearnPage(true);
            setReviewPage(false);
            setSchoolPage(false);
            setShopPage(false);
        }
        if (location.pathname === REVIEW_PAGE) {
            setReviewPage(true);
            setLearnPage(false);
            setSchoolPage(false);
            setShopPage(false);
        }
        if (location.pathname === SHOP_PAGE) {
            setShopPage(true);
            setReviewPage(false);
            setLearnPage(false);
            setSchoolPage(false);
        } 
        if (location.pathname === SCHOOLS_PAGE) {
            setSchoolPage(true);
            setShopPage(false);
            setReviewPage(false);
            setLearnPage(false);
        }
    }, [learnPage, shopPage, reviewPage, location.pathname, schoolPage]);
    return (
        <div className="navBar_buttons">
            <div 
                className={ learnPage ? "navBar_button_select" : "navBar_button" } 
                onClick={ () => navigate(LEARN_PAGE) }
            >
                <img className="navBar_button_image" src={home} alt="home"/>
                <div className="navBar_button_text" >Навчання</div>
            </div>
            <div 
                className={ reviewPage ? "navBar_button_select" : "navBar_button" }
                onClick={ () => navigate(REVIEW_PAGE) }
                >

                <img className="navBar_button_image" src={heart} alt="wrong"/>
                <div className="navBar_button_text">Помилки</div>
            </div>
            <div 
                className={ shopPage ? "navBar_button_select" : "navBar_button" }
                onClick={ () => navigate(SHOP_PAGE) }
                >
                <img className="navBar_button_image" src={shop} alt="shop"/>
                <div className="navBar_button_text">Магазин</div>
            </div>
            <div
                className={ schoolPage ? "navBar_button_select" : "navBar_button" }
                onClick={ () => navigate(SCHOOLS_PAGE) }
                >
                <img className="navBar_button_image" src={school} alt="school"/>
               <div className="navBar_button_text">Schools</div> 
            </div>
        </div>
    );
}

export default NavBarComponent;
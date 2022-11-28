import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { LEARN_PAGE, REVIEW_PAGE, SHOP_PAGE, SCHOOLS_PAGE } from '../constants';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import LearnComponent from '../components/LearnComponent';
import ReviewComponent from '../components/ReviewComponent';
import ShopComponent from '../components/ShopComponent';
import SchoolsComponent from '../components/SchoolsComponent';

// import ApiRouter from '../components/ApiRouter';

const MainPage = () => {
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
        <>
        <div className="main_header">
          <Header/>
        </div>
        <div className="main_body">
            <span className="main_navBar">
                <NavBar/> 
            </span>  
            <span className="span_body_component">
                { learnPage && <LearnComponent/> }
                { reviewPage && <ReviewComponent/> }
                { shopPage && <ShopComponent/> }
                { schoolPage && <SchoolsComponent/> }
            </span>
            <div className="div_body_right">
                <div className="div_body_legia">
                    
                </div>
                <div className="div_body_agenda">
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default MainPage;
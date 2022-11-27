import { LEARN_PAGE, REVIEW_PAGE, SCHOOLS_PAGE, SHOP_PAGE } from '../constants';
import ShopComponent from '../components/ShopComponent';
import ReviewComponent from '../components/ReviewComponent';
import LearnComponent from '../components/LearnComponent';
import SchoolsComponent from '../components/SchoolsComponent';


export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // }
]
export const publicRoutes = [
    // {
    //     path: MAIN_PAGE,
    //     Component: MainPage
    // },
    {
        path: LEARN_PAGE,
        Component: LearnComponent
    },
    {
        path: REVIEW_PAGE,
        Component: ReviewComponent
    },
    {
        path: SHOP_PAGE,
        Component: ShopComponent
    },
    // {
    //     path: DEVICE_ROUTE + '/:id',
    //     Component: DevicePage
    // },
    {
        path: SCHOOLS_PAGE,
        Component: SchoolsComponent
    },
    // {
    //     path: BASKET_ROUTE,
    //     Component: Basket
    // },
]
// import Admin from "../pages/Admin";
// import {
//     ADMIN_ROUTE,
//     BASKET_ROUTE, DEVICE_CARD_ADMIN_ROUTE,
//     DEVICE_ROUTE,
//     LOGIN_ROUTE, REGISTER_ROUTE,
//     REGISTRATION_ROUTE,
//     SHOP_ROUTE, USER_BLOCKED_ADMIN_ROUTE
// } from "../utils/constans";

import MainPage from '../pages/MainPage';


export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // }
]
export const publicRoutes = [
    {
        path: '/',
        Component: MainPage
    },
    // {
    //     path: LOGIN_ROUTE,
    //     Component: Auth
    // },
    // {
    //     path: REGISTRATION_ROUTE,
    //     Component: Auth
    // },
    // {
    //     path: DEVICE_ROUTE + '/:id',
    //     Component: DevicePage
    // },
    // {
    //     path: REGISTER_ROUTE,
    //     Component: Register
    // },
    // {
    //     path: BASKET_ROUTE,
    //     Component: Basket
    // },
]
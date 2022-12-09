import { 
    HOME_PAGE, LEARN_PAGE, REVIEW_PAGE, SCHOOLS_PAGE, SHOP_PAGE, REGISTER_PAGE, WELCOME_PAGE,
} from '../constants';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import RegisterPage from '../pages/RegisterPage';
import WelcomePage from '../pages/WelcomePage';


export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // }
]
export const publicRoutes = [
    {
        path: HOME_PAGE,
        Component: HomePage
    },
    {
        path: REGISTER_PAGE,
        Component: RegisterPage
    },
    {
        path: WELCOME_PAGE,
        Component: WelcomePage
    },
    {
        path: LEARN_PAGE,
        Component: MainPage
    },
    {
        path: REVIEW_PAGE,
        Component: MainPage
    },
    {
        path: SHOP_PAGE,
        Component: MainPage
    },
    // {
    //     path: DEVICE_ROUTE + '/:id',
    //     Component: DevicePage
    // },
    {
        path: SCHOOLS_PAGE,
        Component: MainPage
    },
]
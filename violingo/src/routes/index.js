import { 
    HOME_PAGE, LEARN_PAGE, REVIEW_PAGE, SCHOOLS_PAGE, SHOP_PAGE, REGISTER_PAGE, WELCOME_PAGE, 
    LESSON_PAGE, PLACEMENT_PAGE, LOGIN_PAGE, FORGET_PASSWORD, REGISTRATION_PAGE, CHANGE_PASSWORD, 
    ACTIVATE_USER,
} from '../constants';
import ActivatePage from '../pages/ActivatePage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import HomePage from '../pages/HomePage';
import LessonPage from '../pages/LessonPage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import PlacementPage from '../pages/PlacementPage';
import RegisterPage from '../pages/RegisterPage';
import WelcomePage from '../pages/WelcomePage';


export const authRoutes = [
    {
        path: REGISTER_PAGE,
        Component: RegisterPage
    },
     
    {
        path: LESSON_PAGE,
        Component: LessonPage
    },
    {
        path: PLACEMENT_PAGE,
        Component: PlacementPage
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
    {
        path: SCHOOLS_PAGE,
        Component: MainPage
    },
    {
        path: WELCOME_PAGE,
        Component: WelcomePage
    },
]
export const publicRoutes = [   
    {
        path: HOME_PAGE,
        Component: HomePage
    },
    {
        path: LOGIN_PAGE,
        Component: LoginPage
    },
    {
        path: REGISTRATION_PAGE,
        Component: LoginPage
    },
    {
        path: FORGET_PASSWORD,
        Component: ForgetPasswordPage
    },
    {
        path: CHANGE_PASSWORD,
        Component: ForgetPasswordPage
    },
    {
        path: ACTIVATE_USER,
        Component: ActivatePage
    },
    // {
    //     path: DEVICE_ROUTE + '/:id',
    //     Component: DevicePage
    // },
]
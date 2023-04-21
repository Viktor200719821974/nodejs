import SuccessExerciseComponent from '../components/lessonPage/SuccessExerciseComponent';
import {
    HOME_PAGE,
    LEARN_PAGE,
    REVIEW_PAGE,
    SCHOOLS_PAGE,
    SHOP_PAGE,
    REGISTER_PAGE,
    WELCOME_PAGE,
    LESSON_PAGE,
    PLACEMENT_PAGE,
    LOGIN_PAGE,
    FORGET_PASSWORD,
    REGISTRATION_PAGE,
    CHANGE_PASSWORD,
    ACTIVATE_USER,
    SETTINGS_COACH,
    SETTINGS_SOUND,
    ERROR_404_PAGE,
    SUCCESS_EXERCISE,
    ADMIN_PAGE,
    // ADMIN_PAGE_CREATE_TASKS,
    // ADMIN_PAGE_CREATE_EXERCISES,
    ADMIN_PAGE_CREATE,
} from '../constants';
import ActivatePage from '../pages/ActivatePage';
import Error404Page from '../pages/Error404Page';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import HomePage from '../pages/HomePage';
import LessonPage from '../pages/LessonPage';
import LoginPage from '../pages/LoginPage';
import MainLearnPage from '../pages/MainLearnPage';
import PlacementPage from '../pages/PlacementPage';
import RegisterPage from '../pages/RegisterPage';
import WelcomePage from '../pages/WelcomePage';
import AdminPage from '../pages/AdminPage';
// import CreateTasksComponent from '../components/adminPage/CreateTasksComponent';
// import CreateExercisesComponent from '../components/adminPage/CreateExercisesComponent';
import CreateComponent from '../components/adminPage/CreateComponent';

export const authRoutes = [
    {
        path: ADMIN_PAGE,
        Component: AdminPage
    },
    // {
    //     path: ADMIN_PAGE_CREATE_TASKS,
    //     Component: CreateTasksComponent
    // },
    // {
    //     path: ADMIN_PAGE_CREATE_EXERCISES,
    //     Component: CreateExercisesComponent
    // },
    {
        path: ADMIN_PAGE_CREATE,
        Component: CreateComponent
    }
    // {
    //     path: ADMIN_PAGE_CREATE_THEMES,
    //     Component: CreateThemesComponent
    // },
];
export const publicRoutes = [
    {
        path: SUCCESS_EXERCISE,
        Component: SuccessExerciseComponent
    },
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
    {
        path: LESSON_PAGE,
        Component: LessonPage
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
        path: PLACEMENT_PAGE,
        Component: PlacementPage
    },
    {
        path: ERROR_404_PAGE,
        Component: Error404Page
    },
    // {
    //     path: DEVICE_ROUTE + '/:id',
    //     Component: DevicePage
    // },
];
export const statisticRoutes = [
    {
        path: LEARN_PAGE,
        Component: MainLearnPage
    },
    {
        path: REVIEW_PAGE,
        Component: MainLearnPage
    },
    {
        path: SHOP_PAGE,
        Component: MainLearnPage
    },
    {
        path: SCHOOLS_PAGE,
        Component: MainLearnPage
    },  
    {
        path: SETTINGS_COACH,
        Component: MainLearnPage
    },
    {
        path: SETTINGS_SOUND,
        Component: MainLearnPage
    },
];
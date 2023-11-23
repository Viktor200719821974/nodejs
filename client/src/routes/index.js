import { HOME_PAGE, LOGIN_PAGE, REGISTRATION_PAGE, } from "../constants";
import MainPage from "../pages/MainPage";
import LoginRegistrationComponent from "../components/authorization/LoginRegistrationComponent";

export const pablicRoutes = [
    {
        path: HOME_PAGE,
        Component: MainPage
    },
    {
        path: LOGIN_PAGE,
        Component: LoginRegistrationComponent
    },
    {
        path: REGISTRATION_PAGE,
        Component: LoginRegistrationComponent
    },
]
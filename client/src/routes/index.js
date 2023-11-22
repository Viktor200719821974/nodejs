import { HOME_PAGE, LOGIN_PAGE, REGISTRATION_PAGE, } from "../constants";
import MainPage from "../pages/MainPage";
import LoginComponent from "../components/authorization/LoginComponent";
import RegistrationComponent from "../components/authorization/RegistrationComponent";

export const pablicRoutes = [
    {
        path: HOME_PAGE,
        Component: MainPage
    },
    {
        path: LOGIN_PAGE,
        Component: LoginComponent
    },
    {
        path: REGISTRATION_PAGE,
        Component: RegistrationComponent
    },
]
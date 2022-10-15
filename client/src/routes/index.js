import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE } from '../constans';
import Auth from '../components/Auth';
import Home from '../components/Home';
import Admin from '../components/Admin';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]
export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    // {
    //     path: REGISTER_ROUTE,
    //     Component: Register
    // }
]
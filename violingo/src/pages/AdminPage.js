import { useNavigate } from 'react-router-dom';

import { ADMIN_PAGE_CREATE_EXERCISES, ADMIN_PAGE_CREATE_TASKS } from '../constants';

const AdminPage = () => {
    const navigate = useNavigate();
    return (
        <div className={"adminPage_main_div display_alien_justify"}>
            <div
                className={"adminPage_div_type_button"}
                onClick={() => navigate(ADMIN_PAGE_CREATE_TASKS)}
            >
                Create tasks
            </div>
            <div
                className={"adminPage_div_type_button"}
                onClick={() => navigate(ADMIN_PAGE_CREATE_EXERCISES)}
            >
                Create exercises
            </div>
        </div>
    );
};

export default AdminPage;
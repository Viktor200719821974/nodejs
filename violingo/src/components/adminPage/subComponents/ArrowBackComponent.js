import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { ADMIN_PAGE } from '../../../constants';

const ArrowBackComponent = () => {
    const navigate = useNavigate();
    return (
        <div
            className={"adminPage_div_arrowBack_createComponent"}
            onClick={() => navigate(ADMIN_PAGE)}
        >
            <div className={"adminPage_div_arrowBack_border_createComponent"}>
                <IoMdArrowRoundBack size={'30px'} color={'#afafaf'}/>
            </div>
        </div>
    );
};

export default  ArrowBackComponent;
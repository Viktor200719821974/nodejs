import { IoMdArrowRoundBack } from 'react-icons/io';


const ArrowBackComponent = ({ functionBack }) => {
    return (
        <div
            className={"adminPage_div_arrowBack_createComponent"}
            onClick={functionBack}
        >
            <div className={"adminPage_div_arrowBack_border_createComponent"}>
                <IoMdArrowRoundBack size={'30px'} color={'#afafaf'}/>
            </div>
        </div>
    );
};

export default  ArrowBackComponent;
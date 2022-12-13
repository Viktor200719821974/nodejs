import { BiArrowBack } from 'react-icons/bi';

const Welcome5Component = ({
    setNewComponent3, buttonNoActive,
    }) => {
        const buttonBack = () => {
            setNewComponent3(true);
        }
    return (
        <div>
            <div className="welcomePage_main_div_top">
                <button 
                    className="welcomePage_button_cross" 
                    onClick={buttonBack}
                    >
                    <BiArrowBack color='#d0cccc' size={'22px'}/>
                </button> 
                <div className="welcomePage_div_around_cross">
                    <div className="welcomePage_div_one_download" style={{width: '80%'}}></div>
                </div>
            </div>
            
        </div>
    );
};

export default Welcome5Component;

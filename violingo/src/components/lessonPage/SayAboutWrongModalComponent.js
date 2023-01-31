import Modal from 'react-bootstrap/Modal';

import cross from '../../icons/cross-closedModal.svg';

const SayAboutWrongModalComponent = ({
    show, onHide, chooseSendWrong, setWhichWrongs, whichWrongs,
}) => {
    const array = (e) => {
        console.log(typeof(whichWrongs));
        setWhichWrongs(e.target.value);
        
    }
    const send = () => {

    }
    return (
        <Modal
            size="450px"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="lessonPage_modal_sayAboutWrongModalComponent"
            show={show}
            onHide={onHide}
        >
            <div 
                className="lessonPage_div_image_cross_sayAboutWrongModalComponent display_alien_justify"
                onClick={onHide}
                >
                <img src={cross} alt="cross closed modal"/>
            </div>
            <div className="lessonPage_main_div_label_sayAboutWrongModalComponent">
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input 
                        type="checkbox" 
                        onChange={array}
                        value="Аудіо звучить неправильно."
                        />          
                    <span className="lessonPage_span_sayAboutWrongModalComponent">
                        <b>Аудіо</b>
                         <span style={{marginLeft: '4px'}}>звучить неправильно.</span>
                    </span>
                </label>
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input type='checkbox'/> 
                    <span className="lessonPage_span_sayAboutWrongModalComponent">
                        <span style={{marginRight: '4px'}}>Немає</span> 
                        <b>звуку</b>
                        .
                    </span>
                </label>
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input type='checkbox'/>
                    <span className="lessonPage_span_sayAboutWrongModalComponent">
                        <b>Моя відповідь</b>
                        <span style={{marginLeft: '4px'}}>має бути прийнята.</span>
                    </span>
                </label>
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input type='checkbox'/>
                        <span className="lessonPage_span_sayAboutWrongModalComponent">
                            <span style={{marginRight: '4px'}}>Здається,</span> 
                            <b>зображення</b>
                            <span style={{marginLeft: '4px'}}>неправильне.</span>
                        </span>
                </label>
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input type='checkbox'/>
                        <span className="lessonPage_span_sayAboutWrongModalComponent">
                            <b>Принаймні один із варіантів</b>
                            <span style={{marginLeft: '4px'}}>дублюється.</span>
                        </span>
                </label>
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input type='checkbox'/>
                    <span className="lessonPage_span_sayAboutWrongModalComponent"> 
                           <b>Речення англійською</b>
                        <span style={{marginLeft: '4px'}}>
                            неприродне або містить помилку.
                        </span>         
                    </span>
                </label>
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input type='checkbox'/>
                    <span className="lessonPage_span_sayAboutWrongModalComponent">
                        <span style={{marginRight: '4px'}}>Немає</span> 
                        <b>зображення</b>
                        .
                    </span>
                </label>
                <button 
                    className={
                        !chooseSendWrong 
                            ? "lessonPage_button_sayAboutWrongModalComponent"
                            : "lessonPage_button_selected_sayAboutWrongModalComponent"
                    }
                    onClick={send}
                    >
                    Надіслати
                </button>
            </div>
    </Modal>
    );
};

export default SayAboutWrongModalComponent;
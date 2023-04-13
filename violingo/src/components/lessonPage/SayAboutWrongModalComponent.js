import Modal from 'react-bootstrap/Modal';

import cross from '../../icons/cross-closedModal.svg';

const SayAboutWrongModalComponent = ({
    show, onHide, chooseSendWrong, setWhichWrongs, whichWrongs, setChooseSendWrong,
}) => {
   
    const array = (e) => {
        try {
            if (whichWrongs.length === 0) {
                whichWrongs.push(e.target.value);
                setWhichWrongs(whichWrongs);
                setChooseSendWrong(true);
            } else {
                const filter = whichWrongs.filter(c => c === e.target.value);
                    if (filter.length > 0) {
                        const index = whichWrongs.filter(function(value) {
                            return value !== e.target.value 
                        });
                        setWhichWrongs(index);
                    } else {
                        whichWrongs.push(e.target.value);
                        setWhichWrongs(whichWrongs);
                        setChooseSendWrong(true);
                    }
            }
        } catch(e) {
            console.log(e.message);
        }    
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
                    <input 
                        type='checkbox'
                        onChange={array}
                        value="Немає звуку."
                        /> 
                    <span className="lessonPage_span_sayAboutWrongModalComponent">
                        <span style={{marginRight: '4px'}}>Немає</span> 
                        <b>звуку</b>
                        .
                    </span>
                </label>
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input 
                        type='checkbox'
                        onChange={array}
                        value="Моя відповідь має бути прийнята."
                        />
                    <span className="lessonPage_span_sayAboutWrongModalComponent">
                        <b>Моя відповідь</b>
                        <span style={{marginLeft: '4px'}}>має бути прийнята.</span>
                    </span>
                </label>
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input 
                        type='checkbox'
                        onChange={array}
                        value="Здається, зображення неправильне."
                        />
                        <span className="lessonPage_span_sayAboutWrongModalComponent">
                            <span style={{marginRight: '4px'}}>Здається,</span> 
                            <b>зображення</b>
                            <span style={{marginLeft: '4px'}}>неправильне.</span>
                        </span>
                </label>
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input 
                        type='checkbox'
                        onChange={array}
                        value="Принаймні один із варіантів дублюється."
                        />
                        <span className="lessonPage_span_sayAboutWrongModalComponent">
                            <b>Принаймні один із варіантів</b>
                            <span style={{marginLeft: '4px'}}>дублюється.</span>
                        </span>
                </label>
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input 
                        type='checkbox'
                        onChange={array}
                        value="Речення англійською неприродне або містить помилку."
                        />
                    <span className="lessonPage_span_sayAboutWrongModalComponent"> 
                           <b>Речення англійською</b>
                        <span style={{marginLeft: '4px'}}>
                            неприродне або містить помилку.
                        </span>         
                    </span>
                </label>
                <label className="lessonPage_label_sayAboutWrongModalComponent">
                    <input 
                        type='checkbox'
                        onChange={array}
                        value="Немає зображення."
                        />
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
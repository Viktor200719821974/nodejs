import Modal from 'react-bootstrap/Modal';
import { arrayLessonPageChooseImage } from '../../constants/arrays';

const LookLessonModalComponent = ({ show, onHide }) => {
    arrayLessonPageChooseImage.length = 15;
    return (
        <Modal
            size="860px"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="lessonPage_modal_lookLessonModalComponent"
            show={show}
            onHide={onHide}
        >
            <div>
                {
                    arrayLessonPageChooseImage.map(c =>
                        <div>
                            {c.titleTask}
                        </div>
                    )
                }
            </div>
        </Modal>
    );
};

export default LookLessonModalComponent;
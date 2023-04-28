import DeleteTaskModalComponent from './DeleteTaskModalComponent';
import cross from '../../../icons/cross-closedModal.svg';
import { IMAGES_SERVER_PATH } from '../../../constants';

const CreateTasksBodyComponent = ({ 
    tasks, taskId, setOnHide, setTaskId, onHide, fetchDeleteTask, title, setCreateExerciseBool, createWhat,
}) => {
    return (
        <div className={"adminPage_div_body_createComponent"}>
            <h1 className={"adminPage_h1_title_createComponent"}>{title}</h1>
            {
                (createWhat === 'exercise' && title !== 'Choose theme task' && tasks.length !== 0) &&
                    <h3 className={"adminPage_h1_title_createComponent"}>
                        Виберіть завдання для вправи (для цього просто клацніть мишкою на одне з завдань)
                    </h3>
            }
                {                
                    tasks.length === 0 &&
                        <h2 className={"adminPage_h2_no_tasks_createComponent"}>
                            No tasks
                        </h2>
                }     
            <div className={"adminPage_main_div_question_answer_createComponent"}>
                {
                    tasks.length > 0 &&
                        tasks.map(c =>
                            <div 
                                key={c.id} 
                                className={"adminPage_div_question_answer_createComponent"}
                                onClick={() => {
                                    setTaskId(c.id);
                                    setCreateExerciseBool(true);
                                }}
                                >
                                <div
                                    className="adminPage_div_image_cross_createTasksComponent display_alien_justify"
                                    onClick={() => {
                                        setOnHide(true);
                                        setTaskId(c.id);
                                    }}
                                >
                                    <img 
                                        src={cross} 
                                        alt="cross open modal"
                                        className="adminPage_image_cross_createTasksComponent"
                                    />
                                </div>
                                {
                                    c.image &&  
                                        <span className="display_alien_justify">
                                            <img 
                                                src={IMAGES_SERVER_PATH + c.image.src} 
                                                alt={c.image.alt}
                                                style={{ width: '40px', height: '40px' }}
                                            />
                                        </span>
                                }
                                <span><b>Question:</b> {c.question}</span>
                                <span><b>Answer:</b> {c.answer}</span>
                                {
                                    onHide &&
                                        <div className="adminPage_modal_window_delete display_alien_justify">
                                            <DeleteTaskModalComponent 
                                                fetchDeleteTask={fetchDeleteTask} 
                                                setOnHide={setOnHide}
                                            />
                                        </div>
                                }
                            </div>
                        )
                }    
            </div>
        </div>
    );
};

export default CreateTasksBodyComponent;
import DeleteTaskModalComponent from './DeleteTaskModalComponent';
import cross from '../../../icons/cross-closedModal.svg';
import { IMAGES_SERVER_PATH } from '../../../constants';
import TaskTypeChooseTranslateWordsComponent from './TaskTypeChooseTranslateWordsComponent';
import PaginationComponent from '../subComponents/PaginationComponent';

const CreateTasksBodyComponent = ({ 
    tasks, lessonId, setOnHide, setTaskId, onHide, fetchDeleteTask, title, createWhat, lessonNumber, setPage,
    countExecisesLesson, clickMenuCreateExercise, chooseTranslateWords, themeId, numberPage, page, functionPrev,
    functionNext, countPage,
}) => {
    
    return (
        <div className={"adminPage_div_body_createComponent"}>
            <h1 className={"adminPage_h1_title_createComponent"}>{title}</h1>
            {
                (createWhat === 'exercise' && lessonId !== 0) &&
                    <h4 className={"adminPage_h4_quantity_exercises_lesson_createComponent"}>
                        Кількість вправ в уроці № {lessonNumber}: 
                        <span className="adminPage_span_countExercisesLesson_createComponent display_alien_justify">
                            {countExecisesLesson}
                        </span>
                    </h4>
            }
            {
                (createWhat === 'exercise' && title !== 'Choose theme task' && tasks.length !== 0 && lessonId === 0) &&
                    <h3 className={"adminPage_h3_title_createComponent"}>
                        Виберіть номер урока
                    </h3>
            }
            {
                (createWhat === 'exercise' && title !== 'Choose theme task' && tasks.length !== 0 && lessonId !== 0) &&
                    <h3 className={"adminPage_h3_title_createComponent"}>
                        Виберіть завдання для вправи (для цього просто клацніть мишкою на одне з завдань)
                    </h3>
            }
            {
                (createWhat === 'task' && chooseTranslateWords && tasks.length !== 0) &&
                    <h3 className={"adminPage_h3_title_createComponent"}>
                        Щоб створити це завдання виберіть 4-5 завдань з поданих нижче 
                        (для цього просто клацніть мишкою на одне з завдань)
                    </h3>
            }
            {
                (createWhat === 'task' && chooseTranslateWords && themeId === 0) &&
                    <h2 className={"adminPage_h3_title_createComponent"}>
                        Оберіть тему!!!!!!!!
                    </h2>
            }
                {                
                    tasks.length === 0  &&
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
                                onClick={() => clickMenuCreateExercise(c.id, c.question, c.answer, c.choosePositiveAnswer)}
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
                                {
                                    c.chooseTranslateWords !== true 
                                    ?
                                        <div>
                                            <div><b>Question:</b> {c.question}</div>
                                            <div><b>Answer:</b> {c.answer}</div>
                                        </div>
                                    :
                                        <TaskTypeChooseTranslateWordsComponent
                                            tasks={tasks}
                                            id={c.id}
                                        />
                                }
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
            {
                countPage > 1 &&
                    <div className="adminPage_div_pagination_createTasksBodyComponent">
                        <PaginationComponent
                            numberPage={numberPage}
                            page={page}
                            setPage={setPage}
                            functionPrev={functionPrev}
                            functionNext={functionNext}
                        />
                    </div>
            }
        </div>
    );
};

export default CreateTasksBodyComponent;
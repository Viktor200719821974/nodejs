import { arrayChooseTypeTaskCreateTasksComponent } from '../../../constants/arrays';
import { IMAGES_ADMIN_PAGE } from '../../../constants';

const ChooseTypeTaskComponent = ({
                                     setChoose, setTypeTask, choose, typeTask, setImageExample, setOnMouse, imageExample, onMouse,
                                 }) => {
    return (
        <div>
            {
                arrayChooseTypeTaskCreateTasksComponent.map(c =>
                    <div className="adminPage_div_sign_and_button_createComponent" key={c.id}>
                            <span
                                className="adminPage_span_sign_createComponent adminPage_span_sign_width_createComponent"
                            >
                                {c.typeTask}
                            </span>
                        <div
                            className="adminPage_div_ellipse_and_quadrate_createComponent"
                            onClick={() => {
                                setChoose(value => !value);
                                setTypeTask(c.typeTask);
                            }}
                        >
                                <span
                                    className={
                                        (choose && c.typeTask === typeTask)
                                            ? "adminPage_span_ellipse_on_createComponent"
                                            : "adminPage_span_ellipse_off_createComponent"
                                    }
                                >
                                </span>
                            <span
                                className={
                                    (choose && c.typeTask === typeTask)
                                        ? "adminPage_span_quadrate_on_createComponent " +
                                        "adminPage_main_style_createComponent "
                                        : "adminPage_span_quadrate_off_createComponent " +
                                        "adminPage_main_style_createComponent "
                                }
                            >
                                </span>
                        </div>
                        <span className="adminPage_span_sign_createComponent">Example:</span>
                        <div style={{position: 'relative'}}>
                            <img
                                className={"adminPage_image_example_task"}
                                src={IMAGES_ADMIN_PAGE + c.src}
                                alt={"example task"}
                                onMouseEnter={() => {
                                    setImageExample(c.src);
                                    setOnMouse(true);
                                }}
                                onMouseLeave={() => {
                                    setImageExample('');
                                    setOnMouse(false);
                                }}
                            />
                            {
                                onMouse && c.src === imageExample &&
                                <img
                                    className={"adminPage_big_image_example_task"}
                                    src={IMAGES_ADMIN_PAGE + imageExample}
                                    alt={"example task"}
                                />
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ChooseTypeTaskComponent;
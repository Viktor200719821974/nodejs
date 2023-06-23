import cross from '../../icons/cross-closedModal.svg';
// import FieldForLoadFiles from './subCreateTaskComponents/FieldForLoadFiles';

const CreateThemesComponent = ({ 
    onHide, title, setTitle, click, error, errorMessage, setBackgroundTheme, setThemeImageLeft, setThemeImageRight, 
    setDrag, drag, setDragLeft, dragLeft,
}) => {
    return (
        <div className="adminPage_modal_window display_alien_justify">
            <div className="adminPage_main_div_modal_window">
                <div
                    className="lessonPage_div_image_cross_sayAboutWrongModalComponent display_alien_justify"
                    onClick={onHide}
                >
                    <img src={cross} alt="cross closed modal"/>
                </div>
                <div className="adminPage_main_div_modal_createComponent">
                    <form>
                        <h1 className="loginPage_h1_loginComponent">Create theme</h1>
                        {
                            error &&
                                <div className="adminPage_div_error_createThemeComponent">
                                    {errorMessage}
                                </div>
                        }
                        <input
                            type="text"
                            name="title"
                            // value={title}
                            placeholder="Назва теми"
                            className="loginPage_input_loginComponent"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            name="background"
                            // value={title}
                            placeholder="Введіть колір теми (#58cc02)"
                            className="loginPage_input_loginComponent"
                            onChange={(e) => setBackgroundTheme(e.target.value)}
                        />
                        <div className="adminPage_div_input_file_createThemesComponent">
                            <span className="adminPage_span_input_file_createThemesComponent">
                                Оберіть малюнок зліва:
                            </span>
                            {/* <FieldForLoadFiles
                                setFile={setThemeImageLeft}
                                setDrag={setDragLeft}
                                drag={dragLeft}
                            /> */}
                            <input
                                type="file"
                                placeholder="Select image left"
                                className="adminPage_input_type_file"
                                onChange={(e) => setThemeImageLeft(e.target.files[0])}
                            /> 
                        </div>
                        <div className="adminPage_div_input_file_createThemesComponent">
                            <span className="adminPage_span_input_file_createThemesComponent">
                                Оберіть малюнок справа:
                            </span>
                            {/* <FieldForLoadFiles
                                setFile={setThemeImageRight}
                                setDrag={setDrag}
                                drag={drag}
                            />  */}
                            <input
                                type="file"
                                placeholder="Select image right"
                                className="adminPage_input_type_file"
                                onChange={(e) => setThemeImageRight(e.target.files[0])}
                            /> 
                        </div>
                        <div className="loginPage_div_wrap_for_button_loginComponent">
                            <button
                                className="loginPage_button_enter_loginComponent"
                                onClick={click}
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateThemesComponent;
import cross from '../../icons/cross-closedModal.svg';

const CreateThemesComponent = ({ onHide, title, setTitle, click, error, errorMessage, }) => {
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
                            value={title}
                            placeholder="Назва теми"
                            className="loginPage_input_loginComponent"
                            onChange={(e) => setTitle(e.target.value)}
                        />
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
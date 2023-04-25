import cross from '../../icons/cross-closedModal.svg';
import DropDownMenuComponent from './subComponents/DropDownMenuComponent';

const CreateLessonsComponent = ({ 
    onHide, lessonNumber, setLessonNumber, clickLesson, error, errorMessage, themes, themeTitle, dropdown, openCloseDropdownMenu,
    clickCreateLesson,
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
                        <h1 className="loginPage_h1_loginComponent">Create lesson</h1>
                        {
                            error &&
                                <div className="adminPage_div_error_createThemeComponent">
                                    {errorMessage}
                                </div>
                        }
                        <DropDownMenuComponent
                            dropdown={dropdown} 
                            themes={themes} 
                            click={clickCreateLesson} 
                            title={themeTitle} 
                            openCloseDropdownMenu={openCloseDropdownMenu}
                        />
                        <input
                            type="number"
                            name="lessonNumber"
                            // value={lessonNumber}
                            placeholder="Введіть номер уроку"
                            className="loginPage_input_loginComponent"
                            onChange={(e) => setLessonNumber(e.target.value)}
                        />
                        <div className="loginPage_div_wrap_for_button_loginComponent">
                            <button
                                className="loginPage_button_enter_loginComponent"
                                onClick={clickLesson}
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

export default CreateLessonsComponent;
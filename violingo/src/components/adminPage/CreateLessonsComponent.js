import cross from '../../icons/cross-closedModal.svg';
import DropDownMenuComponent from './subComponents/DropDownMenuComponent';
import FieldForLoadFiles from './subCreateTaskComponents/FieldForLoadFiles';

const CreateLessonsComponent = ({ 
    setLessonNumber, clickLesson, error, errorMessage, themes, themeTitle, dropdown, openCloseDropdownMenu,
    clickCreateLesson, createWhat, setModuleNumber, closeModalLessonOrModule, openCloseDropdownMenuModules, modules,
    moduleNumber, dropdownMenuModules, clickCreateModule, setImageModule, setDrag, drag,
}) => {
    return (
        <div className="adminPage_modal_window display_alien_justify">
            <div className="adminPage_main_div_modal_window">
                <div
                    className="lessonPage_div_image_cross_sayAboutWrongModalComponent display_alien_justify"
                    onClick={closeModalLessonOrModule}
                >
                    <img src={cross} alt="cross closed modal"/>
                </div>
                <div className="adminPage_main_div_modal_createComponent">
                    <form>
                        <h1 className="loginPage_h1_loginComponent">
                            {createWhat === 'lesson' ? "Create lesson" : "Create module"}
                        </h1>
                        {
                            error &&
                                <div className="adminPage_div_error_createThemeComponent">
                                    {errorMessage}
                                </div>
                        }
                        <DropDownMenuComponent
                            dropdown={dropdown} 
                            themes={themes} 
                            click={clickCreateModule} 
                            title={themeTitle} 
                            openCloseDropdownMenu={openCloseDropdownMenu}
                        />
                        {
                            createWhat === 'lesson' &&
                                <DropDownMenuComponent
                                    dropdown={dropdownMenuModules} 
                                    themes={modules} 
                                    click={clickCreateLesson} 
                                    title={moduleNumber} 
                                    openCloseDropdownMenu={openCloseDropdownMenuModules}
                                    dropdownMenuModules={dropdownMenuModules}
                                />
                        }
                        {
                            createWhat === 'lesson'
                                ?
                                    <input
                                        type="number"
                                        name="lessonNumber"
                                        placeholder="Введіть номер уроку"
                                        className="loginPage_input_loginComponent"
                                        onChange={(e) => setLessonNumber(e.target.value)}
                                    />
                                :
                                    <div>
                                        <input
                                            type="number"
                                            name="moduleNumber"
                                            placeholder="Введіть номер модуля"
                                            className="loginPage_input_loginComponent"
                                            onChange={(e) => setModuleNumber(e.target.value)}
                                        /> 
                                        <FieldForLoadFiles
                                            setFile={setImageModule}
                                            setDrag={setDrag}
                                            drag={drag}
                                        /> 
                                        <input
                                            type="file"
                                            placeholder="Select image"
                                            className="adminPage_input_type_file"
                                            onChange={(e) => setImageModule(e.target.files[0])}
                                        /> 
                                    </div>
                                    
                        }
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
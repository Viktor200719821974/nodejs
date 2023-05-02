import { IoMdArrowDropdown } from 'react-icons/io'; 

const DropDownMenuLessonsComponent = ({
    dropdownMenuLessons, lessons, chooseLesson, openCloseDropdownMenuLessons, createWhat, lessonNumber, errorEmptyArrayLessons,
    errorEmptyArrayLessonsMessage,
}) => {
    return (
        <div className={"adminPage_main_div_dropdown"}>
            {
                errorEmptyArrayLessons && 
                    <div className="adminPage_div_error_createThemeComponent">
                        {errorEmptyArrayLessonsMessage}
                    </div>
            }
            <div
                className={"adminPage_div_title_dropdown display_alien_justify"}
                onClick={openCloseDropdownMenuLessons}
            >    
                <h4 
                    className={"adminPage_h3_navBar_dropdown_createComponent"}
                    >
                        {(createWhat === 'exercise' && lessonNumber === 0) ? 'Choose number lesson' : `Lesson № ${lessonNumber}`}
                </h4> 
                <IoMdArrowDropdown/>
            </div>
            {
                dropdownMenuLessons &&
                    <div className={"adminPage_div_dropdown_menu_createComponent"}>
                        {
                            lessons.map((c) =>
                                <span
                                    key={c.id}
                                    className={"adminPage_span_dropdown_menu_createComponent"}
                                    onClick={() => chooseLesson(c.lessonNumber, c.id)}
                                >
                                    Lesson № {c.lessonNumber}
                                </span>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default DropDownMenuLessonsComponent;
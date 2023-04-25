import { IoMdArrowDropdown } from 'react-icons/io';

const DropDownMenuComponent = ({ 
    dropdown, themes, click, title, openCloseDropdownMenu, createWhat, lessonNumber, lessonMenu,
}) => {
    return (
        <div className={"adminPage_main_div_dropdown"}>
            <div
                className={"adminPage_div_title_dropdown display_alien_justify"}
                onClick={openCloseDropdownMenu}
            >
                <h4 
                    className={"adminPage_h3_navBar_dropdown_createComponent"}
                    >
                        {(createWhat === 'exercise' && lessonNumber === 0) ? 'Choose number lesson' : title}
                </h4>
                <IoMdArrowDropdown/>
            </div>
            {
                dropdown &&
                <div className={"adminPage_div_dropdown_menu_createComponent"}>
                    {
                        !lessonMenu && themes.map((c, index) =>
                            <span
                                key={c.id}
                                className={"adminPage_span_dropdown_menu_createComponent"}
                                onClick={() => click(c.title, c.id)}
                            >
                                    {index + 1}.{c.title}
                            </span>
                        )
                    }
                    {
                        lessonMenu && themes.map((c) =>
                            <span
                                key={c.id}
                                className={"adminPage_span_dropdown_menu_createComponent"}
                                onClick={() => click(c.lessonNumber, c.id)}
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

export default DropDownMenuComponent;
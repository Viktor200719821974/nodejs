import { IoMdArrowDropdown } from 'react-icons/io';

const DropDownMenuComponent = ({ 
    dropdown, themes, click, title, openCloseDropdownMenu, errorEmptyArrayThemes, errorEmptyArrayThemesMessage,
    dropdownMenuModules,
}) => {
    return (
        <div className={"adminPage_main_div_dropdown"}>
            {
                errorEmptyArrayThemes && 
                    <div className="adminPage_div_error_createThemeComponent">
                        {errorEmptyArrayThemesMessage}
                    </div>
            }
            <div
                className={"adminPage_div_title_dropdown display_alien_justify"}
                onClick={openCloseDropdownMenu}
            >
                <h4 
                    className={"adminPage_h3_navBar_dropdown_createComponent"}
                    >
                        {typeof(title) === 'string' ? title :`Модуль № ${title}`}
                </h4>
                <IoMdArrowDropdown/>
            </div>
            {
                dropdown &&
                    <div className={"adminPage_div_dropdown_menu_createComponent"}>
                        {
                            themes.sort((a, b) => a.id - b.id).map((c, index) =>
                                <div key={c.id}>
                                    {
                                        !dropdownMenuModules 
                                            ?
                                                <span
                                                    className={"adminPage_span_dropdown_menu_createComponent"}
                                                    onClick={() => click(c.title, c.id)}
                                                    >
                                                        {index + 1}.{c.title}
                                                </span>
                                            :
                                                <span
                                                    className={"adminPage_span_dropdown_menu_createComponent"}
                                                    onClick={() => click(c.moduleNumber, c.id)}
                                                    >
                                                        Модуль № {c.moduleNumber}
                                                </span>
                                            }
                                </div>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default DropDownMenuComponent;
import { IoMdArrowDropdown } from 'react-icons/io';

const DropDownMenuComponent = ({ dropdown, themes, click, title, openCloseDropdownMenu }) => {
    return (
        <div className={"adminPage_main_div_dropdown"}>
            <div
                className={"adminPage_div_title_dropdown display_alien_justify"}
                onClick={openCloseDropdownMenu}
            >
                <h4 className={"adminPage_h3_navBar_dropdown_createComponent"}>{title}</h4>
                <IoMdArrowDropdown/>
            </div>
            {
                dropdown &&
                <div className={"adminPage_div_dropdown_menu_createComponent"}>
                    {
                        themes && themes.map((c, index) =>
                            <span
                                key={c.id}
                                className={"adminPage_span_dropdown_menu_createComponent"}
                                onClick={() => click(c.title, c.id)}
                            >
                                    {index + 1}.{c.title}
                            </span>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default DropDownMenuComponent;
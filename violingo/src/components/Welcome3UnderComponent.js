import { useEffect } from "react";

const Welcome3UnderComponent = ({
    name, title, time, idElement, setIdElement, id, setTimeToExeciseValue, 
}) => {
    const click = () => {
        setTimeToExeciseValue(name);
        setIdElement(id); 
    }
    useEffect(() => {
        setIdElement(2);
    }, [setIdElement]);
    
    return (        
        <div 
            className={
                (idElement !== id) ? "welcomePage_div_table_row_top_welcome3Component" 
                    : "welcomePage_div_table_row_top_welcome3Component_select"
            }
            onClick={click}
            >
            <span className="welcomePage_div_table_column_left_welcome3Component">
                <b>{title}</b>
            </span>
            <span className="welcomePage_div_table_column_right_welcome3Component">
               {time} 
            </span>
        </div>
    );
};

export default Welcome3UnderComponent;
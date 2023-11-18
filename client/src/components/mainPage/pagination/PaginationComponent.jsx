import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const PaginationComponent = ({ page, setPage, totalPage, }) => {
    return (
        <div>
            { 
                page > 1 && <IoIosArrowDropleft 
                                size={"40px"} 
                                color="#cac6c6" 
                                onClick={() => setPage(page - 1)}
                                style={{cursor: "pointer"}}
                            /> 
            }
            { 
                page !== totalPage && <IoIosArrowDropright 
                                    size={"40px"} 
                                    color="#cac6c6" 
                                    onClick={() => setPage(page + 1)}
                                    style={{cursor: "pointer"}}
                                /> 
            }
        </div>
    );
};

export default PaginationComponent;
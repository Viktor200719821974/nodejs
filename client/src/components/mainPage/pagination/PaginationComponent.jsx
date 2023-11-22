import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

import "../../../style/PaginationComponent.css";

const PaginationComponent = ({ page, setPage, totalPage, }) => {
    let numberPage = [];
    for (let i = 1; i <= totalPage; i++) {
        Number(i);
        numberPage.push(i);
    }
    return (
        <div className="main_div_pagination">
            { 
                page > 1 && <IoIosArrowDropleft 
                                size={"40px"} 
                                color="#cac6c6" 
                                onClick={() => setPage(page - 1)}
                                style={{cursor: "pointer"}}
                            /> 
            }
            {
                numberPage.map((c, index) => 
                    <div key={index}>
                       {
                            page !== c && page + 19 >= c && 
                                <span 
                                    className="span_numberPage_no_active"
                                    onClick={() => setPage(c)}
                                    >
                                        {c}
                                </span>
                        }
                       {
                            page === c && <span className="span_numberPage_active">{c}</span> 
                        } 
                    </div>                        
                )
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
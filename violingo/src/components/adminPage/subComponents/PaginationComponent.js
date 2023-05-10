import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';

const PaginationComponent = ({ numberPage, page, setPage, functionNext, functionPrev, }) => {
    return (
        <div className="main_div_paginationComponent display_alien_justify">
            {
                page !== 1 &&
                    <IconContext.Provider value={{ size:'25px', className: 'icon_prev_paginationComponent'}}>
                        <BiLeftArrow onClick={functionPrev}/>
                    </IconContext.Provider>
            }
            {
                numberPage.map((number, index) => 
                    <span 
                        key={index}
                        onClick={() => setPage(number)} 
                        className={ page === number 
                            ? "span_number_select_paginationComponent display_alien_justify" 
                            : "span_number_paginationComponent display_alien_justify"
                        }
                        >
                        {number}
                    </span>
                )
            }
            {
                numberPage.length !== page && 
                    <IconContext.Provider value={{ size:'25px', className: 'icon_next_paginationComponent'}}>
                        <BiRightArrow onClick={functionNext}/>
                    </IconContext.Provider>
            }
        </div>
    );
};

export default PaginationComponent;
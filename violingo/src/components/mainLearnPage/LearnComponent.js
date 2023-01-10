import book from '../../icons/book.svg';
import lock from '../../icons/lock.svg';
import girl from '../../icons/girl.svg';
import coffer from '../../icons/coffer.svg';
import imageBook from '../../icons/image-book.svg';
import cup from '../../icons/cup.svg';

const LearnComponent = () => {
    return (
        <div>
            <section>
                <div className="mainLearnPage_div_main_header_learnComponent">
                    <div className="mainLearnPage_div_main_signs_learnComponent">
                        <span className="mainLearnPage_span_sign_chapter_learnComponent">
                            Розділ 1
                        </span>
                        <span className="mainLearnPage_span_sign_other_learnComponent">
                            Обговоріть прості теми, вжийте базові фрази
                        </span> 
                    </div>
                    <span className="mainLearnPage_span_button_header_learnComponent">
                        <img 
                            src={book} 
                            alt="stamp book"
                            className="mainLearnPage_image_book_learnComponent"
                        />
                        <span className="mainLearnPage_sign_button_learnComponent">
                            Посібник
                        </span>
                    </span>    
                </div>
                <div className="mainLearnPage_div_main_button_and_images_learnComponent">
                    <div className="mainLearnPage_div_big_image_learnComponent">
                        <img 
                            src={girl} 
                            alt={""}
                            className="mainLearnPage_big_image_learnComponent"
                        />
                    </div>
                    <div className="mainLearnPage_div_main_buttons_with_image_learnComponent">
                        <div 
                            className="mainLearn_div_button_learnComponent"
                            style={{right: ''}}
                            >
                            <button className="mainLearnPage_button_with_image_learnComponent">
                                <img src={lock} alt={""}/>
                            </button>
                        </div> 
                        <div 
                            className="mainLearn_div_button_learnComponent"
                            style={{width: '30%'}}
                            >
                            <button 
                                className="mainLearnPage_button_with_image_learnComponent"
                                
                                >
                                <img src={lock} alt={""}/>
                            </button> 
                        </div>
                        <div 
                            className="mainLearn_div_button_learnComponent"
                            style={{width: '40%'}}
                            >
                            <img src={coffer} alt={""}/>
                        </div>
                        <div 
                            className="mainLearn_div_button_learnComponent"
                            style={{width: '30%'}}
                            >
                            <button className="mainLearnPage_button_with_image_learnComponent">
                                <img src={imageBook} alt={""}/>
                            </button>
                        </div>
                        <div 
                            className="mainLearn_div_button_learnComponent"
                            // style={{width: '40%'}}
                            >
                            <button className="mainLearnPage_button_with_image_learnComponent">
                                <img src={cup} alt={""}/>
                            </button>  
                        </div>                        
                    </div>  
                </div>              
            </section>
        </div>
    );
}

export default LearnComponent;
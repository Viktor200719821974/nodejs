import book from '../../../icons/book.svg';
import coffer from '../../../icons/coffer.svg';
import { arrayButtonsImagesLearnComponent } from '../../../constants/arrays';
import { IMAGES_LEARN_COMPONENT } from '../../../constants';
import Part1LearnComponent from './Part1LearnComponent';
import Part2LearnComponent from './Part2LearnComponent';

const LearnComponent = () => {
    return (
        <div>
            {arrayButtonsImagesLearnComponent.map(c => 
                <section>
                    <div 
                        className="mainLearnPage_div_main_header_learnComponent"
                        style={{background: `${c.background}`}}
                        >
                        <div className="mainLearnPage_div_main_signs_learnComponent">
                            <span className="mainLearnPage_span_sign_chapter_learnComponent">
                                Розділ {c.chapter}
                            </span>
                            <span className="mainLearnPage_span_sign_other_learnComponent">
                                {c.title}
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
                                src={IMAGES_LEARN_COMPONENT + c.image2} 
                                alt={c.alt2}
                                className="mainLearnPage_big_image_learnComponent"
                            />
                        </div>
                        <div className="mainLearnPage_div_main_buttons_with_image_learnComponent">
                            <Part1LearnComponent part1={c.part1} key={c.id}/>
                            <div 
                                className="mainLearn_div_button_learnComponent"
                                style={{width: '40%'}}
                                >
                                <img src={coffer} alt={""}/>
                            </div>
                            <Part2LearnComponent part2={c.part2} key={c.id}/>                       
                        </div>  
                    </div>              
                </section>
            )}
        </div>
    );
}

export default LearnComponent;
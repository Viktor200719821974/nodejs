import book from '../../../icons/book.svg';
import { arrayButtonsImagesLearnComponent } from '../../../constants/arrays';
import { IMAGES_LEARN_COMPONENT } from '../../../constants';
import PartLearnComponent from './PartLearnComponent';
import ImageLeftComponent from './ImageLeftComponent';
import ImageRightComponent from './ImageRightComponent';

const LearnComponent = ({themes}) => {
    console.log(themes);
    return (
        <div>
            {
                themes.map((c, index) => 
                    <section key={c.id}>
                        <div
                            className="mainLearnPage_div_main_header_learnComponent"
                            style={{background: `${c.background_theme}`}}
                        >
                            <div className="mainLearnPage_div_main_signs_learnComponent">
                                <span className="mainLearnPage_span_sign_chapter_learnComponent">
                                    Розділ {index + 1}
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
                            {/* <div className="mainLearnPage_div_main_button_and_images_learnComponent"> */}
                            {
                                c.image_left &&
                                    <ImageLeftComponent module={c.module} image_left={c.image_left}/>
                            }
                            {
                                c.image_right &&
                                    <ImageRightComponent module={c.module} image_right={c.image_right}/>
                            }       
                    </section>
                )
            }
            {arrayButtonsImagesLearnComponent.map(c => 
                <section key={c.id}>
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
                        <div className="mainLearnPage_div_main_buttons_with_image_learnComponent">
                            {c.image1 !== null && 
                                <div className={
                                    c.chapter % 2 === 0 
                                        ? "mainLearnPage_div_big_image1_learnComponent"
                                        : "mainLearnPage_div_big_image2_ifOneImage_learnComponent"
                                    }
                                    >
                                    <img 
                                        src={IMAGES_LEARN_COMPONENT + c.image1} 
                                        alt={c.alt1}
                                        className="mainLearnPage_big_image_learnComponent"
                                    />
                                </div>
                            } 
                            {(c.part1.length === 0 && c.chapter === 1) &&
                                <div className={"mainLearnPage_div_big_image2_ifOneImage_learnComponent"}>
                                    <img 
                                        src={IMAGES_LEARN_COMPONENT + c.image2} 
                                        alt={c.alt2}
                                        className="mainLearnPage_big_image_learnComponent"
                                    />
                                </div>
                            }
                            {(c.part1.length > 0 || c.part2.length > 0) && 
                                <div className={
                                    c.chapter % 2 === 0
                                        ? "mainLearnPage_div_big_image2_learnComponent"
                                        : "mainLearnPage_div_big_image2_left_learnComponent"
                                    }
                                    >
                                    <img 
                                        src={IMAGES_LEARN_COMPONENT + c.image2} 
                                        alt={c.alt2}
                                        className="mainLearnPage_big_image_learnComponent"
                                    />
                                </div>
                            }
                            <PartLearnComponent 
                                part1={c.part1} 
                                part2={c.part2}
                                part3={c.part3}
                                part4={c.part4}
                                chapter={c.chapter}
                                key={c.id}
                            />
                        </div>  
                    </div>              
                </section>
            )}
        </div>
    );
}

export default LearnComponent;
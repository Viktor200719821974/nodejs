import { useSelector } from 'react-redux';

import book from '../../../icons/book.svg';
import ImageLeftComponent from './ImageLeftComponent';
import ImageRightComponent from './ImageRightComponent';

const LearnComponent = ({ themes, show, setShow, }) => {
    const { user } = useSelector(state => state.userReducer);
    
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
                            <div className="mainLearnPage_div_main_button_and_images_learnComponent">
                                {
                                    c.image_left &&
                                        <ImageLeftComponent 
                                            module={c.module} 
                                            image_left={c.image_left}
                                            moduleId={user.module_id}
                                            backgroundTheme={c.background_theme}
                                            show={show}
                                            setShow={setShow}
                                        />
                                }
                                {
                                    c.image_right && 
                                        <ImageRightComponent 
                                            module={c.module} 
                                            image_right={c.image_right}
                                            image_left={c.image_left}
                                            moduleId={user.module_id}
                                            backgroundTheme={c.background_theme}
                                            show={show}
                                            setShow={setShow}
                                        />
                                }  
                            </div>     
                    </section>
                )
            }
        </div>
    );
}

export default LearnComponent;
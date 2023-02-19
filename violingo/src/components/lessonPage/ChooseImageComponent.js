import { IMAGES_CHOOSE_IMAGE_COMPONENT } from '../../constants';

const ChooseImageComponent = ({
    question, task, setIdElement, idElement, setName, chooseWrong,
}) => {
    return (
        <div className="lessonPage_main_div_chooseImageComponent">
            <h1 style={{color: '#3c3c3c', marginBottom: '24px'}}>
                Виберіть зображення для слова «{question}»
            </h1>
            <div 
                className="lessonPage_main_div_image_chooseImageComponent"            >
                {
                    task.map((c, index) =>   
                        <div 
                            key={c.id} 
                            style={{left: `${index * 203}px`}}
                            className={
                                idElement !== c.id 
                                    ? "lessonPage_div_image_and_sign_chooseImageComponent"
                                    : "lessonPage_div_image_and_sign_select_chooseImageComponent"
                            }
                            onClick={() => {
                                chooseWrong && setIdElement(c.id);
                                chooseWrong && setName(c.name);
                            }}
                            >  
                            <img 
                                src={IMAGES_CHOOSE_IMAGE_COMPONENT + c.src} 
                                alt={c.alt}
                                className="lessonPage_image_chooseImageComponent"
                            />
                            <div className="lessonPage_main_div_sign_chooseImageComponent">
                                <span 
                                    className={
                                        idElement !== c.id 
                                            ? "lessonPage_span_sign_name_chooseImageComponent"
                                            : "lessonPage_span_sign_name_select_chooseImageComponent"
                                    }
                                    >
                                        {c.name}
                                </span>
                                <span 
                                    className={
                                        idElement !== c.id 
                                            ? "lessonPage_span_sign_index_chooseImageComponent display_alien_justify"
                                            : "lessonPage_span_sign_index_select_chooseImageComponent display_alien_justify"
                                    }
                                    >
                                        {index + 1}
                                </span>
                            </div>
                        </div>                      
                    )
                }
            </div>
        </div>
    );
};

export default ChooseImageComponent;
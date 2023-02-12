import { AiFillSound } from 'react-icons/ai';

import { IMAGES_CHOOSE_IMAGE_COMPONENT } from '../../constants';

const ChoosePositiveAnswerComponent = ({
    src, alt, question, task, showBlockTranslate, setShowBlockTranslate, translate, idElement,
    setIdElement, setName, name, array, setArray, arrayId, setArrayId, idExist, setIdExist,
}) => {
    console.log(arrayId, 'id');
    const pushItems = (id, nameValue) => {
        array.push(nameValue);
        arrayId.push(id);
        setArray(array);
        setArrayId(arrayId);
        setIdExist(true);
        setIdElement(id);
        setName(nameValue);
        const filter = arrayId.filter(c => c === id)[0];
        console.log(filter);
        console.log(!!arrayId.filter(c => c === id));
    }
    const deleteItem = (index) => {
        array.splice(index, 1);
        setArray(array);
        console.log(array);
    }
    return (
        <div className="lessonPage_main_div_choosePositiveAnswerComponent">
            <span className="lessonPage_span_title_choosePositiveAnswerComponent">
                Напишіть українською
            </span>
            <div className="lessonPage_main_div_image_choosePositiveAnswerComponent">
                <img 
                    src={IMAGES_CHOOSE_IMAGE_COMPONENT + src} 
                    alt={alt}
                    className="lessonPage_image_choosePositiveAnswerComponent"
                />
                <div className="lessonPage_div_message_choosePositiveAnswerComponent display_alien_justify">                                
                    <span className="lessonPage_span_message_choosePositiveAnswerComponent display_alien_justify">
                        <div className="lessonPage_div_triangle_choosePositiveAnswerComponent"></div>
                        <AiFillSound 
                            color={'rgb(28, 176, 246)'} 
                            style={{width: '29px', height: '22px', cursor: 'pointer'}}
                        />
                        <span 
                            className="lessonPage_span_question_choosePositiveAnswerComponent"
                            onMouseLeave={() => setShowBlockTranslate(false)}
                            onMouseEnter={() => setShowBlockTranslate(true)}
                            >
                            {question}
                        </span>
                        {
                            showBlockTranslate && 
                                <div 
                                    className="lessonPage_main_div_block_translate_choosePositiveAnswerComponent"
                                    onMouseLeave={() => setShowBlockTranslate(false)}
                                    onMouseEnter={() => setShowBlockTranslate(true)}
                                    >
                                        <div className="lessonPage_div_triangle_block_translate_choosePositiveAnswerComponent"></div>
                                    {
                                        translate.map(c => 
                                            <span 
                                                className={
                                                    (c.id < translate.length) 
                                                        ? "lessonPage_span_block_translate_choosePositiveAnswerComponent"
                                                        : "lessonPage_span_block_translate_border_bottom_none_choosePositiveAnswerComponent"
                                                }
                                                key={c.id}
                                                >
                                                {c.name}
                                            </span>
                                        )
                                    }
                                </div>
                        }
                    </span> 
                </div>
            </div>
            <div className="lessonPage_div_empty_choosePositiveAnswerComponent">
                {
                    array.map((value, index) => 
                        <span 
                            className="lessonPage_span_empty_choosePositiveAnswerComponent"
                            key={index}
                            onClick={() => deleteItem(index, name)}
                            >
                            {value}
                        </span>
                    )
                }
            </div> 
            <div className="lessonPage_main_div_option_answer_choosePositiveAnswerComponent display_alien_justify">
                {
                    task.map(c => 
                        <span 
                            className={
                                !!arrayId.filter(value => value === c.id)
                                    ? "lessonPage_span_option_answer_choosePositiveAnswerComponent"
                                    : "lessonPage_span_option_answer_empty_place_choosePositiveAnswerComponent"
                            } 
                            key={c.id}
                            onClick={() => {             
                                pushItems(c.id, c.name);
                            }}
                            >
                            {c.name}
                        </span>
                    )
                }
            </div>
            
        </div>
    );
};

export default ChoosePositiveAnswerComponent;
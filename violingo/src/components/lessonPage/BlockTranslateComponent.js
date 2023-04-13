import { IoIosArrowDown } from 'react-icons/io';

const BlockTranslateComponent = ({
    translate, translateMore, title, setShowBlockTranslate, moreInfo, setMoreInfo, wordId,
}) => {
    
    return (
        <div
            className="lessonPage_main_div_block_translate_choosePositiveAnswerComponent"
            onMouseLeave={() => {
                setShowBlockTranslate(false);
                setMoreInfo(false);
            }}
            onMouseEnter={() => setShowBlockTranslate(true)}
            >
            <div className="lessonPage_div_block_translate_position_choosePositionAnswerComponent">
                <div className="lessonPage_div_triangle_block_translate_choosePositiveAnswerComponent"></div>
                {
                    title.length > 0 &&
                        <span
                            className="lessonPage_span_block_title_translate_choosePositiveAnswerComponent"
                            >
                            {
                                title.map(c =>    
                                    <b 
                                        key={c.id} 
                                        className="lessonPage_span_block_title_b_translate_choosePositiveAnswerComponent"
                                        >
                                        {c.name}
                                    </b>
                                )
                            }
                        </span>
                }
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
                {
                    translateMore.length > 0 &&
                        <span 
                            className="lessonPage_span_block_translate_more_choosePositiveAnswerComponent"
                            onMouseEnter={() => setMoreInfo(true)}
                            >
                            {
                                !moreInfo && <IoIosArrowDown color='#b7b5b5'/>
                            }
                            {moreInfo &&
                                translateMore.map(c => 
                                    <span 
                                        key={c.id}
                                        className={
                                            (c.id < translateMore.length)  
                                                ? "lessonPage_span_main_more_translate_choosePositiveAnswerComponent"
                                                : "lessonPage_span_main_more_translate_no_border_bottom_choosePositiveAnswerComponent"
                                        }
                                        >
                                        <span 
                                            className={
                                                wordId % 2 !== 0 
                                                    ? "lessonPage_span_more_translate_choosePositiveAnswerComponent"
                                                    : "lessonPage_span_more_translate_no_text_choosePositiveAnswerComponent"
                                            }
                                            >
                                                {wordId % 2 !== 0 && c.name}
                                        </span>
                                        <span 
                                            className={
                                                wordId % 2 === 0 
                                                    ? "lessonPage_span_more_translate_pair_choosePositiveAnswerComponent"
                                                    : "lessonPage_span_more_translate_pair_no_text_choosePositiveAnswerComponent"
                                            }
                                            >
                                            {wordId % 2 === 0 && c.name}
                                        </span>
                                    </span>    
                                )
                            }
                        </span>
                }
            </div>
        </div>
    );
};

export default BlockTranslateComponent;
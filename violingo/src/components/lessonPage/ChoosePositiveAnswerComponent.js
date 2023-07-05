// import { useEffect } from 'react';
import { AiFillSound, } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { IMAGES_SERVER_PATH } from '../../constants';
import { arrayChoosePositiveAnswer, arrayIdChoosePositiveAnswer } from '../../redux/actions';
// import BlockTranslateComponent from './BlockTranslateComponent';

const ChoosePositiveAnswerComponent = ({
    src, alt, question, task, showBlockTranslate, setShowBlockTranslate, setIdElement, setName, 
    name, arrayChange, setArrayChange, nameTranslate, setNameTranslate, moreInfo, setMoreInfo,
    titleTask, chooseWrong,
}) => {
    const { array } = useSelector(state => state.arrayChoosePositiveAnswerReducer);
    const { arrayId } = useSelector(state => state.arrayIdChoosePositiveAnswerReducer);
    const dispatch = useDispatch();

    // const filterTask = (array1, array2) => {
    //     array2.forEach(element => {
    //         array1 = array1.filter(item => item.id !== element);
    //     });
    //     return array1;
    // };
    const pushItems = (id, nameValue) => {
        if (array.length === 0) {
            array.push(nameValue);
            arrayId.push(id);
            dispatch(arrayChoosePositiveAnswer(array));
            dispatch(arrayIdChoosePositiveAnswer(arrayId));
            setIdElement(id);
            setName(nameValue);
            // setArrayChange(filterTask(task, arrayId));
        } else {
            const filter = arrayId.filter(c => c === id);
            if (filter.length === 0) {
                array.push(nameValue);
                arrayId.push(id);
                dispatch(arrayChoosePositiveAnswer(array));
                dispatch(arrayIdChoosePositiveAnswer(arrayId));
                setIdElement(id);
                setName(nameValue);
                // setArrayChange(filterTask(task, arrayId));
            } 
        }
        setName(array.join(' '));   
    }
    const deleteItem = (index) => {
        array.splice(index, 1);
        arrayId.splice(index, 1);
        dispatch(arrayChoosePositiveAnswer(array));
        dispatch(arrayIdChoosePositiveAnswer(arrayId));
        setIdElement(0);
        setName('');
    }
    // useEffect(() => {
    //     setArrayChange(filterTask(task, arrayId));
    //     // eslint-disable-next-line
    // }, [arrayId, task]);
    return (
        <div className="lessonPage_main_div_choosePositiveAnswerComponent">
            <span className="lessonPage_span_title_choosePositiveAnswerComponent">
                {titleTask}
            </span>
            <div className="lessonPage_main_div_image_choosePositiveAnswerComponent">
                <img
                    src={IMAGES_SERVER_PATH + src}
                    alt={alt}
                    className="lessonPage_image_choosePositiveAnswerComponent"
                />
                <div className="lessonPage_div_message_choosePositiveAnswerComponent display_alien_justify">
                    <span className="lessonPage_span_message_choosePositiveAnswerComponent display_alien_justify">
                        <div className="lessonPage_div_triangle_choosePositiveAnswerComponent"></div>
                        <AiFillSound
                            color={'rgb(28, 176, 246)'}
                            style={{ width: '29px', height: '22px', cursor: 'pointer' }}
                        />
                        {
                            question.split(' ').map((c, index) => 
                                <span
                                    key={index}
                                    className="lessonPage_span_question_choosePositiveAnswerComponent"
                                    onMouseLeave={() => { 
                                        setShowBlockTranslate(false); 
                                        setNameTranslate('');
                                        setMoreInfo(false);
                                    }}
                                    onMouseEnter={(e) => { 
                                        setShowBlockTranslate(true); 
                                        setNameTranslate(e.target.innerHTML);
                                    }}
                                    >
                                        {c}
                                        
                                    {/* {
                                        (showBlockTranslate && nameTranslate === c) &&
                                            <BlockTranslateComponent
                                                setShowBlockTranslate={setShowBlockTranslate}
                                                translate={c.translate}
                                                title={c.title}
                                                translateMore={c.translateMore}
                                                moreInfo={moreInfo}
                                                setMoreInfo={setMoreInfo}
                                                wordId={c.id}
                                            />
                                    } */}
                                </span> 
                            )
                        }           
                    </span>
                </div>
            </div>
            <div className="lessonPage_div_empty_choosePositiveAnswerComponent">
                {
                    array.map((value, index) =>
                        <span
                            className="lessonPage_span_empty_choosePositiveAnswerComponent
                                lessonPage_style_joint_choosePositiveAnswerComponent"
                            key={index}
                            onClick={() => chooseWrong && deleteItem(index, name)}
                        >
                            {value}
                        </span>
                    )
                }
            </div>
            <div className="lessonPage_main_div_option_answer_choosePositiveAnswerComponent display_alien_justify">
                {
                    task && task.map((c, index) =>
                        <span
                            className={ "lessonPage_span_option_answer_choosePositiveAnswerComponent " +
                                "lessonPage_style_joint_choosePositiveAnswerComponent"
                                // !!arrayId.filter(value => value === c.id)
                                //     ? "lessonPage_span_option_answer_choosePositiveAnswerComponent"
                                //     : "lessonPage_span_option_answer_empty_place_choosePositiveAnswerComponent
                                //      lessonPage_style_joint_choosePositiveAnswerComponent"
                            }
                            key={index}
                            onClick={() => {
                                chooseWrong && pushItems(index, c);
                            }}
                        >
                            {c}
                        </span>
                    )
                }
            </div>

        </div>
    );
};

export default ChoosePositiveAnswerComponent;
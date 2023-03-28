import { IoMdArrowDropdown } from 'react-icons/io';
import {useEffect, useState} from 'react';

import {arrayChooseTypeTaskCreateTasksComponent} from "../../constants/arrays";
import {IMAGES_IN_DIR_ICONS} from '../../constants';

const CreateTasksComponent = () => {
    const [chooseImage, setChooseImage] = useState(false);
    const [choosePositiveAnswer, setChoosePositiveAnswer] = useState(false);
    const [chooseAnswer, setChooseAnswer] = useState(false);
    const [chooseMissingWord, setChooseMissingWord] = useState(false);
    const [chooseTranslateWords, setChooseTranslateWords] = useState(false);
    const [image, setImage] = useState('');
    const [onMouse, setOnMouse] = useState(false);
    const [typeTask, setTypeTask] = useState('');
    const [choose, setChoose] = useState(false);

    useEffect(() => {
        if (typeTask === 'Choose image') {
            setChooseImage(true);
        } else {
            setChooseImage(false);
        }
        if (typeTask === 'Choose true answer') {
            setChoosePositiveAnswer(true);
        } else {
            setChoosePositiveAnswer(false);
        }
        if (typeTask === 'Choose answer') {
            setChooseAnswer(true);
        } else {
            setChooseAnswer(false);
        }
        if (typeTask === 'Choose missing word') {
            setChooseMissingWord(true);
        } else {
            setChooseMissingWord(false);
        }
        if (typeTask === 'Choose translate words') {
            setChooseTranslateWords(true);
        } else {
            setChooseTranslateWords(false);
        }
    },[
        typeTask, chooseImage, choosePositiveAnswer, chooseAnswer, chooseMissingWord, chooseTranslateWords, choose,
        onMouse, image,
    ]);
    return (
        <div className={"adminPage_main_div_createComponent"}>
            <div className={"adminPage_div_navBar_createComponent"}>
                <h2 className={"adminPage_h2_navBar_createComponent"}>Create task:</h2>
                <div className={"adminPage_main_div_dropdowns display_alien_justify"}>
                    <h3 className={"adminPage_h3_navBar_dropdown_createComponent"}>Choose theme task</h3>
                    <IoMdArrowDropdown/>
                </div>
                <h3 className={"adminPage_h3_navBar_createComponent"}>Choose type task:</h3>
                {
                    arrayChooseTypeTaskCreateTasksComponent.map(c =>
                        <div className="adminPage_div_sign_and_button_createComponent" key={c.id}>
                            <span
                                className="adminPage_span_sign_createComponent adminPage_span_sign_width_createComponent"
                            >
                                {c.typeTask}
                            </span>
                            <div
                                className="adminPage_div_ellipse_and_quadrate_createComponent"
                                onClick={() => {
                                    setChoose(value => !value);
                                    setTypeTask(c.typeTask);
                                }}
                            >
                                <span
                                    className={
                                        (choose && c.typeTask === typeTask)
                                            ? "adminPage_span_ellipse_on_createComponent"
                                            : "adminPage_span_ellipse_off_createComponent"
                                    }
                                >
                                </span>
                                <span
                                    className={
                                        (choose && c.typeTask === typeTask)
                                            ? "adminPage_span_quadrate_on_createComponent " +
                                            "adminPage_main_style_createComponent "
                                            : "adminPage_span_quadrate_off_createComponent " +
                                            "adminPage_main_style_createComponent "
                                    }
                                >
                                </span>
                            </div>
                            <span className="adminPage_span_sign_createComponent">Example:</span>
                            <div style={{position: 'relative'}}>
                                <img
                                    className={"adminPage_image_example_task"}
                                    src={IMAGES_IN_DIR_ICONS + c.src}
                                    alt={"example task"}
                                    onMouseEnter={() => {
                                        setImage(c.src);
                                        setOnMouse(true);
                                    }}
                                    onMouseLeave={() => {
                                        setImage('');
                                        setOnMouse(false);
                                    }}
                                />
                                {
                                    onMouse && c.src === image &&
                                    <img
                                        className={"adminPage_big_image_example_task"}
                                        src={IMAGES_IN_DIR_ICONS + image}
                                        alt={"example task"}
                                    />
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={"adminPage_div_body_createComponent"}></div>
        </div>
    );
};

export default CreateTasksComponent;
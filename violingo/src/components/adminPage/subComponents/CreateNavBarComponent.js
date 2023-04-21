import { IoMdArrowDropdown } from 'react-icons/io';

import ArrowBackComponent from './ArrowBackComponent';
import DropDownMenuComponent from './DropDownMenuComponent';
import ChooseTypeTaskComponent from './ChooseTypeTaskComponent';
import CreateTaskFormComponent from '../subCreateTaskComponents/CreateTaskFormComponent';

const CreateNavBarComponent = ({
    dropdown, setDropdown, themes, click, title, openCloseDropdownMenu, setChoose, setAnswer, setDropdownTypeMenu, 
    dropdownTypeMenu, setTypeTask, choose, typeTask, setImageExample, setOnMouse, imageExample, onMouse, question, 
    setQuestion, answer, sendTask, setWord, chooseMissingWord, word, error, errorMessage, translate, setTranslate,
    chooseImage, setFile, setDrag, drag, createBool,
}) => {
    return(
        <div className={"adminPage_div_navBar_createComponent"}>
                <ArrowBackComponent/>
                <h2 className={"adminPage_h2_navBar_createComponent"}>
                    { createBool ? "Create task:" : "Create exercise:" }
                </h2>
                <DropDownMenuComponent
                    dropdown={dropdown}
                    setDropdown={setDropdown}
                    themes={themes}
                    click={click}
                    title={title}
                    openCloseDropdownMenu={openCloseDropdownMenu}
                />
                {
                    title !== '' &&
                        <div className={"adminPage_main_div_chooseTypeTaskComponent"}>
                            <div className="adminPage_div_dropdown_chooseTypeTask">
                                <h3 className={"adminPage_h3_navBar_createComponent"}>Choose type task:</h3>
                                <span 
                                    className="adminPage_span_image_dropdown_chooseTypeTask"
                                    onClick={() => setDropdownTypeMenu(value => !value)}
                                    >
                                    <IoMdArrowDropdown size={'30px'}/>
                                </span>
                            </div>
                            {
                                dropdownTypeMenu &&
                                    <div>
                                        <ChooseTypeTaskComponent
                                            setChoose={setChoose}
                                            setTypeTask={setTypeTask}
                                            choose={choose}
                                            typeTask={typeTask}
                                            setImageExample={setImageExample}
                                            setOnMouse={setOnMouse}
                                            imageExample={imageExample}
                                            onMouse={onMouse}
                                        />  
                                    </div>
                            }
                        </div>
                }
                <div className={"adminPage_main_div_form_createComponent display_alien_justify"}>
                    {
                        (choose && createBool) &&
                            <CreateTaskFormComponent
                                question={question}
                                setQuestion={setQuestion}
                                answer={answer}
                                setAnswer={setAnswer}
                                sendTask={sendTask}
                                setWord={setWord}
                                chooseMissingWord={chooseMissingWord}
                                word={word}
                                error={error}
                                errorMessage={errorMessage}
                                translate={translate}
                                setTranslate={setTranslate}
                                chooseImage={chooseImage}
                                setFile={setFile}
                                setDrag={setDrag}
                                drag={drag}
                            />
                    }
                </div>
            </div>
    );
};

export default CreateNavBarComponent;
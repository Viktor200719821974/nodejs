const LessonStartWindowModalComponent = ({ backgroundTheme, lessons, }) => {
    return (
        <div 
            className="main_div_lessonStartWindowModalComponent"
            style={{background: backgroundTheme}}
        >
            <div className="div_triangle_lessonStartWindowModalComponent" style={{background: backgroundTheme}}></div>
            <div className="div_wrap_lessonStartWindowModalComponent">
                <h3 className="h3_lessonStartWindowModalComponent">Персоналізована практика</h3>
                <p className="p_lessonStartWindowModalComponent">Урок 5 з {lessons.length}</p>
                <button
                    style={{color: backgroundTheme}}
                    className="button_lessonStartWindowModalComponent"
                >
                    Почати +20 балів
                </button>
            </div>
            
        </div>
    );
};

export default LessonStartWindowModalComponent;
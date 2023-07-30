const WindowStartLessonComponent = ({ backgroundTheme, }) => {
    return (
        <div className="_windowStartLessonComponent_main_div">
            <div className="windowStartLessonComponent_div" style={{background: `${backgroundTheme}`}}>
                <span className="windowStartLessonComponent_span">
                    ПОЧАТИ
                </span>
            </div>
            <div className="windowStartLessonComponent_div_triangle" style={{background: `${backgroundTheme}`}}></div>
        </div>
    );
};

export default WindowStartLessonComponent;
const WindowStartLessonComponent = ({ backgroundTheme, topBlock, topTriangle, }) => {
    return (
        <div className="_windowStartLessonComponent_main_div">
            <div 
                className="windowStartLessonComponent_div" 
                style={{background: `${backgroundTheme}`, top: `${topBlock}px`}}
            >
                <span className="windowStartLessonComponent_span">
                    ПОЧАТИ
                </span>
            </div>
            <div 
                className="windowStartLessonComponent_div_triangle" 
                style={{background: `${backgroundTheme}`, top: `${topTriangle}px`}}
            >
            </div>
        </div>
    );
};

export default WindowStartLessonComponent;
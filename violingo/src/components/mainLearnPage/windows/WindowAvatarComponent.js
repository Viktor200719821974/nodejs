const WindowAvatarComponent = ({
    setMouseOnAvatar,
}) => {
    return (
        <div
            className="mainLearnPage_main_div_windowAvatarComponent" 
            onMouseEnter={() => setMouseOnAvatar(true)}
            onMouseLeave={() => setMouseOnAvatar(false)}
            >
            <div className="mainLearnPage_div_triangle_windowAvatarComponent"></div>
            <div className="mainLearnPage_div_windowAvatarComponent">
                <span className="mainLearnPage_span_title_windowAvatarComponent">
                    Обліковий запис
                </span>
                <div className="mainLearnPage_div_line_windowAvatarComponent"></div>
                <span className="mainLearnPage_span_windowAvatarComponent">
                    Створити профіль
                </span>      
                <div className="mainLearnPage_div_line_windowAvatarComponent"></div>      
                <span className="mainLearnPage_span_windowAvatarComponent">
                    Налаштування
                </span>
                <div className="mainLearnPage_div_line_windowAvatarComponent"></div>
                <span className="mainLearnPage_span_windowAvatarComponent">
                    Довідка
                </span>
                <div className="mainLearnPage_div_line_windowAvatarComponent"></div>
                <span className="mainLearnPage_span_windowAvatarComponent">
                    Увійти
                </span>
            </div>
        </div>
    );
};

export default WindowAvatarComponent;
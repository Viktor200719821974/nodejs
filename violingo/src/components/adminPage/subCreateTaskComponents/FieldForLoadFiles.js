const FieldForLoadFiles = ({ setFile, setDrag, drag, }) => {
    

    const dragStartHandler = (e) => {
        e.preventDefault();
        setDrag(true);
    }
    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setDrag(false);
    }
    return (
        <div className="main_div_fieldForLoadFiles">
        {
            drag ? 
                <div className={'drop-area_fieldForLoadFiles display_alien_justify'}
                     onDragStart={e => dragStartHandler(e)}
                     onDragLeave={e => dragLeaveHandler(e)}
                     onDragOver={e => dragStartHandler(e)}
                     onDrop={e => setFile(e.dataTransfer.files[0])}
                >
                    Відпустіть файл, щоб його завантажити
                </div> :
                <div className={'drop-area_fieldForLoadFiles display_alien_justify'}
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler (e)}
                    onDragOver={e => dragStartHandler(e)}
                >
                    Перенесіть файл, щоб його завантажити
                </div>
        }
        </div>
    );
};

export default FieldForLoadFiles;
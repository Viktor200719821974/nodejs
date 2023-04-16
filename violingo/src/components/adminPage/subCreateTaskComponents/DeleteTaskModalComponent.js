const DeleteTaskModalComponent = ({ id, fetchDeleteTask, setOnHide, }) => {
    return (
        <div className="adminPage_main_div_modal_window_delete_deleteTaskModalComponent">
            <h3 className="adminPage_h3_modal_window_delete_deleteTaskModalComponent">Do you want to delete this task?</h3>
            <div>
                <button 
                    className="adminPage_main_style_button_deleteTaskModalComponent style_button_cancel"
                    onClick={() => setOnHide(false)}
                    >
                        cancel
                </button>
                <button 
                    className="adminPage_main_style_button_deleteTaskModalComponent style_button_delete"
                    onClick={() => fetchDeleteTask(id)}
                    >
                        delete
                </button>
            </div>
        </div>
    );
};

export default DeleteTaskModalComponent;
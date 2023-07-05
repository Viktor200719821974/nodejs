import { useSelector } from 'react-redux';


const TaskTypeChooseTranslateWordsComponent = ({ id }) => {
    const { allTasks } = useSelector(state => state.allTasksWithoutFiltersReducer);
    const task = allTasks.filter(c => c.id === id);
    const translateWordsTasks = task.map(c => c.translateWordsTasks)[0];
    
    let filter = [];
    for (let i = 0; i < allTasks.length; i++) {
        for (let j = 0; j < translateWordsTasks.length; j++) {
            if (allTasks[i].id === translateWordsTasks[j]) {
                filter.push(allTasks[i]);
            }
        }
    }
    return (
        <div>
            {
                filter.map(c => 
                    <div key={c.id} className="adminPage_div_taskTypeChooseTranslateWordsComponent">
                        <span className="adminPage_span_taskTypeChooseTranslateWordsComponent">
                            <b>Question:</b> {c.question}
                        </span> 
                        <span className="adminPage_span_taskTypeChooseTranslateWordsComponent">
                            <b>Answer:</b> {c.answer}
                        </span>
                    </div>
                )
            }
            
        </div>
    );
};

export default TaskTypeChooseTranslateWordsComponent;
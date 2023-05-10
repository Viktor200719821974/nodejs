import { useEffect, useState } from 'react';
import { getAllTasks } from '../../../http/tasksApi';

const TaskTypeChooseTranslateWordsComponent = ({ id }) => {
    const [tasks, setTasks] = useState([]);

    const task = tasks.filter(c => c.id === id);
    const translatewordsTasks = task.map(c => c.translatewordsTasks)[0];
    
    let filter = [];
    for (let i = 0; i < tasks.length; i++) {
        for (let j = 0; j < translatewordsTasks.length; j++) {
            if (tasks[i].id === translatewordsTasks[j]) {
                filter.push(tasks[i]);
            }
        }
    }
    useEffect(() => {
        const fetchAllTasks = async () => {
            try {
                getAllTasks().then(data => {
                    if (data.status === 200) {
                        setTasks(data.data);
                    }
                });
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchAllTasks().then();
    }, [tasks]);
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
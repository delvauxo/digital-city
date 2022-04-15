import TaskListItem from './task-list-item';
import style from './task-list.module.css';

const TaskList = ({ elements, onDeleteTask, onFinishTask }) => {

    const tasksJSX = elements.map(
        element => <TaskListItem {...element}
            key={element.id}
            onDelete={onDeleteTask}
            onFinish={onFinishTask}
        />
    );

    return (
        <ul className={style.tasklist}>
            {tasksJSX}
        </ul>
    );
};

TaskList.defaultProps = {
    elements: [],
    onFinishTask: () => { }, // NOOP => No Operation
    onDeleteTask: () => { }
};

export default TaskList;
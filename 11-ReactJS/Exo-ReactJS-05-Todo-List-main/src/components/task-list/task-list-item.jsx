import PriorityEnum from '../../enums/priority-enum';
import style from './task-list-item.module.css';

const TaskListItem = (props) => {
    const { id, name, desc, priority, isDone } = props;
    const { onFinish, onDelete } = props;
    const isUrgent = (priority === PriorityEnum.HIGH);

    return (
        <li className={`${style.task} ${isDone ? style.isDone : ''}`}>
            <div>
                <h3>{name} {isUrgent && <span className={style.urgent}>(Urgent)</span>}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button onClick={() => onFinish(id)} disabled={isDone}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </li>
    );
};


export default TaskListItem;
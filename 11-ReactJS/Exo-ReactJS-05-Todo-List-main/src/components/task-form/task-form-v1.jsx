import { useState } from 'react';
import PriorityEnum from '../../enums/priority-enum';
import style from './task-form.module.css';

const TaskForm = (props) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [priority, setPriority] = useState(PriorityEnum.MEDIUM);

    const handleSubmit = (e) => {
        // Déactivation du comportement de l'event
        e.preventDefault();

        // Traitement des données
        const data = { name, desc, priority };
        props.onValid(data);

        // Reset du formulaire
        setName('');
        setDesc('');
        setPriority(PriorityEnum.MEDIUM);
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <div>
                <label htmlFor="task-name">Nom</label>
                <input type="text" id="task-name" required
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="task-desc">Description</label>
                <textarea id="task-desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div>
                <label htmlFor="task-priority">Priorité</label>
                <select id="task-priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}>
                    <option value={PriorityEnum.HIGH}>Urgent</option>
                    <option value={PriorityEnum.MEDIUM}>Normal</option>
                    <option value={PriorityEnum.LOW}>Basse</option>
                </select>
            </div>
            <div>
                <button type="submit">{props.buttonSubmit}</button>
            </div>
        </form>
    );
};

TaskForm.defaultProps = {
    buttonSubmit: 'Enregistrer',
    onValid: () => { } // NOOP
};


export default TaskForm;
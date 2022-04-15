import { useState } from 'react';
import TaskForm from '../../components/task-form/task-form-v2';
import { nanoid } from 'nanoid';
import TaskList from '../../components/task-list/task-list';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);

    const handleNewTask = (data) => {
        const newTask = {
            ...data,
            isDone: false,
            id: nanoid()
        };

        setTasks(tasks => [newTask, ...tasks]);
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks => tasks.filter(t => t.id !== id));
    };

    const handleFinishTask = (id) => {
        setTasks(tasks => tasks.map(task => task.id !== id ? task : { ...task, isDone: true }));
    };

    return (
        <>
            <h2>Ajouter une tache</h2>
            <TaskForm buttonSubmit='Ajouter' onValid={handleNewTask} />

            <h2>Liste des taches</h2>
            <TaskList elements={tasks}
                onDeleteTask={handleDeleteTask}
                onFinishTask={handleFinishTask} />
        </>
    );
};

export default TodoApp;
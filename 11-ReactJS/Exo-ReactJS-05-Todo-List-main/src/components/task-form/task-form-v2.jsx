import { useState } from 'react';
import PriorityEnum from '../../enums/priority-enum';
import style from './task-form.module.css';

// Utilisation des librairies "React-Hook-Form" et de "Yup"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


// Schema de validation "yup"
const taskSchema = yup.object({
    name: yup.string().trim().required(),
    desc: yup.string().trim(),
    priority: yup.string().required()
}).required();


// Composant formulaire
const TaskForm = (props) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        // Valeur initial du formulaire
        defaultValues: {
            name: '',
            desc: '',
            priority: PriorityEnum.MEDIUM
        },
        // Mécanisme pour utiliser "Yup" avec "React Hook Form"
        resolver: yupResolver(taskSchema)
    });

    const onSubmitTask = (data) => {
        // Traitement des données
        props.onValid(data);

        // Reset du formulaire
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmitTask)} className={style.form}>
            <div>
                <label htmlFor="task-name">Nom</label>
                <input type="text" id="task-name" {...register("name")}
                    className={errors.name ? style.invalidInput : ''} />
            </div>
            <div>
                <label htmlFor="task-desc">Description</label>
                <textarea id="task-desc" {...register("desc")} />
            </div>
            <div>
                <label htmlFor="task-priority">Priorité</label>
                <select id="task-priority" {...register("priority")}>
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
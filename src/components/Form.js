import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { useForm } from './hooks/useForm'

export const Form = ({ setTareas }) => {

    const [values, handleInputChange, reset ] = useForm({ tarea: ''})

    const { tarea } = values;

    const handleSubmit = e => {
        e.preventDefault();

        if ( tarea.length > 2 ) {
            setTareas( tareas => [
                ...tareas,
                {
                    id: new Date().getTime(),
                    texto: tarea,
                    completada: false
                }
            ]);

            reset();
        }

    }

    return (
        <form
            action=''
            className="formulario-tareas"
            onSubmit={ handleSubmit }
        >
            <input
                type="text"
                name="tarea"
                className="formulario-tareas__input"
                placeholder="Escribe una Tarea..."
                value={ tarea }
                onChange={ handleInputChange }
                autoComplete="off"
            />
            <button
                type="submit"
                className="formulario-tareas__btn"
            >
                <FontAwesomeIcon icon={ faPlusSquare } className="formulario-tareas__icono-btn"/>
            </button>
        </form>
    )
}

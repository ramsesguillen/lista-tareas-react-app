import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTimes, faSquare } from '@fortawesome/free-solid-svg-icons'
import { useForm } from './hooks/useForm'

export const ListItem = ({ tarea: { id, texto, completada }, setTareas }) => {

    const [editandoTarea, setEditandoTarea] = useState( false )

    const [values, handleInputChange] = useForm({ tarea: texto })

    const { tarea } = values;

    const handleEditarTarea = e => {
        e.preventDefault();
        setEditandoTarea( false );
        setTareas( tareas => tareas.map( tr => {
                if ( tr.id === id ){
                    tr.texto = tarea;
                }
                return tr;
            })
        );
    }

    const toggleCompletada = () => {
        setTareas( tareas => tareas.map( tr => {
                if ( tr.id === id ){
                    tr.completada = !completada;
                }
                return tr;
            })
        );
    }

    const handleDeleteTarea = () => {
        setTareas( tareas => tareas.filter( tr => tr.id !== id ));
    }


    return (
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon
                icon={ (completada) ? faCheckSquare : faSquare }
                className="lista-tareas__icono lista-tareas__icono-check"
                onClick={ toggleCompletada }
            />
            <div className="lista_tareas__texto">
                {
                    ( editandoTarea )
                        ?
                            <form
                                className="formulario-editar-tarea"
                                onSubmit={ handleEditarTarea }
                            >
                                <input
                                    name="tarea"
                                    type="text"
                                    className="formulario-editar-tarea__input"
                                    value={ tarea }
                                    onChange={ handleInputChange }
                                />
                                <button
                                    type="submit"
                                    className="formulario-editar-tarea__btn"
                                >
                                    Actulizar
                                </button>
                            </form>
                        :
                        ( texto )
                }
            </div>
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon
                    icon={ faEdit }
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={ () => setEditandoTarea( !editandoTarea )}
                />
                <FontAwesomeIcon
                    icon={ faTimes }
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={ handleDeleteTarea }
                />
            </div>
        </li>
    )
}

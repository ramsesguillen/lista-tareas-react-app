import React from 'react'
import { ListItem } from './ListItem'

export const TareaList = ( { tareas, setTareas, mostrarCompletadas }) => {
    return (
        <ul className="lista-tareas">
            {
                ( tareas.length > 0 )
                    ?
                        tareas.map( tarea  => (
                            ( mostrarCompletadas )
                                ?
                                    <ListItem
                                        key={ tarea.id }
                                        tarea={ tarea }
                                        setTareas={ setTareas }
                                    />
                                :
                                ( !tarea.completada )
                                    &&
                                        <ListItem
                                            key={ tarea.id }
                                            tarea={ tarea }
                                            setTareas={ setTareas }
                                        />
                        ))
                    :
                        <div className="lista-tareas__mensaje">
                            ~ No hay tareas agregadas ~
                        </div>
            }
        </ul>
    )
}

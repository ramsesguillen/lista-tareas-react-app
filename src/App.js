import React, { useEffect, useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { TareaList } from './components/TareaList'

export const App = () => {

    const tareasLocalStorage = JSON.parse( localStorage.getItem('tareas')) || [];

    const [tareas, setTareas] = useState(  tareasLocalStorage  );

    useEffect( () => {
        localStorage.setItem('tareas', JSON.stringify( tareas ) );
    }, [ tareas ]);


    const mostrarCompletadasLocalStorage = JSON.parse( localStorage.getItem('mostrarCompletadas')) || true ;

    const [mostrarCompletadas, setMostrarCompletadas] = useState( mostrarCompletadasLocalStorage )

    useEffect( () => {
        localStorage.setItem('mostrarCompletadas', JSON.stringify( mostrarCompletadas ) );
    }, [ mostrarCompletadas ]);


    return (
        <div className="contenedor">
            <Header
                mostrarCompletadas={ mostrarCompletadas }
                setMostrarCompletadas={ setMostrarCompletadas }
            />
            <Form setTareas={ setTareas } />
            <TareaList
                tareas={ tareas }
                setTareas={ setTareas }
                mostrarCompletadas={ mostrarCompletadas }
            />
        </div>
    )
}

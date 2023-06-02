import React from "react";
import style from './Lista.module.scss'

function Lista() {

    const tarefas = [{
        tarefa: 'React',
        tempo: '01:30:00'
    }, {
        tarefa: '.NET 7',
        tempo: '04:00:00'
    },
    {
        tarefa: 'JavaScript',
        tempo: '02:00:00'
    }];

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
import React, { Component } from 'react'
import CardNota from '../CardNota/'

export class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria, indice) => {
                    return (
                        <li key={indice}>
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    )
                })}
            </ul>
        )
    }

}

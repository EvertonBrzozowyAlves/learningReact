import React, { Component } from 'react'
import CardNota from '../CardNota/'

export class ListaDeNotas extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {this.props.notas.map((nota, indice) => {
                    console.log(nota)
                    return (
                        <li key={indice}>
                            <CardNota titulo={nota.titulo} texto={nota.texto} />
                        </li>
                    )
                })}
            </ul>
        )
    }

}

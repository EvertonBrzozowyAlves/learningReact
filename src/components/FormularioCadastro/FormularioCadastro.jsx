import { Component } from "react";

export class FormularioCadastro extends Component {
    constructor(props) {
        super(props)
        this.titulo = ""
        this.texto = ""
    }
    handleMudancaTitulo(event) {
        event.stopPropagation()
        this.titulo = event.target.value
    }
    handleMudancaTexto(event) {
        event.stopPropagation()
        this.texto = event.target.value
    }
    _criarNota(event) {
        event.preventDefault()
        event.stopPropagation()
        this.props.criarNota(this.titulo, this.texto)
    }

    render() {
        return (
            <form
                onSubmit={this._criarNota.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    onChange={this.handleMudancaTitulo.bind(this)}
                // como o escopo do this é dinâmico, precisamos sempre vincular o bind, para que funcione quando o método
                // for chamado de fora da classe
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    onChange={this.handleMudancaTexto.bind(this)}
                />
                <button>Criar nota</button>
            </form>
        )
    }
}

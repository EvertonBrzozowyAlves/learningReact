import { Component } from "react";

export class FormularioCadastro extends Component {
    constructor() {
        super()
        this.titulo = ""
    }
    handleMudancaTitulo(event) {
        this.titulo = event.target.value
        console.log(this.titulo)
    }

    render() {
        return (
            <form
            // onSubmit={}
            >
                <input
                    type="text"
                    placeholder="Título"
                    onChange={this.handleMudancaTitulo}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                />
                <button>Criar nota</button>
            </form>
        )
    }
}

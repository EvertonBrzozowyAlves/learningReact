import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css"
import "./assets/index.css"


class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: []
    }
  }
  criarNota(titulo, texto) {
    console.log(`Uma nova nota foi criada ${titulo} - ${texto}.`)
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section>
        {/* similar a fazer um new FormularioCadastro() */}
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    )
  }
}

export default App;

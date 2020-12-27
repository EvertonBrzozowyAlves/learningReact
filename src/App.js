import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css"
import "./assets/index.css"
import { Component } from "react";


class App extends Component {
  constructor() {
    super()
  }
  criarNota(titulo, texto) {
    console.log(`Uma nova nota foi criada ${titulo} - ${texto}.`)
  }

  render() {
    return (
      <section>
        {/* similar a fazer um new FormularioCadastro() */}
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    )
  }
}

export default App;

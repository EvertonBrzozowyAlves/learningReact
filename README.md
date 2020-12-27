# REACT

O React é uma biblioteca Javascript criada pelo Facebook, para desenvolvimento de interfaces de usuário.  

## JSX 
O JSX é uma sintaxe que permite criar código muito semelhante a HTML dentro do Javascript.  

```jsx
function App() {
  return (
    <h1>Testing React</h1>
  )
}
```

Apesar de não ser necessário para usar o React, ele é amplamente utilizado para desenvolvimento usando React.  
Uma aplicação base do React, criada com o comando **npx create-react-app** já vem com uma estrutura base.  
Parte dessa estrutura já monta uma página html base dentro da pasta **public**, então não precisamos nos preocupar em criar tags de estrutura da página.  
Quando escrevemos código JSX, é feito um processo para compilar esse código em algo que o navegador entenda.  

Dentro de um componente JSX, podemos retornar apenas um elemento pai.

## Componentes

Componentes são classes que criamos para representar trechos de código e que podem ser reaproveitados.  
Estrutura básica de um componente:  

```jsx
import { Component } from "react";

export class CardNota extends Component {
    render() {
        return (
            <section>
                <header>
                    <h3>Título</h3>
                </header>
                <p>Escreva sua nota</p>
            </section>
        )
    }
}
```

Para utilizar o componente:

```jsx
<li>
    <CardNota />
</li>
```

Quando um componente pode gerar vários itens, utilizando um loop, por exemplo, é necessário que eles tenham um identificador único.  
Usamos a propriedade **key** para definir esse identificador:

```jsx
    return (
        <ul>
            {Array.of("Note A", "Note B", "Note C").map((subject, index) => {
                return (
                    <li key={index}>
                        <div>{subject}</div>
                        <CardNota />
                    </li>
                )
            })}
        </ul>
    )
```

## Estilização

Para adicionar estilo aos componentes, o ideal é criar uma pasta para o componente, e criar um arquivo css nessa pasta.  
Esse arquivo deve ser referenciado no arquivo .jsx com a sintaxe de import, para a classe funcionar.

```jsx
import './CardNota.css'
```

Depois, basta usar as classes criadas no css com o atributo className do React:

```jsx
<section className="card-nota">
```

No processo de transpilação do código para html, os arquivos css são transformados em um bundle e ficam disponíveis para toda a aplicação.  
Isso faz com que todos os elementos tenham acesso as classes estilos definidos, mesmo não sendo importado no arquivo .jsx em tempo de desenvolvimento.  
Para evitar esse tipo de conflito, o ideal é prefixar as classes com o nome dos componentes.  

```css
.card-nota_section{
    color: red;
}
```
```jsx
<section className="card-nota_section">
```

Arquivos de imagens, css globais e outros podem ser adicionados a uma pasta assests, dentro de src.  
Podemos usar a técnica de *barrel* para diminuir o tamanho dos imports e controlar melhor o que é exportado de cada módulo.  
Para isso, crie um arquivo index.js em cada módulo. Nesse arquivo, importe o módulo a ser exportado e depois exporte.  

```javascript
import { FormularioCadastro } from "./FormularioCadastro";
export default FormularioCadastro
```

Para utilizar, como o padrão do import e procurar por um index.js, não precisamos colocar o index no final do caminho do import:  

```javascript
import FormularioCadastro from "./components/FormularioCadastro";
```

## THIS
Como o this tem escopo léxico (dinâmico), sempre que for adicionar uma função em uma classe no React, adicione um bind.  
O bind vincula o método ao contexto que ele deve ser executado, por exemplo, uma função a uma classe:  

```jsx
export class FormularioCadastro extends Component {
//...
handleMudancaTitulo(event) {
        this.titulo = event.target.value
        console.log(this.titulo)
    }
//...
<input
    type="text"
    placeholder="Título"
    onChange={this.handleMudancaTitulo.bind(this)} //vinculará o this a classe FormularioCadastro
/>
```

## State
O estado do componente é o que determina se esse componente deve ser renderizado novamente na tela ou não.  
Quando o estado é alterado, o elemento deve ser renderizado novamente.  

```jsx
class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: [] //estado inicial
    }
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota] //concatenando itens anteriores com novos
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado) //aqui definimos um novo estado para o componente, que irá atualizar a tela
  }
```
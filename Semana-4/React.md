# Introdução ao React

## Ementa

- O que é o React
- Conhecendo o JSX
- Stateless Component
- Utilizando props
- Statefull Component
- Lifecycle, useState e useEffect
- Eventos

## O que é o React?

É uma biblioteca criada pelo Facebook para construir interfaces de usuários.
É utilizada para cria componentes, manipular o estado (state) e as propriedades (props), utiliza event listeners e certos métodos de ciclo de vida para atualizar os dados conformem eles mudem.
O React utiliza uma linguagem de marcação que é uma combinação de HTML e Javascript, chamada JSX.

### Como utilizar

CDN do React: https://reactjs.org/docs/cdn-links.html
https://www.freecodecamp.org/forum/t/how-to-use-cdn-link-in-react/244766

## Conhecendo o JSX

O React utiliza o JSX para criar seus componentes, ele é extremamente similar ao HTML. Como o JSX utiliza JS, podemos escrever JS diretamente dentro do JSX. Para se fazer isso, somente coloca o codigo JS dentro de um par de chaves `{}`.
Mas como o JSX não é um JavaScript válido, devemos usar um compilador para isso e o mais famoso é o Babel.

Um componente JSX é uma função que retorna um codigo JSX similar ao HTML. Esta função deve ter seu nome começado com letra maiúscula, para não confundir tags HTML com tags JSX.

```jsx
function App() {
  return <h1>Ola JSX!</h1>;
}
```

Este elemento pode contar qualquer tag HTML, uma das exigências é que ele deve retornar uma tag que envolva todos as outras e qualquer tag aberta deve ter seu fechamento.

```jsx
function App() {
  return (
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );
}
```

O JSX tambem possui o conceito de tags auto fechadas. São tags que se fecham se a necessidade de abertura de uma nova.

```jsx
function App() {
  return (
    <div>
      <h1>This is a block of JSX</h1>
      <input />
      <br />
      <div />
      <hr />
    </div>
  );
}
```

### Renderizando o elemento dentro da página

Para inserirmos nosso elemento JSX dentro da nossa página HTML, precisamos usar a API de renderização do React conhecida como ReactDOM.
O ReactDOM oferece um método simples que tem esta interface: `ReactDOM.render(ComponenteJSX, elementoHTML)`

Neste exemplo temos nosso elemento HTML identificado pelo id `app`, dentro da tag script temos nosso código React.
Neste código React estamos criando um elemento JSX e pedindo para o ReactDOM renderizá-lo dentro da div com id `app`

```html
<body>
  <div id="app"></div>
  <script type="text/babel">
    function App() {
      return <h1>Ola JSX!</h1>;
    }
    ReactDOM.render(<App />, document.querySelector("#app"));
  </script>
</body>
```

### Inserindo classes CSS

Embora o JSX seja muito semelhante ao HTML, algumas coisas possuem diferenças, como os atributos das tags.
O atributo `class` do html se torna `className` no JSX, já que `class` é uma palavra reservada do JS.
A convenção de nomes para todos os atributos das tags segue o padrão camelCase.
Os atributos de eventos `onchange`, `onclick`, `onsubmit`, etc, se torname `onChange`, `onClick`, `onSubmit`.

```jsx
function App() {
  return (
    <div className="container">
      <h1>Ola Bootstrap</h1>
    </div>
  );
}
```

## Stateless Component

Os componentes são o core do React, tudo é componente nele. Existem duas maneiras de se criar um componente no React como função ou como classe.
Um componente funcional sem estado (Stateless Funcional Component), é basicamente uma função que retorna um código JSX que não administra o estado da aplicação, ou seja, não atualiza no DOM se algum evento ocorreu.

Podemos escrever este componente como uma função normal em JS ou como uma variavel que recebe uma arrow function.

```jsx
function DemoComponent() {
  return <div className="customClass" />;
}

const DemoComponent = () => {
  return <div className="customClass" />;
};
```

Ou podemos escrever como uma classe. A diferença de usar classe é que devemos extender a classe `React.Component` da biblioteca do React, assim esta classe terá acesso a toda as features do React.
Basicamente um componente de classe possui um método constructor, que é chamado na primeira vez que o componente é criado e um método render, que é responsavel pode criar o componente.

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hi</h1>;
  }
}
```

### Composição de componentes

A ideia de escrever componentes é criar pequenos pedaços de códigos que podemos reutilizar depois. Nesta reutilização fazemos uma composição de componentes. Composição de componentes é uma das features mais poderosas do React.

Imagine que temos que construir uma tela com um menu de navegação no topo, um dashboard no centro e um rodape. Pensando em componentes poderiamos nossa app ficaria da seguinte maneira.

```jsx
function App() {
  return (
    <App>
      <Navbar />
      <Dashboard />
      <Footer />
    </App>
  );
}
```

As vantagens da composição é podermos faze-la sempre pensando nas menores partes da UI.

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div className="container">
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
}
```

## Utilizando props

No React você pode enviar um valor para outro componente através do sistema chamado de props.

Um exemplo seria passar uma string para um componente.
Neste exemplo podemos ver que o componente welcome recebe como parametro um objeto que chamamos de props, e deste objeto utilizamos a propriedade name. Esta propriedade name veio da App que utilizou o componente Welcome e enviou uma string como valor da propriedade name.

```jsx
const Welcome = props => <h1>Hello, {props.name} </h1>;

function App() {
  return (
    <div>
      <Welcome name="React" />
    </div>
  );
}
```

As props enviados através dos componentes podem ser qualquer valor Javascript

```jsx
const CurrentDate = props => {
  return (
    <div>
      <p>A data atual é: {props.date} </p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Qual é a data?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
}
```

Podem ser estruturas de dados tambem, como arrays ou objetos

```jsx
const List = props => {
  return <p>{props.tasks.join(", ")}</p>;
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "go out"]} />
      </div>
    );
  }
}
```

### defaultProps e propTypes

defaultProps é a forma de voce dizer ao React qual o valor de determinada propriedade caso ela nao seja passada
propTypes é a forma de tipar as propriedades

```jsx
const Items = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.defaultProps = {
  quantity: 0
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />;
  }
}
```

## Statefull Component

Um dos tópicos mais importantes no React são os estados (state). O state é qualquer dado que a aplicação precisa saber sobre que pode mudar conforme o tempo.
Até a introdução de Hooks no React, o state somente era acessível através componentes de classe.
Hoje com a utilização de Hooks podemos declarar nossas variaveis de state com o método React.useState

## Lifecycle, useState e useEffect

O React.useState é um método que recebe como parametro o valor inicial daquele state e retorna um array contendo a variavel com o estado e uma função para altera-lo.

obs: Existem algumas regras de utilização de Hooks, como eles devem ser declarados dentro de funções e sempre no totpo delas, não podem ser declarados dentro de loops ou condicionais e etc, https://pt-br.reactjs.org/docs/hooks-rules.html

```jsx
const [name, setName] = React.useState("");
```

Para utilizar um Hook de state basta passar ele para o Componente

```jsx
function App() {
  const [name, setName] = React.useState("Henrique");

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
```

Porém para atualizá-lo precisamos utilizar um evento do JS para chamar a função modificadora do state;

Neste exemplo o evento de mudança do input (onChange), lançado toda a vez que o usuário digita algo irá chamar a função setName, que por sua vez altera o state fazendo o componente renderizar novamente com o valor correto.

```jsx
function App() {
  const [name, setName] = React.useState("Henrique");

  return (
    <div>
      <h1>{name}</h1>
      <input onChange={(evt) => setName(evt.target.value)}>
    </div>
  );
}
```

### Lifecycle

Ciclo de vida no React são os estagios que um componente desde a sua renderização ate a sua destruição. Os lyfecycle nos dão acesso para podermos manipularmos nosso componente dependendo do estágio.

O ciclo de vida do componente basicamente se divide em:

- quando ele se inicia para renderizar
- quando ele termina de renderizar
- quando ele se atualiza
- quando ele é removida da DOM, é destruido

O primeiro ciclo nos acessamos com os valores iniciais que passamos para o useState, ele vai definir o valor inicial que queremos que o nosso componente renderize
Os outros nos acessamos com o useEffect.

### useEffect

Outro Hook muito utilizado é o React.useEffect.
Este Hook serve para realizarmos alguma atividade depois que o componente renderizou ou atualizou.
Ele recebe como parametro uma função onde dentro dela é realizado o comportamente que queremos que aconteça após a renderização.

```jsx
function App() {
  const [name, setName] = React.useState("Hello")

  useEffect(() => {
    console.log('Renderizou')
  });

  return (
    <div>
      <h1>{name}</h1>
      <input onChange={(evt) => setName(evt.target.value)}>
    </div>
  );
}
```

Para realizarmos uma ação após o componente ser destruido ou desmontado somente retornamos uma função dentro do useEffect com esta finalidade.

```js
useEffect(() => {
  console.log("Renderizou");

  return () => {
    console.log("Componente desmontado");
  };
});
```

Esta função será chamada assim que o componente for retirado do DOM, ela é utilizado para terminar uma conexão de web socket com API, para fazer log, ou qualquer outra informação.

Por padrão o useEffect roda logo depois da primeira renderização e sempre após o componente atualizar, mas este último comportamente pode ser alterado com o segundo parametro passado para o useEffect.

O segundo parametro como array vazio `[]`, diz ao React que este efeito so deve rodar duas vezes, na montagem do componente e na desmontagem.

```js
useEffect(() => {
  console.log("Renderizou");

  return () => {
    console.log("Componente desmontado");
  };
}, []);
```

Ou podemos passar para este array a variavel ou variaveis que queremos escutar, caso ela atualize o useEffect roda novamente.
Neste exemplo quando name ou loading atualizarem o useEffect roda novamente.

```js
useEffect(() => {
  console.log("Atualizou");
}, [name, loading]);
```

## Eventos

Os eventos no React são parecidos com o do HTML, eles são passados para as tags com uma função atrelada a ele e ao ocorrerem lançam um objeto com os dados do evento.
Os eventos mais comuns utilizados são:

- onChange
- onSubmit
- onClick

Geralmente após um evento ocorrer chamamos uma função para atualizar o estado da aplicação.

```jsx
function App() {
  const [name, setName] = React.useState("Henrique");

  return (
    <div>
      <h1>{name}</h1>
      <input onChange={(event) => setName(event.target.value)}>
    </div>
  );
}
```

### Exemplos

- Contador
- Cronometro
- Input controlado (usuario digita no input e ele atualiza o valor na tela)
- Form controlado (Login do usuario) - ele preenche os dados do login e eles são mostrados na tela logado
- Exemplo passando state e callback como props (Componente pai possui o state e handleState e chama dois filhos passando o state e calback como props)
- Exemplo com os lifecycles, didMount e willUnmount (pode ser utilizado um eventListener nos dois, um exemplo seria ouvir o evento keydown e passar um handle para alterar o state)
- Otimizando o componente com o shouldComponentUpdate (exemplo seria atualizar somente quando o valor é par)

## Style

Estilos em React podem ser feitos atraves de classes ou id css assim como no HTML, mas os estilos inline são diferentes.
Como o JSX é Javascript os estilos devem ser passados como um objeto javascript para a propriedade style

```jsx
<div style={{ color: "red", fontSize: "12px" }}>Hello my friend</div>
```

Podemos criar uma variavvel com os estilos, assim o codigo fica mais organizado

```jsx
const styles = { color: 'red', fontSize: '12px' }
<div style={styles}>Hello my friend</div>
```

## Condicionais

Podemos usar if e else para retornar um ou outro componente dentro do método render

```jsx
if (this.state.isTrue) {
  return <div>Hello my friend</div>;
} else {
  return <div>Hello</div>;
}
```

Podemos utilizar o `&&` tambem como condição

```jsx
  render() {
    // change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
```

Mas o mais comum é a utilização de ternários como condição

```jsx
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        {
          this.state.userAge == '' ? buttonOne : (
            this.state.userAge >= 18 ? buttonTwo : buttonThree
          )
        }
      </div>
    );
  }
```

As condicionais são usadas para gerarmos diferentes tipos de estilos, pois podemos alterar o estilo inlino dependendo da condição

```jsx
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line
    if(this.state.input.length > 15) { inputStyle.border = "3px solid red";}
    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
```

### Renderizando dinamicamente com map

Quando temos um numero indeterminado de elementos para renderizar como componente o metodo map é utilizado.

```jsx
const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue"
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(el => {
    return <li key={el}>{el}</li>;
  }); // change code here
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}
```

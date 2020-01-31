# Cadastro de produto com React

Descrição do desenvolvimento da tela de cadastro de produto com React

## Instalação e configuração inicial

Para desenvolver este projeto iremos utilizar o Bootstrap, o React, o ReactDOM e o Babel.

Para iniciarmos o projeto precisamos criar dois arquivos: o index.html e o index.js
Dentro do arquivo index.html criamos um template HTML basico com a importação do CDN do Bootstrap, do React, do ReactDOM e do Babel.

Bootstrap: https://www.bootstrapcdn.com/
React e ReactDOM: https://reactjs.org/docs/cdn-links.html
Babel: https://cdnjs.com/libraries/babel-standalone

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Cadastro produto</title>
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div id="app"></div>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"
      integrity="sha256-FiZMk1zgTeujzf/+vomWZGZ9r00+xnGvOgXoj0Jo1jA="
      crossorigin="anonymous"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
  </body>
</html>
```

Para testar o setup inicial criamos um tag script com o type `text/babel` e escrevemos nosso codigo usando React dentro dela.
Esta tag script deve estar necessariamente o ultimo scrip da pagina para funcionar

```html
<script type="text/babel">
  function App() {
    return "Hello World";
  }

  ReactDOM.render(<App />, document.querySelector("#app"));
</script>
```

Para o desenvolvimento da aplicação vamos modificar este script para que importe um arquivo JS e dentro deste arquivo vamos escrever nosso código.

```html
<script type="text/babel" src="index.js"></script>
```

## Criando o container form

```jsx
function App() {
  return (
    <main className="container">
      <section className="mt-4">
        <h1>Insira um produto</h1>
        <form id="form-produto">
          <div className="form-group">
            <label htmlFor="produto">Produto</label>
            <input
              className="form-control"
              type="text"
              name="produto"
              id="produto"
            />
          </div>
          <div className="form-group">
            <label htmlFor="valor">Valor</label>
            <input
              className="form-control"
              type="number"
              name="valor"
              id="valor"
            />
          </div>
          <button className="btn btn-info" type="submit">
            Cadastrar
          </button>
        </form>
      </section>
    </main>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

## Criando o container table

Inserimos este código exatamente depois do fechamento da tag section do container form e antes da main

```jsx
<section class="mt-4">
  <h1>Produtos cadastrados</h1>
  <button class="btn btn-danger" id="deletar-produtos" type="submit">
    Deletar todos os produtos
  </button>
  <table class="table" id="produtos">
    <thead>
      <th>Produto</th>
      <th>Valor</th>
    </thead>
    <tbody></tbody>
  </table>
</section>
```

## Reorganizando o código

O organização do código se faz em separar o código do form numa função separada e o código da table em outra função
e usar estes novos containers dentro da nossa App.

```jsx
function FormProduto() {
  return (
    <section className="mt-4">
      <h1>Insira um produto</h1>
      <form id="form-produto">
        <div className="form-group">
          <label htmlFor="produto">Produto</label>
          <input
            className="form-control"
            type="text"
            name="produto"
            id="produto"
          />
        </div>
        <div className="form-group">
          <label htmlFor="valor">Valor</label>
          <input
            className="form-control"
            type="number"
            name="valor"
            id="valor"
          />
        </div>
        <button className="btn btn-info" type="submit">
          Cadastrar
        </button>
      </form>
    </section>
  );
}

function TableProdutos() {
  return (
    <section className="mt-4">
      <h1>Produtos cadastrados</h1>
      <button className="btn btn-danger" id="deletar-produtos" type="submit">
        Deletar todos os produtos
      </button>
      <table className="table" id="produtos">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  );
}

function App() {
  return (
    <main className="container">
      <FormProduto />
      <TableProdutos />
    </main>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

## Criando componentes

Componentizar é a forma mais fácil para reaproveitar código. Um componente é basicamente uma função que retorna um código JSX.

### Componentes simples

Os componentes simples são funções que retornam elementos HTML simples

```jsx
function Title() {
  return <h1>Titulo da página</h1>;
}
```

Mas como se tratam de funções podemos passar parametros para eles, estes parametros que passamos para as funções são chamados de `props` no React. Uma prop é um objeto que armazena as propriedades que são passadas pro componente.

```jsx
function Title(props) {
  return <h1>{props.text}</h1>;
}
```

E para se utilizar este componente passando a prop `text`:

```jsx
function Title() {
  return (
    <div>
      <Text text="Meu título" />
    </div>
  );
}
```

Com isto em mente podemos criar os outros componentes

```jsx
function Title(props) {
  return <h1>{props.text}</h1>;
}

function Button(props) {
  return (
    <button
      className={`btn btn-${props.class}`}
      id={props.id}
      type={props.type}
    >
      {props.title}
    </button>
  );
}

function FormGroup(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        className="form-control"
        type={props.type}
        name={props.name}
        id={props.id}
      />
    </div>
  );
}
```

E reaproveitar nossos componentes no nosso container FormProduto

```jsx
function FormProduto() {
  return (
    <section className="mt-4">
      <Title text={"Insira um produto"} />
      <form id="form-produto">
        <FormGroup
          htmlFor="produto"
          label="Produto"
          type="text"
          name="produto"
          id="produto"
        />
        <FormGroup
          htmlFor="valor"
          label="Valor"
          type="number"
          name="valor"
          id="valor"
        />
        <Button class="info" type="submit" title="Cadastrar" />
      </form>
    </section>
  );
}
```

### Componentes dinâmicos

Componentes dinâmicos são criados com estruturas JS como um array. Nesta aplicação enviamos um array de cabecalhos para o componente e este utiliza o método `map` do array para criar um componente para cada valor da prop headers.
Quando criamos componentes dinâmicos precisamos passar uma `key` para cada elemento, esta key deve ser única entre os elementos criados

```jsx
function Table(props) {
  return (
    <table className="table" id={props.id}>
      <thead>
        <tr>
          {props.headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
```

E assim utilizamos ele no nosso container Table

```jsx
function TableProdutos() {
  return (
    <section className="mt-4">
      <Title text={"Produtos cadastrados"} />
      <Button
        class="danger"
        type="submit"
        title="Deletar todos os produtos"
        id="deletar-produtos"
      />
      <Table id="produtos" headers={["Produto", "Valor"]} />
    </section>
  );
}
```

## Trabalhando com estado - ciclo de vida do React

Para trabalhar com o ciclo de vida do React utilizamos basicamente duas funções da biblioteca: React.useState e React.useEffect.
Estes funções são chamadas de Hooks e eles que nos dão o poder de atualizar a página quando queremos.

### useState

Este Hook é utilizado para definirmos quais valores queremos que o React acompanhe para se ele atualizar a tela deve atualizar.
Criamos um estado para o produto e o valor, então queremos que se estas duas variáveis mudarem o React deve atualizar a página.

#### State do formulário

```jsx
const [produto, setProduto] = React.useState("");
const [valor, setValor] = React.useState(0);
```

Criamos duas funções chamadas de handlers, elas basicamente recebem o evento e chamam a função o state para atualizar a página.

```jsx
const handleProduto = event => setProduto(event.target.value);
const handleValor = event => setValor(event.target.value);
```

Agora passamos a variavel do state e o handler para o componente como props.

```jsx
<FormGroup
  htmlFor="produto"
  label="Produto"
  type="text"
  name="produto"
  id="produto"
  value={produto}
  onChange={handleProduto}
/>
```

E recebemos estes valores no componente. Aqui o evento onChange do input é lançado cada vez que o usuário digita algo, este evento chamado nosso handler, que por sua vez, chama o nosso hook para atualizar o state da aplicação. O React recebe estas informações e assim atualiza a página.

```jsx
function FormGroup(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        className="form-control"
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
```

#### State for submit do formulário

Para o submit do form, podemos ouvir o evento de onSubmit do form e colocar um handler nele

```jsx
const handleSubmit = event => {
  event.preventDefault();
  console.log(produto, valor);
  setProduto("");
  setValor(0);
};
```

Com isso nosso container do formulario fica da seguinte maneira

```jsx
function FormProduto() {
  const [produto, setProduto] = React.useState("");
  const [valor, setValor] = React.useState(0);
  const handleProduto = event => setProduto(event.target.value);
  const handleValor = event => setValor(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    console.log(produto, valor);
    setProduto("");
    setValor(0);
  };
  return (
    <section className="mt-4">
      <Title text={"Insira um produto"} />
      <form id="form-produto" onSubmit={handleSubmit}>
        <FormGroup
          htmlFor="produto"
          label="Produto"
          type="text"
          name="produto"
          id="produto"
          value={produto}
          onChange={handleProduto}
        />
        <FormGroup
          htmlFor="valor"
          label="Valor"
          type="number"
          name="valor"
          id="valor"
          value={valor}
          onChange={handleValor}
        />
        <Button class="info" type="submit" title="Cadastrar" />
      </form>
    </section>
  );
}
```

Agora para não perder este produto cadastrado pelo usuario vamos criar um hook de state na App

```jsx
const [produtos, setProdutos] = React.useState();
const handleSubmitProduto = produto => setProdutos([...produtos, produto]);
```

Este handleSubmitProduto sera passado como prop para o Form e no submit dele iremos chamar esta funcao
Iremos passar

```jsx
const handleSubmit = event => {
  event.preventDefault();
  console.log(produto, valor);
  const novoProduto = {
    produto: produto,
    valor: valor
  };
  props.onSubmit(novoProduto);
  setProduto("");
  setValor(0);
};
```

#### State da tabela

Para a tabela produtos iremos passar o state de produtos e dentro dela iremos criar dinamicamente os elementos das linhas da tabela.
Iremos percorrer com o map cada elemento do array de produtos, como cada elemento é um objeto iremos pegar somente os valores do objeto e transforma-los em um array com o Object.values, e assim para cada elemento deste array de valores iremos criar um td

```jsx
function Table(props) {
  return (
    <table className="table" id={props.id}>
      <thead>
        <tr>
          {props.headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map(value => (
              <td key={value + index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

#### Botão deletar elemento da tabela

Para deletar um botão de dentro da tabela primeiro vamos renderizar um botão para cada linha inserida.
Neste exemplo renderizamos nosso componente Button e passamos para ele a prop onClick. Este onClick ira receber uma função e esta função ira receber como parametro o index da linha que ela renderizou.

```js
<tbody>
  {props.rows.map((row, index) => (
    <tr key={index}>
      {Object.values(row).map(value => (
        <td key={value + index}>{value}</td>
      ))}
      <td>
        <Button
          class="danger"
          title="Deletar"
          id={index}
          onClick={() => props.onClickRow(index)}
        />
      </td>
    </tr>
  ))}
</tbody>
```

Ja nosso TableProdutos e nossa App ficou desta maneira
Na TableProdutos passamos como props para a Table os produtos e a função de deletar o produto.
Na App passamos passamos as props para a TableProdutos e criamos o handleDeleteProduto, que é uma função que recebe o index da linha do produto, passado como parametro pela Table e faz um filtro no state de produtos para deletar este index.

```jsx
function TableProdutos(props) {
  return (
    <section className="mt-4">
      <Title text={"Produtos cadastrados"} />
      <Button
        class="danger"
        type="submit"
        title="Deletar todos os produtos"
        id="deletar-produtos"
      />
      <Table
        id="produtos"
        headers={["Produto", "Valor"]}
        rows={props.produtos}
        onClickRow={props.onDeleteProduto}
      />
    </section>
  );
}

function App() {
  const [produtos, setProdutos] = React.useState([]);
  const handleSubmitProduto = produto => setProdutos([...produtos, produto]);
  const handleDeleteProduto = index =>
    setProdutos(produtos.filter((_, prodIndex) => prodIndex !== index));
  return (
    <main className="container">
      <FormProduto onSubmit={handleSubmitProduto} />
      <TableProdutos
        produtos={produtos}
        onDeleteProduto={handleDeleteProduto}
      />
    </main>
  );
}
```

#### Botão deletar todos os elementos da tabela

O botão para deletar todos os produtos é uma função que definimos na App e passamos para a TableProdutos que passa para o Button como props. Esta função define o state de produtos como array vazio, assim deletando todos os produtos.

```jsx
const handleDeleteProdutos = () => setProdutos([]);
```

### useEffect

O useEffect é um Hook utilizado para fazermos coisas depois que o React atualizou o DOM. Nele que geralmente fazemos chamados a API, ou outra coisa assincrona.

#### chamando a api de produtos quando a tela inicia

Iremos usar o useEffect para fazer a chamada da api de produtos logo que o componente renderiza pela primeira vez
Este é o código da api, é um função que possui um tempo para responder um objeto mock de produtos.

```js
const apiProdutos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { produto: "carro", valor: 30000 },
        { produto: "bicicleta", valor: 500 },
        { produto: "moto", valor: 8000 }
      ]);
    }, 2000);
  });
};
```

E dentro da nossa App fazemos a chamada desta api. Como a api demora 2 segundos para responder temos que deixar esta chamada dentro do useEffect, porque assim o usuario pode ver a tela renderizada e quando a api responder o React atualiza ela, pois chamamos o Hook de state com o valor da api

```jsx
React.useEffect(() => {
  apiProdutos().then(response => setProdutos(response));
}, []);
```

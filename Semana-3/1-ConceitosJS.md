# Conceitos bases de Javascript

Javascript é uma linguagem de programação de alto nível suportada por todos os navegadores modernos.

## es6

O ECMAScript é a versão padronizada do JavaScript com o objetivo de unificar as especificações e features da linguagem.
Toda a maioria dos browsers e JavaScript-runtimes (NodeJs) seguem esta especificação.

A primeira versão (es1) do ECMAScript foi lançada em 1997
A segunda (es2) e terceira (es3) versões foram lançadas em 1998.
Após este periodo tivemos um grande momento de estagnação e a quarta versão sendo abandonada por motivos políticos
em relação a complexidade da linguagem.
A quinta versão (es5) foi lançada em 2009.
Em 2015 foi lançada a sexta versão (es6) e com ela veio uma nova especificação de versionamento também, agora
todo o ano uma nova versão seria lançada, com isso a versão es6 passou a se chamar ECMAScript2015 e a próxima versão
de 2016 é a ECMAScript2016 e assim por diante.

A versão 2015 foi a que trouxe features mais poderosas para a linguagem, tais como:

- let and const
- Arrow functions
- Classes
- Modules
- Promises
- Generators

## Comentário

```js
// comentario de uma linha
/*
    comentario de multiplas linhas
*/
```

## Variáveis

Forma de armazenar valores em JS. São case sensitivas.

```js
let variavel = "teste";
let numero = 23;
const variavelImutavel = 24;
variavel = 25;
variavelImutavel = 22; // vai lancar um erro
var outraVariavel = "React"; //var é a forma antiga de declarar variável
```

## Operações Matemáticas

```js
let sum = 10 + 5;
let sub = 10 - 5;
let mult = 10 * 5;
let divide = 10 / 5;
let increment = 1;
increment++;
let decrement = 1;
decrement--;
```

## Template literals

Substitue o uso da concatenação. É a forma de colocar variáveis dentro da string.

```js
let age = 999;
let text = `Ele viveu por ${999} anos`;
```

## spread e rest

O spread permite pegar todos os elementos de uma coleção (exemplo um array)

```js
let animals = ["dog", "cat", "bird"];
let [firstAnimal, ...others] = animals;
console.log(`Este é um ${firstAnimal}`);
console.log(others);
```

O rest permite agrupar um numero indefinido de parametros de uma função em uma variavel

```js
function printNames(...names) {
  console.log(`Names: ${names}`);
}
printNames("React", "Kroton");
printNames("React", "Kroton", "2020", "JS");
```

## classes

Nova sintaxe para se escrever classes em Javascript

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  pula() {
    console.log("Jump");
  }
}
class Gato extends Animal {
  constructor(name) {
    super(name);
  }

  fala() {
    console.log("Miau");
  }
}
const gato = new Gato("Felix");
gato.pula();
gato.fala();
```

## Arrow functions

Nova forma para escrever funções anonimas. Seu valor `this` é definido à partir da função onde ela foi definida.

Por exemplo neste caso, onde criamos uma funcao dentro da função e estamos pedindo a idade, porem ao executar o this nao vai existir

```js
function Person() {
  this.age = 0;

  setTimeout(function growUp() {
    this.age++;
    console.log(`Minha idade nova ${this.age}`);
  }, 1000);
}

let p = new Person();
```

Para corrigir este problema utilizamos arrow funtions

```js
function Person() {
  this.age = 0;

  setTimeout(() => {
    this.age++;
    console.log(`Minha idade nova ${this.age}`);
  }, 1000);
}

let p = new Person();
```

## map, reduce e filter

São métodos de array que retornam ou um novo valor ou array.

map: cria um novo array a partir de um existente, aplicando uma função a cada elemento

```js
let users = ["user 1", "user 2", "user 3"];
let newUsers = users.map(user => {
  return `${user} logado`;
});
```

filter: cria um novo array com todos elementos que passam por um teste implementado por uma função fornecida

```js
let users = ["user 1", "user 2", "user 3"];
let newUsers = users.filter(user => {
  return user === "user 2";
});
```

reduce: executa uma função redutora em cada elemento do array, resultando ao final um valor único

```js
let users = ["user 1", "user 2", "user 3"];
let newUsers = users.reduce((newUsers, user, index) => {
  return {
    ...newUsers,
    [index]: user
  };
}, {});
```

## Promises

Um objeto que representa uma eventual conclusão ou falha de uma operação assincrona. Funciona como um proxy(representante)

```js
function api(name, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`usuario ${name} esta logado`);
    }, 2000);
  });
}

async function action() {
  api("react", "kroton").then(response => console.log(response));
}

action();
```

## async e await

```js
function api(name, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`usuario ${name} esta logado`);
    }, 2000);
  });
}

async function action() {
  let response = await api("react", "kroton");
  console.log(response);
}

action();
```

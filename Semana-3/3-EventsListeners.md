# Event listeners

O método addEventListener() atribui um handler de evento uma o elemento especifico.
Ele atribui atribui o evento sem sobrescrever os handlers de evento existentes.
Voce pode adicionar muitos handlers para um elemento.
Voce pode adicionar muitos handlers do mesmo tipo para um elemento, ex dois eventos "click".
Voce pode adicionar listeners para qualquer objeto do dom, mesmo o objeto window.
Voce pode remover um listener usando o método removeEventListener()

```js
function log() {
  console.log("log");
}
document.addEventListener("mousemove", log);
document.removeEventListener("mousemove", log);
```

## Calculadora

```js
const form = document.querySelector("#form-calc");
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const result = document.querySelector("#result");

function eventListeners() {
  form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("TTEs");

    const sum = parseInt(number1.value) + parseInt(number2.value);
    result.textContent = sum;
  });
}

function apagar(e) {
  console.log("Apagar");
  number1.value = "";
  number2.value = "";
}

document.addEventListener("DOMContentLoaded", function() {
  eventListeners();
});
```

## Cadastro de produtos

Primeira parte

```js
const form = document.querySelector("#form-produto");
const produto = document.querySelector("#produto");
const valor = document.querySelector("#valor");
const produtos = document.querySelector("#produtos");

function eventListeners() {
  form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("Submit form");
    addProdutos();
  });
}

function addProdutos() {
  const row = document.createElement("tr");
  const novoProduto = createTd(produto.value);
  const novoValor = createTd(valor.value);

  row.appendChild(novoProduto);
  row.appendChild(novoValor);
  produtos.lastElementChild.appendChild(row);
}

function createTd(value) {
  const td = document.createElement("td");
  td.textContent = value;
  return td;
}

document.addEventListener("DOMContentLoaded", function() {
  eventListeners();
});
```

Segunda parte

```js
const form = document.querySelector("#form-produto");
const produto = document.querySelector("#produto");
const valor = document.querySelector("#valor");
const produtos = document.querySelector("#produtos");

function eventListeners() {
  form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("Submit form");
    addProdutos();
  });
}

function deleteProduto(event) {
  console.log(event.target);
  const td = event.target.parentElement;
  const row = td.parentElement;
  row.remove();
}

function addProdutos() {
  const row = document.createElement("tr");
  const novoProduto = createTd(produto.value);
  const novoValor = createTd(valor.value);
  const deleteBtn = createTd(createBtn("Deletar", deleteProduto, "btn-danger"));

  row.appendChild(novoProduto);
  row.appendChild(novoValor);
  row.appendChild(deleteBtn);
  produtos.lastElementChild.appendChild(row);
}

function createTd(value) {
  const td = document.createElement("td");

  if (typeof value === "string") {
    td.textContent = value;
  } else {
    td.appendChild(value);
  }
  return td;
}

function createBtn(text, handler, btnClass) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.classList.add("btn", btnClass);
  btn.onclick = handler;
  return btn;
}

document.addEventListener("DOMContentLoaded", function() {
  eventListeners();
});
```

Terceira parte

```js
btnDeletar.addEventListener("click", () => {
  console.log("Deletar todos os produtos");
  deleteProdutos();
});

function deleteProdutos() {
  produtos.lastElementChild.innerHTML = "";
}
```

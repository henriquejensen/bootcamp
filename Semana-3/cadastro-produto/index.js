const form = document.querySelector("#form-produto");
const produto = document.querySelector("#produto");
const valor = document.querySelector("#valor");
const produtos = document.querySelector("#produtos");
const btnDeletar = document.querySelector("#deletar-produtos");

function eventListeners() {
  form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("Submit form");
    addProdutos();
  });

  btnDeletar.addEventListener("click", () => {
    console.log("Deletar todos os produtos");
    deleteProdutos();
  });
}

function deleteProduto(event) {
  console.log(event.target);
  const td = event.target.parentElement;
  const row = td.parentElement;
  row.remove();
}

function deleteProdutos() {
  produtos.lastElementChild.innerHTML = "";
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

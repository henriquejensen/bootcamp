const $ = document.querySelector.bind(document);
const formProduto = $("#form-produto");
const inputProduto = $("#produto");
const inputValor = $("#valor");
const tableProdutos = $("#table");

function handleSubmitForm(event) {
  event.preventDefault(); //evita que a pagina recarregue
  const data = getData();
  createDataTable(data);
}

function handleDelete(event) {
  console.log(event.target);
  event.target.parentElement.parentElement.remove();
}

function deleteProdutos() {
  tableProdutos.lastElementChild.innerHTML = "";
}

function getData() {
  const produto = inputProduto.value;
  const valor = inputValor.value;
  inputProduto.value = "";
  inputValor.value = "";
  const produtoCadastrado = {
    nome: produto,
    valor: valor
  };
  return produtoCadastrado;
}

function createDataTable(produto) {
  const tableRow = createTableRow();
  const tableDataProduto = createTableData(produto.nome);
  const tableDataValor = createTableData(`R$ ${produto.valor}`);
  const button = createButton("Deletar", handleDelete);
  const tableButton = createTableData(button);
  tableRow.appendChild(tableDataProduto);
  tableRow.appendChild(tableDataValor);
  tableRow.appendChild(tableButton);
  tableProdutos.children[1].appendChild(tableRow);
}

function createTableRow() {
  const row = document.createElement("tr");
  return row;
}

function createTableData(valor) {
  const data = document.createElement("td");

  if (typeof valor === "string") {
    data.textContent = valor;
  } else {
    data.appendChild(valor);
  }

  return data;
}

function createButton(text, callback) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("btn", "btn-danger");
  button.onclick = callback;

  return button;
}

formProduto.addEventListener("submit", handleSubmitForm);

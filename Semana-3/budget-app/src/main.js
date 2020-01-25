const $ = document.querySelector.bind(document);
let timer = null;

class UI {
  constructor() {
    this.budgetFeedback = $("#budget-feedback");
    this.expenseFeedback = $("#expense-feedback");

    //Budget Form
    this.budgetForm = $("#budget-form");
    this.budgetInput = $("#budget-input");

    //Values
    this.budgetValue = $("#budget-value");
    this.expenseValue = $("#expense-value");
    this.balanceValue = $("#balance-value");

    //Expense Form
    this.expenseForm = $("#expense-form");
    this.expenseInput = $("#expense-input");
    this.amountInput = $("#amount-input");

    //Expense table
    this.expenseTable = $("#expense-table");

    this.itemList = [];
    this.itemId = 0;
  }

  submitBudgetForm() {
    clearTimeout(timer);

    const value = this.budgetInput.value;

    if (value === "" || value < 0) {
      this.budgetFeedback.classList.remove("alert-success");
      this.budgetFeedback.classList.add("alert-danger", "show");
      this.budgetFeedback.innerHTML =
        "<span>Valor não pode ser vazio ou negativo</span>";

      timer = setTimeout(() => {
        this.budgetFeedback.classList.add("fade");
        this.budgetFeedback.classList.remove("alert-danger");
        this.budgetFeedback.innerHTML = "";
      }, 3000);

      return;
    }

    this.budgetFeedback.classList.remove("alert-danger");
    this.budgetFeedback.classList.add("alert-success", "show");
    this.budgetFeedback.innerHTML = "<span>Valor adicionado com sucesso</span>";
    this.budgetInput.value = "";
    this.showBalance(value);

    timer = setTimeout(() => {
      this.budgetFeedback.classList.add("fade");
      this.budgetFeedback.classList.remove("alert-success");
      this.budgetFeedback.innerHTML = "";
    }, 3000);
  }

  submitExpenseForm() {
    const expenseValue = this.expenseInput.value;
    const amountValue = this.amountInput.value;

    if (expenseValue === "" || amountValue === "" || amountValue < 0) {
      this.expenseFeedback.classList.remove("alert-success");
      this.expenseFeedback.classList.add("alert-danger", "show");
      this.expenseFeedback.innerHTML =
        "<span>Valor não pode ser vazio ou negativo</span>";

      timer = setTimeout(() => {
        this.expenseFeedback.classList.add("fade");
        this.expenseFeedback.classList.remove("alert-danger");
        this.expenseFeedback.innerHTML = "";
      }, 3000);

      return;
    }

    this.expenseFeedback.classList.remove("alert-danger");
    this.expenseFeedback.classList.add("alert-success", "show");
    this.expenseFeedback.innerHTML =
      "<span>Valor adicionado com sucesso</span>";
    this.expenseInput.value = "";
    this.amountInput.value = "";

    const expense = {
      id: this.itemId,
      expense: expenseValue,
      amount: parseInt(amountValue)
    };
    this.itemId++;
    this.itemList.push(expense);
    this.addExpense();

    timer = setTimeout(() => {
      this.expenseFeedback.classList.add("fade");
      this.expenseFeedback.classList.remove("alert-success");
      this.expenseFeedback.innerHTML = "";
    }, 3000);
  }

  addExpense() {
    this.expenseTable.lastElementChild.innerHTML = `
      ${this.itemList
        .map(
          expense => `
          
          <tr onclick="hello()">
              <td>${expense.expense}</td>
              <td>${expense.amount}</td>
          </tr>
          
      `
        )
        .join("")}                
    `;
  }

  showBalance(budgetValue) {
    const expense = this.totalExpense();
    const total = budgetValue - expense;
    this.budgetValue.textContent = `$ ${budgetValue}`;

    if (total < 0) {
      this.balanceValue.classList.remove("text-success", "text-secondary");
      this.balanceValue.classList.add("text-danger");
      this.balanceValue.textContent = `$ ${total}`;
      return;
    }

    if (total > 0) {
      this.balanceValue.classList.remove("text-danger", "text-secondary");
      this.balanceValue.classList.add("text-success");
      this.balanceValue.textContent = `$ ${total}`;
      return;
    }

    this.balanceValue.classList.remove("text-success", "text-danger");
    this.balanceValue.classList.add("text-secondary");
    this.balanceValue.textContent = `$ ${total}`;
  }

  totalExpense() {
    let total = this.itemList.reduce((count, item) => count + item.amount, 0);
    this.expenseValue.innerHTML = `$ ${total}`;
    return total;
  }
}

function eventListeners() {
  const budgetForm = $("#budget-form");
  const expenseForm = $("#expense-form");
  const expenseTable = $("#expense-table");
  const ui = new UI();

  budgetForm.addEventListener("submit", event => {
    event.preventDefault();
    console.log("submit budget");
    ui.submitBudgetForm();
  });

  expenseForm.addEventListener("submit", event => {
    event.preventDefault();
    console.log("submit expense");
    ui.submitExpenseForm();
  });
}

function hello(params) {
  console.log("Hello");
}

document.addEventListener("DOMContentLoaded", function() {
  // Your code to run since DOM is loaded and ready
  console.log("document loaded");
  eventListeners();
});

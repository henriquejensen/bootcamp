const $ = document.querySelector;

class UI {
  constructor() {
    this.budgetFeedback = $("budget-feedback");
    this.expenseFeedback = $("expense-feedback");

    //Budget Form
    this.budgetForm = $("budget-form");
    this.budgetInput = $("budget-input");

    //Values
    this.budgetValue = $("budget-value");
    this.expenseValue = $("expense-value");
    this.balanceValue = $("balance-value");

    //Expense Form
    this.expenseForm = $("expense-form");
    this.expenseInput = $("expense-input");
    this.amountInput = $("amount-input");

    //Expense table
    this.expenseTable = $("expense-table");

    this.itemList = [];
    this.itemId = 0;
  }
}

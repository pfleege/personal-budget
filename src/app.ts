import Income from "./modules/income.js";
import Expense from "./modules/expense.js";

let salaryFebruary = new Income("February salary", 3000, "2021-02-28");
let salaryMarch = new Income("March salary", 3000, "2021-03-31");
let rentFebruary = new Expense("February rent", 900, "2021-02-28");
let groceryFebruary = new Expense("February grocery", 200, "2021-02-28");
let rentMarch = new Expense("March rent", 900, "2021-03-31");
let groceryMarch = new Expense("March grocery", 130, "2021-03-31");

let incomes = 0;
incomes += salaryFebruary.amount;
incomes += salaryMarch.amount;

let expenses = 0;
expenses += rentFebruary.amount;
expenses += groceryFebruary.amount;
expenses += rentMarch.amount;
expenses += groceryMarch.amount;

console.log(`Net budget status - March: ${incomes - expenses}`);

let incomeData = [];
let expenseData = [];
let businessIncomeData = [];
let businessExpenseData = [];

// Personal Finance Tracker
document.getElementById('incomeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('incomeAmount').value);
    const description = document.getElementById('incomeDescription').value;
    incomeData.push({ amount, description });
    document.getElementById('incomeAmount').value = '';
    document.getElementById('incomeDescription').value = '';
    displayIncome();
});

document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const description = document.getElementById('expenseDescription').value;
    expenseData.push({ amount, description });
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseDescription').value = '';
    displayExpenses();
});

function displayIncome() {
    const incomeList = document.getElementById('incomeList');
    incomeList.innerHTML = '';
    incomeData.forEach((income) => {
        incomeList.innerHTML += `<p>${income.description}: $${income.amount}</p>`;
    });
}

function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    expenseData.forEach((expense) => {
        expenseList.innerHTML += `<p>${expense.description}: $${expense.amount}</p>`;
    });
}

// Business Finance Tracker
document.getElementById('businessIncomeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('businessIncomeAmount').value);
    const description = document.getElementById('businessIncomeDescription').value;
    businessIncomeData.push({ amount, description });
    document.getElementById('businessIncomeAmount').value = '';
    document.getElementById('businessIncomeDescription').value = '';
    displayBusinessIncome();
});

document.getElementById('businessExpenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('businessExpenseAmount').value);
    const description = document.getElementById('businessExpenseDescription').value;
    businessExpenseData.push({ amount, description });
    document.getElementById('businessExpenseAmount').value = '';
    document.getElementById('businessExpenseDescription').value = '';
    displayBusinessExpenses();
});

function displayBusinessIncome() {
    const businessIncomeList = document.getElementById('businessIncomeList');
    businessIncomeList.innerHTML = '';
    businessIncomeData.forEach((income) => {
        businessIncomeList.innerHTML += `<p>${income.description}: $${income.amount}</p>`;
    });
}

function displayBusinessExpenses() {
    const businessExpenseList = document.getElementById('businessExpenseList');
    businessExpenseList.innerHTML = '';
    businessExpenseData.forEach((expense) => {
        businessExpenseList.innerHTML += `<p>${expense.description}: $${expense.amount}</p>`;
    });
}

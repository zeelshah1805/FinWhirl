const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

const incomeData = []; // Array to store income records
const expenseData = []; // Array to store expense records

app.post('/api/income', (req, res) => {
    const { amount, description } = req.body;
    incomeData.push({ amount, description });
    res.status(201).json({ message: 'Income record added', data: incomeData });
});

app.get('/api/income', (req, res) => {
    res.json({ message: 'Income tracking endpoint', data: incomeData });
});

app.post('/api/expense', (req, res) => {
    const { amount, description } = req.body;
    expenseData.push({ amount, description });
    res.status(201).json({ message: 'Expense record added', data: expenseData });
});

app.get('/api/expense', (req, res) => {
    res.json({ message: 'Expense tracking endpoint', data: expenseData });
});

app.get('/api/balance', (req, res) => {
    const totalIncome = incomeData.reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpense = expenseData.reduce((acc, curr) => acc + curr.amount, 0);
    const balanceSheet = { totalIncome, totalExpense };

    res.json({ message: 'Balance sheet generated', data: balanceSheet });
});

app.get('/api/suggestions', (req, res) => {
    const suggestions = [
        { suggestion: 'Consider investing in index funds.' },
        { suggestion: 'Review your monthly subscriptions.' },
        { suggestion: 'Set aside 20% of your income for savings.' }
    ];

    res.json({ message: 'AI suggestions generated', data: suggestions });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

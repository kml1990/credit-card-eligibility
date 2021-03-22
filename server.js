'use strict';

const app = require('express')();
const customers = require('./src/data/customers.json');
const creditCards = require('./src/data/credit_cards.json');

app.get('/customers', (req, res) => {
    res.status(200).json(customers);
});

app.get('/credit-cards', (req, res) => {
    return res.status(200).json(creditCards);
});

app.listen(5000, () => {
  process.stdout.write('Server is available on http://localhost:5000/\n');
});

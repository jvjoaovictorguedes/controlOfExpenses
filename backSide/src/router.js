const express = require('express');
const expensesController = require('./controllers/expensesController');
const expensesMiddlewares = require('./middlewares/expensesMiddlewares');

const router = express.Router();


router.get('/expenses', expensesController.getAll);
router.get('/sumExpenses', expensesController.sumAll);
router.post('/createExpenses', expensesMiddlewares.validateBody,  expensesController.createExpense);
router.delete('/deleteExpenses/:id', expensesController.deleteExpense);
router.put('/updateExpenses/:id', expensesMiddlewares.validateBody, expensesController.updateExpense);

module.exports = router;
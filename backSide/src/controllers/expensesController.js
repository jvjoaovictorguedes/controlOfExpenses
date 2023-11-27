const expensesModel = require('../models/expensesModel');

const getAll = async (_req, res) => {
  try {
    const get = await expensesModel.getAll();
    return res.status(200).json(get);
  } catch(err) {
    return res.status(500).json({message: 'Que doideira ein!'});
  }
};

const createExpense = async (req, res) => {
  try {
    const createdExpenses = await expensesModel.createExpense(req.body);
    return res.status(201).json(createdExpenses);
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await expensesModel.deleteExpense(id);
    return res.status(204).json();
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await expensesModel.updateExpense(id, req.body);
    return res.status(204).json();
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
};

const sumAll = async (_req, res) => {
  try {
    const sum = await expensesModel.sumExpense();
    return res.status(200).json(sum);
  } catch(err) {
    return res.status(500).json({ message: `Deu o seguinte erro: ${err}` });
  }
};


module.exports = {
  getAll,
  createExpense,
  deleteExpense,
  updateExpense,
  sumAll,

};
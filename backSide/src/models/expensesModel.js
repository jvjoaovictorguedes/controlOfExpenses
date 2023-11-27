const connection = require('./connection');

if (connection) {
  console.log('Connect the BD');
} else {
  console.log('Not possible connect a BD');
}

const getAll = async () => {

  const [expenses] = await connection.execute('SELECT * FROM EXPENSES');
  return expenses;
};

const createExpense = async (cad) => {
  try {
    const { name, value, reason } = cad;

    const query = 'INSERT INTO EXPENSES(name, value, reason, created_at) VALUES(?, ?, ?, ?)';

    const dateUTC = new Date(Date.now()).toUTCString();

    const [createdExpense] = await connection.execute(query, [name, value, reason, dateUTC]);

    return {insertId: createdExpense.insertId};
  } catch(err) {
    return Error({message: 'erro' + err });
  }
};


const deleteExpense = async (id) => {
  try {
    const query = 'DELETE FROM EXPENSES WHERE id = ?';

    const [removedExpense] = await connection.execute(query, [id]);

    return removedExpense;
  } catch(err) {
    return Error({ message: 'error' + err });
  }
};

const updateExpense = async (id, expense) => {
  try {
    const { name, value, reason } = expense;

    const query = 'UPDATE EXPENSES SET name = ?, value = ?, reason = ? WHERE id = ?';

    const [updatedExpense] = await connection.execute(query, [name, value, reason, id]);

    return updatedExpense;
  } catch(err) {
    return Error({ message: 'error' + err });
  }
};

const sumExpense = async () => {
  try {
    const query = 'SELECT SUM(value) AS soma_total FROM EXPENSES';
    const [expenses] = await connection.execute(query);
    return expenses;
  } catch(err) {
    return Error({ message: `error ${err}`});
  }
};

module.exports = {
  getAll,
  createExpense,
  deleteExpense,
  updateExpense,
  sumExpense,

};
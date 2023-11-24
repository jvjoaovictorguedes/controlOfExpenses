const validateBody = (req, res, next) => {
  const { body } = req;

  if (body.name == undefined || body.value == undefined || body.reason == undefined){
    return res.status(400).json({ message: 'The field "name", "value" and "reason" is required.' });
  } 
  if (body.name == '' || body.value == '' || body.reason == '') {
    return res.status(400).json({ message: 'Name, value and reason cannot be empty.' });
  }
  next();
};

module.exports = {
  validateBody
};
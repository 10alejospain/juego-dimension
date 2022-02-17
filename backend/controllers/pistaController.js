const Hint = require('../models/pista');

function getHintById(req, res) {
  Hint.findById(req.params.id, (err, hint) => {
    if (err) {
      return res.status(400).send(`Error geting the hint: ${err.message}`);
    }
    return res.send(hint);
  });
}

function createHint(req, res) {
  const newHint = new Hint(req.body);

  newHint.save((err, hintData) => {
    if (err) return res.status(400).send(`Error adding a hint: ${err.message}`);
    return res.status(200).send(hintData);
  });
}

module.exports = {
    getHintById,
    createHint,
};
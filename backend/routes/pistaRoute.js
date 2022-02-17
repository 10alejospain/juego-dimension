const { Router } = require('express');

const hintController = require('../controllers/pistaController');

const router = Router();


// Get the new hint
router.get('/:id', hintController.getHintById);
// Post new hint
router.post('/add', hintController.createHint);


module.exports = router;
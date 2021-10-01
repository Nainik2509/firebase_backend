var express = require('express');
var router = express.Router();

const { add, getAll, update, deleteE, } = require('./controller')

router.post('/', add)
router.get('/', getAll)
router.put('/:entryId', update)
router.delete('/:entryId', deleteE)    

module.exports = router;

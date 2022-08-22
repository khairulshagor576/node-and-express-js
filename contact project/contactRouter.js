
const router = require('express').Router();
const {
    getAllContacts
}=require('./contactController')

router.get('/',getAllContacts);
router.post('/');
router.get('/:id');
router.put('/:id');
router.delete('/:id');

module.exports= router;
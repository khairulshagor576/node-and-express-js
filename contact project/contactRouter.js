
const router = require('express').Router();
const {
    getAllContacts,
    createContactNew
}=require('./contactController')

router.get('/',getAllContacts);
router.post('/',createContactNew);
router.get('/:id');
router.put('/:id');
router.delete('/:id');

module.exports= router;
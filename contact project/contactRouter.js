
const router = require('express').Router();
const {
    getAllContacts,
    createContactNew,
    getContactsById,
    updateContactById,
    deleteContactById
}=require('./contactController')

router.get('/',getAllContacts);
router.post('/',createContactNew);
router.get('/:id',getContactsById);
router.put('/:id',updateContactById);
router.delete('/:id',deleteContactById);

module.exports= router;
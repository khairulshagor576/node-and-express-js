
const contacts = require('./Contacts');

exports.getAllContacts = (req,res)=>
{
  res.json(contacts.getAllContacts());
}

exports.createContactNew = (req,res)=>{
  let {name,phone,email}=req.body;
  let contact = contacts.createContact({
    name,phone,email
  });
  res.json(contact); 
}

exports.getContactsById=(req,res)=>
{
   let {id} = req.params;
   id = parseInt(id);
   let contact = contacts.getContactsById(id);
   res.json(contact);
}

exports.updateContactById=(req,res)=>{
  let {id} = req.params;
  id= parseInt(id);
  let {name,phone,email} = req.body;
  let contact = contacts.updateContactById(id,{
    name,phone,email
  });
  res.json(contact);
}

exports.deleteContactById=(req,res)=>
{
  let {id} = req.params;
  id = parseInt(id);
  let contact = contacts.deleteContactById(id);
  res.json(contact);
  
}
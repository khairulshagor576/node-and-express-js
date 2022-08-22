
class Contacts{
    constructor() {
        this.Contacts =[];
    }

    getAllContacts(){
        return this.Contacts;
    }

    getContactsById(id){
         return this.Contacts.find(contact =>contact.id == id);
    }

    createContact(contact){
       contact.id=this.Contacts.length+1;
       this.Contacts.push(contact);
       return contact;
    }

    updateContactById(id,updateContact){
       let index = this.Contacts.findIndex(contact=>contact.id==id);

       this.Contacts[index].name = updateContact.name || this.Contacts[index].name;
       this.Contacts[index].phone = updateContact.phone || this.Contacts[index].phone;
       this.Contacts[index].email = updateContact.email || this.Contacts[index].email;

       return this.Contacts[index];
    }

    deleteContactById(id){
     let index = this.Contacts.findIndex(contact=>contact.id==id);
     let delectObj = this.Contacts[index];
     this.Contacts = this.Contacts.filter(contact=>contact.id!=id);
     return delectObj;

    }
}

module.exports = new Contacts();
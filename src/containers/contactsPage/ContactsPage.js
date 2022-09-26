import React, {useState, useEffect} from "react";
import { contactForm } from "../../components/contactForm/ContactForm";
import { TileList, tileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [ name, setName ] = useState("");
 const [ email, setEmail ] = useState("");
 const [ phone, setPhone ] = useState("");
 const [ duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!duplicate){
    addContacts(name, email, phone);
    setName("");
    setEmail("");
    setPhone("");
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(
    () => {
      const nameIsDuplicate = () => {
        const found = contacts.find((contact) => contact.name === name);

        if (found !== undefined) {
          return true;
        } else 
        return false;
      };

      if (nameIsDuplicate()) {
        setDuplicate(true)
      } else 
       setDuplicate(false)
    },
    [name, contacts, duplicate]
   );

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts/>
      </section>
    </div>
  );
};

import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";


function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([]);
 const [appointments, setAppointments] = useState([]);


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointsments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = ( name, phoneNumber, email ) => {
    /* 
    adds a new contact object with that data to the array of contacts
    */
   const newContact = {
    name: name,
    phone: phoneNumber,
    email: email
   };
  
  return setContacts([...contacts, newContact])
  
  };

  const addAppointment = ( title, contact, date, time ) => {
    /* 
    adds a new contact object with that data to the array of contacts
    */
   const newAppointment = {
    title: title,
    contact: contact,
    date: date,
    time: time
   };
  
  return setAppointments([...appointments, newAppointment])
  
  };

  

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={contacts} addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

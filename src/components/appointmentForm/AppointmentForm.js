import React from "react";
import ContactPicker from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactName = ()=>{
    return contacts.map((contact) => contact.name)
  };

  return (
    <form onSubmit={handleSubmit} >
      <label>
        <input value={title} type='text' required placeholder='Appointment Title' onChange={(e)=> setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        <input value={date} type='date' onChange={(e)=> setDate(e.target.value) } required min={getTodayString}/>
      </label>
      <br />
      <label>
        <input value={time} type='time' required onChange={(e)=> setTime(e.target.value)} />
      </label>
      <br />
      <label>
        <ContactPicker contacts={getContactName} name='contact' placeholder='Appointment with' value={contact} onChange={(e)=> setContact(e.target.value)} />
      </label>
      
      <button type='submit' value=' Add Appointment' />

    </form>
  );
};

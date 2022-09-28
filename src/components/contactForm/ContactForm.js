import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
        name="name"
        value={name} 
        type='text' 
        onChange={(e)=> setName(e.target.value) } 
        required placeholder='Contact Name' />
      </label>
      <br/>
      <label>
        <input 
        name="email"
        value={email} 
        type='email' 
        onChange={(e)=> setEmail(e.target.value) } 
        required placeholder='Email address'/>
      </label>
      <br/>
      <label>
        <input 
        name="phone"
        value={phone} 
        pattern={"[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]"} 
        type='tel' 
        onChange={(e)=> setPhone(e.target.value) } 
        required placeholder='Contact Number' />
      </label> 
      <br />
      <button type='submit'>Add contact</button>
    </form>
    
  );
};

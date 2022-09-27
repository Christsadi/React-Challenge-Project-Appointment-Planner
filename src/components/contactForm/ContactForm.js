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
    <form  onSubmit={handleSubmit}>
      <label>
        <input value={name} type='text' onChange={(e)=> setName(e.target.value) } 
        required placeholder='Contact Name' />
      </label>
      <br/>
      <label>
        <input value={email} type='email' onChange={(e)=> setEmail(e.target.value) } 
        required placeholder='Email address'/>
      </label>
      <br/>
      <label>
        <input value={phone} pattern={"[0][1-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"} 
        type='tel' onChange={(e)=> setPhone(e.target.value) } 
        required placeholder='Contact Number' />
      </label> 
      <button type='submit' />
    </form>
    
  );
};

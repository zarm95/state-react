import React from 'react';
import React, { useState } from 'react';
export default function SignupForm() {
  const [name, setName] = useState('name');
  const [email, setemail] = useState('email');

  const display = (e) => {
    e.preventDefault();
    console.log(name + ' ' +email);
  };

  return (
    <form>
      <label htmlFor="name">
        Name :
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="Mary"
        />
      </label>
      <br />
      <label htmlFor="email">
        Email :
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="mary.poppins@disney.fr"
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={display}>
        Submit
      </button>
    </form>
  );
}

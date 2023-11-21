import { useState } from 'react';


export default function Contact() {


const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === 'firstName') {
    setFirstName(inputValue);
  } else if (inputType === 'lastName') {
    setLastName(inputValue);
  } else if (inputType === 'email') {
    setEmail(inputValue);
  } else {
    setMessage(inputValue);
  }
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const info = {
    firstName: firstName,
    lastName: lastName,
    email: email, 
    message: message
  }
  console.log(info);
  setFirstName('');
  setLastName('');
  setEmail('');
  setMessage('');
};

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
        value={firstName}
        name='firstName'
        onChange={handleInputChange}
        type="text"
        placeholder="First Name"
        />
        <input
        value={lastName}
        name='lastName's
        onChange={handleInputChange}
        type="text"
        placeholder="Last Name"
        />
        <input
        value={email}
        name='email'
        onChange={handleInputChange}
        type="email"
        placeholder="Email"
        />
        <textarea
        value={message}
        onChange={handleInputChange}
        type="text"
        name='message'
        placeholder="Enter Message Here"
        id="messageBox"
        ></textarea>
        <button type="submit" className='submit'>Submit</button>
      </form>
    </div>
  );
}
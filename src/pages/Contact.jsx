import { useState } from 'react';
import gps from "../images/Weather.png";


export default function Contact() {


const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === 'name') {
    setName(inputValue);
  } else if (inputType === 'email') {
    setEmail(inputValue);
  } else {
    setMessage(inputValue);
  }
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const info = {
    name: name,
    email: email, 
    message: message
  }
  console.log(info);
  setName('');
  setEmail('');
  setMessage('');
};

  return (
    <div className='contact-page'>
      <form className="form" onSubmit={handleFormSubmit}>
        <h1 className='contact-me'>Contact Me</h1>
        <input
        className='name-box'
        value={name}
        name='name'
        onChange={handleInputChange}
        type="text"
        placeholder="Name:"
        />
        <input
        className='email-box'
        value={email}
        name='email'
        onChange={handleInputChange}
        type="email"
        placeholder="Email:"
        />
        <textarea
        className='message-box'
        value={message}
        onChange={handleInputChange}
        type="text"
        name='message'
        placeholder="Enter Message Here..."
        cols={40}
        rows={5}
        id="messageBox"
        ></textarea>
        <button type="submit" className='submit'>Submit</button>
      </form>
    </div>
  );
}
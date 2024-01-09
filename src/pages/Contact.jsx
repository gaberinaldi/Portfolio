import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gvewz4x', 'template_503qn5t', form.current, 'jeqa-MAI-ifyRpIUT')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <div className='contact-page'>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <h1 className='contact-me'>Contact Me</h1>
        <input
        className='name-box'
        name='user_name'
        type="text"
        placeholder="Name:"
        />
        <input
        className='email-box'
        name='user_email'
        type="email"
        placeholder="Email:"
        />
        <textarea
        className='message-box'
        type="text"
        name='message'
        placeholder="Enter Message Here..."
        cols={40}
        rows={5}
        id="messageBox"
        ></textarea>
        <button type="submit" className='submit' value="send" >Submit</button>
      </form>
    </div>
  );
}

export default Contact;
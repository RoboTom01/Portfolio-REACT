import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_portfolio', form.current, 'kMhe1EqKtYvT6CvIS')
      .then((result) => {
          console.log(result.text);
          alert('Message sent.')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id="email-form" className="ui form">
      <h2>Send me an email!</h2>
      <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name:</label>
      <div className="required field">
        <input type="text" id="name" name='name' required />
      </div>
      <label htmlFor="email">Email:</label>
      <div className="required field">
        <input type="email" id="email" name='email' required />
      </div>
      <label htmlFor="subject">Subject:</label>
      <div className="required field">
        <input type="text" id="subject" name='subject' required />
      </div>
      <label htmlFor="message">Message:</label>
      <div className="required field">
        <textarea id="message" name='message' required />
      </div>
      <button type="submit" value="Send">Send</button>
    </form>
    <Footer />
    </div>
    );
}

export default Contact;
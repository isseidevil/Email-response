import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css'

export const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pl8wxzy', 'template_mzm7cvb', form.current, {
        publicKey: '4GYaqbWlr9c4Lth29',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" /><br />
      <label>Email</label>
      <input type="email" name="user_email" /><br />
      <label>Message</label>
      <textarea name="message" /><br />
      <button type='submit'>Send</button>
    </form>
    </section>
  );
};

export default App
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m4flxn8', 'template_5ffl84c', form.current, 'KXI3WBEms63sohEyA')
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent");
          // Reset the form after successful submission
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send a message");
        },
      );
  };

  return (
    <div className="flex justify-center items-center w-[100%] border-b border-neutral-900 h-[100vh]">
      <div className="pb-4 w-full max-w-md rounded shadow-md">
        <h2 className="mb-20 text-center text-4xl">Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2 font-semibold" htmlFor="">Name</label>
            <input placeholder="Enter your Name" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required type="text" name="user_name" />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2 font-semibold" htmlFor="">Email</label>
            <input placeholder="Enter your Email" className="w-full px-3 py-2 border rounded bg-gray-800 focus:border-blue-500" required type="email" name="user_email" />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2 font-semibold" htmlFor="">Message</label>
            <textarea rows='4' name="message" placeholder="Enter a message" className="w-full h-40 px-3 border rounded bg-gray-800 focus:border-blue-500" required />
          </div>
          <div className="mb-4 flex justify-center items-center">
            <button type="submit" className="border rounded-md p-2 bg-gray-900 hover:bg-gray-950">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts;

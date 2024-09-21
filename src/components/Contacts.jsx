import { motion } from "framer-motion";

import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message');
      }
    } catch (error) {
      setStatus('Error sending message');
    }
  };

  return (
    <div className="flex justify-center items-center w-[100%] border-b border-neutral-900 h-[100vh]">
      <div className="pb-4 w-full max-w-md rounded shadow-md">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial= {{y:-100, opacity:0}}
        transition={{duration:1.5}} 
        className="mb-20 text-center text-4xl">Get in Touch</motion.h2>
        <form onSubmit={handleSubmit}>
          <motion.div
           whileInView={{opacity:1, x:0}}
           initial= {{x:-100, opacity:0}}
           transition={{duration:0.5}}
            className="mb-4">
            <label className="block text-white text-sm mb-2 font-semibold" htmlFor="">Name</label>
            <input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your Name"
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500"
              required
              type="text"
            />
          </motion.div>
          <motion.div 
           whileInView={{opacity:1, x:0}}
           initial= {{x:-100, opacity:0}}
           transition={{duration:0.5}}
           className="mb-4">
            <label className="block text-white text-sm mb-2 font-semibold" htmlFor="">Email</label>
            <input
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your Email"
              className="w-full px-3 py-2 border rounded bg-gray-800 focus:border-blue-500"
              required
              type="email"
            />
          </motion.div>
          <motion.div 
           whileInView={{opacity:1, x:0}}
           initial= {{x:-100, opacity:0}}
           transition={{duration:0.5}}
           className="mb-4">
            <label className="block text-white text-sm mb-2 font-semibold" htmlFor="">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="4"
              placeholder="Enter a message"
              className="w-full h-40 px-3 border rounded bg-gray-800 focus:border-blue-500"
              required
            />
          </motion.div>
          <motion.div
           whileInView={{opacity:1, x:0}}
           initial= {{x:-100, opacity:0}}
           transition={{duration:0.5}}
            className="mb-4 flex justify-center items-center">
            <button type="submit" className="border rounded-md p-2 bg-gray-900 hover:bg-gray-950">
              Send Message
            </button>
          </motion.div>
        </form>
        {status && <p className="text-center mt-4">{status}</p>}
      </div>
    </div>
  );
};

export default Contacts;

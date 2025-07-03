import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const VITE_EMAIL_ID = import.meta.env.VITE_EMAIL_ID;
const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = 'pNKa7x6AE6evisT6m';

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState('');
  const [submit, setSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === 'name' || name === 'email' || name === 'message') {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function clearForm() {
    setFormData({ name: '', email: '', message: '' });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(`${VITE_EMAIL_ID}`, `${VITE_TEMPLATE_ID}`, form.current, {
        publicKey: `${publicKey}`,
      })
      .then(
        () => {
          setMessage('Email sent! Thanks for reaching out. I will get back to you as soon as possible.');
          setSubmitting(false);
          clearForm();
        },
        (error) => {
          setMessage(error.text);
        }
      );
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-4xl md:text-6xl xl:text-7xl text-center pb-10 font-serif font-bold tracking-tight bg-gradient-to-r from-indigo-300 to-indigo-600 inline-block text-transparent bg-clip-text">
        Get in touch:
      </p>
      <div className="border-animation md:w-[50vw] bg-indigo-950/40 shadow-lg p-8 md:p-10 rounded-xl transition-all duration-300 relative overflow-visible">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-[70vw] sm:w-full font-sans font-bold">
          <label htmlFor="name" className="text-indigo-200/90">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-indigo-900/40 rounded-md p-2 mb-8 text-indigo-200"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="email" className="text-indigo-200/90">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-indigo-900/40 rounded-md p-2 mb-8 text-indigo-200"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="message" className="text-indigo-200/90">
            Message:
          </label>
          <textarea
            name="message"
            className="bg-indigo-900/40 rounded-md p-2 mb-8 text-indigo-200"
            value={formData.message}
            onChange={(e) => handleChange(e)}
            required
          />
          <div className="flex gap-4 items-center">
            <button
              type="submit"
              className="bg-indigo-500/70 w-full p-2 rounded-md text-indigo-200 font-extrabold hover:bg-indigo-600/90 outline outline-transparent hover:outline-indigo-300 transition-all duration-300"
              onClick={() => setSubmitting(true)}
            >
              {submit ? 'Sending...' : 'Send'}
            </button>{' '}
            {message ? <p className="text-slate-700 font-bold">{message}</p> : ''}
          </div>
        </form>
      </div>
    </div>
  );
}

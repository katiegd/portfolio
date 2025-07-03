import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const VITE_EMAIL_ID = import.meta.env.VITE_EMAIL_ID;
const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = 'pNKa7x6AE6evisT6m';

export default function Footer() {
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
          setMessage('Email sent!');
          setSubmitting(false);
          clearForm();
        },
        (error) => {
          setMessage(error.text);
        }
      );
  }
  return (
    <div id="contact" className="w-full flex flex-col justify-center items-center p-4 lg:p-8">
      <div className="md:w-[50vw] bg-slate-100 shadow-lg p-10 md:p-20 rounded-xl opacity-0 intersect:opacity-100 delay-300 duration-700 transition intersect-once">
        <p className="text-3xl sm:text-4xl font-serif font-bold tracking-tight pb-4 sm:pb-4 text-slate-700">Get in touch:</p>{' '}
        <div className="">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 w-[70vw] sm:w-full">
            <label htmlFor="name" className="text-slate-700">
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-slate-400 rounded-md p-1"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              required
            />
            <label htmlFor="email" className="text-slate-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-slate-400 rounded-md p-1"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              required
            />
            <label htmlFor="message" className="text-slate-700">
              Message:
            </label>
            <textarea
              name="message"
              className="bg-slate-400 rounded-md p-1"
              value={formData.message}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="flex gap-4 items-center">
              <button
                type="submit"
                className="bg-slate-700 w-fit p-2 rounded-md text-slate-200 font-extrabold hover:bg-slate-700 transition-all duration-300"
                onClick={() => setSubmitting(true)}
              >
                {submit ? 'Sending...' : 'Send'}
              </button>{' '}
              {message ? <p className="text-slate-700 font-bold">{message}</p> : ''}
            </div>
          </form>
        </div>
      </div>
      <div className="pt-32  text-slate-700 flex flex-col gap-2 items-center max-w-5xl w-screen">
        <p>© Katie G. Duryea 2024</p>
        <p>
          Powered by{' '}
          <a href="https://react.dev/" className="font-extrabold text-sky-600 hover:text-sky-300">
            React
          </a>{' '}
          &{' '}
          <a href="https://tailwindcss.com/" className="font-extrabold text-sky-600  hover:text-sky-300">
            Tailwind
          </a>
        </p>
      </div>
    </div>
  );
}

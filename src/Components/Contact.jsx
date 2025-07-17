import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const VITE_EMAIL_ID = import.meta.env.VITE_EMAIL_ID;
const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = "pNKa7x6AE6evisT6m";

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState("");
  const [submit, setSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name" || name === "email" || name === "message") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function clearForm() {
    setFormData({ name: "", email: "", message: "" });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(`${VITE_EMAIL_ID}`, `${VITE_TEMPLATE_ID}`, form.current, {
        publicKey: `${publicKey}`,
      })
      .then(
        () => {
          setMessage("Email sent! Thanks for reaching out. I will get back to you as soon as possible.");
          setSubmitting(false);
          clearForm();
        },
        (error) => {
          setMessage(error.text);
        }
      );
  }
  return (
    <div className=" animate-fade-up w-full flex flex-col justify-center items-center px-4 md:px-0">
      <p className="text-4xl md:text-6xl xl:text-7xl text-center font-serif font-bold tracking-tight bg-gradient-to-r from-indigo-300 to-indigo-600 inline-block text-transparent bg-clip-text">
        Get in touch:
      </p>
      <p className="dark:text-indigo-200/90 text-slate-600 text-center pb-10">
        Want to collaborate on a project? Have a question? Let me know!
      </p>
      <div className="border-animation w-full md:w-[50vw] dark:bg-indigo-950/40 bg-indigo-900/10 shadow-lg p-4 md:p-10 rounded-xl transition-all duration-300 relative overflow-visible backdrop-blur-md">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full font-sans font-bold">
          <label htmlFor="name" className="dark:text-indigo-200/90 text-slate-600">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="dark:bg-indigo-900/40 bg-indigo-900/10 rounded-md p-2 mb-8 dark:text-indigo-200 text-slate-600"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="email" className="dark:text-indigo-200/90 text-slate-600">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="dark:bg-indigo-900/40 bg-indigo-900/10 rounded-md p-2 mb-8 dark:text-indigo-200 text-slate-600"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="message" className="dark:text-indigo-200/90 text-slate-600">
            Message:
          </label>
          <textarea
            name="message"
            className="dark:bg-indigo-900/40 bg-indigo-900/10 rounded-md p-2 mb-8 dark:text-indigo-200 text-slate-600"
            value={formData.message}
            onChange={(e) => handleChange(e)}
            required
          />
          <div className="flex gap-4 items-center flex-col ">
            <button
              type="submit"
              className={`${
                !formData.name || !formData.email || !formData.message
                  ? "opacity-50 bg-indigo-500/70 cursor-not-allowed hover:bg-indigo-500/70 hover:outline-transparent"
                  : "dark:bg-indigo-500/70 bg-indigo-500/70"
              } w-full p-2 rounded-md dark:text-indigo-200 text-slate-100 font-extrabold hover:bg-indigo-600/90 outline outline-transparent hover:outline-indigo-300 transition-all duration-300`}
              onClick={() => setSubmitting(true)}
              disabled={!formData.name || !formData.email || !formData.message}
            >
              {submit ? "Sending..." : "Send"}
            </button>{" "}
            {message && (
              <p className="text-sm text-green-600 dark:text-green-400 text-left dark:bg-green-500/20 bg-green-500/10 p-2 rounded-md px-4 py-2 border border-green-500">
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

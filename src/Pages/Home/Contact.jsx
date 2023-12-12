import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import emailIcon from '../../assets/email.png';
import linkedinIcon from '../../assets/linkedin.png';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const form = useRef();

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!fullName.trim()) {
      errors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Use the form ref to access the form element
    emailjs.sendForm('service_msfrwsu', 'template_4vtu98c', form.current, 'TmmiWDhwDIr6_CE-G')
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          setFullName('');
          setEmail('');
          setMessage('');
      }, (error) => {
          console.log('Failed to send email.', error.text);
      });

  };

  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>

      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src={emailIcon} alt="Email icon" className="icon contact-info email-icon" />
          <p><a href="mailto:jovitaachong@gmail.com">jovitaachong@gmail.com</a></p>
        </div>

        <div className="contact-info-container">
          <img src={linkedinIcon} alt="LinkedIn icon" className="icon contact-info" />
          <p><a href="https://www.linkedin.com/in/jovitachong/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>

      <form className="contact--form--container" onSubmit={sendEmail} ref={form}>
        <div className="contact--container">

          {/* Full Name Field */}
          <label htmlFor="full-name" className="contact--label">
            <span className="text-md">Full Name</span>
            <input
              type="text"
              className="contact--input text-md"
              // name="full-name"
              name="user_name"
              id="full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {errors.fullName && <p className="error-message">{errors.fullName}</p>}
          </label>

          {/* Email Field */}
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              // name="email"
              name="user_email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </label>

          {/* Message Field */}
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              name="message"
              rows="8"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            {errors.message && <p className="error-message">{errors.message}</p>}
          </label>

          <div>
            <button className="btn btn-color-2 project-btn" onClick={sendEmail}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;

// export default function Contact() {
//   return (
//     <section id="Contact" className="contact--section">
//       <div>
//         <p className="sub--title">Get In Touch</p>
//         <h2>Contact Me</h2>
//         <p className="text-lg">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
//         </p>
//       </div>
//       <form className="contact--form--container">
//         <div className="container">
//           <label htmlFor="first-name" className="contact--label">
//             <span className="text-md">First Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="first-name"
//               id="first-name"
//               required
//             />
//           </label>
//           <label htmlFor="last-name" className="contact--label">
//             <span className="text-md">Last Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="last-name"
//               id="last-name"
//               required
//             />
//           </label>
//           <label htmlFor="email" className="contact--label">
//             <span className="text-md">Email</span>
//             <input
//               type="email"
//               className="contact--input text-md"
//               name="email"
//               id="email"
//               required
//             />
//           </label>
//           <label htmlFor="phone-number" className="contact--label">
//             <span className="text-md">phone-number</span>
//             <input
//               type="number"
//               className="contact--input text-md"
//               name="phone-number"
//               id="phone-number"
//               required
//             />
//           </label>
//         </div>
//         <label htmlFor="choode-topic" className="contact--label">
//           <span className="text-md">Choose a topic</span>
//           <select id="choose-topic" className="contact--input text-md">
//             <option>Select One...</option>
//             <option>Item 1</option>
//             <option>Item 2</option>
//             <option>Item 3</option>
//           </select>
//         </label>
//         <label htmlFor="message" className="contact--label">
//           <span className="text-md">Message</span>
//           <textarea
//             className="contact--input text-md"
//             id="message"
//             rows="8"
//             placeholder="Type your message..."
//           />
//         </label>
//         <label htmlFor="checkboc" className="checkbox--label">
//           <input type="checkbox" required name="checkbox" id="checkbox" />
//           <span className="text-sm">I accept the terms</span>
//         </label>
//         <div>
//           <button className="btn btn-primary contact--form--btn">Submit</button>
//         </div>
//       </form>
//     </section>
//   );
// }

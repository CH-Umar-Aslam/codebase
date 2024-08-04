import React, { useState } from 'react';
import formImage from "../assets/form-section.png"
import emailjs from '@emailjs/browser';
const FormSection = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');


  const handleChange = (e) => {
    e.preventDefault()
    setErrorMessage('')
    setSubmissionMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('')
    setSubmissionMessage('')

    if (formData.message.split(/\s+/).length <= 5) {
      setErrorMessage('Message must be greater than 5 words.');

      setTimeout(() => {
        setSubmissionMessage("");
        setErrorMessage('');
      }, 4000);

      return;
    }

    emailjs.sendForm('service_mawujks', 'template_o1z7chw', e.target, {
      publicKey: '-XTuZGmyuxw8AKF6D',
    })
      .then(
        (result) => {
          // console.log('SUCCESS!', result.text);
          setSubmissionMessage('Thank you! Your query will be responded shortly.');
          setFormData({
            user_email: '',
            user_name: '',
            message: ''
          });
        },
        (error) => {
          // console.log('FAILED...', error.text);
          setErrorMessage('Failed to send message. Please try again.');
        }
      );

    setTimeout(() => {
      setSubmissionMessage("");
      setErrorMessage('');
    }, 4000);
  };


  return (
    <div id="formsection" className="flex flex-wrap my-10 sm:my-20"
    >
      <div className="w-full grid   place-items-center  place-content-end md:w-1/2 px-1">
        <img src={formImage} alt="Contact" className="object-fill  w-full md:h-auto" />
      </div>
      <div className="w-full md:w-1/2 h-full px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-4">Send Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">Name:</label>
            <input type="text" id="name" name="user_name" value={formData.user_name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">Email:</label>
            <input type="email" id="email" name="user_email" value={formData.user_email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-1">Message:</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required></textarea>
          </div>
          <div className={`text-red-500  mb-2 ${errorMessage ? "block" : "hidden"}`}>{errorMessage}</div>
          {submissionMessage && <div className="text-green-500 mb-4">{submissionMessage}</div>}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>

        </form>
      </div>
    </div>
  );
};



export default FormSection





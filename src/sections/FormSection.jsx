import React, { useState } from 'react';

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.message.split(/\s+/).length <= 5) {
      setErrorMessage('Message must be greater than 5 words.');
    } else {
      // Here you can handle form submission logic, like sending the data to a backend server
      setSubmissionMessage('Thank you! Your message has been submitted successfully.');
      setTimeout(() => {
        setSubmissionMessage("");
      }, 3000);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrorMessage('');
    }
  };

  return (
    <div id="formsection" className="flex flex-wrap my-10 sm:my-20"
    >
      <div className="w-full h-auto md:w-1/2 px-1 grid place-items-center">
        <img src="https://media.istockphoto.com/id/1200374331/photo/microphone-with-contact-us-word-3d-rendering.jpg?s=612x612&w=0&k=20&c=ft13-yNGy732aI6FefuvttDNXkOcPC4ULnsJs6eOhaw=" alt="Contact" className="object-fill   w-full h-auto md:h-full" />
      </div>
      <div className="w-full md:w-1/2 h-full px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-2">Message:</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required></textarea>
          </div>
          <div className={`text-red-500 h-20 mb-4 ${errorMessage ? "block" : "hidden"}`}>{errorMessage}</div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
          {submissionMessage && <div className="text-green-500 mb-4">{submissionMessage}</div>}

        </form>
      </div>
    </div>
  );
};



export default FormSection





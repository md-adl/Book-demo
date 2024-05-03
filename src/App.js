import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from './images/back-demo.jpg';

function App() {
  const [formData, setFormData] = useState({
    nameOfParent: '',
    parentsContactNo: '',
    grade: '',
    classesMode: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    return (
      formData.nameOfParent &&
      formData.parentsContactNo &&
      formData.grade &&
      formData.classesMode
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    setTimeout(() => {
      window.location.reload();
    }, 5000); // Refresh after 5 seconds

    if (!validateForm()) {
      setErrorMessage('All fields are mandatory');
      return;
    }

    try {
      await axios.post('https://book-demo-backend.onrender.com/entry', formData);
      setSuccessMessage('Entry saved successfully');
      setFormData({
        nameOfParent: '',
        parentsContactNo: '',
        grade: '',
        classesMode: '',
      });
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while saving the entry');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh', // Full screen height
        minWidth: '100vw',  // Full screen width
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', // Ensure the image covers the background
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        display: 'flex', // Center content
        justifyContent: 'center', // Horizontal centering
        alignItems: 'center', // Vertical centering
      }}
    >
      <div
        className="bg-white rounded p-6 shadow-md"
        style={{
          width: '90%', // 90% of the screen width
          maxWidth: '500px', // Maximum width for readability
          maxHeight: '80vh', // Maximum height to avoid overflow
          overflowY: 'auto', // Allow vertical scrolling if needed
        }}
      >
       <h1 className="text-2xl font-bold mb-4">Empower Your Child's Learning: Personalized Home Tutoring for Academic Excellence!</h1>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nameOfParent" className="block text-sm font-medium text-gray-700">Name of Parent</label>
            <input
              type="text"
              id="nameOfParent"
              name="nameOfParent"
              value={formData.nameOfParent}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="parentsContactNo" className="block text-sm font-medium text-gray-700">Parent's Contact No</label>
            <input
              type="text"
              id="parentsContactNo"
              name="parentsContactNo"
              value={formData.parentsContactNo}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="classesMode" className="block text-sm font-medium text-gray-700">Classes Mode</label>
            <select
              id="classesMode"
              name="classesMode"
              value={formData.classesMode}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Individual">Individual</option>
            </select>
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Book Demo Class Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    nameOfParent: '',
    parentsContactNo: '',
    grade: '',
    classesMode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/entry', formData);
      alert('Entry saved successfully');
      setFormData({
        nameOfParent: '',
        parentsContactNo: '',
        grade: '',
        classesMode: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the entry');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
      <h1 className="text-2xl font-bold mb-4">Book Demo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nameOfParent" className="block text-sm font-medium text-gray-700">Name of Parent</label>
          <input type="text" id="nameOfParent" name="nameOfParent" value={formData.nameOfParent} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="parentsContactNo" className="block text-sm font-medium text-gray-700">Parent's Contact No</label>
          <input type="text" id="parentsContactNo" name="parentsContactNo" value={formData.parentsContactNo} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
          <input type="text" id="grade" name="grade" value={formData.grade} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="classesMode" className="block text-sm font-medium text-gray-700">Classes Mode</label>
          <input type="text" id="classesMode" name="classesMode" value={formData.classesMode} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

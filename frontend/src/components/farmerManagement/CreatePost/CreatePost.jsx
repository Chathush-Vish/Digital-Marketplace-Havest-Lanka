import React, { useState } from 'react';
import { Plus, X, Send, Image, Tag, MapPin } from 'lucide-react';
import BidForm from '../BidForm/BidForm';

const AddPostComponent = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main CTA Card */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg shadow-lg overflow-hidden">
        <div className="relative p-8">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 40C51.2 28.8 140 20 160 40C180 60 171.2 148.8 160 160C148.8 171.2 60 180 40 160C20 140 28.8 51.2 40 40Z" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">Add Your Own Post</h1>
            <div className="w-16 h-1 bg-white bg-opacity-50 mb-6"></div>
            <p className="text-xl font-light text-white mb-8 leading-relaxed">
              Empowering Farmers, Connecting Markets,<br /> 
              Ensuring Fair Trade.
            </p>
            <button 
              onClick={handleButtonClick} 
              className="inline-flex items-center px-6 py-3 bg-white text-green-700 font-medium rounded-lg shadow-md hover:bg-green-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add Bid Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden animate-fade-in">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-semibold text-gray-800">Create New Post</h2>
              <button 
                onClick={() => setFormVisible(false)} 
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <BidForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPostComponent;
import React, { useState } from 'react';
import './Suggestion.css'; // Import the CSS file for styles

const Suggestions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='suggestions-container'>
      {/* Button for suggestion */}
      <div className='Click-here' onClick={toggleModal}>
        Suggestions
      </div>

      {/* Modal */}
      {isOpen && (
        <div>
          <div className='custom-model-main model-open'>
            <div className='custom-model-inner'>
              <div className='close-btn' onClick={toggleModal}>
                ×
              </div>
              <div className='custom-model-wrap'>
                <div className='pop-up-content-wrap'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  neque, quod quia commodi accusantium reprehenderit voluptate
                  non dicta earum, nisi delectus suscipit enim amet. Aliquid
                  aspernatur eum vero in ratione.
                </div>
              </div>
            </div>
          </div>
          {/* Background overlay */}
          <div className='bg-overlay' onClick={toggleModal}></div>
          {/* Overlay with higher z-index to capture click events */}
          <div
            className='overlay-click-capture'
            onClick={handleCloseModal}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Suggestions;

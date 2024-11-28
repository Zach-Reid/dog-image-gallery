//Author: Zachary Reid, QAP 3
import './App.css';
import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.length > 0 && (
        <div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Dog ${index}`}
              style={{ width: '200px', margin: '10px', opacity: '0.7' }}
              className='picturesofdog'
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;


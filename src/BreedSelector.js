import './App.css';

import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';

const BreedSelector = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch list of dog breeds
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
      } catch (err) {
        setError('Failed to fetch breeds');
      }
    };

    fetchBreeds();
  }, []);

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const handleNumImagesChange = (e) => {
    setNumImages(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedBreed) {
      setError('Please select a breed');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/${numImages}`);
      const data = await response.json();
      if (data.status === 'success') {
        setImages(data.message);
      } else {
        setError('Failed to fetch images');
      }
    } catch (err) {
      setError('Failed to fetch images');
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="breed">Breed:</label>
          <select id="breed" value={selectedBreed} onChange={handleBreedChange}>
            <option value="">Select a breed</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="numImages">Number of images:</label>
          <input
            type="number"
            id="numImages"
            min="1"
            max="100"
            value={numImages}
            onChange={handleNumImagesChange}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Fetching...' : 'Fetch Images'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ImageGallery images={images} />
    </div>
  );
};

export default BreedSelector;


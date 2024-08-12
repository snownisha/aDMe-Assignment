import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add custom CSS here

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
      setImages(prevImages => [...prevImages, ...response.data]);
      setHasMore(response.data.length > 0);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const loadMoreImages = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="container">
      <header className="mb-4">
        <div className="header-content">
          <img src="path-to-your-logo.png" alt="Site Logo" className="logo" />
          <h1 className="site-title">Your Site Title</h1>
        </div>
        <div className="header-image-wrapper">
          <img src="path-to-your-header-image.jpg" alt="Header Image" className="header-image img-fluid" />
        </div>
      </header>
      <div className="row">
        {images.map((image) => (
          <div key={image.id} className="col-md-4 mb-3">
            <img src={image.download_url} alt={image.author} className="img-fluid" />
          </div>
        ))}
      </div>
      {loading && <div className="text-center">Loading...</div>}
      {hasMore && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={loadMoreImages} disabled={loading}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;

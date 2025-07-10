// pages/Genre.js
import React, { useState } from 'react';
import axios from 'axios';

const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance'];

function Genre() {
  const [genre, setGenre] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const fetchBooks = async (e) => {
    e.preventDefault();
    setLoading(true);
    setBooks([]);
    setExpandedIndex(null);

    try {
      const response = await axios.post('http://localhost:5000/books', {
        genre_name: genre
      });
      setBooks(response.data);
    } catch (err) {
      console.error('Error fetching books:', err);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>🎬 Explore Books by Genre</h1>
      <form onSubmit={fetchBooks}>
        <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
          <option value="">-- Select Genre --</option>
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      <div className="book-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            {book.thumbnail ? (
              <img src={book.thumbnail} alt={book.title} />
            ) : (
              <div className="no-image">No Image</div>
            )}
            <h3>{book.title}</h3>
            <p><strong>By:</strong> {book.authors.join(', ')}</p>
            <p className="desc">
              {expandedIndex === index ? book.description : `${book.description.slice(0, 100)}...`}
              {book.description.length > 100 && (
                <span onClick={() => setExpandedIndex(index === expandedIndex ? null : index)} className="read-more">
                  {expandedIndex === index ? ' Show Less' : ' Read More'}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genre;

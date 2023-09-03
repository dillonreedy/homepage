// SearchBar.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.toLowerCase() === 'home') {
      navigate('/home');
    } else if (query.toLowerCase() === 'landing') {
      navigate('/landing');
    } else {
      alert('Page not found');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default SearchBar;

import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import './Serchbar.css';

export const SearchBar = ({ onAddSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery === '') {
      alert('Please fill in the search field.');
    } else {
      onAddSearchQuery({ searchQuery });
      setSearchQuery('');
    }
  };

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="SearchBar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <label
          className="SearchForm-button-label"
          htmlFor="searchQuery"
        ></label>
        <input
          className="SearchForm-input"
          id="searchQuery"
          name="searchQuery"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search images and photos"
        />
        <button className="SearchForm-button" type="submit">
          <ImSearch />
        </button>
      </form>
    </div>
  );
};

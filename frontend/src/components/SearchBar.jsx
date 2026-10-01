import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search resources, notes, assignments..."
        value={searchText}
        onChange={handleSearch}
      />

      <button onClick={() => setSearchText("")}>
        Clear
      </button>
    </div>
  );
}

export default SearchBar;
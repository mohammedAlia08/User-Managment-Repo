import React from 'react';

export default function SearchBar({ value = '', onChange }) {
  return (
    <div className="searchbar">
      <input
        placeholder="Search by first name, last name, email or department..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}



// Simple placeholder for filters — expand as needed (modal/popover)
import React, { useState } from 'react';

export default function FilterPopup({ onApply = () => {} }) {
  const [filters, setFilters] = useState({ firstName: '', lastName: '', email: '', department: '' });

  function apply() {
    onApply(filters);
  }

  return (
    <div className="filter-popup card">
      <p><strong>Filter (placeholder)</strong></p>
      <label>First Name <input value={filters.firstName} onChange={(e)=>setFilters({...filters, firstName:e.target.value})} /></label>
      <label>Last Name <input value={filters.lastName} onChange={(e)=>setFilters({...filters, lastName:e.target.value})} /></label>
      <label>Email <input value={filters.email} onChange={(e)=>setFilters({...filters, email:e.target.value})} /></label>
      <label>Department <input value={filters.department} onChange={(e)=>setFilters({...filters, department:e.target.value})} /></label>
      <div style={{marginTop:8}}>
        <button className="btn" onClick={apply}>Apply</button>
      </div>
    </div>
  );
}

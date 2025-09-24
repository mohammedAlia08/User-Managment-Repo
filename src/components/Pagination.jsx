import React from 'react';

export default function Pagination({ total = 0, page = 1, perPage = 10, onChangePage, onChangePerPage }) {
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  return (
    <div className="pagination">
      <div>
        <button disabled={page <= 1} onClick={() => onChangePage(page - 1)}>Prev</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => onChangePage(page + 1)}>Next</button>
      </div>

      <div>
        <label>Rows per page: </label>
        <select value={perPage} onChange={(e) => onChangePerPage(Number(e.target.value))}>
          {[10,25,50,100].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
    </div>
  );
}


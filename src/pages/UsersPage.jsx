import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import UserTable from '../components/UserTable';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState('asc');

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      const data = await getUsers();
      // normalize: split name into first/last if possible
      const normalized = data.map((u) => {
        const parts = (u.name || '').split(' ');
        return {
          ...u,
          firstName: parts[0] || '',
          lastName: parts.slice(1).join(' ') || '',
          department: u.company?.name || '',
        };
      });
      setUsers(normalized);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this user?')) return;
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      alert('Deleted (mock API; not persisted)');
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  }

  // search/filter
  const filtered = users.filter((u) => {
    const s = query.trim().toLowerCase();
    if (!s) return true;
    return (
      (u.firstName || '').toLowerCase().includes(s) ||
      (u.lastName || '').toLowerCase().includes(s) ||
      (u.email || '').toLowerCase().includes(s) ||
      (u.department || '').toLowerCase().includes(s)
    );
  });

  // sorting
  const sorted = [...filtered];
  if (sortKey) {
    sorted.sort((a, b) => {
      const A = (a[sortKey] || '').toString().toLowerCase();
      const B = (b[sortKey] || '').toString().toLowerCase();
      if (A < B) return sortDir === 'asc' ? -1 : 1;
      if (A > B) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // pagination
  const total = sorted.length;
  const start = (page - 1) * perPage;
  const paged = sorted.slice(start, start + perPage);

  return (
    <div>
      <div className="toolbar">
        <SearchBar value={query} onChange={(v) => { setQuery(v); setPage(1); }} />
        <div>
          <label>Sort by: </label>
          <select
            value={sortKey || ''}
            onChange={(e) => { setSortKey(e.target.value || null); setPage(1); }}
          >
            <option value="">-- none --</option>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="department">Department</option>
          </select>
          <button onClick={() => setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))}>
            {sortDir === 'asc' ? 'Asc' : 'Desc'}
          </button>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <UserTable users={paged} onDelete={handleDelete} />
          <Pagination
            total={total}
            page={page}
            perPage={perPage}
            onChangePage={setPage}
            onChangePerPage={(n) => { setPerPage(n); setPage(1); }}
          />
        </>
      )}
    </div>
  );
}

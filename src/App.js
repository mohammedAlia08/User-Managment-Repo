import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import AddUserPage from './pages/AddUserPage';
import EditUserPage from './pages/EditUserPage';

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <h1>User Management Dashboard</h1>
        <nav>
          <Link to="/">Users</Link>
          <Link to="/add" className="ml">Add User</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/add" element={<AddUserPage />} />
          <Route path="/edit/:id" element={<EditUserPage />} />
        </Routes>
      </main>
    </div>
  );
}

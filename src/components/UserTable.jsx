import React from 'react';
import { Link } from 'react-router-dom';

export default function UserTable({ users = [], onDelete = () => {} }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr><td colSpan={6}>No users found</td></tr>
        ) : (
          users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.firstName || '-'}</td>
              <td>{u.lastName || '-'}</td>
              <td>{u.email}</td>
              <td>{u.department || '-'}</td>
              <td>
                <Link to={`/edit/${u.id}`} className="btn small">Edit</Link>
                <button className="btn small danger" onClick={() => onDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

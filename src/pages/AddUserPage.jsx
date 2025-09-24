import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { addUser } from '../services/api';

export default function AddUserPage() {
  const nav = useNavigate();

  async function handleSubmit(values) {
    try {
      await addUser(values);
      alert('User added (mock API; changes not persisted)');
      nav('/');
    } catch (err) {
      console.error(err);
      alert('Add failed');
    }
  }

  return (
    <div>
      <h2>Add User</h2>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
}


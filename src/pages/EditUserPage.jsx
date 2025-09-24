import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { getUser, updateUser } from '../services/api';

export default function EditUserPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const [initial, setInitial] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getUser(id);
        setInitial({
          firstName: data.name?.split(' ')[0] || '',
          lastName: data.name?.split(' ').slice(1).join(' ') || '',
          email: data.email || '',
          department: data.company?.name || '',
        });
      } catch (err) {
        console.error(err);
        alert('Failed to load user');
      }
    })();
  }, [id]);

  async function handleSubmit(values) {
    try {
      await updateUser(id, values);
      alert('User updated (mock API; changes not persisted)');
      nav('/');
    } catch (err) {
      console.error(err);
      alert('Update failed');
    }
  }

  if (!initial) return <p>Loading user...</p>;

  return (
    <div>
      <h2>Edit User</h2>
      <UserForm initialValues={initial} onSubmit={handleSubmit} />
    </div>
  );
}

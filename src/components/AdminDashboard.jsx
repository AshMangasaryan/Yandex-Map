import React, { useState } from 'react'
import AddressesList from './AddressesList';
import Form from './Form';

const AdminDashboard = () => {
     const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
    {
     !isAdmin ? <Form setIsAdmin={setIsAdmin} /> : <AddressesList />
    }</>
  )
}

export default AdminDashboard;
import React from 'react'
import PrimaryMap from './components/PrimaryMap';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrimaryMap />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
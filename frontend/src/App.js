import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TextEditor from './components/TextEditor';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route element={<ProtectedRoute />}>
          <Route path="/note" element={<TextEditor/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
